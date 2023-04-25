# Servidio

[![NPM Version](https://badgen.net/npm/v/servidio)](https://www.npmjs.com/package/servidio)

JavaScript Frontend Services

[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/servidio)](https://github.com/philippebeck/servidio/commits/master)
[![NPM Downloads](https://badgen.net/npm/dt/servidio)](https://www.npmjs.com/package/servidio)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b65b93fc3484479aa02c1891609e47e2)](https://www.codacy.com/gh/philippebeck/servidio/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ada4e929f6116145366/maintainability)](https://codeclimate.com/github/philippebeck/servidio/maintainability)

[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/servidio)](https://github.com/philippebeck/servidio)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/servidio)](https://github.com/philippebeck/servidio/tree/master)

## Overview

Servidio is a JavaScript Frontend Service Library.  
You will find some Services about Checkers, Data, Getters & Setters.  
Data Services are using Axios.

## Summary

[Servidio](#servidio)  
[Overview](#overview)  
[Summary](#summary)  
[Package](#package)  
[Download](#download)  
[CDN](#cdn)  
[Content](#content)  
[Usage for Vue3 + NPM](#usage-for-vue3--npm)  

---

## Package (recommended)

NPM : `npm i servidio`  
or  
Yarn : `yarn add servidio`  

---

## Download

[Latest Release](https://github.com/philippebeck/servidio/releases)  
or  
`git clone https://github.com/philippebeck/servidio.git`  
or  
[Master ZIP](https://github.com/philippebeck/servidio/archive/refs/heads/master.zip)
  
---

## CDN (not recommanded)

Warning about the CDN: if you want to use the axios functions or checker functions from packages (email, password or url), you need to import them by yourself & before servidio  

-   Development : [https://cdn.jsdelivr.net/npm/servidio@1.3.3/dist/serve.js](https://cdn.jsdelivr.net/npm/servidio@1.3.3/dist/serve.js)  
-   Production : [https://cdn.jsdelivr.net/npm/servidio@1.3.3/dist/serve.min.js](https://cdn.jsdelivr.net/npm/servidio@1.3.3/dist/serve.min.js)  

---

## Content

Checkers part :  
-   **checkEmail(email)** : check email validity  
-   **checkError(error)** : check error response  
-   **checkNumber(number, min, max)** : check number min/max  
-   **checkPass(pass)** : check password validity  
-   **checkRole(userRole, role)** check role between admin, editor or user  
-   **checkString(string, min, max)** : check string min/max  
-   **checkUrl(url)** : check url validity  
-   **checkUser(users)** check current user id from array of user ids  

Fetchers part :  
-   **fetchDelete(url)** delete data with fetch  
-   **fetchGet(url)** get data with fetch  
-   **fetchPatch(url, data)** patch data with fetch  
-   **fetchPost(url, data)** post data with fetch  
-   **fetchPut(url, data)** put data with fetch  

Getters part :  
-   **getAverage(id, array)** get average from product score  
-   **getCats(items)** get categories from an array of objects  
-   **getItemName(id, items)** get image name  
-   **getItemsByCat(items)** get items by category property  

Setters part :  
-   **setDescription(description)** set meta description & description for og/tw  
-   **setGlobalMeta(lang, icon, creator)** set html lang, favicon & meta creator for tw  
-   **setImage(image)** set image for og & tw  
-   **setMeta(title, description, url, image)** set all meta for pages  
-   **setTitle(title)** set head title & title for og/tw  
-   **setUrl(url)** set canonical & url/site for og/tw  

---

## Usage for Vue3 + NPM

1.  Copy the `servidio/constants.js` file to your project root like this : `/constants.js` & replace values with your own values
2.  In `main.js` of Vue3, import `servidio` like this : `import serve from "servidio"`
3.  Then, add this line after creating App but before mounting : `app.config.globalProperties.$serve = serve` ([example](https://github.com/philippebeck/vesan/blob/master/src/main.js))
4.  Then use it in yours components like in these examples : 
    -  `this.$serve.fetchGet(url)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/HomeView.vue))  
    -  `this.$serve.fetchPost(url, data)`  
    -  `this.$serve.checkEmail(message.email)` ([example](https://github.com/philippebeck/vesan/blob/master/src/views/ContactView.vue))  
    -  `this.$serve.checkPass(user.pass)`  
