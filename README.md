# servidio

JavaScript Frontend Services

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b65b93fc3484479aa02c1891609e47e2)](https://www.codacy.com/gh/philippebeck/servidio/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ada4e929f6116145366/maintainability)](https://codeclimate.com/github/philippebeck/servidio/maintainability)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/philippebeck/servidio.svg?label=Last+Commit)](https://github.com/philippebeck/servidio/commits/master)

[![NPM Montly Downloads](https://img.shields.io/npm/dm/servidio.svg?label=NPM+Downloads)](https://www.npmjs.com/package/servidio)
[![jsDelivr Montly Downloads](https://img.shields.io/jsdelivr/npm/hm/servidio.svg?label=JSDelivr+Downloads)](https://www.jsdelivr.com/package/npm/servidio)

[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/servidio.svg?label=JavaScript)](https://github.com/philippebeck/servidio)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/servidio.svg?label=Code+Size)](https://github.com/philippebeck/servidio/tree/master)
[![GitHub License](https://img.shields.io/github/license/philippebeck/servidio.svg?label=License)](https://github.com/philippebeck/servidio/blob/master/LICENSE.md)

## Overview

Servidio is a JavaScript Frontend Service Library.

You will find Axios CRUD Services & String Services.

## Summary

-   [Package Manager](#package-manager)  
-   [CDN](#CDN)  
-   [Download](#download)  
-   [Content](#content)  
-   [Usage for Vue3](#usage-for-vue3)  

---

## Package Manager

NPM : `npm i servidio`  
Yarn : `yarn add servidio`  

---

## CDN 

-   Development : [https://cdn.jsdelivr.net/npm/servidio@0.1.3/dist/services.js](https://cdn.jsdelivr.net/npm/servidio@0.1.3/dist/services.js)  
-   Production : [https://cdn.jsdelivr.net/npm/servidio@0.1.3/dist/services.min.js](https://cdn.jsdelivr.net/npm/servidio@0.1.3/dist/services.min.js)  

---

## Download

[Latest Release](https://github.com/philippebeck/servidio/releases)  

`git clone https://github.com/philippebeck/servidio.git`  
  
---

## Content

Axios part :  
-   **getData(url)**  
-   **postData(url, data)**  
-   **patchData(url, data)**  
-   **putData(url, data)**  
-   **deleteData(url)**

String part :  
-   **checkString(str, type)**  
-   **rewriteString(str, type)**  

---

## Usage for Vue3

1.  Copy the `script/constants.js` file to your project root with the script folder like this `script/constants.js` & replace values with your own values
2.  In `main.js` of Vue3, import `servidio` like this : `import serve from "servidio"`
3.  Then, add this line after creating App but before mounting : `app.config.globalProperties.$serve = serve` ([example](https://github.com/philippebeck/links2code/blob/master/src/main.js))
4.  Then use it in yours components like in these examples : 
    -  `this.$serve.getData(url)` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/HomeView.vue))  
    -  `this.$serve.postData(url, data)`  
    -  `this.$serve.checkString(message.name, "name") === true` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/ContactView.vue))  
    -  `this.$serve.rewriteString(user.email, "email")`  
