# Evaluate a news article with Natural Language Processing

## Table of Contents

* [Description](#description)
* [Local Deployment](#local)

## Description
This project is part of the Front End Web Developer Nanodegree Program from Udacity. The started code can be found in https://github.com/udacity/fend/tree/refresh-2019

The goal of this project, stated by Udacity, is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

> The Natural Language API used in this project is `MeaningCloud Sentiment Analysis API` (https://www.meaningcloud.com/developer/login)

## Local Deployment

- Clone the repository to a local folder
- Go into the local folder in the terminal with `cd` and run the following commands
  - `npm install`
  - `npm i -D @babel/core @babel/preset-env babel-loader style-loader node-sass css-loader sass-loader clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin@4.2.3 webpack-dev-server`
  - `npm i workbox-webpack-plugin --save-dev`

> Note: This project and the pulgins compability were tested with webpack version 4.35.3. If requiered, install it with `npm i webpack@4.35.3`

### Setting up the API

The project uses Environment Variables to set up the API Key related to a private user account. To configure your own API Key perform the following steps:

- In the terminal run `npm install dotenv`
- Create a new `.env` file in the root of the local project
- Fill the `.env` file with your API keys like this: `API_KEY=Your_Key_Here`

### Development mode

- In the terminal run `npm run build-dev`

### Production mode

In a second terminal run:

- `npm run build-prod`
- `npm start`

## Structure
The project files are structured as follow:

- .babelrc
- package-lock.json
- package.json
- Readme.md
  
  This file
- REQUIREMENTS.md

  File that describes the requirements from Udacity for this project
- webpack.dev.js

  File with the development mode configuration
- webpack.prod.js

  File with the production mode configuration
- src
  - client
    - __test__

      Folder that comprises the test files, using `Jest` (https://jestjs.io/)
      - formHandler.test.js
        
        Jest test file for formHandler.js
      - nameChecker.test.js

        Jest test file for nameChecker
    - js
      - formHandler.js

        JavaScript file that reads the input text from the user, pass the input text in the UI to the /server/index.js, and updates the UI
      - nameChecker.js

        JavaScript file that returns a welcome message depending on the user input name
    - styles
      - base.scss
      - footer.scss
      - form.scss
      - header.scss
      - resets.scss
      - results.scss
    - views
      - index.html
    index.js
  - server
    - index.js

      JavaScript file that calls the `MeaningCloud Sentiment Analysis API` with the entered text from the user and the API Key configured in the `.env` file

