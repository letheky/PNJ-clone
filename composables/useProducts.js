export const useProducts = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const postBody = (page) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                pageNum: 1,
                pageSize: 10,
                productGroupId: 1,
                subGroupId: 1,
                productTypeId: 1,
            }
        }
    }
    return {
        baseURL, postBody
    }
}