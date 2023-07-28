const {app}=require('./src');
const {environment}=require('./src/loaders/environment.loader');

(async function init(){
    app.listen(environment.PROT,()=>{
        console.log(`Server listening on port ${environment.PROT}`)
    })
})()