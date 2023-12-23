import {
    API_GET_CONTACT_INFO
} from "~/server/api/constant";

export const useContact = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const getContactInfo = () => {
        return useFetch(API_GET_CONTACT_INFO, {
            baseURL: baseURL,
            method: "GET",
        })
    }
    return {
        getContactInfo,
    }
}