FROM node:14-alpine
EXPOSE 3000
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY ./package*.json /app/
COPY public /app/public
COPY src /app/src

RUN npm i 

CMD ["npm", "start"]
