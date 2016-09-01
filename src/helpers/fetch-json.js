/**
 * Fetches JSON data and stores it in a VM instance
 *
 * @param   {Object} vm Vue instance
 * @param   {String} path The JSON filename
 * @return  {Promise} Promise
 */

export default function (vm, path) {
    vm.$http.get(`/static/json/${path}.json`)
        .then((response) => {
            vm[path] = response.data.data;
        })
        .catch(error => new Error(error));
}
