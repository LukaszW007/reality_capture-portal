/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-79f734955cd49ed7e0da.js"
  },
  {
    "url": "styles.f2c4dda27bb98f50c4c2.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-ee8a4bba4771daaa13e7.js"
  },
  {
    "url": "app-3e2765ecc22fa9862577.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dcb2be493598b9e2f0193e92e5ccf13b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "polyfill-f8ac2c59ba7427aa72ad.js"
  },
  {
    "url": "5ec0f79efef7b00b8cca751213afcaac039464db-28a9d384c87bafbfec97.js"
  },
  {
    "url": "component---src-pages-sections-tutorials-tutorials-tsx-421420cdb879e1a38c8d.js"
  },
  {
    "url": "component---src-pages-index-tsx-ba30cbc09eb9baa07758.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "75f553833b6f30ec2b0da7548a02a30d"
  },
  {
    "url": "page-data/sq/d/2052298874.json",
    "revision": "c580207b7de6b88b0619a4c37436f29a"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e3aaade1dcac107c48db9ab98ea35407"
  },
  {
    "url": "cb1608f2-c0456cfba345a59eff5f.js"
  },
  {
    "url": "c1051258fcd2fad642e248451fbf2a472d074321-15ae403e376e2917ee2b.js"
  },
  {
    "url": "component---src-pages-blog-tsx-27b3f03bcc4934225444.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "cfc6a6dce2520cde5b7e9833d92732a7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "91c35a2538b2e9e80580b1b3cf9af489"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-3e2765ecc22fa9862577.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
