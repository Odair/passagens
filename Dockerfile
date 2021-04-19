FROM node:alpine

WORKDIR /usr/src/app/

COPY package.json /usr/src/app/

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 5001

CMD ["npm","start"]