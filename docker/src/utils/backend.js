import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function createJob(position, location, date, tags, desc) {
  try {
    const res = await axios.post("/jobs", {
      company: localStorage.getItem("company"),
      position,
      location,
      date,
      tags,
      desc,
      createdBy: localStorage.getItem("email") || "sainath@gmail.com",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJobs() {
  
  
    return [
      {
        id: 1,
        company: "Google",
        position: "Software Engineer",
        location: "Mountain View, CA",
        date: "2021-05-01",
        tags: ["Python", "Java", "C++"],
        desc: "Work on the world's most advanced search engine.",
        createdBy: "",
      }
    ];
  
}

export async function getUsers(userIds) {
  try {
    const res = await axios.post("/users", { userIds });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
