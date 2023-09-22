import express from 'express';
import cors from 'cors';
import UserRoute from './routes/userRoute.js';
import RecipeRoute from './routes/recipeRoute.js';
import CommentRoute from './routes/commentRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute, RecipeRoute, CommentRoute);

app.listen(port, ()=> console.log('Server up and running...'));