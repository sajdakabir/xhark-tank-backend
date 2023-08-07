import { createConnection } from 'mongoose';
import { environment } from './environment.loader.js';

const db = createConnection(`mongodb+srv://${environment.DB_USER}:${environment.DB_PASS}@${environment.DB_HOST}/`, {
    autoIndex: false
})

export { db }
