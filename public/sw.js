
console.log("register")
let cacheData = "appv1"

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {

            data.addAll([
                '/static/js/main.chunk.js',
                '/static/js/1.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/App.tsx',
                "/"


            ])
        }).catch((err) => {
            console.log('err', err)
        })

    )

})

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                console.log('result', result);
                if (result) {
                    return result;
                }

            })
        )
    }

})