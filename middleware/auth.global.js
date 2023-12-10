export default defineNuxtRouteMiddleware((from, to) => {
    const storedToken = JSON.parse(localStorage.getItem('token'));
    const token = storedToken.token
    const refreshToken = storedToken.refreshToken

    if (!token && to.fullPath.includes("/admin") && to.path !== '/admin/login' ) {
        return navigateTo('/admin/login')
    }
})