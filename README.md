# RSL Development

A web app for RSL official site.


## RE:START KartRider League Season 1

This project is still work in progess, some features may not work expectedly.

https://rsl.tw

## WordPress

This directory is for the theme rsl-v1 local development only.

Just go to `/wordpress` and run `docker-compose up -d` to start a local server with the latest WP running.

Add host setting to `/private/etc/hosts` to make local domain works.

```
127.0.0.1 rsl.local
::1 rsl.local
```

## Web

The main web app, build with Nuxt.js, deploy with Plesk Node.js extension.

Before running `yarn install`, you need to create `.npmrc` in `/web` and add the Font Awesome Pro configuration in it to pull the private packages from npm. 

Add this line at the end of `.npmrc` for Plesk to run node commands normally.

```
scripts-prepend-node-path=true
```

Add additional deploy actions in Plesk Git setting:

```
cd web && PATH=/opt/plesk/node/12/bin/:$PATH; npm i -g yarn; yarn; yarn build:safe
touch web/tmp/restart.txt
```

### **Caution**

All of the assets releated to KartRider in this project were reviewed and authorized by Gamania, do not use without authorization.
