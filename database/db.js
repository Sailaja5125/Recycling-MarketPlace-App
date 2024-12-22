import mongoose from "mongoose";

export const connect = async () => {
  try {
    const database = "recyclingMarket";
    const dbUrl = process.env.DBURL;
    
    if (!dbUrl) {
      throw new Error("Database URL not set in environment variables");
    }

    const response = await mongoose.connect(`${dbUrl}${database}`);

    console.log("Database connected successfully", response.connection.host , response.connection.collection);
  } catch (error) {
    console.log("Failed to connect to the database", error);
  }
};
