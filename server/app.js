const express = require("express");
const app = express();
const port = 4000;
const Docker = require("dockerode");
const cors = require("cors");
const docker = new Docker({ socketPath: "/var/run/docker.sock" });

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  docker.listContainers(function (err, containers) {
    res.send(containers);
  });
});

app.get("/container/:id", (req, res) => {
  const container = docker.getContainer(req.params.id);
  container.inspect(function (err, data) {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
