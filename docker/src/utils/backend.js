import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getContainers = async () => {
  const response = await axios.get("/");
  console.log(response.data);
  return response.data;
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
