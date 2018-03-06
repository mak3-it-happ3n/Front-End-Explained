# Use wrokbox to work with a service worker

## Initial structure
Before using the service worker, the web app uses the following sample structure:

  **Directory** _build_
                **Directory** _CSS_
                                    _app._CSS_
                _index.html_
                **Directory** _js_
                                      _app.js_
  _package.json_

## Step 1: install workbox
`npm install workbox -cli` (check this in another example!)

## Step 2: generate a config-file with _workbox wizard_
`workbox wizard` scans the current directory and asks a series of question to
automaticall generate a _workbox-config.js_ at the root.

In the example, the generated _workbox_config.js_ looks likes this:
`module.exports = {`
  `"globDirectory": "build/"`
  `"globPatterns": [`
    `"**/*.{css, html, js}"`
    `],`
    `"swDest": "build/sw.js"`
    `};`

## Step 3: generate a Service Worker
Once a config file has been created, we can generate the actual Service Worker
with `generateSW`.

The newly created Service Worker pre-caches files based on what is stated as
_globPatterns_ in _workbox_config.js_ (in the example, the pattern
  `"**/*.{css, html, js}"` )  