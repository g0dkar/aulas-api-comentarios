FROM node:17

EXPOSE 3000

COPY ./package.json /
COPY ./package-lock.json /
COPY ./bin /
COPY ./routes /
COPY ./persistencia /
COPY ./node_modules /
COPY ./app.js /

# RUN [ "npm", "install" ]

CMD [ "npm", "start" ]
