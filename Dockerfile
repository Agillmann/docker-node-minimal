# ---- Node container ----

FROM node
WORKDIR /app
RUN npm init -y
RUN npm i pm2 -g
RUN npm i express mongoose 
COPY app .
VOLUME /app
CMD ["pm2-runtime", "server.js"]
