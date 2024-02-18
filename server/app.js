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

app.get("/containers", async (req, res) => {
  await docker.listContainers(function (err, containers) {
    res.send(containers);
  });
});

app.get("/container/:id", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.inspect(function (err, data) {
    res.send(data);
  });
});

app.get("/container/:id/stats", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.stats({ stream: false }, function (err, stream) {
    res.send(stream);
  });
}
);


app.get("/container/:id/logs", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.logs({ stdout: true, stderr: true }, function (err, stream) {
    res.send(stream);
  });
}
);


app.get("/container/:id/top", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.top(function (err, data) {
    res.send(data);
  });
}
);

app.get("/container/:id/inspect", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.inspect(function (err, data) {
    res.send(data);
  });
}
);

app.get("/container/:id/changes", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.changes(function (err, data) {
    res.send(data);
  });
}
);
//exec
app.post("/container/:id/exec", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.exec({ Cmd: ["ls", "-la"] }, function (err, exec) {
    exec.start({ hijack: true, stdin: true }, function (err, stream) {
      res.send(stream);
    });
  });
}
);

//files
app.get("/container/:id/files", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.getArchive({ path: "/etc/hosts" }, function (err, stream) {
    res.send(stream);
  }
  );
}
);


app.post("/container/:id/start", async (req, res) => {  
  const container = await docker.getContainer(req.params.id);
  container.start(function (err, data) {
    res.send(data);
  });
}
);

app.post("/container/:id/stop", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.stop(function (err, data) {
    res.send(data);
  });
}

);


app.post("/container/:id/restart", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.restart(function (err, data) {
    res.send(data);
  });
}
);

app.post("/container/:id/kill", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.kill(function (err, data) {
    res.send(data);
  });
}
);

app.post("/container/:id/pause", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.pause(function (err, data) {
    res.send(data);
  });
}
);

app.post("/container/:id/delete", async (req, res) => {
  const container = await docker.getContainer(req.params.id);
  container.remove(function (err, data) {
    res.send(data);
  });
}
);

app.get("/images", async (req, res) => {  
  await docker.listImages(function (err, images) {
    res.send(images);
  });
}
);

app.get("/image/:id", async (req, res) => {
  const image = await docker.getImage(req.params.id);
  image.inspect(function (err, data) {
    res.send(data);
  });
}
);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
