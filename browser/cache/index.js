const express = require("express");
const app = express();
const path = require("path");

const MAX_AGE = 10;
const PORT = 3000;

app.use(
  "/cache1",
  express.static(path.join(__dirname, "public"), {
    etag: false,
    lastModified: false,
    setHeaders: (res, path) => {
      res.setHeader("Cache-Control", `max-age=${MAX_AGE}`);
    },
  })
);

app.use(
  "/cache2",
  express.static(path.join(__dirname, "public"), {
    etag: true,
    lastModified: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
