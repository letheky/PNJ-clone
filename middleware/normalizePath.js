import slugify from 'slugify';
export default defineNuxtRouteMiddleware((from, to) => {
    if (to.name === 'name') {
        return navigateTo(`/${slugify(to.path.slice(1),{
            lower: true,  // Convert to lowercase
            remove: /[*+~.()'"!:@]/g,  // Remove special characters
          })}`)
    }
})