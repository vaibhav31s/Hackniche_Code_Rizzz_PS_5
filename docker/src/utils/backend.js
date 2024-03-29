import axios from "axios";
import { toast} from 'react-toastify';
axios.defaults.baseURL = "http://localhost:4000";

export const getContainers = async () => {
  const response = await axios.get("/containers");
  console.log(response.data);
  return response.data;
};

export const getInfo = async () => {
  const response = await axios.get("/info");
  return response.data;
}

export const startContainer = async (id) => {
  await axios.post(`/container/${id}/start`).then((res) => {
    console.log(res);
    toast.success("Container started"); 
  }
  ).catch((err) => {
   toast.error("Error starting container");
  }
  );
};

export const pauseContainer = async (id) => {
  await axios.post(`/container/${id}/pause`).then((res) => {
    console.log(res);
    toast.success("Container paused"); 
  }
  ).catch((err) => {
   toast.error("Error pausing container");
  }
  );
};

export const removeContainer = async (id) => {
  await axios.post(`/container/${id}/remove`).catch((err) => {
    toast.error("Error removing container");
  }
  ).then((res) => { 
    toast.success("Container removed");
  }
  );
};

export const killContainer = async (id) => {
  await axios.post(`/container/${id}/kill`).then((res) => {
    console.log(res);
    toast.success("Container killed"); 
  }
  ).catch((err) => {
   toast.error("Error killing container");
  }
  );
};

export const getImages = async () => {
  const response = await axios.get("/images");
  console.log(response.data);
  return response.data;
};

export const getImage = async (id) => {
  const response = await axios.get("/image/"+id);
  console.log("getImage",response.data);
  return response.data;
};

export const getLogs = async (id) => {
  try {
    const response = await axios.get(`/container/${id}/logs`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getInspect = async (id) => {
  try {
    const response = await axios.get(`/container/${id}/inspect`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getStats = async (id) => {
  try {
    const response = await axios.get(`/container/${id}/stats`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getVolumes = async () => {
  const response = await axios.get("/volumes");
  console.log(response.data);
  return response.data;
}
// Compare this snippet from server/routes/container.js:

export const getLayer = async(id) =>{
  try {
    const response = await axios.get(`/image/${id}/layers`);
    console.log(response.data);
    return response.data;

  } catch (err) {
    console.log(err);
  }
}



export default async function getTotalUsage() {
    try {
        const response = await axios.get('/containers/json');
        const containers = response.data;

        const systemInfoResponse = await axios.get('/info');
        const systemInfo = systemInfoResponse.data;

        const totalMemory = systemInfo.memTotal;
        const totalCpu = systemInfo.NCPU;

        let totalCpuUsage = 0;
        let totalMemoryUsage = 0;

        for (const container of containers) {
            const statsResponse = await axios.get(`/containers/${container.Id}/stats`);
            const stats = statsResponse.data;

            // Calculate CPU usage percentage
            const cpuUsage = stats.cpu_stats.cpu_usage.total_usage / totalCpu;
            totalCpuUsage += cpuUsage;

            // Calculate memory usage percentage
            const memoryUsage = stats.memory_stats.usage / totalMemory;
            totalMemoryUsage += memoryUsage;
        }

        console.log('Total CPU Usage Percentage:', totalCpuUsage * 100);
        console.log('Total Memory Usage Percentage:', totalMemoryUsage * 100);

        return{
            totalCpuUsage: totalCpuUsage * 100,
            totalMemoryUsage: totalMemoryUsage * 100
        
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to get total usage
getTotalUsage();


