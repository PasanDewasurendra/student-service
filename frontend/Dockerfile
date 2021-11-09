# setup base image 
FROM node:14-alpine

# setup working directory
WORKDIR /app

# setup environment path
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app

# install all dependancies
RUN npm install

# copy rest files
COPY . /app

# start app
CMD ["npm", "start"]