import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const DOCKER_URL = "http://localhost:2375/";

console.log("TESTSTTS",DOCKER_URL)
export const getContainers = async () => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:2375/containers/json',
    headers: { 
      'Accept': 'application/json', 
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

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
