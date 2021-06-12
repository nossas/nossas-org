FROM node:14-alpine AS builder
ENV PORT 3003
ARG NODE_ENV
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_BONDE_API_GRAPHQL_URL
ARG BONDE_API_GRAPHQL_URL
ARG STRIPE_SECRET_KEY
ARG NEXT_PUBLIC_INCUBATIONS_WIDGET_ID
ARG NEXT_PUBLIC_INCUBATIONS_EN_WIDGET_ID
ARG NEXT_PUBLIC_MATERIALS_WIDGET_ID
ARG NEXT_PUBLIC_MATERIALS_EN_WIDGET_ID 
ARG NEXT_PUBLIC_DONATION_WIDGET_ID
ARG NEXT_PUBLIC_DONATION_EN_WIDGET_ID
ARG NEXT_PUBLIC_NEWSLETTER_WIDGET_ID
ARG NEXT_PUBLIC_NEWSLETTER_EN_WIDGET_ID

# USER node
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . /usr/src/app
RUN yarn build
EXPOSE 3003
CMD ["npm", "start"]
