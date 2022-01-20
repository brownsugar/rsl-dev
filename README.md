# RSL Website Development

A web app for RSL official site.


## RE:START KartRider League

https://rsl.tw

## WordPress

This directory is for local development only.

Just go to `/wordpress` and run `docker-compose up -d` to start a local server with the latest WP running.

### Exposed content in directory

1. The database stores in `/wordpress/_db`.
2. WordPress content `/wordpress/wp-content` and `wp-config.php`.
3. PHP setting `uploads.ini`.

### Local domain

Add the host settings to `/private/etc/hosts` on Mac or `C:\WINDOWS\system32\drivers\etc\hosts` on Windows to make local domain works.

```
127.0.0.1 rsl.local
::1 rsl.local
```

### Coding Standards

[WordPress-Core](https://github.com/WordPress/WordPress-Coding-Standards)

### Required plugins

1. [ACF to REST API](https://wordpress.org/plugins/acf-to-rest-api/)
2. [Advanced Custom Fields PRO](https://www.advancedcustomfields.com/)
3. [WP REST Cache](https://tw.wordpress.org/plugins/wp-rest-cache/)

### Recommend plugins

1. [Classic Editor](https://wordpress.org/plugins/classic-editor/) + [Advanced Editor Tools](https://wordpress.org/plugins/tinymce-advanced/)
   - For post editing.
2. [Disable REST API](https://wordpress.org/plugins/disable-json-api/)
   - Disabled unused endpoints.
3. [Easy Theme and Plugin Upgrades](https://wordpress.org/plugins/easy-theme-and-plugin-upgrades/)
   - Directly update plugins by uploading zip files.
4. [XML Sitemaps](https://wordpress.org/plugins/google-sitemap-generator/)
   - Generate sitemaps of posts, categories, etc.
5. [Simple Custom Post Order](https://wordpress.org/plugins/simple-custom-post-order/)
   - Custom order of posts, categories, etc.

### Debug plugins

1. [FakerPress](https://wordpress.org/plugins/fakerpress/)
2. [WP API SwaggerUI](https://wordpress.org/plugins/wp-api-swaggerui/)

### Production

1. Just install a new WordPress website in the server.
2. In WordPress [Settings] > [General], keep `WordPress Address`, change `Site Address` to the web app's url.

## Web

The main web app, built with Nuxt.js, deployed by Plesk Node.js extension.

Before running `yarn` in `/web`, you need to create `.npmrc` then add the [Font Awesome Pro Package Token](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro) in it to pull the private packages from NPM.

## Deploy to Plesk domain

1. Enable Git for the domain.
2. Add a remote Git repository, paste the git web url (https://github.com/brownsugar/rsl-dev.git).
3. In [Repository Settings], copy `SSH public key`, add to Github repo > [Deploy keys].
4. Copy `Webhook URL`, create a webhook with push event trigger in GitHub repo > [Webhooks].
5. Check the option `Enable additional deploy actions`.
6. Paste the deploy commands in `Actions`.
```
cd web && PATH=/opt/plesk/node/12/bin/:$PATH; npm i -g yarn; yarn; yarn build:safe
touch web/tmp/restart.txt
/bin/cp -R wordpress/wp-content/themes/rsl_v1/ {WP_PATH_ON_PLESK}/wp-content/themes/
```

7. Add this line at the end of `web/.npmrc` for Plesk runs the node commands normally.
```
scripts-prepend-node-path=true
```

8. Enable Node.js for the domain.
9. Set `Document Root` and `Application Root` to `/web`.
10. Set `Application Startup File` to `node_modules/nuxt-start/bin/nuxt-start.js`.
11. That's it. Every time push the code to GitHub, it will auto build and deploy the app to the domain.

### **Caution**

All of the assets of KartRider or brands in this project were reviewed and authorized by their companies, do not use them without authorization.
