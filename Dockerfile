FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV SERVICE_PORT=9952
ENV API_VERSION_LTS=0.1


EXPOSE ${SERVICE_PORT}
CMD ["node", "app.js"]

