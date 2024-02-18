import React, { useEffect, useState } from "react";
import { getLogs } from "../utils/backend";

export default function Logs({ containerId }) {
  const [logs, setLogs] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      const _logs = await getLogs(containerId);
      setLogs(_logs);
    };
    const interval = setInterval(async () => {
      fetchLogs();
    }, 5000);

    fetchLogs();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full h-full flex p-5  overflow-y-scroll">
      {/* maintain the color of the logs for errors and utf-8 */}
      <pre className="text-white">{logs}</pre>
    </div>
  );
}
