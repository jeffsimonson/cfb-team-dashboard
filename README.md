# cfb-team-dashboard

# College Football Team Dashboard

I love football – especially college football. I wanted to do a React project that involved consuming an REST Service API. I stumbled across an interesting API called College Football Data API. When I examined the available data sources, I got the idea of constructing a dashboard that would consolidate some of the data by a selected team. There was so much more data available that I could have included, but I choose the information that I think is most relevant when I want to know more about a particular team. So, I chose to include tables for general team information, results/schedules, conference standings, roster, and recruiting. I thoroughly enjoyed working on this project.

For HTTP requests, I used the Axios JavaScript library. I used Material-UI for the team and year selectors. For code demonstration purposes, I mainly used stateless functional components. But the App component is a conventional class component. This project did not require a whole lot of state management, so I chose not to use Redux in this case, Instead, I used React Hooks and passed state information to child components as props.

The project was rather straightforward from a design and development perspective. By far the most challenging aspect of it was working with the JSON data that the API returned. In some cases, there was no direct linking fields between the team and other information related to that team. For instance, there was no common ID between a given team and its venue information. To connect them, I had to use a third table of historical games to find the venue id of the home team when the home team was the selected team. This really put my skills of using JavaScript array functions and asynchronous calls to the test. But, it was a lot of fun seeing it all come together.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
