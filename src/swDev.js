export default function swDev(){
    let swDev =`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swDev).then((responce) => {
        console.warn('responce',responce);
    })
    .catch((err)=>{
        console.log('err',err);

    })
}