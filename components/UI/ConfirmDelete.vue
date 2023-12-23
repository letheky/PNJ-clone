<template>
  <v-dialog v-model="confirmDialog" :max-width="maxWidth || 515" :width="width">
    <v-card class="pa-5">
      <v-icon size="large" color="error" class="ml-auto mb-4" @click="cancel"
        >mdi-close-circle</v-icon
      >
      <div>
        <v-img
          class="mx-auto"
          v-if="productData.thumbnailFullPath"
          width="80"
          height="80"
          :src="productData.thumbnailFullPath"
        >
        </v-img>
        <h3 class="text-h4 text-center">{{ productData.name }}</h3>
      </div>
      <div class="d-flex flex-column"><slot></slot></div>
      <v-card-actions class="pa-0">
        <v-btn
          :style="{ width: '47%' }"
          variant="outlined"
          :color="cancelColor || 'primary'"
          @click="cancel"
        >
          <template v-if="cancelText">
            <p v-html="cancelText"></p>
          </template>
          <template v-else> Cancel </template>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :style="{ width: '47%' }"
          :color="confirmColor || 'primary'"
          variant="outlined"
          :disabled="checkConfirm"
          @click="confirm"
        >
          <template v-if="confirmText">
            {{ confirmText }}
          </template>
          <template v-else> Confirm </template>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const {
  maxWidth,
  confirmColor,
  cancelColor,
  cancelText,
  confirmText,
  width,
  checkConfirm,
} = defineProps({
  maxWidth: Number,
  confirmColor: String,
  cancelColor: String,
  cancelText: String,
  confirmText: String,
  width: Number,
  checkConfirm: Boolean,
});

const emit = defineEmits(["cancel", "confirm"]);

const confirmDialog = ref(false);
const productData = ref(null);

const open = (item) => {
  confirmDialog.value = true;
  productData.value = item;
};

const cancel = () => {
  emit("cancel", productData.value.id);
  confirmDialog.value = false;
};
const confirm = () => {
  emit("confirm", productData.value.id);
  confirmDialog.value = false;
};

defineExpose({ open });
</script>
