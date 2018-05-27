FROM node:8.9.3-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json package-lock.json ./

# RUN npm i

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
