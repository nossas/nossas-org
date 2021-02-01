FROM node:14-alpine AS builder
ENV PORT 3003
# ENV NODE_ENV production
# USER node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only-production
COPY . /usr/src/app
RUN npm run build
EXPOSE 3003
CMD ["npm", "start"]