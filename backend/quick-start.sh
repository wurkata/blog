#/bin/sh

export NODE_ENV=production
npm start &

nginx -g "daemon off;"
