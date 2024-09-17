FROM node
RUN mkdir -p /home/app
WORKDIR /home/app
EXPOSE 3000
CMD ["node", "/usr/src/app/index.js"]