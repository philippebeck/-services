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

---

## Overview

Servidio is a JavaScript Frontend Service Library.  
You will find some Services with Checkers, Fetchers, Getters & Setters.  
Servidio use only Axios as dependency.  

---

## Package *(recommended)*

NPM : `npm i servidio`  
or  
Yarn : `yarn add servidio`  

---

## CDN *(not recommended)*

-   Development : [https://cdn.jsdelivr.net/npm/servidio@3.0.0/dist/serve.js](https://cdn.jsdelivr.net/npm/servidio@3.0.0/dist/serve.js)  
-   Production : [https://cdn.jsdelivr.net/npm/servidio@3.0.0/dist/serve.min.js](https://cdn.jsdelivr.net/npm/servidio@3.0.0/dist/serve.min.js)  

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
-   **checkRange(value, message, min, max)** : check range between min & max  
-   **checkRegex(value, message, regex)** : check value with regex  
-   **checkRole(userRole, role)** check role between admin, editor or user  

Fetchers part :  
-   **setAxios(token, type)** set axios params  
-   **postData(url, data, token, type)** post data with axios  
-   **getData(url, token, type)** get data with axios  
-   **putData(url, data, token, type)** put data with axios  
-   **deleteData(url, token, type)** delete data with axios  

Getters part :  
-   **getCats(items)** get categories from an array of objects  
-   **getItemName(id, items)** get image name  
-   **getItemsByCat(items)** get items by category property  

Setters part :  
-   **setError(error)** : set error message  
-   **setGlobalMeta(lang, icon)** set html lang & favicon  
-   **setMeta(title, description, url, image)** set all meta for pages  

---

## Test

You can run unit tests with Jest :  
`npm test`  
