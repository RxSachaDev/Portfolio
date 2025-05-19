# Étape 1 : build des dépendances
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Étape 2 : image pour le dev server Vite
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY . .

CMD ["npm", "run", "dev"]
