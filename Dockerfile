FROM node
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 500
ENTRYPOINT ["npm", "dist/app.js"]