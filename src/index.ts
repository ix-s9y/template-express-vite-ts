import express from 'express';
import cors from 'cors';
import coffee from './routes/coffee';

const app = express();

// ミドルウェアの追加
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティングの追加
app.use('/coffee', coffee);

// APIメソッドの追加
app.get('/', (req, res) => {
  res.send("Hello Vite + Express with TypeScript!");
});

// APIサーバ起動
if (import.meta.env.PROD) {
  app.listen(3000);
}

export const viteNodeApp = app;
