FROM node:10.9.0-alpine
RUN mkdir -p /www
WORKDIR /www

COPY package.json /www

COPY . /www

RUN npm install\
    && npm install tsc -g

RUN tsc


CMD ["node", "dist/app.js"]
