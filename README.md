# INTRODUCTION

### Build Setup

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
