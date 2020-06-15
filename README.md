# RSL Development

A web app for RSL official site.


## RE:START KartRider League Season 1

This project is still work in progess, some feature may not work expectedly.

https://rsl.tw

## WordPress

This directory is for the theme rsl-v1 local development only.

Just go to `/wordpress` and run `docker-compose up -d` to start a local server with latest WP running.

# Web

The main web app, develop by Nuxt.js, deploy with Plesk Node.js extension.

Before running `yarn install`, you need to create `.npmrc` in `/web` and add the Font Awesome Pro configuration in it to pull the private packages from npm. 

**Caution**: All of the assets releated to KartRider in this project were reviewed and authorized by Gamania, do not use without authorization.
