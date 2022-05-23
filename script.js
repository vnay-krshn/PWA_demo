if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sworker.js').then(register=>{
        console.log("Service worker registered...")
        console.log(register)
    }).catch(err=>{
        console.log(`Error found : ${err}`)
    })
}else{
    console.log("Service worker registration failed...")
}