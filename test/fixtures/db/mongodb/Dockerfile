FROM ubuntu:14.04.1

RUN apt-get update \
 && apt-get install -y mongodb-org

EXPOSE 27017

ENTRYPOINT  ["/usr/bin/mongod"]
