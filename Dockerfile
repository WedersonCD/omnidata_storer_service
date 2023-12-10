FROM node:20-alpine
WORKDIR /usr/src/omnidata_storer_service
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .

ENV SERVICE_PORT=9952
ENV API_VERSION_LTS=0
ENV MONGO_URI=mongodb://mongo:27017/omnidata
ENV PATH /usr/src/omnidata_storer_service/node_modules/.bin:$PATH

EXPOSE ${SERVICE_PORT}
CMD ["nodemon", "src/app.js"]

