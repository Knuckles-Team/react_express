FROM node:latest AS node
ARG APPLICATION="test"
ARG HOST=0.0.0.0
ARG PORT=5173
ENV APPLICATION=$APPLICATION
ENV HOST=$HOST
ENV PORT=$PORT
RUN npm i pg react-scripts

FROM node AS react
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD [ "node", "index.js" ]
