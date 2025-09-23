Darkroom Cloud Application

This project is a cloud-deployed photo gallery application built with Node.js, Express, MongoDB, and EJS. The repo was extended to support cloud deployment pipelines, testing, and CI/CD integrations with Jenkins, Render, and Slack.

Milestones
Milestone 1: Set Up

Forked and cloned the starter repo.

Configured MongoDB Atlas cluster and created a database user.

Updated _config.js with the Atlas URI (mongodb+srv://...) replacing <USERNAME> and <PASSWORD>.

Confirmed successful connection from server.js to Atlas. Needs to be secured with secret files to keep credentials off _config.js file.

Milestone 2: Basic Pipeline

Created a Jenkinsfile for an automated CI/CD pipeline.

Pipeline installs dependencies (npm install), builds, and deploys to Render.

Configured auto-trigger on push events.

Updated the landing page with “MILESTONE 2” text, deployed live.

Milestone 3: Tests

Discovered tests on the test branch, merged them into main.

Updated Jenkinsfile to run npm test before deploying.

Configured Jenkins to send email notifications if tests fail.

Updated the landing page to display both “MILESTONE 2” and “MILESTONE 3”.

Milestone 4: Slack Integration

Created Slack channel. Ran into an issue with the Slack integration with the pipeline, needs more debbuging, for future use, so I reverted the Slack integration in the pipeline.

Render deployment link 

Updated the landing page to display “MILESTONE 2”, “MILESTONE 3”, and “MILESTONE 4”.

Recent Fixes

MongoDB Authentication Issue: Updated Atlas URI to properly encode the password (@ → %40). Also needs securing carrying over credentials without encryption is a liability of the app.

Config Debugging: Ensured process.env.NODE_ENV is set correctly on Render, and added logging in server.js to confirm the right URI is loaded.

Deployment is automated via Jenkins pipeline.

On successful build, application is deployed to Render at:
🔗 [Live Render App](https://gallery-j9wd.onrender.com/)

![alt text](public/images/pipeline.png)

![alt text](<public/images/website render.png>)