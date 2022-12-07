FROM node:latest

WORKDIR /backend

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 3001

CMD ["npm", "start"]