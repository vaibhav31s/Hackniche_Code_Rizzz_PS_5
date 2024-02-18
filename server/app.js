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
  try {
    await docker.listContainers(function (err, containers) {
      if (err) throw err;
      res.send(containers);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/container/:id", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.inspect(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/container/:id/stats", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.stats({ stream: false }, function (err, stream) {
      if (err) throw err;
      res.send(stream);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/container/:id/logs", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    const logs = await container.logs({
      stdout: true,
      stderr: true,
      follow: false,
      timestamps: true,
    });

    console.log(logs.toString());

    res.send(logs.toString());
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Error" });
  }
});

app.get("/container/:id/top", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.top(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/container/:id/inspect", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.inspect(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/container/:id/changes", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.changes(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//exec
app.post("/container/:id/exec", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.exec({ Cmd: ["ls", "-la"] }, function (err, exec) {
      if (err) throw err;
      exec.start({ hijack: true, stdin: true }, function (err, stream) {
        if (err) throw err;
        res.send(stream);
      });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// //files
// app.get("/container/:id/files", async (req, res) => {
//   const container = await docker.getContainer(req.params.id);
//   container.getArchive({ path: "/etc/hosts" }, function (err, stream) {
//     res.send(stream);
//   }
//   );
// }
// );

app.post("/container/:id/start", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.start(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/container/:id/stop", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.stop(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/container/:id/restart", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.restart(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/container/:id/kill", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.kill(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/container/:id/pause", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.pause(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/container/:id/delete", async (req, res) => {
  try {
    const container = await docker.getContainer(req.params.id);
    container.remove(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/images", async (req, res) => {
  try {
    await docker.listImages(function (err, images) {
      if (err) throw err;
      res.send(images);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/image/:id", async (req, res) => {
  try {
    const image = await docker.getImage(req.params.id);
    image.inspect(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/image/:id/history", async (req, res) => {
  try {
    const image = await docker.getImage(req.params.id);
    image.history(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/image/:id/inspect", async (req, res) => {
  try {
    const image = await docker.getImage(req.params.id);
    image.inspect(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/image/:id/layers", async (req, res) => {
  try {
    const image = await docker.getImage(req.params.id);
    image.history(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/volumes", async (req, res) => {
  try {
    await docker.listVolumes(function (err, volumes) {
      if (err) throw err;
      res.send(volumes);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/volume/:id", async (req, res) => {
  try {
    const volume = await docker.getVolume(req.params.id);
    volume.inspect(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  } catch (error) { 
    res.status(500).send({ error: error.message });
  }
});

//current cpu usage
app.get("/info", async (req, res) => {
  try {
    await docker.info(function (err, info) {
      if (err) throw err;
      res.send(info);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
//system information
app.get("/version", async (req, res) => {
  try {
    await docker.version(function (err, version) {
      if (err) throw err;
      res.send(version);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
