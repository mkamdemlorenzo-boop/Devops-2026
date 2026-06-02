# STAGE 1 : Préparation
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js ./

# STAGE 2 : Exécution finale
FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/server.js ./

USER node
ENV PING_LISTEN_PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]