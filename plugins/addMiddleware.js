import {
    useUserToken
} from '~/stores/userToken'
export default defineNuxtPlugin((nuxtApp) => {
    const store = useUserToken(nuxtApp.$pinia);
    addRouteMiddleware('authorization', async (to, from) => {
        if (!store.token) {
            return navigateTo('/admin/login')
        }

    })
})