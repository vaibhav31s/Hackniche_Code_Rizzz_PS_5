import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export const getContainers = async () => {
  const response = await axios.get("/containers");
  console.log(response.data);
  return response.data;
};

export const startContainer = async (id) => {
  await axios.post(`/container/${id}/start`);
};

export const pauseContainer = async (id) => {
  await axios.post(`/container/${id}/pause`);
};

export const removeContainer = async (id) => {
  await axios.post(`/container/${id}/remove`);
};

export const killContainer = async (id) => {
  await axios.post(`/container/${id}/kill`);
};

export const getImages = async () => {
  return [
    {
      Containers: -1,
      Created: 1707288207,
      Id: "sha256:a3aef63c6c1029222ff635a72a0fcaddba1fd7a26abdf2491ace8eb3c654471e",
      Labels: null,
      ParentId: "",
      RepoDigests: [
        "python@sha256:e83d1f4d0c735c7a54fc9dae3cca8c58473e3b3de08fcb7ba3d342ee75cfc09d",
      ],
      RepoTags: ["python:latest"],
      SharedSize: -1,
      Size: 1018425574,
      VirtualSize: 1018425574,
    },
  ];
};

export const getImage = async (id) => {
  return {
    Id: "sha256:1dcb5ef7c8582a2b73e366c8d3211f6de31e318b3a1fdf1bb0f43a3aa678b99e",
    RepoTags: ["deadcoder11u2/datahive:spark"],
    RepoDigests: [],
    Parent: "",
    Comment: "buildkit.dockerfile.v0",
    Created: "2024-01-30T10:16:32.800049667Z",
    Container: "",
    ContainerConfig: {
      Hostname: "",
      Domainname: "",
      User: "",
      AttachStdin: false,
      AttachStdout: false,
      AttachStderr: false,
      Tty: false,
      OpenStdin: false,
      StdinOnce: false,
      Env: null,
      Cmd: null,
      Image: "",
      Volumes: null,
      WorkingDir: "",
      Entrypoint: null,
      OnBuild: null,
      Labels: null,
    },
    DockerVersion: "",
    Author: "",
    Config: {
      Hostname: "",
      Domainname: "",
      User: "spark",
      AttachStdin: false,
      AttachStdout: false,
      AttachStderr: false,
      Tty: false,
      OpenStdin: false,
      StdinOnce: false,
      Env: [
        "PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        "JAVA_HOME=/opt/java/openjdk",
        "LANG=en_US.UTF-8",
        "LANGUAGE=en_US:en",
        "LC_ALL=en_US.UTF-8",
        "JAVA_VERSION=jdk-11.0.22+7",
        "SPARK_TGZ_URL=https://archive.apache.org/dist/spark/spark-3.5.0/spark-3.5.0-bin-hadoop3.tgz",
        "SPARK_TGZ_ASC_URL=https://archive.apache.org/dist/spark/spark-3.5.0/spark-3.5.0-bin-hadoop3.tgz.asc",
        "GPG_KEY=FC3AE3A7EAA1BAC98770840E7E1ABCC53AAA2216",
        "SPARK_HOME=/opt/spark",
        "SPARK_MODE=master",
        "SPARK_RPC_AUTHENTICATION_ENABLED=no",
        "SPARK_RPC_ENCRYPTION_ENABLED=no",
        "SPARK_LOCAL_STORAGE_ENCRYPTION_ENABLED=no",
        "SPARK_SSL_ENABLED=no",
        "SPARK_USER=spark",
      ],
      Cmd: null,
      Image: "",
      Volumes: null,
      WorkingDir: "/opt/spark/work-dir",
      Entrypoint: ["java", "-jar", "/opt/datahive/spark.jar"],
      OnBuild: null,
      Labels: {
        "com.docker.compose.project": "docker",
        "com.docker.compose.service": "spark",
        "com.docker.compose.version": "2.24.0",
        "org.opencontainers.image.ref.name": "ubuntu",
        "org.opencontainers.image.version": "20.04",
      },
    },
    Architecture: "arm64",
    Variant: "v8",
    Os: "linux",
    Size: 968303931,
    GraphDriver: {
      Data: {
        LowerDir:
          "/var/lib/docker/overlay2/153529b747022931066fe4a2744bf4ed8fd73b4bf95be2c5cb9282b2211ae72b/diff:/var/lib/docker/overlay2/be54806eb06233d58f3abfbc5a56e5604c1af34354fb3cbbe2969e3c69b30e2f/diff:/var/lib/docker/overlay2/93d9ac9723edf4ffc61f9688160c01c30cca6b7c7cea6775f9acf9b371e62c3d/diff:/var/lib/docker/overlay2/127baec377c477d24650341e4ff7c6a79b0d222aba9595e055fb52a678bcea76/diff:/var/lib/docker/overlay2/caef6df97054f36008736f48e5e5857b507eba5234052bf1ce4442287a0f236b/diff:/var/lib/docker/overlay2/ad3f5b94ef28280b40e46d69380f7b9fa06f68f074e57dcb3ed2dc13626e5f0d/diff:/var/lib/docker/overlay2/4fbc3161189e2cfc55b2d7e6cbebfccf4210823cc9ae31b88c79296b0710c608/diff:/var/lib/docker/overlay2/5a7adaac906a8834ed020c4742ea30a9d371594264e029468ea229b7b3335596/diff:/var/lib/docker/overlay2/daa6b91286b7d72e3889390a5b335cf35d2ed812f99f4433c612b51d7d263b46/diff:/var/lib/docker/overlay2/e373f3ca1985eb4310c0006bcabd12a95ea31ff4f995656f4fcd43f753225935/diff",
        MergedDir: "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/merged",
        UpperDir: "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/diff",
        WorkDir: "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/work",
      },
      Name: "overlay2",
    },
    RootFS: {
      Type: "layers",
      Layers: [
        "sha256:b1099d79a48ef6b9eaf12e0083d6510f9d9a5f9085465344247ca2822a9687f0",
        "sha256:dfcf73024c2791734e10562611afa94a2488690be203b8da01031f19ae6c0022",
        "sha256:f1d0cc1795e7a0eb497b00ac7bcb1b14955a7485d234668738b7ea151f6f8e00",
        "sha256:330c4767cc6d1904cff4aafd53ced10aa8f858dae6c147d56e87b6848cd3d86d",
        "sha256:44056c2f94b101e821e9998161505a367790df5290ce29862f8450fd13dceffb",
        "sha256:c44717df0d7036ac4db422b78d25081a662781496d2652eacca17d34c74ff5a7",
        "sha256:19f8fa1a3c9356f962faa3179f03c5d24a770133a5bd94661ae381998b25c440",
        "sha256:71c3f2af1abbc123bc3b02d35c4cd48a0fdd040d3b76aa24fcd44c0eacbca741",
        "sha256:91ec8881d80cb85b6988ff422980901e00cc4d73e686aee954a94a5380c36f10",
        "sha256:e13cb3b347054b1c8197ca82bd2c8ba081a3bcca09f7f3c781760afc5942f65c",
        "sha256:6786f45e08f7c5d7d9d33c50cdb450e56f65a08c2fa733d389a07bad3e33d8e8",
      ],
    },
    Metadata: {
      LastTagTime: "2024-01-30T10:16:32.885809042Z",
    },
  };
};

export const getLogs = async (id) => {
  try {
    const response = await axios.get(`/container/${id}/logs`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
