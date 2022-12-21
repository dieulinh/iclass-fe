FROM node:16 as build-stage

ENV APP_HOME=/usr/src/app

RUN mkdir -p $APP_HOME


WORKDIR $APP_HOME
COPY package.json  $APP_HOME
COPY yarn.lock $APP_HOME

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

ENV NODE_ENV=production

COPY . $APP_HOME

RUN yarn generate

# Production Stage
FROM nginx:stable-alpine as production-stage

ENV APP_HOME=/usr/src/app

COPY --from=build-stage $APP_HOME/dist /usr/share/nginx/html

RUN chown nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
