const { connect } = require("mongoose");

const MONGO_URL = "mongodb+srv://keshav:<root>@cluster0.rk7n9mc.mongodb.net";

const DB_NAME = 'Cluster0';

async function connectDB(){
    await connect(`${MONGO_URL}/${DB_NAME}`)
}

connectDB();