# 🌌 Darkroom Cloud Application

This project is a **cloud-deployed photo gallery** built with  
**Node.js**, **Express**, **MongoDB**, and **EJS**.  
It supports cloud deployment pipelines, testing, and CI/CD integrations with **Jenkins**, **Render**, and **Slack**.

---

## 🚀 Milestone 1: Set Up
- Forked and cloned the starter repo.  
- Configured **MongoDB Atlas cluster** and created a database user.  
 

---

## 🔧 Milestone 2: Basic Pipeline
- Created a `Jenkinsfile` for automated CI/CD.  
- Pipeline installs dependencies (`npm install`), builds, and deploys to **Render**.  
- Configured **auto-trigger** on push events.  
- Updated landing page with “MILESTONE 2” text, deployed live.  

![alt text](public/images/pipeline.png)

## 🧪 Milestone 3: Tests
- Discovered tests on the `test` branch → merged into `main`.  
- Updated `Jenkinsfile` to run `npm test` before deploying.  
- Configured **Jenkins email notifications** if tests fail.  
- Updated landing page to display:  
  - “MILESTONE 2”  
  - “MILESTONE 3”  

---

## 💬 Milestone 4: Slack Integration
- Created a Slack channel.  
- Jenkins → Slack integration.  
- Notifications with build ID + Render link.  

![alt text](<public/images/slack oversight.png>)

## 🔧 Recent Fixes
- **MongoDB Authentication Issue** → updated Atlas URI to encode password (`@ → %40`).  
- **Config Debugging** → ensured `process.env.NODE_ENV` is set correctly on Render, added logging in `server.js`.  
- **Deployment** → automated via Jenkins pipeline.  

---
## Update 1
## 🔐 MongoDB Configuration & Security

To keep the MongoDB credentials safe and out of the public repo, I moved all sensitive connection strings into a **secret environment variable** instead of hardcoding them into the `_config.js` file.

Originally, the `_config.js` contained direct connection URLs for development, production, and test environments. These have now been replaced with a **hidden variable** that Render manages securely.

### ⚙️ How It Works

- The app checks for a value in `process.env.MONGO_URI_PRODUCTION`.  
  If it’s set (for example, when deployed on Render), it connects using that URI.  
- If no environment variable is found, it falls back to the values defined in `_config.js` for local testing and development.  

  ```js
  const mongoURI = process.env.MONGO_URI_PRODUCTION || config.mongoURI[env];


## 🌍 Deployment
✅ On successful build, app is deployed to **Render**:


🔗 [Live Render App](https://gallery-j9wd.onrender.com/)



![alt text](<public/images/website render.png>)