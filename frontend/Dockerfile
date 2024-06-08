# Build the application
FROM node:22.2.0-alpine3.20@sha256:8dec302f1453d78d629291dda2a0782506c4d62691de1d13e43e287fffe4387e as builder

WORKDIR /app
RUN chown -R node:node /app

USER node
ARG API_BASE_URL

COPY --chown=node:node package.json package-lock.json .
RUN npm ci

COPY --chown=node:node public ./public
COPY --chown=node:node src ./src

RUN REACT_APP_API_URL=${API_BASE_URL} \ 
    npm run build

# Take the build dir and run it 
FROM nginxinc/nginx-unprivileged:alpine3.19-perl@sha256:76c189fe55e590d223410303c307df63dd1af5071ea4a66400bd5aa79bc50680 as runner

USER nginx

COPY --chown=nginx:nginx nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /app/build /usr/share/nginx/html
