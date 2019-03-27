# vue-igdb-api-v3

Get calls to the [IGDB API v3](https://api-docs.igdb.com/) up and running with [Vue](https://vuejs.org/v2/guide/), [Vue CLI](https://cli.vuejs.org/), and [axios](https://github.com/axios/axios) using the built-in proxy server.

#### Requires
* Node and npm (https://www.npmjs.com/get-npm)
* IGDB API v3 Key (https://api.igdb.com/signup)

---

### 1. Project setup
```
$ npm install
```

### 2. Edit App.vue
* After install, edit `src/App.vue` with your IGDB API Key and port number of where the app is running locally (usually `8080`).

```javascript
axios({
    url: "http://localhost:[PORT_NUMBER]/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '[API_KEY]'
    },
    data: 'fields name; limit 10;'
});
```

### 3. Serve locally
```
$ npm run serve
```

---
### Vue CLI Custom configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
### Resources
* [IGDB API v3 documentation](https://api-docs.igdb.com/)
* [IGDB Discord channel](https://discord.gg/WvBNFRu)
* [IGDB.com](IGDB.com)
* [axios](https://github.com/axios/axios)

---
### Related
[igdb-js-proxy](https://github.com/evild70/igdb-js-proxy)
