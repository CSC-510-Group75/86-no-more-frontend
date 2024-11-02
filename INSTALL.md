# :rocket: Installation Guide
 
 - Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows) - Version: 18.17.1
 - Download and install [NodeJs](https://nodejs.org/en/download/) - Version: 7.0.2
 - Download the Allow CORS: Access-Control-Allow-Origin extension for Google Chrome - Version: 2.8.5
 - In the command prompt clone the frontend project using following commands:
## `git clone https://github.com/nitin-dhevar/86-no-more-frontend`
## `git clone https://github.com/nitin-dhevar/86-no-more-backend`
- Then enter 'npm-install' 
 to install all the required dependencies in both the terminals. The dependencies have been mentioned in the 'package.json' file. If you want to check newer versions of dependencies use
## `npm-check-updates`
 - Then enter below command for both the terminals to start the application:
## `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run test cases enter below commands
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17\
npm run test

## 💻 To test Code Coverage
npm test -- --coverage 
