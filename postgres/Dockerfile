FROM postgres:9.6
LABEL maintainer "george.codattudoran@gmail.com"
EXPOSE 5432

COPY seed.sql /docker-entrypoint-initdb.d/
VOLUME /var/lib/postgresql/data