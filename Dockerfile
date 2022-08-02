FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 5100 5300

CMD ["node","index.js"]
