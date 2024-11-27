import handleResponse from "./handleResponse"
import {
    API_CREATE_PRODUCT,
    API_EDIT_PRODUCT,
    API_DELETE_PRODUCT,
    API_GET_PRODUCT_DETAIL
} from "~/server/api/constant";
export const useSingleProduct = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const currentToken = JSON.parse(localStorage.getItem("userToken")) || {}

    const getProductByID = (id) => {
        return $fetch(API_GET_PRODUCT_DETAIL, {
            baseURL: baseURL,
            method: "GET",
            params: {
                id: id
            },
        })
    }
    const createProduct = (data) => {
        return $fetch(API_CREATE_PRODUCT, {
            baseURL: baseURL,
            method: "POST",
            body: data,
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            onResponseError({
                request,
                response,
                options
            }) {
                // Process the response data
                handleResponse(response)
            },
        })
    }
    const editProduct = (data) => {
        return $fetch(API_EDIT_PRODUCT, {
            baseURL: baseURL,
            method: "PUT",
            body: data,
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            onResponseError({
                request,
                response,
                options
            }) {
                // Process the response data
                handleResponse(response)
            },
        })
    }
    const deleteProduct = (data) => {
        return $fetch(API_DELETE_PRODUCT, {
            baseURL: baseURL,
            method: "DELETE",
            body: {
                id: data
            },
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            onResponseError({
                request,
                response,
                options
            }) {
                // Process the response data
                handleResponse(response)
            },
        })
    }
    return {
        getProductByID,
        createProduct,
        editProduct,
        deleteProduct,
    }
}