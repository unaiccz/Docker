FROM node
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
EXPOSE 3000
CMD ["node", "/usr/src/app/index.js"]