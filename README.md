# Trains! Choo! Choo!

Classroom Manager is an SPA that allows users to effectively manage data relating to trains. Once a user has successfully registered for an account and logged in, they will be given access to a platform that allows them to see trains, add new trains, update existing trains, and remove trains.

# Setup

## Install
To install npm pacakges: `npm run install:all`

## .env
Create a .env file inside the `server` folder with the following variables:  
`DATABASE_URL` containing the postgress database connection string to your local database  
`JWT` containing the secret string for creating Json Web Tokens

## Create and Seed Database
`npm run seed` will run the prisma migrations as well as `server/seed.js` to populate the database with initial data.

## During development
Use `npm run dev` during development to start a development server for the client. This uses an npm package called `concurrently` to simultaneosly run the client and the server on your local machine. Changes to files will be watched and the server will automatically restart when changes are made.


# 34B Workshop: Registering Users

_Add_ the option for users to register themselves as a new user.

## Suggestions

Here are some suggestions for what to work on:

- Frontend components are updated to include a "Register as new User" option.
- Registering a new user will send a request to the `auth/register` endpoint which should add the new user to the database and return a token.
- The client still receives a token from the server after a user is successfully authenticated, whether they have signed in or newly registered.
