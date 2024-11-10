FROM node:20
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
ENV PORT=${PORT}  # Carga el puerto desde el archivo .env
EXPOSE ${PORT}

CMD ["node", "index.js"]
