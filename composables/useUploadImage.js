import handleResponse from "./handleResponse"
import {
    API_UPLOAD_IMAGE,
    API_DELETE_UPLOADED_IMAGE,
    API_GET_PAGING_UPLOADED_IMAGE,
    API_GET_SINGLE_UPLOADED_IMAGE
} from "~/server/api/constant";

export const useUploadImage = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const currentToken = JSON.parse(localStorage.getItem("userToken")) || {}

    const postImage = (data) => {
        return $fetch(API_UPLOAD_IMAGE, {
            baseURL: baseURL,
            method: "POST",
            headers: {
                Authorization: "Bearer " + currentToken.token,
                Accept: '*/*',
                // "Content-Type": "multipart/form-data",
            },
            body: data,
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
    const deleteImage = (imageId) => {
        return $fetch(API_DELETE_UPLOADED_IMAGE, {
            baseURL: baseURL,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            params: {
                id: imageId
            },
            onResponseError({
                request,
                response,
                options
            }) {
                handleResponse(response)
            },
        })
    }
    const getPagedImages = (pageNum, pageSize) => {
        return $fetch(API_GET_PAGING_UPLOADED_IMAGE, {
            baseURL: baseURL,
            method: "POST",
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            body: {
                pageNum: pageNum,
                pageSize: pageSize,
            },
            onResponseError({
                request,
                response,
                options
            }) {
                handleResponse(response)
            },
        })
    }
    const getImageById = (imageId) => {
        return $fetch(API_GET_SINGLE_UPLOADED_IMAGE, {
            baseURL: baseURL,
            method: "GET",
            headers: {
                Authorization: "Bearer " + currentToken.token,
            },
            params: {
                id: imageId
            },
            onResponseError({
                request,
                response,
                options
            }) {
                handleResponse(response)
            },
        })
    }
    return {
        postImage,
        deleteImage,
        getPagedImages,
        getImageById
    }
}