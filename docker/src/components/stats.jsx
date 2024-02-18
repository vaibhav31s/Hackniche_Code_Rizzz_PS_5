import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const data2= [
  {
    "read": "2024-02-17T17:46:21.406847872Z",
    "preread": "2024-02-17T17:46:20.403420795Z",
    "pids_stats": { 
        "current": 1,
        "limit": 9830
    },
    "blkio_stats": {
        "io_service_bytes_recursive": [
            {
                "major": 252,
                "minor": 0,
                "op": "read",
                "value": 0
            },
            {
                "major": 252,
                "minor": 0,
                "op": "write",
                "value": 815104
            }
        ],
        "io_serviced_recursive": null,
        "io_queue_recursive": null,
        "io_service_time_recursive": null,
        "io_wait_time_recursive": null,
        "io_merged_recursive": null,
        "io_time_recursive": null,
        "sectors_recursive": null
    },
    "num_procs": 0,
    "storage_stats": {},
    "cpu_stats": {
        "cpu_usage": {
            "total_usage": 160497000,
            "usage_in_kernelmode": 16077000,
            "usage_in_usermode": 144420000
        },
        "system_cpu_usage": 143575710000000,
        "online_cpus": 4,
        "throttling_data": {
            "periods": 0,
            "throttled_periods": 0,
            "throttled_time": 0
        }
    },
    "precpu_stats": {
        "cpu_usage": {
            "total_usage": 160497000,
            "usage_in_kernelmode": 16077000,
            "usage_in_usermode": 144420000
        },
        "system_cpu_usage": 143571780000000,
        "online_cpus": 4,
        "throttling_data": {
            "periods": 0,
            "throttled_periods": 0,
            "throttled_time": 0
        }
    },
    "memory_stats": {
        "usage": 12746752,
        "stats": {
            "active_anon": 4096,
            "active_file": 69632,
            "anon": 11309056,
            "anon_thp": 0,
            "file": 884736,
            "file_dirty": 0,
            "file_mapped": 0,
            "file_writeback": 0,
            "inactive_anon": 11304960,
            "inactive_file": 815104,
            "kernel_stack": 16384,
            "pgactivate": 0,
            "pgdeactivate": 0,
            "pgfault": 4085,
            "pglazyfree": 0,
            "pglazyfreed": 0,
            "pgmajfault": 0,
            "pgrefill": 0,
            "pgscan": 0,
            "pgsteal": 0,
            "shmem": 0,
            "slab": 437256,
            "slab_reclaimable": 293192,
            "slab_unreclaimable": 144064,
            "sock": 0,
            "thp_collapse_alloc": 0,
            "thp_fault_alloc": 0,
            "unevictable": 0,
            "workingset_activate": 0,
            "workingset_nodereclaim": 0,
            "workingset_refault": 0
        },
        "limit": 12252557312
    },
    "name": "/testapp",
    "id": "01df1205eff87cc961a38b352c12513b20b04ed7d44adea6e86e406b33919e7b",
    "networks": {
        "eth0": {
            "rx_bytes": 446,
            "rx_packets": 5,
            "rx_errors": 0,
            "rx_dropped": 0,
            "tx_bytes": 0,
            "tx_packets": 0,
            "tx_errors": 0,
            "tx_dropped": 0
        }
    }
},

{
  "read": "2024-02-17T17:47:07.342298361Z",
  "preread": "2024-02-17T17:47:06.337792896Z",
  "pids_stats": {
      "current": 1,
      "limit": 9830
  },
  "blkio_stats": {
      "io_service_bytes_recursive": [
          {
              "major": 252,
              "minor": 0,
              "op": "read",
              "value": 0
          },
          {
              "major": 252,
              "minor": 0,
              "op": "write",
              "value": 815104
          }
      ],
      "io_serviced_recursive": null,
      "io_queue_recursive": null,
      "io_service_time_recursive": null,
      "io_wait_time_recursive": null,
      "io_merged_recursive": null,
      "io_time_recursive": null,
      "sectors_recursive": null
  },
  "num_procs": 0,
  "storage_stats": {},
  "cpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 143755310000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "precpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 143751460000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "memory_stats": {
      "usage": 12746752,
      "stats": {
          "active_anon": 4096,
          "active_file": 69632,
          "anon": 11309056,
          "anon_thp": 0,
          "file": 884736,
          "file_dirty": 0,
          "file_mapped": 0,
          "file_writeback": 0,
          "inactive_anon": 11304960,
          "inactive_file": 815104,
          "kernel_stack": 16384,
          "pgactivate": 0,
          "pgdeactivate": 0,
          "pgfault": 4085,
          "pglazyfree": 0,
          "pglazyfreed": 0,
          "pgmajfault": 0,
          "pgrefill": 0,
          "pgscan": 0,
          "pgsteal": 0,
          "shmem": 0,
          "slab": 437256,
          "slab_reclaimable": 293192,
          "slab_unreclaimable": 144064,
          "sock": 0,
          "thp_collapse_alloc": 0,
          "thp_fault_alloc": 0,
          "unevictable": 0,
          "workingset_activate": 0,
          "workingset_nodereclaim": 0,
          "workingset_refault": 0
      },
      "limit": 12252557312
  },
  "name": "/testapp",
  "id": "01df1205eff87cc961a38b352c12513b20b04ed7d44adea6e86e406b33919e7b",
  "networks": {
      "eth0": {
          "rx_bytes": 446,
          "rx_packets": 5,
          "rx_errors": 0,
          "rx_dropped": 0,
          "tx_bytes": 0,
          "tx_packets": 0,
          "tx_errors": 0,
          "tx_dropped": 0
      }
  }
},

{
  "read": "2024-02-17T17:47:16.944731059Z",
  "preread": "2024-02-17T17:47:15.94157821Z",
  "pids_stats": {
      "current": 1,
      "limit": 9830
  },
  "blkio_stats": {
      "io_service_bytes_recursive": [
          {
              "major": 252,
              "minor": 0,
              "op": "read",
              "value": 0
          },
          {
              "major": 252,
              "minor": 0,
              "op": "write",
              "value": 815104
          }
      ],
      "io_serviced_recursive": null,
      "io_queue_recursive": null,
      "io_service_time_recursive": null,
      "io_wait_time_recursive": null,
      "io_merged_recursive": null,
      "io_time_recursive": null,
      "sectors_recursive": null
  },
  "num_procs": 0,
  "storage_stats": {},
  "cpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 143792900000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "precpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 143788900000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "memory_stats": {
      "usage": 12746752,
      "stats": {
          "active_anon": 4096,
          "active_file": 69632,
          "anon": 11309056,
          "anon_thp": 0,
          "file": 884736,
          "file_dirty": 0,
          "file_mapped": 0,
          "file_writeback": 0,
          "inactive_anon": 11304960,
          "inactive_file": 815104,
          "kernel_stack": 16384,
          "pgactivate": 0,
          "pgdeactivate": 0,
          "pgfault": 4085,
          "pglazyfree": 0,
          "pglazyfreed": 0,
          "pgmajfault": 0,
          "pgrefill": 0,
          "pgscan": 0,
          "pgsteal": 0,
          "shmem": 0,
          "slab": 437256,
          "slab_reclaimable": 293192,
          "slab_unreclaimable": 144064,
          "sock": 0,
          "thp_collapse_alloc": 0,
          "thp_fault_alloc": 0,
          "unevictable": 0,
          "workingset_activate": 0,
          "workingset_nodereclaim": 0,
          "workingset_refault": 0
      },
      "limit": 12252557312
  },
  "name": "/testapp",
  "id": "01df1205eff87cc961a38b352c12513b20b04ed7d44adea6e86e406b33919e7b",
  "networks": {
      "eth0": {
          "rx_bytes": 446,
          "rx_packets": 5,
          "rx_errors": 0,
          "rx_dropped": 0,
          "tx_bytes": 0,
          "tx_packets": 0,
          "tx_errors": 0,
          "tx_dropped": 0
      }
  },
  
},
{
  "read": "2024-02-17T18:03:24.961475035Z",
  "preread": "2024-02-17T18:03:23.952563091Z",
  "pids_stats": {
      "current": 1,
      "limit": 9830
  },
  "blkio_stats": {
      "io_service_bytes_recursive": [
          {
              "major": 252,
              "minor": 0,
              "op": "read",
              "value": 0
          },
          {
              "major": 252,
              "minor": 0,
              "op": "write",
              "value": 815104
          }
      ],
      "io_serviced_recursive": null,
      "io_queue_recursive": null,
      "io_service_time_recursive": null,
      "io_wait_time_recursive": null,
      "io_merged_recursive": null,
      "io_time_recursive": null,
      "sectors_recursive": null
  },
  "num_procs": 0,
  "storage_stats": {},
  "cpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 147583950000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "precpu_stats": {
      "cpu_usage": {
          "total_usage": 160497000,
          "usage_in_kernelmode": 16077000,
          "usage_in_usermode": 144420000
      },
      "system_cpu_usage": 147579990000000,
      "online_cpus": 4,
      "throttling_data": {
          "periods": 0,
          "throttled_periods": 0,
          "throttled_time": 0
      }
  },
  "memory_stats": {
      "usage": 12746752,
      "stats": {
          "active_anon": 4096,
          "active_file": 69632,
          "anon": 11309056,
          "anon_thp": 0,
          "file": 884736,
          "file_dirty": 0,
          "file_mapped": 0,
          "file_writeback": 0,
          "inactive_anon": 11304960,
          "inactive_file": 815104,
          "kernel_stack": 16384,
          "pgactivate": 0,
          "pgdeactivate": 0,
          "pgfault": 4085,
          "pglazyfree": 0,
          "pglazyfreed": 0,
          "pgmajfault": 0,
          "pgrefill": 0,
          "pgscan": 0,
          "pgsteal": 0,
          "shmem": 0,
          "slab": 437256,
          "slab_reclaimable": 293192,
          "slab_unreclaimable": 144064,
          "sock": 0,
          "thp_collapse_alloc": 0,
          "thp_fault_alloc": 0,
          "unevictable": 0,
          "workingset_activate": 0,
          "workingset_nodereclaim": 0,
          "workingset_refault": 0
      },
      "limit": 12252557312
  },
  "name": "/testapp",
  "id": "01df1205eff87cc961a38b352c12513b20b04ed7d44adea6e86e406b33919e7b",
  "networks": {
      "eth0": {
          "rx_bytes": 446,
          "rx_packets": 5,
          "rx_errors": 0,
          "rx_dropped": 0,
          "tx_bytes": 0,
          "tx_packets": 0,
          "tx_errors": 0,
          "tx_dropped": 0
      }
  }
}


]
const data = [
  {
    name: "Monday",

    minutes: 30,
  },
  {
    name: "Tuesday",

    minutes: 50,
  },
  {
    name: "Wed",
    minutes: 30,
  },
  {
    name: "Thurs",
    minutes: 50,
  },
  {
    name: "Fri",
    minutes: 40,
  },
  {
    name: "Sat",
    minutes: 20,
  },
  {
    name: "Sun",
    minutes: 0,
  },
];



//2024-02-17T17:47:16.944731059Z
const stats = (props) => {
  const [cpuData,setCpuData] = useState([]);
  const [memory_stats, setMemoryStats] = useState([]);
  const [disk_stats, setDiskStats] = useState([]);
  const [network_stats, setNetworkStats] = useState([]);
  setTimeout(() => {
    console.log("data2",data2);
  }, 1000);

  useEffect(() => {
    data2.map((item) => {
      setCpuData(
        (prev) => [
          ...prev,
          {
            minutes: item.cpu_stats.cpu_usage.total_usage,
            name: extractHoursMinutesFromISO( new Date(item.read))    ,
          },
        ]
      );

      setMemoryStats(
        (prev) => [
          ...prev,
          {
            minutes: item.memory_stats.usage,
            name: extractHoursMinutesFromISO( new Date(item.read))    ,
          },
        ]
      );
      

      setDiskStats(
        (prev) => [
          ...prev,
          {
            minutes: item.memory_stats.usage,
            name: extractHoursMinutesFromISO( new Date(item.read))    ,
          },
        ]
      );

      setNetworkStats(
        (prev) => [
          ...prev,
          {
            minutes: item.networks.eth0.rx_bytes,
            name: extractHoursMinutesFromISO( new Date(item.read))    ,
          },
        ]
      )
    })
  

   


  }
  ,[])
  return (

    <div className="flex flex-rows">
      <div class="grid grid-cols-2 gap-10 p-20">
        <div>
          <h1 class="text-2xl font-bold text-center p-2">Memory Stats</h1>
          <LineChart
          width={800}
          height={400}
          data={memory_stats}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </div>
      
        <div>
          <h1 class="text-2xl font-bold text-center p-2">CPU Stats</h1>
          <LineChart
          width={800}
          height={400}
          data={cpuData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </div>

        <div>
          <h1 class="text-2xl font-bold text-center p-2">Disk IO Stats</h1>
          <LineChart
          width={800}
          height={400}
          data={disk_stats}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </div>

        <div>
          <h1 class="text-2xl font-bold text-center p-2">Network Stats</h1>
          <LineChart
          width={800}
          height={400}
          data={network_stats}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </div>
     
      </div>
    </div>
  );
};

function extractHoursMinutesFromISO(isoTimestamp) {
  // Parse the ISO 8601 timestamp
  const date = new Date(isoTimestamp);

  // Get the hours and minutes components
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}

export default stats;
