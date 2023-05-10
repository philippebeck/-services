# Servidio

JavaScript Frontend Services

[![NPM Version](https://badgen.net/npm/v/servidio)](https://www.npmjs.com/package/servidio)
[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/servidio)](https://github.com/philippebeck/servidio)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/servidio)](https://github.com/philippebeck/servidio/tree/master)

[![NPM Downloads](https://badgen.net/npm/dt/servidio)](https://www.npmjs.com/package/servidio)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b65b93fc3484479aa02c1891609e47e2)](https://www.codacy.com/gh/philippebeck/servidio/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ada4e929f6116145366/maintainability)](https://codeclimate.com/github/philippebeck/servidio/maintainability)

---

## Summary

[Overview](#overview)  
[Package](#package)  
[CDN](#cdn)  
[Download](#download)  
[Content](#content)  
[Test](#test)  
[Usage for Vue3 + NPM](#usage-for-vue3--npm)  

---

## Overview

Servidio is a JavaScript Frontend Service Library.  
You will find some Services with Checkers, Fetchers, Getters & Setters.  
Servidio use only JS native functions, so it have no dependency.  

---

## Package

NPM : `npm i servidio`  
or  
Yarn : `yarn add servidio`  

---

## CDN

-   Development : [https://cdn.jsdelivr.net/npm/servidio@2.1.0/dist/serve.js](https://cdn.jsdelivr.net/npm/servidio@2.1.0/dist/serve.js)  
-   Production : [https://cdn.jsdelivr.net/npm/servidio@2.1.0/dist/serve.min.js](https://cdn.jsdelivr.net/npm/servidio@2.1.0/dist/serve.min.js)  

---

## Download

[Latest Release](https://github.com/philippebeck/servidio/releases)  
or  
`git clone https://github.com/philippebeck/servidio.git`  
or  
[Master ZIP](https://github.com/philippebeck/servidio/archive/refs/heads/master.zip)
  
---

## Content

Checkers part :  
-   **checkError(error)** : check error response  
-   **checkId(id, array)** : check id from array  
-   **checkRange(value, message, min, max)** : check range between min & max  
-   **checkRegex(value, message, regex)** : check value with regex  
-   **checkRole(userRole, role)** check role between admin, editor or user  

Fetchers part :  
-   **fetchGet(url)** get data with fetch  
-   **fetchSet(url, options)** set data with fetch  

Getters part :  
-   **getAverage(id, array)** get average from product score  
-   **getCats(items)** get categories from an array of objects  
-   **getItemName(id, items)** get image name  
-   **getItemsByCat(items)** get items by category property  

Setters part :  
-   **setGlobalMeta(lang, icon, creator)** set html lang, favicon & meta creator for tw  
-   **setMeta(title, description, url, image)** set all meta for pages  
-   **setDescription(description)** set meta description & description for og/tw  
-   **setImage(image)** set image for og & tw  
-   **setTitle(title)** set head title & title for og/tw  
-   **setUrl(url)** set canonical & url/site for og/tw  

---

## Test

You can run unit tests with Jest :  
`npm test -- --coverage`  

---

## Usage for Vue3 + NPM

1.  In `main.js` of Vue3, import `servidio` like this : `import serve from "servidio"`
2.  Then, add this line after creating App but before mounting : `app.config.globalProperties.$serve = serve` ([example](https://github.com/philippebeck/vesan/blob/master/src/main.js))
3.  Then use it in yours components like in these examples : 
    -  `this.$serve.fetchGet(url)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/HomeView.vue))  
    -  `this.$serve.fetchSet(url, options)`  
    -  `this.$serve.checkRegex(message.email, message, regex)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/ContactView.vue))  
    -  `this.$serve.checkRange(user.name, message)`  
