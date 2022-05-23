self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static.").then(cache=>{
            return cache.addAll([
                './',
                './styles.css',
                './images/logos/3225183_app_logo_media_popular_social_icon (1).png',
                './images/logos/3225183_app_logo_media_popular_social_icon.png',
                './images/pics/boris-smokrovic-HWwF4OnXAdM-unsplash.jpg',
                './images/pics/gary-bendig-WPmPsdX2ySw-unsplash.jpg',
                './images/pics/madiba-de-african-inspiration-aXe4Ufe3IV4-unsplash.jpg',
                './images/pics/sid-balachandran-hXttDVCwyRA-unsplash.jpg'
            ])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})