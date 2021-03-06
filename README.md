# An example Actionhero project that uses tasks

![Node.js CI](https://github.com/actionhero/example-with-tasks-and-resque-ui/workflows/Node.js%20CI/badge.svg)

This project contains:

- A recurring task that runs every 10 seconds, and then enqueues a few more tasks to run.
- The `ah-resque-ui` plugin that will let you watch the status of this task at `http://localhost:8080/resque`

_visit www.actionherojs.com for more information_

## To install:

(assuming you have [node](http://nodejs.org/), [TypeScript](https://www.typescriptlang.org/), and NPM installed)

`npm install`

## To Run:

`npm run dev`

## To Test:

`npm test`
