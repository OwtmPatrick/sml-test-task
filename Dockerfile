FROM node:16-alpine

EXPOSE 3000

WORKDIR /react-vite-app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]