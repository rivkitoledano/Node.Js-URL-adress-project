import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uri =
"mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority";
const uriLocal = "mongodb://localhost:27017/UrlAddress";

const connectDB = async () => {
  await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });
  

export default connectDB;
