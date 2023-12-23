<template>
  
</template>

<script setup>
const {
  maxWidth,
  leftColor,
  rightColor,
  rightText,
  leftText,
  width,
  confirmDialog,
  productData
} = defineProps({
  maxWidth: Number,
  leftColor: String,
  rightColor: String,
  rightText: String,
  leftText: String,
  width: Number,
  confirmDialog: Boolean,
  productData:Object
});
const { getContactInfo } = useContact();
const { data: contactInfo } = await getContactInfo();

// const productData = ref(null);
const buyDialog = confirmDialog.value

// const open = (item) => {
//   confirmDialog.value = true;
//   productData.value = item;
// };

const cancel = () => {
  buyDialog.value = false;
};
const confirm = () => {
  buyDialog.value = false;
};

defineExpose({ open });
</script>
