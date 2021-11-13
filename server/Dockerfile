FROM node:lts-alpine AS Builder

USER node:node

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY --chown=node:node . .

RUN npm run build


FROM node:lts-alpine

ENV NODE_ENV=production

USER node:node

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY --from=Builder /home/node/dist .

EXPOSE 8000 8000

CMD [ "node", "index.js" ]

