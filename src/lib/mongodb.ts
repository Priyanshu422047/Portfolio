/* eslint-disable no-var, @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

declare global {
  var mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI;
const IS_OFFLINE = !MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (IS_OFFLINE) {
    console.warn('❌ No MONGODB_URI provided — skipping DB connection');
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    console.log('✅ MongoDB connected');
  } catch {
    cached.promise = null;
    console.warn('❌ MongoDB connection failed');
    return null;
  }

  return cached.conn;
}

export default connectDB;
