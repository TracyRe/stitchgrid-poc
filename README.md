# _Stitch Grid_

#### Epicodus Capstone Project

_Published_ **May 3 2019**<br>
_Author_ **Tracy Reith**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Assumptions](#assumptions)
1. [Development Specs](#development-specs)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
With Stitch Grid (working name) the user can design and save small motifs and repeats for color knitting. The user can click blocks, that represent knit stitches, in a grid, toggling between light and dark. Grids are saved in and retrieved from a database. A thumbnail view allows for instant identification of past grids saved.

Ultimately the application will be built and deployed as a native iOS app for iPhone and iPad. The initial proof of concept will be a React web application.

### Learning Objective


Minimum Viable Product Requirements
Toggle a grid block between two colors in response to a tap/click
Pre-defined grid size
Grid proportions
4 stitches per inch (horizontal scale)
5 rows per inch (vertical scale)
White background
Black foreground
Grey grid lines
Save a pattern to database
Date
Thumbnail
Retrieve pattern from database
Thumbnail view of saved patterns
Edit pattern and save to database
Date updated
Tools, Frameworks, Libraries, APIs, Modules and/or Other Resources to create MVP
React
Firebase
HTML5
CSS
Beyond MVP
Select colors
Background - when background color selection is changed, entire background is changed
Multiple foreground colors - when foreground color selection is changed, existing foreground blocks are retained; new instance of foreground selection is changed
Grid lines - when grid line color selection is changed, all grid lines are changed
User-defined grid size
Overall size
Grid proportions
Number of stitches per inch (horizontal scale)
Number of rows per inch (vertical scale)
Name pattern
Display pattern information
Name
Date last saved
Thumbnail
Port to iOS
Zoom and pan
Additional tools, frameworks, libraries, APIs, or other resources for extended functionality
React Native

Competitors/Existing Alternatives Currently on iOS App Store
I have researched several alternatives available on the iOS App Store and have not found any of the ones I downloaded and tried to be particularly easy to use. I currently use StitchSketch, which is very full-featured, but more complex than I would like.

Stitch Designer - $12.99
Targeted toward cross-stitch

StitchSketch - $7.99

Text2CrossStitch - $3.99
Targeted toward cross-stitch
Primarily for transforming text into cross-stitch pattern

PatternCraft - $3.99
Includes symbols as well as colors

Knitting Chart - Free

knitCompanion - Free



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
