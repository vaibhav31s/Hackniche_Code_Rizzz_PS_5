import React, { useEffect, useState } from "react";
import Stat from "../components/Stat";
import { getStats } from "../utils/backend";

export default function Stats({ containerId }) {
  const [cpuData, setCpuData] = useState([{}]);
  const [memoryData, setMemoryData] = useState([]);
  const [networkData, setNetworkData] = useState([]);
  const [diskData, setDiskData] = useState([]);

  const handleStatSet = (data, setState) => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let _data = {
      name: `${hours}:${minutes}:${seconds}`,
      usage: parseFloat(data),
    };

    setState((prevState) => {
      if (prevState.length < 3) {
        return [...prevState, _data];
      } else {
        return [...prevState.slice(1), _data];
      }
    });
  };

  const getPercentage = (used, total) => {
    return ((used / total) * 100).toFixed(2);
  };

  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getStats(containerId);
      const cpuUsage = getPercentage(
        stats.cpu_stats.cpu_usage ? stats.cpu_stats.cpu_usage.total_usage : 0,
        stats.cpu_stats.system_cpu_usage ? stats.cpu_stats.system_cpu_usage : 0
      );
      const memoryUsage = getPercentage(
        stats.memory_stats.usage,
        stats.memory_stats.limit
      );
      const networkUsage = getPercentage(
        stats.networks.eth0.rx_bytes,
        stats.networks.eth0.tx_bytes
      );
      const diskUsage = getPercentage(
        stats.blkio_stats.io_service_bytes_recursive
          ? stats.blkio_stats.io_service_bytes_recursive[1].value
          : 0,
        stats.blkio_stats.io_service_bytes_recursive
          ? stats.blkio_stats.io_service_bytes_recursive[2].value
          : 0
      );
      handleStatSet(cpuUsage, setCpuData);
      handleStatSet(memoryUsage, setMemoryData);
      handleStatSet(networkUsage, setNetworkData);
      handleStatSet(diskUsage, setDiskData);
    };

    const interval = setInterval(() => {
      fetchStats();
    }, 2000);

    fetchStats();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 p-5 h-full  ">
      <Stat title="CPU Usage" data={cpuData} />
      <Stat title="Memory Usage" data={memoryData} />
      <Stat title="Network Usage" data={networkData} />
      <Stat title="Disk Usage" data={diskData} />
    </div>
  );
}
