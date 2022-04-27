FROM node:17

EXPOSE 3000

COPY ./package.json /
COPY ./package-lock.json /
COPY ./src /
COPY ./public /

RUN ["npm", "install"]

CMD [ "npm", "start" ]
