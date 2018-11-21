FROM node:10

WORKDIR /usr/src/Coconut

COPY package*.json ./

RUN chmod 775 -R /usr/src/Coconut

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]