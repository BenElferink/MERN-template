const ORIGIN = '*'
const PORT = process.env.PORT 

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/Mydatabase'
const MONGO_OPTIONS = {
         useUnifiedTopology:true,
         useNewUrlParser: true,
  }

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
}
