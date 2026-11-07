/* Firebird AR: switches off the game's offline helper that was uploaded here by mistake on 3 Nov 2026.
   Phones that opened this link since then get the AR page back the next time they open it. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  self.registration.unregister()
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => cs.forEach(c => c.navigate(c.url)))
));
