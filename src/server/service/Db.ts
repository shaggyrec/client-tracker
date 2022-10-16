import { MongoClient, Db } from 'mongodb';

export default async function (usr: string, pwd: string, dbName: string): Promise<Db> {
    const client = new MongoClient(`mongodb://${usr}:${pwd}@mongodb:27017/${dbName}?authSource=admin`);
    await client.connect();

    return client.db(dbName);
}



