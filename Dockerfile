# ---------- Build Phase ----------
FROM node:18 AS builder
WORKDIR /app

# Copy source files and install deps
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- NGINX Serve Phase ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default index page
RUN rm -rf ./*

# Copy build output from builder
COPY --from=builder /app/dist .   


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]