FROM node:latest AS node
ARG APPLICATION="test"
ARG HOST=0.0.0.0
ARG PORT=5173
ENV APPLICATION=$APPLICATION
ENV HOST=$HOST
ENV PORT=$PORT
RUN npm i @mui/material@5.10.5 @mui/x-data-grid@5.17.2 @mui/icons-material@5.10.3 @emotion/react@11.10.4 @emotion/styled@11.10.4 \
    react-router-dom@6 react-pro-sidebar@0.7.1 formik@2.2.9 yup@0.32.11 @fullcalendar/core@5.11.3 @fullcalendar/daygrid@5.11.3 \
    @fullcalendar/timegrid@5.11.3 @fullcalendar/list@5.11.3 @fullcalendar/react@5.11.2 @fullcalendar/interaction@5.11.3 @nivo/core@0.80.0 \
    @nivo/pie@0.80.0 @nivo/line@0.80.0 @nivo/bar@0.80.0 @nivo/geo@0.80.0 pg react-scripts

FROM node AS react
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
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