FROM node:22.2.0-alpine3.20@sha256:8dec302f1453d78d629291dda2a0782506c4d62691de1d13e43e287fffe4387e

USER node
WORKDIR /app

COPY --chown=node:node package*.json ./
RUN npm i

COPY --chown=node:node /src ./src
COPY --chown=node:node server.js .
ENTRYPOINT npm start