# MERN Stack Template

<img src='https://github.com/belferink1996/MERN-template/blob/images/images/mern.jpeg' alt='MERN banner' width='700' />

- **M** = [MongoDB](https://www.mongodb.com)
- **E** = [Express.js](https://expressjs.com)
- **R** = [React.js](https://reactjs.org)
- **N** = [Node.js](https://nodejs.org)

<br />
<br />

## How to use this template

Here is a [demonstration video](https://youtu.be/e81rqD94QtM) of the following steps.

<br />

### STEP 1:

Click ["Use this template"](https://github.com/belferink1996/MERN-template/generate) to generate a new repository.<br />
Then open your terminal and clone your repository:

> cd ~/Desktop <br />
> git clone https://github.com/[your-user-name]/[your-repo-name].git

<br />

### STEP 2:

Go to your client folder (frontend), and set your workspace:

> cd ~/Desktop/[your-repo-name]/client <br />
> npm install <br />
> npm start

```
We're unable to detect target browsers.
Would you like to add the defaults to your package.json? (Y/n)
```

> Y

<br />

### STEP 3:

Prepare your MongoDB database ([atlas](https://www.mongodb.com/cloud/atlas), [community](<https://github.com/belferink1996/MERN-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)),<br />
then go to your server folder (backend), and set your workspace:

> cd ~/Desktop/[your-repo-name]/server <br />
> npm install <br />

Set your database within `index.js`, then start server:

> npm start

<br />

### STEP 4: CODE !!!

<br />
<br />

# Node dependecies & versions:

###### Client:

> axios: ^0.21.0 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Use the API<br />
> react: ^17.0.1 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; UI framework<br />
> react-dom: ^17.0.1 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; UI framework<br />
> react-scripts: ^4.0.1 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Quickly launch local service

###### Server:

> cors: ^2.8.5 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Enable HTTP requests<br/>
> dotenv: ^8.2.0 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Secure sensitive information<br />
> express: ^4.17.1 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Server app<br />
> mongoose: ^5.11.8 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; MongoDB database<br />
> nodemon: ^2.0.6 &nbsp;&nbsp;&nbsp; ---> &nbsp;&nbsp;&nbsp; Improved local service
