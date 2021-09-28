const mongoose = require('mongoose')
const {MONGO_URI} = require('../constants')
const {MONGO_OPTIONS} = require('../constants')

class MongoDB {
  constructor() {
    this.mongoose = mongoose
    this.isConnected = false
    this.MONGO_URI = MONGO_URI
    this.MONGO_OPTIONS = MONGO_OPTIONS
  }

  async connect() {
    if (this.isConnected) return

    try {
      const db = await this.mongoose.connect(this.MONGO_URI, this.MONGO_OPTIONS)
      const connection = db.connection

      this.isConnected = connection.readyState === 1
      if (this.isConnected) console.log('✅ MongoDB connected')

      connection.on('connected', () => console.log('✅ MongoDB connected')) // re-connected
      connection.on('disconnected', () => console.log('❌ MongoDB disconnected')) // disconnected
      connection.on('error', (error) => console.log('❌ MongoDB connection error', error)) // listen for errors during the session
    } catch (error) {
      console.log('❌ MongoDB connection error:', error.message)
    }
  }
}

module.exports = new MongoDB()
