FROM node:16-slim
WORKDIR /app
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "dev"]
