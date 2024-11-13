FROM node:20
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Elimina ENV PORT=${PORT}
EXPOSE 3000  # Coloca un puerto predeterminado para exponer en la imagen

CMD ["node", "index.js"]
