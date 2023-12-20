import {
    API_USER_LOGIN
} from "~/server/api/constant";

export const useUser = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    const postLogin = (username, password) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                username: username,
                password: password,
            }
        }
    }

    function postRefreshToken(token) {
        $fetch(API_USER_LOGIN, {
            baseURL: baseURL,
            method: "POST",
            body: {
                token: token
            },
            onResponse({
                request,
                response,
                options
            }) {
                // Process the response data
                if (response.status === 200) {
                    if (response._data.token) {
                        const token = {
                            token: response._data.token,
                            refreshToken: response._data.refreshToken,
                        };
                        localStorage.setItem("userToken", JSON.stringify(token));
                        navigateTo('/admin')
                    }
                } else error.value = true;
            },
        })
    };
    // const postRefreshToken = (token) => {
    //     return {
    //         baseURL: baseURL,
    //         method: "POST",
    //         body: {
    //             token: token
    //         }
    //     }
    // }
    return {
        postLogin,
        postRefreshToken,
    }
}