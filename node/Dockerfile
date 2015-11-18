FROM node:latest

COPY . /www

WORKDIR /www

RUN npm install

EXPOSE 4444

CMD ["node", "index.js"]
