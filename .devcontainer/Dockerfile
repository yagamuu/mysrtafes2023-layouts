# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"

USER node
WORKDIR /home/node/app
RUN npm i -g nodecg-cli && \
    nodecg setup

RUN nodecg install yagamuu/nodecg-speedcontrol && \
    nodecg install cma2819/nodecg-twitter-widget && \
    nodecg install cma2819/nodecg-spotify-widget

WORKDIR /home/node/app/bundles/mysrtafes2023-layouts
COPY ../ /home/node/app/bundles/mysrtafes2023-layouts/
RUN npm i

WORKDIR /home/node/app

EXPOSE 9090 3000

CMD ["nodecg", "start"]