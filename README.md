# MERN Stack Template

<img src='https://github.com/belferink1996/MERN-template/blob/images/images/mern.jpeg' alt='MERN banner' width='700' />

- **M** = [MongoDB](https://www.mongodb.com)
- **E** = [Express.js](https://expressjs.com)
- **R** = [React.js](https://reactjs.org)
- **N** = [Node.js](https://nodejs.org)

<br />
<br />

# What is this template?

This template allows you to quick-start your Fullstack application using the MERN stack, it has a server setup with some basic authentication, and a client ready to communicate with the backend.<br />
I have attempted to use the best practices for both ends, which should make it easy for any advanced/new developer to use, and perhaps learn from.

<img src='https://github.com/belferink1996/MERN-template/blob/images/images/Screen%20Shot%202021-09-29%20at%2011.08.23.png' width='700' />

<br />
<br />

# How to use this template

[📀 Demo video](https://youtu.be/N2pvvkyoS68)

### STEP 1:

Click ["Use this template"](https://github.com/belferink1996/MERN-template/generate) to generate a
new repository.<br />
Then open your terminal and clone your repository:

> cd ~/Desktop <br />
> git clone https://github.com/[your-user-name]/[your-repo-name].git

<br />

### STEP 2:

Go to the root of your repository's folder, and install all dependecies:

> cd ~/Desktop/[your-repo-name]<br />
> npm install

<br />

### STEP 3:

Prepare your MongoDB database ([atlas](https://www.mongodb.com/cloud/atlas),
[community](<https://github.com/belferink1996/MERN-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)).<br />
Then configure your database within `server/constants/index.js`, by configuring the `MONGO_URI` variable.

<br />

### STEP 4: CODE !!!

<br />
<br />

### To run the client and/or the server, you can do any of the following:

#### Short Method

From the root of your project run:
> npm start

#### Long Method

Open terminal #1 (backend)
> cd ./server<br />
> npm start

Open terminal #2 (frontend)
> cd ./client<br />
> npm start