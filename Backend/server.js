import express from "express";
import notesroutes from "./src/Routes/notesroutes.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middleware/rate.limiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 1. Built-in Middleware
app.use(express.json());

// 2. Custom Logging Middleware (Must be BEFORE routes!)
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Req Method is ${req.method} and Req URL is${req.url}`);
  next();
});

// 3. Routes
app.use("/api/notes", notesroutes);

// 4. Connect to DB first, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });