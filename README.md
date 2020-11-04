This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tutorial How To Make Image Gallery With Tailwindcss and PIXABAY API
1. create react app file use syntax: yarn create react-app namefile
2. install dependencies syntax : yarn add tailwindcss postcss-cli autoprefixer -D
3. add file tailwind configuration full syntax: yarn tailwindcss init tailwind.config.js -full
4. add file postcss configuration manually at root folder
5. create file styling tailwind.css and style.css to src/assets and add directive import to file tailwind.css
6. generate output styling file use syntax : "build:css": "postcss src/assets/tailwind.css -o src/assets/style.css" and "start": "yarn run build:css && react-scripts start". add import style.css to index.js 
7. create file .env at root folder and add Api Key
8. fetch api from PIXABAY
9. show loading text before load data 
10. add component image card 
11. add component image search


   