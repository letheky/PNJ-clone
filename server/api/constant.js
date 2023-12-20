// products API
export const API_POST_PRODUCTS = "api/v1/product-management/products"
export const API_GET_PRODUCT_DETAIL = 'api/v1/product-management/product'
export const API_GET_PRODUCT_GROUP = '/api/v1/product-group-management/product-groups'
export const API_GET_PRODUCT_SUBGROUP = '/api/v1/sub-group-management/sub-groups'
export const API_GET_PRODUCT_TYPE = '/api/v1/product-type-management/product-types'

//single product API
export const API_CREATE_PRODUCT = '/api/v1/admin/product-management/products/save'
export const API_EDIT_PRODUCT = '/api/v1/admin/product-management/product'
export const API_DELETE_PRODUCT = '/api/v1/admin/product-management/product'

//image API
export const API_UPLOAD_IMAGE = '/api/v1/admin/file-storage/upload'
export const API_DELETE_UPLOADED_IMAGE = '/api/v1/admin/file-storage'
export const API_GET_PAGING_UPLOADED_IMAGE = '/api/v1/admin/file-storage/filter'
export const API_GET_SINGLE_UPLOADED_IMAGE = '/api/v1/admin/file-storage'

//user API
export const API_USER_LOGIN = '/api/login'
export const API_USER_REFRESH_TOKEN = '/api/v1/user/refresh-token'

//common data API
export const API_GET_CONTACT_INFO = '/api/v1/contact-management/contacts'