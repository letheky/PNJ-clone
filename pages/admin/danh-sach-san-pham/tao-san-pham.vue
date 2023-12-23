<template>
  <div>
    <span class="d-flex align-center">
      <v-btn
        variant="flat"
        icon="mdi-chevron-left"
        class="text-primary"
        @click="$router.back()"
      >
      </v-btn>
      <h3 class="text-h4">Tạo sản phẩm</h3>
    </span>
    <v-form v-model="form" fast-fail @submit.prevent class="mt-5">
      <v-container>
        <v-row>
          <v-text-field
            v-model="name"
            label="Tên sản phẩm"
            variant="outlined"
            :rules="[rules.required]"
          ></v-text-field>
        </v-row>
        <v-row class="d-flex ga-10">
          <v-autocomplete
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
        </v-row>
        <v-row>
          <v-text-field
            style="max-width: 300px"
            v-model="price"
            min="1"
            type="number"
            label="Giá sản phẩm"
            suffix="đ"
            variant="outlined"
            :rules="[rules.required]"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-radio-group
            v-model="selectedImageType"
            density="compact"
            class="pa-1"
          >
            <v-radio
              style="font-size: 8px"
              label="Tải lên từ máy cá nhân"
              value="internal"
              density="compact"
            ></v-radio>
            <v-radio
              style="font-size: 8px"
              label="Chọn từ hệ thống"
              value="external"
              density="compact"
            ></v-radio>
          </v-radio-group>
          <v-file-input
            v-model="thumbnail"
            :loading="isUploading"
            @change="uploadSingleImage(thumbnail[0])"
            variant="solo-filled"
            style="min-width: 300px; max-width: fit-content"
            :rules="[rules.imgMaxSize]"
            accept="image/png, image/jpeg, image/jpg, image/gif"
            placeholder="Chọn ảnh từ máy bạn"
            prepend-icon="mdi-camera"
            label="Ảnh sản phẩm"
            show-size
          ></v-file-input>
          <v-img
            v-if="thumbnail && thumbnail.length > 0"
            :src="image"
            width="80"
            height="80"
          ></v-img>
        </v-row>
        <v-row>
          <div class="d-flex align-center ga-3">
            <h4>Danh sách ảnh bổ trợ</h4>
            <v-btn
              color="error"
              variant="text"
              icon="mdi-plus-circle"
              @click="addNewImgGroup"
            ></v-btn>
          </div>
          <v-col cols="12">
            <template v-if="listImg && listImg.length > 0">
              <div v-for="(img, index) in listImg" :key="index">
                <v-row class="mt-1 d-flex align-center ga-5">
                  <v-file-input
                    v-model="img.mainImage"
                    :loading="isUploading"
                    @change="
                      uploadImageList(img.mainImage[0], 'mainImage', index)
                    "
                    variant="solo-filled"
                    style="min-width: 300px; max-width: fit-content"
                    :rules="[rules.imgMaxSize]"
                    accept="image/png, image/jpeg, image/jpg, image/gif"
                    placeholder="Chọn ảnh lớn"
                    prepend-icon="mdi-camera"
                    label="Chọn ảnh lớn"
                    show-size
                  ></v-file-input>
                  <v-file-input
                    v-model="img.subImage"
                    :loading="isUploading"
                    @change="
                      uploadImageList(img.subImage[0], 'subImage', index)
                    "
                    variant="solo-filled"
                    style="min-width: 300px; max-width: fit-content"
                    :rules="[rules.imgMaxSize]"
                    accept="image/png, image/jpeg, image/jpg, image/gif"
                    placeholder="Chọn ảnh nhỏ"
                    prepend-icon="mdi-camera"
                    label="Chọn ảnh bé"
                    show-size
                  ></v-file-input>
                  <div class="mt-n5">
                    <v-icon
                      color="red light-2"
                      large
                      @click="removeImgGroup(index)"
                      >mdi-trash-can-outline</v-icon
                    >
                  </div>
                </v-row>
              </div>
            </template>
          </v-col>
        </v-row>
        <v-row>
          <div class="d-flex align-center ga-3">
            <h4>Danh sách size có sẵn</h4>
            <v-btn
              color="error"
              variant="text"
              icon="mdi-plus-circle"
              @click="addNewSize"
            ></v-btn>
          </div>
          <v-col cols="12">
            <template v-if="listSize && listSize.length > 0">
              <div v-for="(size, index) in listSize" :key="index">
                <v-row class="mt-1 d-flex align-center">
                  <v-col cols="3">
                    <v-text-field
                      v-model="size.size"
                      min="1"
                      type="number"
                      label="Nhập size"
                      variant="outlined"
                      :rules="[rules.required]"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="size.price"
                      min="1"
                      type="number"
                      label="Giá theo size"
                      suffix="đ"
                      variant="outlined"
                      :rules="[rules.required]"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <div class="mt-n5">
                      <v-icon
                        color="red light-2"
                        large
                        @click="removeSize(index)"
                        >mdi-trash-can-outline</v-icon
                      >
                    </div>
                  </v-col>
                </v-row>
              </div>
            </template>
          </v-col>
        </v-row>
        <v-footer height="60" app color="#fff">
          <v-row justify="end" class="px-10">
            <v-btn
              class="mr-3 px-10"
              color="primary"
              @click="saveProduct"
              :disabled="!form"
              type="submit"
              >Tạo mới</v-btn
            >
            <v-btn class="mr-3 px-10" @click="$router.back()">Hủy bỏ</v-btn>
          </v-row>
        </v-footer>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin"
});

//input rules
const rules = {
  required: (value) => !!value || "Vui lòng nhập trường này",
  imgMaxSize: (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 10000000 ||
      "Ảnh phải có kích thước nhỏ hơn 10 MB!"
    );
  },
};

// input product categories
const { getProductGroup, getProductSubGroup, getProductType } = useProducts();
const productGroup = ref([]);
const selectedProductGroup = ref(1);
productGroup.value = getProductGroup();

const productSubGroup = ref([]);
const selectedProductSubGroup = ref(1);
productSubGroup.value = getProductSubGroup();

const productType = ref([]);
const selectedProductType = ref(1);
productType.value = getProductType();

// initial data
onMounted(async () => {
  productGroup.value = await getProductGroup();
  productSubGroup.value = await getProductSubGroup(selectedProductGroup.value);
  productType.value = await getProductType(
    selectedProductGroup.value,
    selectedProductSubGroup.value
  );
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

//product detail
const config = useRuntimeConfig();
const baseURL = config.public.apiBase;
const { createProduct } = useSingleProduct();

const { postImage } = useUploadImage();
const form = ref(false);
const name = ref("");
const price = ref(1);
const thumbnail = ref(null);
const isUploading = ref(false);

// const selectedImageType = ref("internal");
const listSize = ref([]);
const listImg = ref([]);

//init state to store in API payload
const image = ref(null);
const imageID = ref(null);
const productImages = ref([]);

const addNewSize = () => {
  listSize.value.push({});
};
const removeSize = (index) => {
  listSize.value.splice(index, 1);
};

const addNewImgGroup = () => {
  listImg.value.push({});
  productImages.value.push({});
};
const removeImgGroup = (index) => {
  listImg.value.splice(index, 1);
  productImages.value.splice(index, 1);
};
const uploadSingleImage = async (file) => {
  isUploading.value = true;
  const formData = new FormData();
  formData.append("file", file);
  await postImage(formData).then((res) => {
    image.value = baseURL + res.result.apiPath;
    imageID.value = res.result.id;
    isUploading.value = false;
  });
};
const uploadImageList = async (file, property, index) => {
  const formData = new FormData();
  formData.append("file", file);
  await postImage(formData).then((res) => {
    productImages.value[index][property] = baseURL + res.result;
  });
};

const saveProduct = async () => {
  const body = [
    {
      productGroupId: selectedProductGroup.value,
      subGroupId: selectedProductSubGroup.value,
      productTypeId: selectedProductType.value,
      name: name.value,
      price: Number(price.value),
      thumbnail: image.value,
      productSizes: listSize.value.map((item) => ({
        size: Number(item.size),
        price: Number(item.price),
      })),
      productImages: productImages.value,
    },
  ];
  await createProduct(body).then((res) => {
    window.history.back();
  });
};
</script>

<style lang="scss" scoped>
.categories-auto {
  max-width: 200px;
}
</style>
