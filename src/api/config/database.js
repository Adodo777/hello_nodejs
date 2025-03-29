const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://localhost:27017/hello_nodejs");
        console.log("Database connected");
    } catch (error) {
        console.log("failed to connect to DB", error);
        process.exit();
    }
}

module.exports = connectDB;