export default defineNuxtRouteMiddleware((from, to) => {

    if (!token && to.fullPath.includes("/admin") && to.path !== '/admin/login') {
        return navigateTo('/admin/login')
    }
})