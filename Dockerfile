# FROM node:lts-slim
FROM node:16-slim

# node, uid=1000
USER node

WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "dev"]

COPY --chown=node . /app
RUN npm update

