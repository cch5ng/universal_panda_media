# cc_media

* This is a copycat project for a multi-media news site

* Purpose: work with streaming media, more complex CSS, build react component library

## Setup

**Installing files**

* Libraries need to be installed at a few levels (root, server, client)

```
yarn install
cd server
yarn install
cd ../client
yarn install
```

**Get an unsplash account key**

* https://unsplash.com/documentation#creating-a-developer-account

**Set up environment variables**

* Make a copy of the example.env file and rename it as .env
* Populate the environment variables

For development:

`JSON_SERVER_API_ROOT='http://localhost:3000/'`

Append your unsplash application key to the end of the 2nd variable, UNSPLASH_CLIENT_KEY. Leave a space between the 2 strings in UNSPLASH_CLIENT_KEY.

## Run

* For the development environment, 2 servers are required. The initial "backend" server is a dummy server, using json-server. The client is run using webpack-dev-server.

(from the root directory)


```
cd server
json-server --watch db.json
```


From another terminal window, 


```
cd client
yarn run start
```


* The application is available from http://localhost:8080

## Credits

* Images are sourced from unsplash.com