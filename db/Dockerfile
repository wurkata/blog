FROM postgres:12.4 

COPY ./init/init_blog_db.sh /docker-entrypoint-initdb.d/init_blog_db.sh

CMD ["postgres"]

