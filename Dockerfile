FROM node:10.14

RUN npm install -g yarn

WORKDIR /app

COPY . /app

RUN yarn install

CMD yarn build