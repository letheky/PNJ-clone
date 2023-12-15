export const useProducts = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const postBody = (page) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                pageNum: page,
                pageSize: 10,
                productGroupId: 1,
                subGroupId: 1,
                productTypeId: 1
            }
        }
    }
    const searchBody = (page, str) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                pageNum: page,
                pageSize: 10,
                textSearch: str
            }
        }
    }
    const getByID = (id) => {
        return {
            baseURL: baseURL,
            method: "GET",
            params: {
                id: id
            }
        }
    }
    const getProductCategories = () => {
        return {
            baseURL: baseURL,
            method: "GET",
        }
    }
    return {
        postBody,
        getByID,
        getProductCategories,
        searchBody
    }
}