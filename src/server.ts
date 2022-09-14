import express from "express";

const app = express();

app.get("/games", (req, res) => {
  res.json([]);
});

app.post("/ads", (req, res) => {
  res.status(201).json([]);
});

app.get("/games/:id/ads", (req, res) => {
  const gameId = req.params.id;
  return res.json([
    { id: 1, name: gameId },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
    { id: 5, name: "Anuncio 5" },
  ]);
});

app.get("/ads/:id/discord", (req, res) => {
  const adId = req.params.id;
  return res.json([{ id: 1, name: adId }]);
});

app.listen(3333);
