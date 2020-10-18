FROM alpine as builder

WORKDIR /app

RUN apk add --update npm

COPY ./package.json ./

RUN npm install

COPY ./config ./config
COPY ./extensions ./extensions
COPY ./api ./api
COPY ./public ./public

CMD ["npm", "run", "build"]


# -----------------------------
# Prod
# -----------------------------
FROM nginx:1.19.3
COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY bavitoi.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
