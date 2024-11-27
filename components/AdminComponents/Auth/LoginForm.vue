<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Tên đăng nhập</v-label>
      <v-text-field
        v-model="username"
        :error-messages="error ? 'Sai tên đăng nhập hoặc mật khẩu' : ''"
        placeholder="Tên đăng nhập"
        prepend-inner-icon="mdi-account"
        variant="outlined"
        :color="error ? 'error' : 'primary'"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Mật khẩu</v-label>
      <v-text-field
        v-model="password"
        :error-messages="error ? 'Sai tên đăng nhập hoặc mật khẩu' : ''"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        placeholder="Nhập mật khẩu của bạn"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        hide-details
        :color="error ? 'error' : 'primary'"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template v-slot:label class="text-body-1"
            >Remeber this Device</template
          >
        </v-checkbox>
        <div class="ml-sm-auto">
          <NuxtLink
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
            >Forgot Password ?</NuxtLink
          >
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn color="primary" size="large" block flat @click="login"
        >Đăng nhập</v-btn
      >
    </v-col>
  </v-row>
</template>
<script setup>
import { API_USER_LOGIN } from "~/server/api/constant";
import { useUserToken } from "~/stores/userToken";
const useUserTokenStore = useUserToken();
const { postLogin } = useUser();
const checkbox = ref(true);
const visible = ref(false);
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  $fetch(API_USER_LOGIN, {
    ...postLogin(username.value, password.value),
    onResponse({ request, response, options }) {
      // Process the response data
      if (response.status === 200) {
        error.value = false;
        if (response._data.token) {
          const token = {
            token: response._data.token,
            refreshToken: response._data.refreshToken,
          };
          localStorage.setItem("userToken", JSON.stringify(token));
          useUserTokenStore.token = token.token;
          useUserTokenStore.refreshToken = token.refreshToken;
          navigateTo("/admin/danh-sach-san-pham");
        }
      } else error.value = true;
    },
  });
};
</script>
