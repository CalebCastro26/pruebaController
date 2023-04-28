import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
const app = express();
const { VITE_BASE_URL } = dotenv.config().parsed;

app.use(cors());
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

async function PromiseRequest(url, method = "GET") {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "text/plain",
    },
  }).then((res) =>
    res.json().catch((err) => {
      throwInfo("PROMISE REQ");
      throwInfo(err);
    })
  );
}

app.get("/", (req, res) => {
  const url = `${VITE_BASE_URL}/pokemon`;
  PromiseRequest(url).then((pokeRoutes) => {
    res.send(pokeRoutes.results);
  });
});
