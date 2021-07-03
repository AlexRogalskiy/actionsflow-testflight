FROM actionsflow/act-environment:v1

ARG ACTIONSFLOW_VERSION=1.11.3
ARG ACT_VERSION=0.2.23

RUN if [ -z "$ACTIONSFLOW_VERSION" ] ; then echo "The ACTIONSFLOW_VERSION argument is missing!" ; exit 1; fi
RUN curl https://raw.githubusercontent.com/nektos/act/master/install.sh | bash -s $ACT_VERSION
RUN npm i -g actionsflow@${ACTIONSFLOW_VERSION}

WORKDIR /data

COPY workflows/ ./
COPY package*.json ./

## Installing project dependencies
RUN npm install

CMD ["actionsflow","start"]

EXPOSE 3000/tcp