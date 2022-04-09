FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY . .
RUN npm install
RUN yarn install
RUN chown -R app /opt/app
USER app
EXPOSE 3000
CMD [ "yarn", "run", "dev" ]