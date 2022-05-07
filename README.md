# servidio

JavaScript Frontend Services

[![NPM Version](https://badgen.net/npm/v/servidio)](https://www.npmjs.com/package/servidio)
[![NPM Downloads](https://badgen.net/npm/dt/servidio)](https://www.npmjs.com/package/servidio)
[![jsDelivr Downloads](https://badgen.net/jsdelivr/hits/npm/servidio)](https://www.jsdelivr.com/package/npm/servidio)
[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/servidio)](https://github.com/philippebeck/servidio/commits/master)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b65b93fc3484479aa02c1891609e47e2)](https://www.codacy.com/gh/philippebeck/servidio/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ada4e929f6116145366/maintainability)](https://codeclimate.com/github/philippebeck/servidio/maintainability)
[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/servidio)](https://github.com/philippebeck/servidio)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/servidio)](https://github.com/philippebeck/servidio/tree/master)

## Overview

Servidio is a JavaScript Frontend Service Library.  
You will find CRUD Services & String Services.  
CRUD Services is managed by Axios, otherwise Fetch if Axios is not available.

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

-   Development : [https://cdn.jsdelivr.net/npm/servidio@0.1.7/dist/serve.js](https://cdn.jsdelivr.net/npm/servidio@0.1.7/dist/serve.js)  
-   Production : [https://cdn.jsdelivr.net/npm/servidio@0.1.7/dist/serve.min.js](https://cdn.jsdelivr.net/npm/servidio@0.1.7/dist/serve.min.js)  

---

## Download

[Latest Release](https://github.com/philippebeck/servidio/releases)  

`git clone https://github.com/philippebeck/servidio.git`  
  
---

## Content

CRUD part :  
-   **getData(url)**  
-   **postData(url, data)**  
-   **patchData(url, data)**  
-   **putData(url, data)**  
-   **deleteData(url)**

String part :  
-   **checkString(str, type)**  
-   **rewriteString(str, type)**  

---

## Usage for Vue3 + NPM

1.  Copy the `servidio/script/constants.js` file to your project in the folder `/src/script/` like this : `/src/script/constants.js` & replace values with your own values
2.  In `main.js` of Vue3, import `servidio` like this : `import serve from "servidio"`
3.  Then, add this line after creating App but before mounting : `app.config.globalProperties.$serve = serve` ([example](https://github.com/philippebeck/links2code/blob/master/src/main.js))
4.  Then use it in yours components like in these examples : 
    -  `this.$serve.getData(url)` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/HomeView.vue))  
    -  `this.$serve.postData(url, data)`  
    -  `this.$serve.checkString(message.name, "name") === true` ([example](https://github.com/philippebeck/links2code/blob/master/src/views/ContactView.vue))  
    -  `this.$serve.rewriteString(user.email, "email")`  
