Darkroom Cloud Application

This project is a cloud-deployed photo gallery application built with Node.js, Express, MongoDB, and EJS. The repo was extended to support cloud deployment pipelines, testing, and CI/CD integrations with Jenkins, Render, and Slack.

Milestones
Milestone 1: Set Up

Forked and cloned the starter repo.

Configured MongoDB Atlas cluster and created a database user.

Updated _config.js with the Atlas URI (mongodb+srv://...) replacing <USERNAME> and <PASSWORD>.

Confirmed successful connection from server.js to Atlas.

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

Created Slack channel: <YourName>_IP1.

Configured Jenkins Slack plugin with a Slack Webhook.

Updated pipeline so successful builds send a Slack message containing:

Jenkins build ID

Render deployment link (via env variable)

Updated the landing page to display “MILESTONE 2”, “MILESTONE 3”, and “MILESTONE 4”.

Recent Fixes

MongoDB Authentication Issue: Updated Atlas URI to properly encode the password (@ → %40).

Config Debugging: Ensured process.env.NODE_ENV is set correctly on Render, and added logging in server.js to confirm the right URI is loaded.

Deployment is automated via Jenkins pipeline.

On successful build, application is deployed to Render at:
🔗 [Live Render App](https://gallery-j9wd.onrender.com/)

Slack channel.
🔗 [Join Slack Channel](https://join.slack.com/share/enQtOTU5MDI0MTUwNDAwMC04N2IzMzdkNzIyZDdjOTdmMDdmOTUwMGY5NWQ2YWQ3YmE3YzM2ZDE2MzA2ZDgzYjk0MDIyMGM4ZDA2ODgzZjYy?entry_point=default_oauth)