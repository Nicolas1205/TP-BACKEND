import { MongoClient } from "mongodb";

const url = "mongodb://nicolas:nicolas@localhost:27017";
const client: MongoClient = new MongoClient(url);
export default client;