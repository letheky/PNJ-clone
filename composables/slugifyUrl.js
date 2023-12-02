import slugify from 'slugify'
export const slugifyUrl = () => {
    const vnUrl = (url) => {
        return slugify(url, {
            lower: true,
            locale: 'vi',
            // remove: /[*+~.()'"!:@]/g, 
        });
    }
    return {
        vnUrl
    }
}