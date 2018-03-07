# Use wrokbox to work with a service worker

## Initial structure
Before using the service worker, the web app uses the following sample structure:

Please differentiate between **Directories** and _files_

**build:** **CSS**, _index.html_, **js**

 _package.json_

**CSS:** _app.css_

**js**: _app.js_


## Step 1: install workbox command line interface
`npm install workbox -cli` (check this in another example!)

## Step 2: generate a config-file with _workbox wizard_
`workbox wizard` scans the current directory and asks a series of question to
automaticall generate a _workbox-config.js_ at the root.

In the example, the generated _workbox_config.js_ looks likes this:

`module.exports = {`

`"globDirectory": "build/"`

`"globPatterns": [`

`"**/*.{css, html, js}"`

` ], `

`"swDest": "build/sw.js"`

`};`

## Step 3: generate a Service Worker
Once a config file has been created, we can generate the actual Service Worker
with `workbox generateSW workbox-config.js`.

The newly created Service Worker pre-caches files based on what is stated as
_globPatterns_ in _workbox_config.js_ (in the example, the pattern
  `"**/*.{css, html, js}"` )  

## Step 4: register the Service Worker
In order to get the newly generated service worker to work, we have to register
it in _index.html_:

`<script>

if ('serviceWorker' in navigator) {

window.addEventListener('load', () => {

navigator.serviceWorker.register('/sw.js');

});

}

</script>`

## Step 5: serve the app
Now start the app (e.g. 'npm run serve') and check _dev tools_ to see the cache
to see the service worker caching _index.html_, _app.js_ and _app.css_.

For additional infos (changing the files, injectManifest, etc.), refer to
https://blog.usejournal.com/a-5-minute-intro-to-workbox-3-0-156803952b3e
