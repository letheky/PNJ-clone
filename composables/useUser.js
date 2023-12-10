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
    const postRefreshToken = (token) => {
        return {
            baseURL: baseURL,
            method: "POST",
            body: {
                token: token
            }
        }
    }
    return {
        postLogin,
        postRefreshToken,
    }
}