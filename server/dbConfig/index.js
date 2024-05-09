import mongoose from "mongoose";

const DB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default DB;