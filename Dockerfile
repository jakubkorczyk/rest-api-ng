FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run compile
RUN npm prune --production
RUN rm -rf src
RUN mv ./dist/src/* ./

EXPOSE 8100

CMD ["/bin/bash", "-c", "node ./index.js"]
