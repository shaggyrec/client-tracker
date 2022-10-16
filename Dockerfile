FROM node:16

WORKDIR /app

ADD src ./src
ADD package.json ./
ADD package-lock.json ./
ADD tsconfig.json ./

RUN npm i && npm run clean && npm run build && npm run browserify:client