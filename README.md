## Welcome to Kittl's frontend assignment!

This project was created with:

- [Create React App](https://github.com/facebook/create-react-app)
- [Storybook](https://storybook.js.org/)

Consider checking these links before starting the assignment:

- [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)
- [Storybook Guides](https://www.learnstorybook.com/)

# Assignment

The assignment consists of two parts:

- Implementing a simple React button component
- Implementing an arch transformation for an svg path/group

<br />

# Part 1

Implement a `Button` component and a set of `Storybook` stories that reflect
its different possible states.

<img alt="image" src="https://user-images.githubusercontent.com/67847653/155375518-871132e0-1016-4b5e-97a9-f6ca017dda44.png">

Consider taking a look at our [Figma](https://figma.com) [design file](.resources/Assignment.fig) to be able to inspect the component styles carefully.

> You'll need to download the design file and open it in figma, see [this help page](https://help.figma.com/hc/en-us/articles/360041003114-Import-files-into-Figma#Drag_and_Drop_Files) for more info.

Pointers provided below are just a guidance, feel free to rename/add/remove properties and create separate components (e.g. `IconButton`) as you see fit.

`Button` component may have following properties:

- `text` The text displayed on the button
- `icon` Some buttons have an icon
- `disabled` (default: false) If the button is disabled
- `theme` A property to determine the theme (styling) of the button
- `caret` If the button shows a caret to its right, or not

## Suggestions

- Styles should be as flexible and reusable as possible.
- Add a set of presets for styling as you see fit. For example:

  - `Primary Button`
  - `Secondary Button`

## Resources

- [Design File](.resources/Assignment.fig)
- [Inter Font](https://fonts.google.com/specimen/Inter) <br/>

## Evaluation

Part 1 will be evaluated on the following criteria:

- Buttons match the provided design (colors, sizes, etc.)
- Main states can be viewed/tested in Storybook

# Part 2

Implement an Arch Transformation for the [provided svg file](.resources/sampleText.svg).

<img width="936" alt="image" src="https://user-images.githubusercontent.com/577316/89522590-c02cdb00-d7e1-11ea-9a2a-bb3088caa71b.png">

<img width="936" alt="Animated example" src="./.resources/ArchAnimated.gif">

Create a simple UI with the rendered `svg` image and a slider beneath to control the strength of the Arch effect (like on the image above).

You can create it as a react component with a story that demonstrates how it works. <br />

## Useful links

### [paper.js](http://paperjs.org)

### [warpjs](https://github.com/benjamminf/warpjs)

Check [this example](https://codepen.io/benjamminf/pen/NpZLeb) for warpjs.

## Evaluation

Part 2 will be evaluated on the following criteria:

- Performance is acceptable (the delay between moving a slider and transformation is barely noticeable)
- Moving the slider produces consistent results; image doesn't degrade after moving a slider multiple times
- Transform resembles the provided example
- Thought process is explained / documented, including implementation details (e.g. if you chose to use a hard-coded number somewhere, explain why)

# General Requirements

- The assignment should be completed in TypeScript using React.
- Please work on a separate branch and [submit a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for review.
- Ensure that Storybook builds sucessfully and `chromatic` build step doesn't fail.

# Important Scripts

In the project directory, you can run:

### `yarn` or `npm i`

To install dependencies, (you'll need [yarn](https://yarnpkg.com/) installed). Feel free to use `npm` instead of `yarn` if you wish.

### `yarn start` or `npm start`

Will run Storybook on your computer.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

# Other Scripts

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) and this [storybook guide](https://www.learnstorybook.com/intro-to-storybook/react/en/test/) about testing UI components for more information.
