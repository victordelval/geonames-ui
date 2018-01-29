You can see the project running [here](http://victordelval.github.io/geonames-ui).


## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a frontend application of type SPA with ReactJS to consume and represent data from the API of geonames.org.

This is a first step with the development of applications with React as well as an approach to the ecosystem of related technologies.

This project takes as reference the project developed in the [React JS](https://openwebinars.net/cursos/react/?ref=landing-cursos) course of OpenWebinars.


## Project Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Development dependencies:
```
  "devDependencies": {
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-15.4": "^1.0.5",
    "gh-pages": "^0.12.0",
    "react-addons-test-utils": "^15.6.2",
    "react-scripts": "0.8.3"
  },
```

Production dependencies:
```
  "dependencies": {
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-icons": "^2.2.1",
    "react-redux": "^4.4.6",
    "react-router": "^3.0.0",
    "redux": "^3.6.0",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.2.0"
  },
```

Other technologies:
* Skeleton
* Normalize


## Project Structure

The code of the application, the "src" folder, is organized in the following directories:

```
src/

  actions/
    actions.js

  components/
    About/
      index.js
      About.js
    ExternalLink/
      index.js
      ExternalLink.js
    Header/
      Header.css
      Header.js
      index.js
    HintMessage/
      HintMessage.css
      HintMessage.js
      index.js
    LocationList/
      index.js
      LocationList.js
    LocationRow/
      index.js
      LocationRow.js
    NearbyPlaceList/
      index.js
      NearbyPlaceList.js
    NearbyPlaceRow/
      index.js
      NearbyPlaceRow.js
    Paginator/
      index.js
      Paginator.css
      Paginator.js
    SearchForm/
      index.js
      SearchForm.js

  containers/
    BaseContainer/
      index.js
      BaseContainer.js
    DetailsContainer/
      index.js
      DetailsContainer.js
    SearchContainer/
      index.js
      SearchContainer.js

  reducers/
    reducers.js

  index.css
  index.js
  store.js
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`
`npm run deploy` will first build your project via npm run build. Then it will publish it to a gh-pages branch on GitHub via gh-pages -d build.