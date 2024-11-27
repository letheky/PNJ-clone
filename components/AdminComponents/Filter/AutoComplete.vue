<template>
  <div>
    <div @click="mouseDownInput">
      <v-menu
        v-model="menu"
        @scroll="scrollSelect"
        :open-on-click="false"
        :close-on-click="true"
        :close-on-content-click="false"
        max-height="300"
        location="bottom"
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-if="styleBorder === 'border-bottom'"
            :label="
              filterSelect.length === 0 ? '' : filterSelect.length + ' selected'
            "
            v-model="inputSearch"
            hide-details
            variant="underlined"
            v-bind="props"
            placeholder="Chọn"
            :append-inner-icon="menu ? 'mdi-menu-down' : 'mdi-menu-up'"
          >
          </v-text-field>
        </template>
        <v-list>
          <v-list-item
            @click="unSelectAll"
            v-if="filterSelect.length === removeTheSameItem(listItem).length"
          >
            <v-list-item-title class="d-flex align-center"
              ><v-icon> mdi-close-box </v-icon>
              <p class="text-body-2 ml-2">Select All</p></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-else @click="selectAll" >
            <v-list-item-title class="d-flex align-center">
              <v-icon> mdi-checkbox-blank-outline </v-icon>
              <p class="text-body-2 ml-2">Select All</p></v-list-item-title
            >
          </v-list-item>

          <div v-show="inputSearch.trim() !== ''">
            <v-list-item
              @click="unSelectAll"
              v-if="
                filterSelect.length ===
                  removeTheSameItem(searchResult).length &&
                filterSelect.reduce((count, item) => {
                  removeTheSameItem(searchResult).includes(item)
                    ? count + 1
                    : count;
                  return count;
                }, 0).length !== 0
              "
            >
              <v-list-item-title class="d-flex align-center"
                ><v-icon class="mr-2"> mdi-close-box </v-icon>
                <p class="text-body-2 ml-2">
                  Select All Matched
                </p></v-list-item-title
              >
            </v-list-item>
            <v-list-item v-else @click="selectAllMatch()" >
              <v-list-item-title class="d-flex align-center">
                <v-icon> mdi-checkbox-blank-outline </v-icon>
                <p class="text-body-2 ml-2">
                  Select All Matched
                </p></v-list-item-title
              >
            </v-list-item>
          </div>
          <v-list-item
            v-for="(item, index) in removeTheSameItem(searchResult)"
            :key="index"
          >
            <v-list-item-title
              @click="removeData(item)"
              v-if="filterSelect.includes(item)"
              class="d-flex align-center"
              ><v-icon> mdi-close-box </v-icon>
              <p class="text-body-2 ml-2">{{ item }}</p></v-list-item-title
            >
            <v-list-item-title
              @click="addData(item)"
              v-else
              class="d-flex align-center"
            >
              <v-icon> mdi-checkbox-blank-outline </v-icon>
              <p class="text-body-2 ml-2">{{ item }}</p></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script setup>
const menu = ref(false);
const isSelectAll = ref(false);
const inputSearch = ref("");
const filterSelect = ref([]);
const countItem = ref(20);

const searchResult = computed(() => {
  const data = removeTheSameItem(props.listItem).filter((item) => {
    return inputSearch.value.trim() === ""
      ? true
      : removeAccents(item)?.indexOf(removeAccents(inputSearch.value)) !== -1;
  });

  return data.filter((item, index) => {
    return index < countItem.value;
  });
});

const removeTheSameItem = (data) => {
  return data.reduce((arr, item) => {
    arr.find((e) => item === e) || arr.push(item);
    return arr;
  }, []);
};

const scrollSelect = (e) => {
  const element = e.target;

  if (element.scrollTop > element.scrollHeight - element.offsetHeight - 100) {
    countItem.value = countItem.value + 10;
  }
};

const removeAccents = (str) => {
  return str
    ?.toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
};

const addData = (item) => {
  isSelectAll.value = true;
  if (filterSelect.value.length === removeTheSameItem(props.listItem).length) {
    filterSelect.value = [item];
  } else {
    filterSelect.value.push(item);
  }

  emit("setFilter", { name: props.keyFilter, filter: filterSelect.value });
};

const selectAll = () => {
  inputSearch.value = "";
  filterSelect.value = removeTheSameItem(props.listItem);
  isSelectAll.value = true;

  emit("setFilter", {
    name: props.keyFilter,
    filter: filterSelect.value,
  });
};

const unSelectAll = () => {
  filterSelect.value = [];
  isSelectAll.value = false;

  emit("setFilter", {
    name: props.keyFilter,
    filter: [],
  });
};

const selectAllMatch = () => {
  filterSelect.value = removeTheSameItem(searchResult.value);
  isSelectAll.value = true;

  emit("setFilter", {
    name: props.keyFilter,
    filter: removeTheSameItem(searchResult.value),
  });
};

const removeData = (item) => {
  isSelectAll.value = true;
  filterSelect.value.splice(filterSelect.value.indexOf(item), 1);

  emit("setFilter", { name: props.keyFilter, filter: filterSelect.value });
};

const mouseDownInput = () => {
  setTimeout(() => {
    menu.value = true;
  }, 1);
};

// Your props
const props = defineProps({
  listItem: Array,
  keyFilter: String,
  selectedInit: Array,
  styleBorder: String,
  label: String,
  placeholder: String,
  labelSelect: String,
});
const emit = defineEmits(["setFilter"]);

// Watchers
watch(
  () => props.selectedInit,
  (data) => {
    props.selectedInit = data;
  }
);

// Lifecycle hook
onMounted(() => {
  filterSelect.value = props.selectedInit;
  if (props.selectedInit.length === removeTheSameItem(props.listItem).length) {
    isSelectAll.value = true;
  }
});
</script>

<style lang="scss" scoped></style>
