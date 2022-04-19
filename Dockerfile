FROM node:12.13-alpine as node

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm  install
COPY . .

EXPOSE 80

CMD ["npm", "start"]

