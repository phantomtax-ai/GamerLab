self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/README.md", "/blank-cloaker.html", "/favicon/", "/favicon/apple-touch-icon.png","/favicon/favicon-96x96.png", "/favicon/favicon.ico", "/favicon/favicon.svg", "/favicon/favicon.svg", "/favicon/site.webmanifest", "/favicon/web-app-manifest-192x192.png", "/favicon/web-app-manifest-512x512.png", "/apps/", "/apps/calculate.html", "/apps/color.html", "/apps/conversions.html", "/apps/div.html", "/apps/form.html", "/apps/github-search.html", "/apps/index.html", "/apps/md.html", "/apps/paintappv2.html", "/apps/regex.html", "/apps/snip.html", "/apps/texteditv2.html", "/apps/tryit.html", "/games/library/gc/index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
