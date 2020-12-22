FROM node

WORKDIR /app/react-app
COPY package.json /app/react-app

RUN  npm config set registry https://registry.npmjs.com/

RUN npm install --force


COPY . /app/react-app

EXPOSE 8000