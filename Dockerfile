# Dockerfile for Node.js
ARG NODE_VERSION=8.11-slim
FROM node:$NODE_VERSION

WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

# Exponer el puerto en el que corre tu aplicación Node.js
EXPOSE 5000

CMD ["node", "app.js"]
