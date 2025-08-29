export default (ctx, inject) => {
  const config = {
    baseURL: '<%= options.base_url %>',
    token: '<%= options.token %>',
    api: '<%= options.api %>'
  }
  inject('dashboardConfig', config)
}
