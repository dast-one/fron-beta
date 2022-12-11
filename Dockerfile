# FROM node:lts-slim
FROM node:16-slim

# node, uid=1000
USER node

WORKDIR /app

COPY --chown=node . /app
RUN npm update

EXPOSE 3000

CMD ["npm", "run", "dev"]
