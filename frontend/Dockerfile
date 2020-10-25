FROM nginx:1.19.3-alpine

WORKDIR /app

RUN apk add --update npm

COPY package.json package.json

RUN npm install

COPY config config
COPY extensions extensions
COPY api api
COPY public public

RUN npm run build

# ----------------------------------------
# SETUP NGINX
# ----------------------------------------
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

COPY quick-start.sh quick-start.sh
RUN ["chmod", "+x", "quick-start.sh"]

ENTRYPOINT ["sh", "quick-start.sh"]
