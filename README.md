# Plus-Ultra

## _**About the project**_ - 
  Plus-Ultra is a MERN stack web application designed specifically for the students of Computer Science and Engineering Branch of International Institute of Information Technology Bhubaneswar that has features like Notice Board and Time Table embedded into the homepage for ease of access.

A list of students that shows information about every individual including their skills, achievements and resume and allows the students from CSE branch only to login and create/edit their own personal account.
## Getting Started
The project contains node_modules necessary for client as well as server to run. We can install the dependencies by following below steps -
  * For server dependencies
     * `npm install` in main directory
  * For client dependencies
     * `cd client` to move to client
     * `npm install` 
     
Now to start -
* `node server.js` to start the server
* `cd client`
* `npm start` to start the react app 

## File structure
#### `client` - Holds the client application
- #### `public` 
    - #### `css` -  This holds all of our sccs and css files
    - #### `images` - This holds all the required images
    
- #### `src`
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `app.js` - This is what renders the nav in starting of any route 
    - #### `index.js` - This is what renders all of our browser routes and different pages
    - #### `.gitignore` - Tells git which files to ignore
    - #### `package.json` - Defines npm behaviors and packages for the client
    
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
- #### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
- #### `.gitignore` - Tells git which files to ignore
- #### `README` - This file!


## Available Scripts

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>
