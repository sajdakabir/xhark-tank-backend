import { app } from './src';
import { environment } from './src/loaders/environment.loader.js';

(async function init() {
    app.listen(environment.PROT, () => {
        console.log(`Server listening on port ${environment.PROT}`)
    })
})()