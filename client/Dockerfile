FROM node:16
EXPOSE 3000
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY ./package*.json /app/
COPY public /app/public
COPY src /app/src

RUN npm install -g react-scripts
RUN npm install --dev typescript && npm install

CMD ["npm", "start"]
