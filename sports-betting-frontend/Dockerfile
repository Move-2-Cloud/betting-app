# Build the application
FROM node:22-alpine as builder

COPY ./package.json .
COPY ./public ./public
COPY ./src ./src

RUN npm i && npm run build

# Take the build dir and run it 
FROM nginxinc/nginx-unprivileged:stable
COPY --chown=nginx:nginx ./nginx/default.conf /etc/nginx/conf.d/default.conf
USER nginx
COPY --chown=nginx:nginx --from=builder ./build /usr/share/nginx/html
