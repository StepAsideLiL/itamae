# Itamae

Itamae is chef profiling website for recruiting chef for your restaurant.

### Features of this website

1. User authentication with firebase: Login and Registration page.
2. Page routing with React Router.
3. Private (or Protected) routing.
4. REST API endpoints for getting the json data of chefs and recipes, with Express and Nodej.

## Launch the project in local server.

Clone the repository

### For client (or front end) side

```besh
cd itamae/itamae-client

npm i

npm run dev
```

#### Note:

- You have to change the fetch url to localhost
- Have firebase web app api keys and put them in a `.env.local` file and name them as `firebase.config.js`.

### For server (or back end) side

```besh
cd itamae/itamae-server

npm i

npm run dev
```
