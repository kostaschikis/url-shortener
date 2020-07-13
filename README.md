# URL Shortener API 🔗

Made with **Node.js**, **Express** and **MongoDB**

## How To Install

1. Install the dependecies with ``npm install``
2. Go to **config** folder and modify the **default.json** file with your MongoURI and BaseURL (You can use localhost)
3. ``node start``

## How To Use

### POST api/url/shorten

To make a **post request** you can use [Postman](https://www.getpostman.com/) or if you are using [VScode](https://code.visualstudio.com/) you can download the [REST Client Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

* For VScode you can use the **api.http** file located at the **requests folder** and insert a long url.
![Example](https://i.imgur.com/gzH8AmY.jpg)

### MongoDB

* If you have [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) installed you can pull a MongoDB image and connect the app to your database container. Just modify the **default.json** file like this:  
``{ "mongoURI": "mongodb://localhost:27017/urlshortener", "baseURL": "http://localhost:5000"}``  
  
* Otherwise, you can use [MongoDB Atlas](https://account.mongodb.com/account/login) or a local MongoDB

## What I Learned

* Node.js Concepts
* Express Framework
* MongoDB
* Use Dependencies
* How URL Shortener Services Work
