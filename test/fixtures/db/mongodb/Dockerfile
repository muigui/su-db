FROM ubuntu:14.04.1

RUN mkdir -p /data/db \
 && chmod -R 0755 /data

# Add the mongodb PGP key to verify their Debian packages.
# It should be the same key as http://docs.mongodb.org/10gen-gpg-key.asc
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

RUN apt-get update \
 && apt-get install --force-yes -f -y mongodb-org

EXPOSE 27017

ENTRYPOINT  ["/usr/bin/mongod"]
