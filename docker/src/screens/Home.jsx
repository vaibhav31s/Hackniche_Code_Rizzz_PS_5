import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container } from "../components/Container";
// import { getJobs } from "../utils/backend";
import { useNavigate } from "react-router";
import { Images } from "../components/Images";
import { Volume } from "../components/Volume";

export default function Home() {
  // const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [curSec, setSec] = useState("");

  return <div></div>;
}
