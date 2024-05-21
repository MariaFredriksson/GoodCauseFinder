# Good Cause Finder

## Description

Good Cause Finder is a web application that makes it easier for people to find and support aid projects that resonate with their passions. By gathering projects from different organizations on one platform, users can filter projects based on themes to find suitable ones to support. The application is designed for anyone who wants to make a positive difference and contribute to global sustainable development. The web-application offers a simple and user-friendly design for filtering, and reading project information. Users can easily make a donation by clicking on a button to visit the individual project pages.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application is built using React and utilizes React Router for client-side routing. It provides a responsive and user-friendly interface, making it easy for users to navigate and explore the content.

## Useful links
- Front-end repository: [Good Cause Finder](https://github.com/upend0/GoodCauseFinder)
- Back-end repository: [Good Cause Finder Server](https://github.com/upend0/GoodCauseFinderServer)
- Video demonstration: [Good Cause Finder Video](https://www.loom.com/share/1dc1c8b943e14ae3ac55bd124210be5a)
- Wiki: [Good Cause Finder Wiki](https://gitlab.lnu.se/1dv613/student/mf223wk/project/-/wikis/home)
- Deployed application (no longer active): [Good Cause Finder](https://cscloud7-221.lnu.se/good-cause-finder/)

## Installation

1. Clone the repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd good-cause-finder`
3. Install the dependencies: `npm install`

## Usage

1. Start the application: `npm start`
2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Deploying

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Routes

- `/`: The home page of the application.
- `/projects`: Displays a list of projects.
- `/projects/:id`: Displays details about a specific project.
- `/organizations`: Displays a list of organizations.
- `/organizations/:id`: Displays details about a specific organization.
- `/*`: If the requested route does not match any of the above, the user is redirected to the not found page.

## Dependencies

- React
- React Router
- Bootstrap

## Contact

For any inquiries or suggestions, please contact Maria Fredriksson at [mf223wk@student.lnu.se](mailto:mf223wk@student.lnu.se).
