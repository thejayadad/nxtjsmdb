import mongoose from "mongoose"



export const connectToDataBase = async () => {
    await mongoose.connect("mongodb+srv://jaydunb12:Football123@cluster0.0gwk7vp.mongodb.net/test"
  ).then(() => console.log("DB Connected"))
  .catch((err) => console.log("err"))
}