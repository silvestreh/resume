export default function (vm, path) {
    vm.$http.get(`/static/json/${path}.json`)
        .then(response => {
            vm[path] = response.data.data;
        })
        .catch(error => new Error(error));
}
