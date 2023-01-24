FROM node:latest AS node
ARG APPLICATION="test"
ARG HOST=0.0.0.0
ARG PORT=5173
ENV APPLICATION=$APPLICATION
ENV HOST=$HOST
ENV PORT=$PORT

FROM node AS react
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "start" ]

# FROM ubuntu:latest AS ubuntu_gemini
# RUN apt update && apt upgrade -y && apt install DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC -y curl wget nano vim dos2unix build-essential gcc
# RUN curl -sL https://deb.nodesource.com/setup_19.x | bash -
# RUN apt update && apt install -y nodejs
# RUN npx degit sveltejs/template ./
# RUN npm install
# FROM ubuntu_gemini as gemini
# WORKDIR /app
# COPY . .
# ENTRYPOINT ["npm run start"]