FROM node:10.16-alpine

RUN addgroup -S nupp && adduser -S -g nupp nupp
ENV HOME=/home/nupp
WORKDIR ${HOME}/app
RUN mkdir -p /usr/src/app

COPY ["./*", "${HOME}/app/"]

COPY package*.json ${HOME}/app/
COPY app.json ${HOME}/app/

#RUN npm install -g expo-cli
RUN chown -R nupp:nupp ${HOME}/*
#RUN chown -R $USER:$GROUP ./expo/*

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD npm i -f && npm start