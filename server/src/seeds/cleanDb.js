import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        const nativeDb = model?.db?.db;
        if (!nativeDb) {
            throw new Error(`Unable to access database from model: ${modelName}`);
        }
        const modelExists = await nativeDb.listCollections({ name: collectionName }).toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
