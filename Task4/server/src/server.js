import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.js';

const app = express();

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI not set in environment. See .env.example');
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET not set in environment. See .env.example');
  process.exit(1);
}

await connectDB(process.env.MONGO_URI);

// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// routes
app.use('/api/auth', authRouter);

app.get('/', (req, res) => res.send('API running'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:   ${PORT}`);
});
