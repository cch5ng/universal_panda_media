# Universal Panda Media

* This is a copycat project for a multi-media news site

* Purpose: work with streaming media, more complex CSS

* Working features

   * Navigation menu button

   * Links to video content (story detail view)

* It is not fully functional. Examples:

   * Navigation links (header navigation menu and footer navigation menu)

   * Controller buttons (Play, Queue, Transcript)


## Setup

**Installing files**

* Libraries need to be installed at a few levels (root, server, client)

* Packages were installed using Node v10.15.3 and npm v6.4.1

```
cd server
yarn install
cd ../client
yarn install
```

**Set up environment variables**

* Make a copy of the example.env file and rename it as .env
* Populate the environment variables

For development:

`JSON_SERVER_API_ROOT='http://localhost:3000/'`

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

## Background



## Credits

* Videos were captured and edited by doxiemom19 on youtube

