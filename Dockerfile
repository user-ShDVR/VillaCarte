FROM node:18-alpine
WORKDIR /app
ENV NEXT_PUBLIC_ENV_VARIABLE="https://store.villacartetest.com"
ENV REACT_APP_URL="https://villacartetest.com/"
COPY . .
RUN npm cache clean --force
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
