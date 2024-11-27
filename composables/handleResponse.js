const {
    postRefreshToken
} = useUser()
const currentToken = JSON.parse(localStorage.getItem("userToken")) || {}
export default function handleResponse(response) {
    if ([401, 403].includes(response.status)) {
        // return postRefreshToken(currentToken.token)
        localStorage.setItem('userToken',{})
        return navigateTo('/admin/login')
    }
}