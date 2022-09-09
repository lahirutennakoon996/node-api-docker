FROM node:16.16.0

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . /usr/src/app

EXPOSE ${HTTP_PORT}

CMD ["node","index.js"]
