const mongoose = require("mongoose");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const getMongoUri = () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  const hasMongoUri = Boolean(process.env.MONGO_URI);
  const hasMongoDbUri = Boolean(process.env.MONGODB_URI);

  // Avoid printing the full URI (passwords).
  console.log("🔎 Mongo config:", {
    hasMONGO_URI: hasMongoUri,
    hasMONGODB_URI: hasMongoDbUri,
    uriLength: uri ? uri.length : 0,
  });

  if (!uri) {
    throw new Error("Missing Mongo URI env var: set MONGO_URI or MONGODB_URI");
  }

  return uri;
};

const connectDB = async () => {
  const uri = getMongoUri();

  const maxAttempts = Number(process.env.MONGO_CONNECT_RETRIES || 5);
  const initialDelayMs = Number(process.env.MONGO_CONNECT_DELAY_MS || 1000);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const conn = await mongoose.connect(uri, {
        // mongoose v9 uses unified topology; these are safe defaults
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
      });
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(
        `❌ MongoDB Connection Error (attempt ${attempt}/${maxAttempts}): ${error.message}`,
      );

      if (attempt === maxAttempts) {
        throw error;
      }

      const delay = initialDelayMs * 2 ** (attempt - 1);
      console.log(`⏳ Retrying Mongo connection in ${delay}ms...`);
      await sleep(delay);
    }
  }
};

module.exports = connectDB;

