FROM node:18 AS build
RUN mkdir -p /app

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/<equinorte-front> /usr/share/nginx/html
EXPOSE 80
