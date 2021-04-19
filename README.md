# RSL Website Development

A web app for RSL official site.


## RE:START KartRider League Season 2

https://rsl.tw

## WordPress

This directory is for the theme rsl-v1 local development only.

Just go to `/wordpress` and run `docker-compose up -d` to start a local server with the latest WP running.

Add the host settings to `/private/etc/hosts` to make local domain works.

```
127.0.0.1 rsl.local
::1 rsl.local
```

## Web

The main web app, built with Nuxt.js, deployed by Plesk Node.js extension.

Before running `yarn install`, you need to create `.npmrc` in `/web` and add the Font Awesome Pro configuration in it to pull the private packages from NPM.

Add this line at the end of `.npmrc` for Plesk to run the node commands normally.

```
scripts-prepend-node-path=true
```

Add additional deploy actions in Plesk Git setting:

```
cd web && PATH=/opt/plesk/node/12/bin/:$PATH; npm i -g yarn; yarn; yarn build:safe
touch web/tmp/restart.txt
```

### **Caution**

All of the assets of KartRider or brands in this project were reviewed and authorized by their companies, do not use them without authorization.
