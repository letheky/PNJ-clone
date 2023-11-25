export default defineNuxtRouteMiddleware((from, to) => {
    const containsVietnamese = (str) => {
        // Check if the string contains Vietnamese characters
        return /[\u0300-\u036f]/.test(str);
    }
    const normalizeVietnamese = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }

    if (containsVietnamese(to.name)) {
        return navigateTo(`${normalizeVietnamese(to.name)}`)
    }
})