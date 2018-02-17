## Boilerplate-cms

The purpose of this repository is to easily generate keystone apps to my prefered stack.

The code was initially generated using yeoman from keystones own generator https://github.com/keystonejs/generator-keystone. I’ve added a babel node complier and docker deployment functionality. Please see my todos below on upcoming functionality. I plan to make a document outlining my decisions on the wiki.

## Running with docker

### Prerequisites

- Install docker and docker-compose https://docs.docker.com/install/

### Deploy

- Simply run `docker-compose up`

## Running locally

### Prerequisites

- Install node and npm https://nodejs.org/en/download/
- Install the apps global dependencies; `npm install -g yarn nodemon`
- Install mongodb https://docs.mongodb.com/getting-started/shell/installation/

### Deploy

- Run mongodb, depending on your operating system, it may be a different command, please see again the installation docs https://docs.mongodb.com/manual/installation/
- Navigate to the app and run `yarn` to install module dependencies
- Run `npm start` or `npm run dev` if you want to watch for file changes


## Forking this repo:

- Update the image names on the docker compose files to the app name.
- Comment out the dist file in the .gitignore file so that git can stage build code for production

### TODO

- Testing environment with mocha
- Decide whether to use typescript
