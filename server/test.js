const Docker = require("dockerode");

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

const container = docker.getContainer(
  "71e39770bcb29e0789927ac1c3e59a0b7d9d4758a5e03180d37d1e888c593053"
);

const getLogs = async () => {
  try {
    const logs = await container.logs({
      stdout: true,
      stderr: true,
      follow: false,
    });

    console.log(logs.toString());
  } catch (err) {
    console.log(err);
  }
};

const getStats = async () => {
  try {
    const stats = await container.stats();
    console.log(stats.cpu_stats);
  } catch (err) {
    console.log(err);
  }
};

const getInspect = async () => {
  try {
    const inspect = await container.inspect();
    console.log(inspect.Config.Env);
  } catch (err) {
    console.log(err);
  }
};

getInspect();
