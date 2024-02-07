FROM node:20.11

WORKDIR /json-server

RUN npm install -g npm

RUN npm install -g json-server

COPY ./db.json /json-server

CMD ["json-server", "-p", "80", "-w", "/json-server/db.json"]
