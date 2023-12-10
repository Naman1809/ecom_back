const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGO_URI;
  
  const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        // console.log(MONGO_URI)
        console.log('Mongo connected:', connect.connection.host);
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDatabase;
