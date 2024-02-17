export const data = {
	"Id": "1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc",
	"Created": "2024-02-17T05:53:05.585466959Z",
	"Path": "/usr/local/bin/dumb-init",
	"Args": [
		"--",
		"/opt/starter.sh",
		"hdfs",
		"namenode"
	],
	"State": {
		"Status": "running",
		"Running": true,
		"Paused": false,
		"Restarting": false,
		"OOMKilled": false,
		"Dead": false,
		"Pid": 16522,
		"ExitCode": 0,
		"Error": "",
		"StartedAt": "2024-02-17T08:23:51.459231254Z",
		"FinishedAt": "2024-02-17T08:23:50.13540817Z"
	},
	"Image": "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
	"ResolvConfPath": "/var/lib/docker/containers/1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc/resolv.conf",
	"HostnamePath": "/var/lib/docker/containers/1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc/hostname",
	"HostsPath": "/var/lib/docker/containers/1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc/hosts",
	"LogPath": "/var/lib/docker/containers/1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc/1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc-json.log",
	"Name": "/docker-namenode-1",
	"RestartCount": 0,
	"Driver": "overlay2",
	"Platform": "linux",
	"MountLabel": "",
	"ProcessLabel": "",
	"AppArmorProfile": "",
	"ExecIDs": [
		"1a780a67342c52b9692744f617dd674da6fe2928acc6d9b12fcac8d2731be93d"
	],
	"HostConfig": {
		"Binds": null,
		"ContainerIDFile": "",
		"LogConfig": {
			"Type": "json-file",
			"Config": {}
		},
		"NetworkMode": "docker_default",
		"PortBindings": {
			"9870/tcp": [
				{
					"HostIp": "",
					"HostPort": "9870"
				}
			]
		},
		"RestartPolicy": {
			"Name": "no",
			"MaximumRetryCount": 0
		},
		"AutoRemove": false,
		"VolumeDriver": "",
		"VolumesFrom": null,
		"ConsoleSize": [
			0,
			0
		],
		"CapAdd": null,
		"CapDrop": null,
		"CgroupnsMode": "private",
		"Dns": null,
		"DnsOptions": null,
		"DnsSearch": null,
		"ExtraHosts": [],
		"GroupAdd": null,
		"IpcMode": "private",
		"Cgroup": "",
		"Links": null,
		"OomScoreAdj": 0,
		"PidMode": "",
		"Privileged": false,
		"PublishAllPorts": false,
		"ReadonlyRootfs": false,
		"SecurityOpt": null,
		"UTSMode": "",
		"UsernsMode": "",
		"ShmSize": 67108864,
		"Runtime": "runc",
		"Isolation": "",
		"CpuShares": 0,
		"Memory": 0,
		"NanoCpus": 0,
		"CgroupParent": "",
		"BlkioWeight": 0,
		"BlkioWeightDevice": null,
		"BlkioDeviceReadBps": null,
		"BlkioDeviceWriteBps": null,
		"BlkioDeviceReadIOps": null,
		"BlkioDeviceWriteIOps": null,
		"CpuPeriod": 0,
		"CpuQuota": 0,
		"CpuRealtimePeriod": 0,
		"CpuRealtimeRuntime": 0,
		"CpusetCpus": "",
		"CpusetMems": "",
		"Devices": null,
		"DeviceCgroupRules": null,
		"DeviceRequests": null,
		"MemoryReservation": 0,
		"MemorySwap": 0,
		"MemorySwappiness": null,
		"OomKillDisable": null,
		"PidsLimit": null,
		"Ulimits": null,
		"CpuCount": 0,
		"CpuPercent": 0,
		"IOMaximumIOps": 0,
		"IOMaximumBandwidth": 0,
		"MaskedPaths": [
			"/proc/asound",
			"/proc/acpi",
			"/proc/kcore",
			"/proc/keys",
			"/proc/latency_stats",
			"/proc/timer_list",
			"/proc/timer_stats",
			"/proc/sched_debug",
			"/proc/scsi",
			"/sys/firmware",
			"/sys/devices/virtual/powercap"
		],
		"ReadonlyPaths": [
			"/proc/bus",
			"/proc/fs",
			"/proc/irq",
			"/proc/sys",
			"/proc/sysrq-trigger"
		]
	},
	"GraphDriver": {
		"Data": {
			"LowerDir": "/var/lib/docker/overlay2/21716898ff0a2e1b9284dd21ebbcf366de5f1a03dbb274be85bcc6dd78c050eb-init/diff:/var/lib/docker/overlay2/95e844e451e18da7a2f480d0c455051d815bd610c7574afcb6b14d3c747a325e/diff:/var/lib/docker/overlay2/bf50d01317d296345bf884e46f404ffd2d2e7120fae6f2b1a580d7060fdcf698/diff:/var/lib/docker/overlay2/c82eec8ce40fbdf11fd4c1595e4b0124d52082efe6e72329597df15a1e326d8a/diff:/var/lib/docker/overlay2/a387305a3cbdd74378baa32b27d4f927b75efa1bf3a1f47f08c404f89eb6b49a/diff:/var/lib/docker/overlay2/1ab53d62dbd1af14a0dd237d2b09af15cc555c6a9076b9a06d83d992b682839e/diff:/var/lib/docker/overlay2/8813a2e249606278a3137d7b262380e3df386cebdccbaf6e4144f4e5e144d2a8/diff:/var/lib/docker/overlay2/05e5b53ecc286e62129fa4c60399046a8e4d9a95eef1a153394eeb81a5f9c45a/diff:/var/lib/docker/overlay2/7934a57354420094f827c203cc68c098f2f9cbbf1d3f6debc9fcb555918e98d0/diff:/var/lib/docker/overlay2/fa0f9423c3f613e79c9b2383c81572dd09bc13afe3c73f3968580e066ffd7106/diff:/var/lib/docker/overlay2/36955d81b4683248ff3810134ff8d36d50076bc5e9565766d6b548b4a383c3d6/diff:/var/lib/docker/overlay2/fd4287c6dfa2defc3b823a446018a3a8e1062034479143c82ef5279b98d0f24f/diff:/var/lib/docker/overlay2/6e58ac22e2862f1b0fd8d92b26742c89998bd1c91976672185bf7ec36e6c7c8f/diff:/var/lib/docker/overlay2/013c2aec81286c6d8bcc440a25faf5b7fe95840a707909fe129550e6a5efab60/diff:/var/lib/docker/overlay2/9040363c6e460938d5db9e2dfc5b3fba2bd5d6246207bdbfde534d304c41b16c/diff:/var/lib/docker/overlay2/35fd77e42010a58e1a93a5e5413c459f580bb1bcfa675567b14577ed5fe1fee1/diff:/var/lib/docker/overlay2/58593d97dcb57d20289353afd87db90c44abd7e6fcc5ddc4627d37c9c7fc5745/diff:/var/lib/docker/overlay2/cd6997e29753d29829ff52c24b738f42247b8ded39300b546befb1ca90eedaff/diff:/var/lib/docker/overlay2/0ec5211695dc79344c9c04a32cb9e5cb4ecd8f597998ea7219304ae348e62473/diff:/var/lib/docker/overlay2/1f927b8c5a60143746ec0d1e9df8cba7b8703a181edf7b2a50cade025eddb7cf/diff:/var/lib/docker/overlay2/0458ad09f3a988952fc34db86e33fc0531b203f9d68db0c9c274c659d9297e69/diff:/var/lib/docker/overlay2/31e081e52b5a4fe9eb8cf7d38ff9d72333694233d80580e33b09555d81dfa15c/diff:/var/lib/docker/overlay2/89f38bfe251617448c7b7dd18f968b335ed9b4f87ad3c6de148c67c488740f2c/diff:/var/lib/docker/overlay2/7c59d0d0d9f1265a138464aa803f5a0f6a94c92ed81b209e18ca5ae4f4bf6304/diff",
			"MergedDir": "/var/lib/docker/overlay2/21716898ff0a2e1b9284dd21ebbcf366de5f1a03dbb274be85bcc6dd78c050eb/merged",
			"UpperDir": "/var/lib/docker/overlay2/21716898ff0a2e1b9284dd21ebbcf366de5f1a03dbb274be85bcc6dd78c050eb/diff",
			"WorkDir": "/var/lib/docker/overlay2/21716898ff0a2e1b9284dd21ebbcf366de5f1a03dbb274be85bcc6dd78c050eb/work"
		},
		"Name": "overlay2"
	},
	"Mounts": [
		{
			"Type": "volume",
			"Name": "54df7f02ecc74a10d5ba0ced5e726ebc4bf4c47d2d3cb9992c6464ed76b823b9",
			"Source": "/var/lib/docker/volumes/54df7f02ecc74a10d5ba0ced5e726ebc4bf4c47d2d3cb9992c6464ed76b823b9/_data",
			"Destination": "/data",
			"Driver": "local",
			"Mode": "",
			"RW": true,
			"Propagation": ""
		}
	],
	"Config": {
		"Hostname": "namenode",
		"Domainname": "",
		"User": "hadoop",
		"AttachStdin": false,
		"AttachStdout": true,
		"AttachStderr": true,
		"ExposedPorts": {
			"9870/tcp": {}
		},
		"Tty": false,
		"OpenStdin": false,
		"StdinOnce": false,
		"Env": [
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.queue-mappings=",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.maximum-capacity=100",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.resource-calculator=org.apache.hadoop.yarn.util.resource.DefaultResourceCalculator",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.queue-mappings-override.enable=false",
			"YARN-SITE.XML_yarn.resourcemanager.hostname=resourcemanager",
			"CORE-SITE.XML_fs.default.name=hdfs://namenode",
			"YARN-SITE.XML_yarn.nodemanager.vmem-check-enabled=false",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.node-locality-delay=40",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.maximum-am-resource-percent=0.1",
			"MAPRED-SITE.XML_yarn.app.mapreduce.am.env=HADOOP_MAPRED_HOME=",
			"YARN-SITE.XML_yarn.nodemanager.aux-services=mapreduce_shuffle",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.maximum-applications=10000",
			"CORE-SITE.XML_fs.defaultFS=hdfs://namenode",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.acl_administer_queue=*",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.capacity=100",
			"HDFS-SITE.XML_dfs.namenode.rpc-address=namenode:8020",
			"HDFS-SITE.XML_dfs.replication=1",
			"ENSURE_NAMENODE_DIR=/tmp/hadoop-root/dfs/name",
			"MAPRED-SITE.XML_mapreduce.framework.name=yarn",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.queues=default",
			"YARN-SITE.XML_yarn.nodemanager.pmem-check-enabled=false",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.state=RUNNING",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.user-limit-factor=1",
			"MAPRED-SITE.XML_mapreduce.reduce.env=HADOOP_MAPRED_HOME=",
			"MAPRED-SITE.XML_mapreduce.map.env=HADOOP_MAPRED_HOME=",
			"YARN-SITE.XML_yarn.nodemanager.delete.debug-delay-sec=600",
			"CAPACITY-SCHEDULER.XML_yarn.scheduler.capacity.root.default.acl_submit_applications=*",
			"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/hadoop/bin",
			"JAVA_HOME=/usr/lib/jvm/jre/",
			"HADOOP_LOG_DIR=/var/log/hadoop",
			"HADOOP_CONF_DIR=/opt/hadoop/etc/hadoop"
		],
		"Cmd": [
			"hdfs",
			"namenode"
		],
		"Image": "apache/hadoop:3",
		"Volumes": {
			"/data": {}
		},
		"WorkingDir": "/opt/hadoop",
		"Entrypoint": [
			"/usr/local/bin/dumb-init",
			"--",
			"/opt/starter.sh"
		],
		"OnBuild": null,
		"Labels": {
			"com.docker.compose.config-hash": "c7842634697fb60dafae710994f95d031144c6a50b3f738ca85e3be938b99bf1",
			"com.docker.compose.container-number": "1",
			"com.docker.compose.depends_on": "",
			"com.docker.compose.image": "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
			"com.docker.compose.oneoff": "False",
			"com.docker.compose.project": "docker",
			"com.docker.compose.project.config_files": "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
			"com.docker.compose.project.working_dir": "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
			"com.docker.compose.service": "namenode",
			"com.docker.compose.version": "2.24.0",
			"org.label-schema.build-date": "20190305",
			"org.label-schema.license": "GPLv2",
			"org.label-schema.name": "CentOS Base Image",
			"org.label-schema.schema-version": "1.0",
			"org.label-schema.vendor": "CentOS"
		}
	},
	"NetworkSettings": {
		"Bridge": "",
		"SandboxID": "af6dffc63d784d40f48203a54f674eb63121d0651e8706eac4b9cf8dab10d8cb",
		"SandboxKey": "/var/run/docker/netns/af6dffc63d78",
		"Ports": {
			"9870/tcp": [
				{
					"HostIp": "0.0.0.0",
					"HostPort": "9870"
				}
			]
		},
		"HairpinMode": false,
		"LinkLocalIPv6Address": "",
		"LinkLocalIPv6PrefixLen": 0,
		"SecondaryIPAddresses": null,
		"SecondaryIPv6Addresses": null,
		"EndpointID": "",
		"Gateway": "",
		"GlobalIPv6Address": "",
		"GlobalIPv6PrefixLen": 0,
		"IPAddress": "",
		"IPPrefixLen": 0,
		"IPv6Gateway": "",
		"MacAddress": "",
		"Networks": {
			"docker_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": [
					"docker-namenode-1",
					"namenode",
					"1c5831bb21bc"
				],
				"MacAddress": "02:42:ac:12:00:05",
				"NetworkID": "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
				"EndpointID": "039a7b4a413fdcd987c9c9a02c14127ffbe5578c0a5cb1a3e3740a9a8123ab03",
				"Gateway": "172.18.0.1",
				"IPAddress": "172.18.0.5",
				"IPPrefixLen": 16,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"DriverOpts": null,
				"DNSNames": [
					"docker-namenode-1",
					"namenode",
					"1c5831bb21bc"
				]
			}
		}
	}
}