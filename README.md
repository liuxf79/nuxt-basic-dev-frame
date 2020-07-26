# INTRODUCTION

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build && npm run start

# generate static project
$ npm run build && npm run export

#pm2 start production version
$ pm2 start ecosystem.config.js

```

### runtime settings

- refer .env file

### styles

- asset/stylus/\*.styl : global styles

### middlewares

- middleware/router.js : functions via router change(to,from,etc..)
- server-middleware/log.js : server request logs

### Project Structures

```
yshop/
├─.env  //environment settings includ const params
├─ecosystem.config.js //pm2 settings
├─nuxt.config.js  //nuxt settings
├─package.json
├─api
├─store
├─static
├─server-middleware
├─plugins
├─pages
├─middleware
├─layouts
├─lang  //i18n files
├─components
├─assets
```

### SSR Page Rendering Suggestion

- use asyncData() to get basic data
- try to use global styles with Design rules
- UI widget use vuex to control and included in layout/default.vue
- use stylus module mode to develop styles

### Naming Rules

- vue filename use single word and lower case，modules use folder
- refer nuxt router rules to create child pages router

### Common Usage

- **[nuxt-i18n](https://i18n.nuxtjs.org/)**
  -- create keys that content need i18n in `lang/`
  ```js
  // lang/zh-CN.js
  export default {
    welcome: '欢迎',
  }
  ```

```html
<!-- template-->
<h2>{{ $t('welcome') }}</h2>
```

-- get current locale

```js
this.$i18n.locale
```

-- change route with

```html
<nuxt-link :to="localePath('/target-route')"></nuxt-link>
```

or

```js
this.$router.push(this.localePath('/target-route'))
```

-- change locale with

```js
this.$i18n.setLocale('zh')
```

- **toast**

[material icons](https://material.io/resources/icons/?icon=3d_rotation&style=baseline)

```js
this.$toast.show('toast content', {
  icon: 'show icon before content with material icons, default null',
  duration: 'display time with millisecond，default 1500',
})
```

- **request**

```js
//create a api in api/index.js
export const HOME_PAGE_DATA = '/page/index' // 首页数据

//use api-name to get result in promise
// $request.get or $request.post,with params
this.$request.get('HOME_PAGE_DATA', {
  prams: params,
})
```

- **auth**

```js
//login status
const loginStatus = this.$auth.loggedIn //boolean result

//user info
const user = this.$auth.user
```
