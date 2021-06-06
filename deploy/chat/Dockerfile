FROM node:16 as base

WORKDIR /srv/app

COPY services/package.json .

RUN yarn install

COPY services/ ./

RUN yarn build chat

# ENTRYPOINT [ "/bin/sh" ]

# RUN cd ./services && nest build user

FROM base as dev

WORKDIR /app

COPY services/nest-cli.json \
    services/tsconfig.* \
    #  .eslintrc.js \
    #  .prettierrc \
    ./

COPY --from=base /srv/app/package.json .
# # get the dist back
COPY --from=base /srv/app/dist/apps/chat .
# # get the node_modules from the intial cache
COPY --from=base /srv/app/node_modules/ ./node_modules
# # expose application port 
EXPOSE 3000
# ENTRYPOINT [ "/bin/sh" ]
CMD  ["node" , "main.js" ]