# TITLE

Affiliapps


## Getting Started


## Project Structure
```
- environments
    - environments.prod.ts
    - environments.ts
- node_modules
- src
    - routes
        - app.routes.ts
    - user
        - user.controller.ts
        - user.model.ts
        - user.routes.ts
    - app.ts
    - server.ts
- .gitignore
- packages.json
- README.md
- tsconfig.json
```
### Prerequisites
Install nodejs

Install TypeScript and TypeScript Node

```
npm install -g typescript ts-node

```
#### Create MongoDB mblab
https://mlab.com/ or localhost mongodb

#### Change envoriment file


environments.ts example:
```
export const environment = {
    production: false,
    username: 'test',
    password: 'password123',
    secret: 'secret123',
    mongodb: '@ds241530.mlab.com:port/dbname'
};

```


## Install 
```
git clone git@github.com:iam-dev/affiliaps-nodejs-software.git
cd nodejs-api-typescript
npm install
```

## Build Typescript files
```
npm run build
```


## Run

Run in development mode
```
npm run dev
```

Run in production mode
```
npm run prod
```

# API

## User
- http://localhost:3000/api/v1/user (GET) - to return all users
- http://localhost:3000/api/v1/user (POST) - to add a new user 
- http://localhost:3000/api/v1/user/{usertId} (GET) - to return a specific user when given userId
- http://localhost:3000/api/v1/user/{usertId} (PUT) - to update a specific user when given userId
- http://localhost:3000/api/v1/user/{usertId} (DELETE) - to remove a specific user when given userId
- http://localhost:3000/api/v1/user/{username} (GET) - to return a specific user when given username



# Testing

The default URL is: http://localhost:3000

GET all users
Send GET request to http://localhost:3000/api/v1/user/


