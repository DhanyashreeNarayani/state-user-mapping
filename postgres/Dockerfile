# Use the official PostgreSQL image as a parent image
FROM postgres:13

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=geodata
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_HOST_AUTH_METHOD=md5

# Expose the default PostgreSQL port (5432)
EXPOSE 5432

RUN apt-get update && apt-get install -y postgis   && apt-get install postgresql-13-postgis-3 -y


COPY init.sql /docker-entrypoint-initdb.d/
