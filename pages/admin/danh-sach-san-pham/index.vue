<template>
  <v-row>
    <v-col cols="12" md="12">
      <UIParentCard title="Danh sách sản phẩm">
        <div class="d-flex justify-start align-start ml-3 mr-5 ga-10">
          <v-autocomplete
            class="categories-auto"
            v-model="selectedProductGroup"
            item-title="name"
            item-value="id"
            :loading="!productGroup.result"
            :items="productGroup.result"
            label="Nhóm"
            variant="outlined"
            density="compact"
          >
          </v-autocomplete>
          <v-autocomplete
            class="categories-auto"
            v-model="selectedProductSubGroup"
            item-title="name"
            item-value="id"
            :items="productSubGroup.result"
            :loading="!productSubGroup.result"
            label="Dòng"
            variant="outlined"
            density="compact"
          >
          </v-autocomplete>
          <v-autocomplete
            class="categories-auto"
            v-model="selectedProductType"
            item-title="name"
            item-value="id"
            :items="productType.result"
            :loading="!productType.result"
            label="Kiểu"
            variant="outlined"
            density="compact"
          >
          </v-autocomplete>
          <v-btn class="ml-auto" @click="createProduct" color="primary"
            >Tạo sản phẩm</v-btn
          >
        </div>
        <div class="pa-3 pt-1">
          <v-skeleton-loader
            v-if="!productList.result"
            type="table-row@10"
          ></v-skeleton-loader>
          <v-data-table
            v-else
            class="product-list"
            :headers="headers"
            :items="productList.result.results"
            :items-per-page="pageNum"
            :loading="isLoading"
            fixed-header
            height="65vh"
          >
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
            </template>
            <template v-slot:headers="{ columns }">
              <tr class="bg-primary">
                <td v-for="column in columns" :key="column.key">
                  <p class="text-center">{{ column.title.toUpperCase() }}</p>
                </td>
              </tr>
            </template>
            <template v-slot:item="{ item }">
              <tr align="center">
                <td>{{ item.id }}</td>
                <td v-if="item.thumbnailFullPath">
                  <v-img
                    max-width="60"
                    aspect-ratio="1/1"
                    :src="item.thumbnailFullPath"
                  ></v-img>
                </td>
                <td v-else>-</td>
                <td class="text-start">{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td class="text-end">{{ item.price.toLocaleString() }}đ</td>
                <td>
                  <span>
                    <v-tooltip text="Sửa sản phẩm" location="top">
                      <template v-slot:activator="{ props }">
                        <IconCSS
                          name="edit"
                          size="20"
                          v-bind="props"
                          @click="editProduct(item.id)"
                          class="cursor-pointer text-success"
                        ></IconCSS>
                      </template>
                    </v-tooltip>
                    <v-tooltip text="Xóa sản phẩm" location="top">
                      <template v-slot:activator="{ props }">
                        <IconCSS
                          name="delete"
                          size="20"
                          v-bind="props"
                          @click="openDeleteDialog(item)"
                          class="cursor-pointer text-error"
                        ></IconCSS>
                      </template>
                    </v-tooltip>
                  </span>
                </td>
              </tr>
            </template>
            <template #bottom></template>
          </v-data-table>
        </div>
        <div class="d-flex justify-space-between align-start pa-3">
          <v-select
            v-model="pageNum"
            label="Số sản phẩm"
            :items="[25, 50, 100, 200]"
            style="max-width: 200px"
            variant="outlined"
            density="compact"
          ></v-select>
          <v-pagination
            v-if="productList.result"
            v-model="page"
            size="small"
            :disabled="!productList.result"
            :length="Math.ceil(productList.result.total / pageNum)"
            total-visible="5"
          ></v-pagination>
        </div>
      </UIParentCard>
    </v-col>
    <UIConfirmDelete
      @confirm="confirmDeleteProduct"
      :maxWidth="500"
      :width="500"
      :confirmColor="'error'"
      ref="confirmDeleteProd"
      cancelText="Hủy bỏ"
      confirmText="Xác nhận"
    >
      <v-card-title
        style="display: flex; flex-direction: column"
        class="pt-5 mb-5"
      >
        <h2 class="text-h6 text-center text-warning">Xóa sản phẩm</h2>
        <p class="text-body-1 text-center text-warning">
          Bạn có chắc rằng muốn xóa sản phẩm này không?
        </p>
      </v-card-title>
    </UIConfirmDelete>
  </v-row>
</template>
<script setup>
definePageMeta({
  layout: "admin",
  middleware: "authorization",
});
const { deleteProduct } = useSingleProduct();
const { getProducts, getProductGroup, getProductSubGroup, getProductType } =
  useProducts();

const page = ref(1);
const pageNum = ref(25);
const isLoading = ref(false);

const productGroup = ref([]);
const selectedProductGroup = ref(1);
productGroup.value = getProductGroup();

const productSubGroup = ref([]);
const selectedProductSubGroup = ref(1);
productSubGroup.value = getProductSubGroup();

const productType = ref([]);
const selectedProductType = ref(1);
productType.value = getProductType();

const productList = ref([]);
const headers = [
  {
    title: "Id",
    align: "start",
    key: "id",
    sortable: false,
    width: "50",
  },
  { title: "Thumnail", key: "thumbnailFullPath", sortable: false, width: "50" },
  {
    title: "Name",
    key: "name",
    align: "start",
    sortable: false,
    width: "40%",
  },
  {
    title: "Code",
    key: "code",
    align: "center",
    sortable: false,
    width: "30%",
  },
  {
    title: "Price",
    key: "price",
    align: "center",
    sortable: true,
    width: "50",
  },
  { title: "Action", key: "action", sortable: false, width: "50" },
];
// initial data
onMounted(async () => {
  productGroup.value = await getProductGroup();
  productSubGroup.value = await getProductSubGroup(selectedProductGroup.value);
  productType.value = await getProductType(
    selectedProductGroup.value,
    selectedProductSubGroup.value
  );
  productList.value = await getProducts({
    pageNum: page.value - 1,
    pageSize: pageNum.value,
    productGroupId: selectedProductGroup.value,
    subGroupId: selectedProductSubGroup.value,
    productTypeId: selectedProductType.value,
  });
});

//get new subgroup of group on product group change
watch(selectedProductGroup, async () => {
  productSubGroup.value = await getProductSubGroup(selectedProductGroup.value);
  selectedProductSubGroup.value = productSubGroup.value.result[0].id;
});

//get new product type on subgroup change
watch(selectedProductSubGroup, async () => {
  productType.value = await getProductType(
    selectedProductGroup.value,
    selectedProductSubGroup.value
  );
  selectedProductType.value = productType.value.result[0].id;
});

//create reload function
const reload = async () => {
  isLoading.value = true;
  await getProducts({
    pageNum: page.value - 1,
    pageSize: pageNum.value,
    productGroupId: selectedProductGroup.value,
    subGroupId: selectedProductSubGroup.value,
    productTypeId: selectedProductType.value,
  }).then((res) => {
    productList.value = res;
    isLoading.value = false;
  });
};

//Get new product list on change
watch(
  [
    page,
    pageNum,
    selectedProductGroup,
    selectedProductSubGroup,
    selectedProductType,
  ],
  () => reload()
);

//actions with promise
const confirmDeleteProd = ref(null);

const confirmDeleteProduct = async (productID) => {
  await deleteProduct(productID);
  await reload();
};

const openDeleteDialog = (id) => {
  confirmDeleteProd.value.open(id);
};

const createProduct = async () => {
  await navigateTo("danh-sach-san-pham/tao-san-pham");
};

const editProduct = async (id) => {
  await navigateTo({
    path: "danh-sach-san-pham/sua-san-pham",
    query: {
      productID: id,
    },
  });
};
</script>
<style scoped lang="scss">
.categories-auto {
  max-width: 200px;
}
.product-list {
  scroll-behavior: smooth;
}
</style>
