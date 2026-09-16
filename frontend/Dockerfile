FROM node:22-alpine

WORKDIR /app

COPY Proj-Baber/package*.json ./
RUN npm install

COPY Proj-Baber/ .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
