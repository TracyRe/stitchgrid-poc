# _Stitch Grid_

#### Epicodus Capstone Project

_Published_ **May 3 2019**<br>
_Author_ **Tracy Reith**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Assumptions](#assumptions)
1. [Competitive Analysis](#competitive-analysis)
1. [Development Plan](#development-plan)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
With Stitch Grid (working name) the user can design and save small motifs and repeats for color knitting. The user can click blocks, that represent knit stitches, in a grid, toggling between light and dark. Grids are saved in and retrieved from a database. A thumbnail view allows for instant identification of past grids saved.

Ultimately the application will be built and deployed as a native iOS app for iPhone and iPad. The initial proof of concept will be a React web application with limited functionality.

### Learning Objective
Create a React project from scratch, integrate with a database (Firebase).

### Target Audience/Users
* Me - I am making this primarily for personal use
* Knitters who do color knitting of small repeats, e.g. Fair Isle
* Cross stitchers
* Beaders

### User Stories
#### MVP - Phase 1
**As a** knitter,<br>
**I want** to toggle stitch blocks on and off with a single tap,<br>
**So that** I can quickly try ideas for color patterns.

**As a** knitter,<br>
**I want** the application to automatically save my actions,<br>
**So that** I can retrieve my design at a later time.

**As a** knitter,<br>
**I want** the application to display thumbnail views of saved designs,<br>
**So that** I can select the desired design at a later time.

**As a** knitter,<br>
**I want** to retrieve an existing design,<br>
**So that** I can make changes to it.

#### Phase 3
**As a** knitter,<br>
**I want** to choose my own color for the foreground color,<br>
**So that** my design is close to the actual yarn color I intend to use.

**As a** knitter,<br>
**I want** to choose my own color for the background color,<br>
**So that** my design is close to the actual yarn color I intend to use.

**As a** knitter,<br>
**I want** to choose my own color for the grid lines color,<br>
**So that** there's enough contrast that I can distinguish between blocks in the grid.

**As a** knitter,<br>
**I want** to specify grid size,<br>
**So that** I have a large enough grid for the size of design I am planning.

**As a** knitter,<br>
**I want** to specify stitch and row scale,<br>
**So that** the stitch and row scale is an accurate representation of my stitch gauge.

**As a** knitter,<br>
**I want** to name my design,<br>
**So that** I have another reference besides the thumbnail when I retrieve it.

### Wireframe - MVP Mobile App
![MVP - Mobile Layout](./support/iphone-mvp.png?raw=true "MVP - Mobile Layout")

### Component Structure
![Component Structure](./support/component-structure.png?raw=true "Component Structure")

### Product Requirements
#### Minimum Viable Product - Phase 1
* Toggle a grid block between two colors in response to a tap/click
* Pre-defined grid size
* Grid proportions
 * 4 stitches per inch (horizontal scale)
 * 5 rows per inch (vertical scale)
* Pre-defined grid colors
 * White background
 * Black foreground
 * Grey grid lines
* Automatically save a pattern to database
 * Date
 * Thumbnail
* Retrieve pattern from database
 * Thumbnail view of saved patterns
* Edit pattern and save to database
 * Date updated

#### Phase 2
Port to iOS with React native

#### Phase 3
* User selected colors
 * Background - when background color selection is changed, entire background is changed
 * Multiple foreground colors - when foreground color  selection is changed, existing foreground blocks are  retained; new instance of foreground selection is changed
 * Grid lines - when grid line color selection is changed, all grid lines are changed
* User-defined grid size
 * Overall size
* Grid proportions
 * Number of stitches per inch (horizontal scale)
 * Number of rows per inch (vertical scale)
* Name pattern
* Display pattern information
 * Name
 * Date last saved
 * Thumbnail

### Non-technical Requirements
* The application should be easy to use without instruction.
* The application should minimize the number of controls required to function.

### Competitive Analysis
#### Currently on iOS App Store
I have researched several alternatives available on the iOS App Store and have not found any of the ones I downloaded and tried to be particularly easy to use. I currently use StitchSketch, which is very full-featured, but more complex than I would like.

**Stitch Designer** - $12.99
Targeted toward cross-stitch

**StitchSketch** - $7.99
Biggest drawback is an explicit save function, contradicting mobile conventions. If you forget to tap the save icon, you lose what you've created. Includes a wide range of stitch symbols and colors.

**Text2CrossStitch** - $3.99
Targeted toward cross-stitch
Primarily for transforming text into cross-stitch pattern.

**PatternCraft** - $3.99
Includes stitch symbols as well as colors.

**Knitting Chart** - Free for basic version, $2.99 for all features
This actually is rather nice, simpler than StitchSketch, and I probably would have downloaded it if I had found it before I found StitchSketch.


### Development Plan
1. ~~Toggle foreground / background color of single block~~  _DONE_
1. ~~Generate grid array, with blocks with local state~~ _DONE_
1. Generate and save multiple grid arrays in application state, return list of multiple grids
1. Refactor to keep grids in Local Storage
1. Refactor to Redux
1. Instantiate Firebase and refactor to store grids in database

### Installation
* Clone from https://github.com/TracyRe/stitchgrid-poc.git
* Run `$ npm install`

### Known Bugs
* I don't know how to act on something that is in a different component

### Technologies Used
* React
* Firebase

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Tracy Reith
