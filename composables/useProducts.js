import {
    API_POST_PRODUCTS,
    API_GET_PRODUCT_GROUP,
    API_GET_PRODUCT_SUBGROUP,
    API_GET_PRODUCT_TYPE
} from "~/server/api/constant";
export const useProducts = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    //client-side
    const getProducts = (data) => {
        return $fetch(API_POST_PRODUCTS, {
            baseURL: baseURL,
            method: "POST",
            body: data,
        })
    }
    const getProductGroup = () => {
        return $fetch(API_GET_PRODUCT_GROUP, {
            baseURL: baseURL,
            method: "GET",
        })
    }
    const getProductSubGroup = (groupID) => {
        return $fetch(API_GET_PRODUCT_SUBGROUP, {
            baseURL: baseURL,
            method: "GET",
            params: {
                productGroupId: groupID
            }
        })
    }
    const getProductType = (groupID, subGroupID) => {
        return $fetch(API_GET_PRODUCT_TYPE, {
            baseURL: baseURL,
            method: "GET",
            params: {
                productGroupId: groupID,
                subGroupId: subGroupID
            }
        })
    }

    //server-side
    const postBody = (page, size, id1, id2, id3) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                pageNum: page,
                pageSize: size,
                productGroupId: id1,
                subGroupId: id2,
                productTypeId: id3
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
        //client-side
        getProducts,
        getProductGroup,
        getProductSubGroup,
        getProductType,
        //server-side
        postBody,
        getByID,
        getProductCategories,
        searchBody
    }
}