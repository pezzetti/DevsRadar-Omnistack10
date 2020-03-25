FROM node:12.13-alpine

RUN addgroup -S nupp && adduser -S -g nupp nupp

ENV HOME=/home/nupp
ENV NODE_ENV = development
ENV NODE_PATH=.
ENV PROXY_SECURE=disable

WORKDIR ${HOME}/app

COPY --chown=nupp:nupp package.json ${HOME}/app/
COPY --chown=nupp:nupp package-lock.json ${HOME}/app/
COPY . ${HOME}/app/

EXPOSE 3000

RUN \
    pwd && \
    ls -la && \   
    npm cache verify && \
    npm install --production

USER nupp
CMD npm start
