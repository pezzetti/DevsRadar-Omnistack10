FROM node:10.16-alpine

RUN addgroup -S nupp && adduser -S -g nupp nupp

ENV HOME=/home/nupp
ENV NODE_ENV = development
WORKDIR ${HOME}/app
ENV NODE_PATH=.

COPY ["./*", "${HOME}/app/"]

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init

RUN chown -R nupp:nupp ${HOME}/* /usr/local/ && \
    chmod +x /usr/local/bin/dumb-init && \    
    npm cache verify && \
    npm install --silent --progress=false  && \
    chown -R nupp:nupp ${HOME}/*


USER nupp

EXPOSE 3333

CMD ["dumb-init", "npm", "run", "start"]
