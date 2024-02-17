import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000";

export const getContainers = async () => {
  return [
    {
      Id: "63d00d949213061a9f08414a19652a6e07eb777fd158b2484dfc5df9d9e6f972",
      Names: ["/docker-kibana-1"],
      Image: "kibana:7.17.11",
      ImageID:
        "sha256:5eba4b56fffc5ea8b982395f85a0083a47648e10bb8ebdfc36587f0cdad5344e",
      Command: "/bin/tini -- /usr/local/bin/kibana-docker",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 5601,
          PublicPort: 5601,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "d9216f69a45e2a2086cd792ec186befdd13f2fd7ec81108f51ec2630cf5c803b",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:5eba4b56fffc5ea8b982395f85a0083a47648e10bb8ebdfc36587f0cdad5344e",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "kibana",
        "com.docker.compose.version": "2.24.0",
        "org.label-schema.build-date": "2023-06-22T11:10:02.061Z",
        "org.label-schema.license": "Elastic License",
        "org.label-schema.name": "Kibana",
        "org.label-schema.schema-version": "1.0",
        "org.label-schema.url": "https://www.elastic.co/products/kibana",
        "org.label-schema.usage":
          "https://www.elastic.co/guide/en/kibana/reference/index.html",
        "org.label-schema.vcs-ref": "c0c9b57095766c85a113bf186ae5007965391d41",
        "org.label-schema.vcs-url": "https://github.com/elastic/kibana",
        "org.label-schema.vendor": "Elastic",
        "org.label-schema.version": "7.17.11",
        "org.opencontainers.image.created": "2023-06-22T11:10:02.061Z",
        "org.opencontainers.image.documentation":
          "https://www.elastic.co/guide/en/kibana/reference/index.html",
        "org.opencontainers.image.licenses": "Elastic License",
        "org.opencontainers.image.ref.name": "ubuntu",
        "org.opencontainers.image.revision":
          "c0c9b57095766c85a113bf186ae5007965391d41",
        "org.opencontainers.image.source": "https://github.com/elastic/kibana",
        "org.opencontainers.image.title": "Kibana",
        "org.opencontainers.image.url":
          "https://www.elastic.co/products/kibana",
        "org.opencontainers.image.vendor": "Elastic",
        "org.opencontainers.image.version": "7.17.11",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:04",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "1c0ded7ac653bbb8c28f78ff5dbbd8f3f63cfefc13e95fc52dc4d8638d5d93d5",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.4",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [],
    },
    {
      Id: "5a6a7601e10df6601aad8b6d24729dbab938992baafbc3b5678a1efe1b024976",
      Names: ["/docker-elastic-1"],
      Image: "elasticsearch:7.17.11",
      ImageID:
        "sha256:399cfbf7383e1ab737c4795e137c01309caeb7ffa8b7e341cdc0b62e23f41b3b",
      Command: "/bin/tini -- /usr/local/bin/docker-entrypoint.sh eswrapper",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 9200,
          PublicPort: 9200,
          Type: "tcp",
        },
        {
          PrivatePort: 9300,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "362361052c1e2ee5cc44bb55375d9091c44e92787c0b1e3678dca6373c9611bc",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:399cfbf7383e1ab737c4795e137c01309caeb7ffa8b7e341cdc0b62e23f41b3b",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "elastic",
        "com.docker.compose.version": "2.24.0",
        "org.label-schema.build-date": "2023-06-23T05:33:12.261262042Z",
        "org.label-schema.license": "Elastic-License-2.0",
        "org.label-schema.name": "Elasticsearch",
        "org.label-schema.schema-version": "1.0",
        "org.label-schema.url": "https://www.elastic.co/products/elasticsearch",
        "org.label-schema.usage":
          "https://www.elastic.co/guide/en/elasticsearch/reference/index.html",
        "org.label-schema.vcs-ref": "eeedb98c60326ea3d46caef960fb4c77958fb885",
        "org.label-schema.vcs-url": "https://github.com/elastic/elasticsearch",
        "org.label-schema.vendor": "Elastic",
        "org.label-schema.version": "7.17.11",
        "org.opencontainers.image.created": "2023-06-23T05:33:12.261262042Z",
        "org.opencontainers.image.documentation":
          "https://www.elastic.co/guide/en/elasticsearch/reference/index.html",
        "org.opencontainers.image.licenses": "Elastic-License-2.0",
        "org.opencontainers.image.ref.name": "ubuntu",
        "org.opencontainers.image.revision":
          "eeedb98c60326ea3d46caef960fb4c77958fb885",
        "org.opencontainers.image.source":
          "https://github.com/elastic/elasticsearch",
        "org.opencontainers.image.title": "Elasticsearch",
        "org.opencontainers.image.url":
          "https://www.elastic.co/products/elasticsearch",
        "org.opencontainers.image.vendor": "Elastic",
        "org.opencontainers.image.version": "7.17.11",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:02",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "19ccf7a60a7c71a85bcc0e5c79ea1b6d47752c891b1cc72fb7ca288bf17cfc8e",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.2",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [],
    },
    {
      Id: "4ac5a89ef6241532b4cd40e667bfa03a170b4e8ba77a14ec7eb6bc32ba5b1a43",
      Names: ["/docker-kafka-1"],
      Image: "bitnami/kafka:latest",
      ImageID:
        "sha256:38c838e888c9a23606fbbfc4110d80b923e0b95ca68a4d7991e4b3892b03d5cc",
      Command:
        "/opt/bitnami/scripts/kafka/entrypoint.sh /opt/bitnami/scripts/kafka/run.sh",
      Created: 1708149185,
      Ports: [
        {
          PrivatePort: 9092,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "a8c6b4cf60b7670e75b5d2b585c208fb2e4270fe081b3868335303219a7e1bdf",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:38c838e888c9a23606fbbfc4110d80b923e0b95ca68a4d7991e4b3892b03d5cc",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "kafka",
        "com.docker.compose.version": "2.24.0",
        "com.vmware.cp.artifact.flavor":
          "sha256:1e1b4657a77f0d47e9220f0c37b9bf7802581b93214fff7d1bd2364c8bf22e8e",
        "org.opencontainers.image.base.name":
          "docker.io/bitnami/minideb:bullseye",
        "org.opencontainers.image.created": "2024-01-27T19:03:50Z",
        "org.opencontainers.image.description":
          "Application packaged by VMware, Inc",
        "org.opencontainers.image.licenses": "Apache-2.0",
        "org.opencontainers.image.ref.name": "3.6.1-debian-11-r4",
        "org.opencontainers.image.title": "kafka",
        "org.opencontainers.image.vendor": "VMware, Inc.",
        "org.opencontainers.image.version": "3.6.1",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:03",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "f7c08824cc9d3a3b34e8f01a79479810cab14d677f4efb796c42392afa6a94af",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.3",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [],
    },
    {
      Id: "9164a4ecefe50262f643640b27fd9003f5882ef279c130592596d1cb0cad798d",
      Names: ["/docker-minio-1"],
      Image: "quay.io/minio/minio",
      ImageID:
        "sha256:b0a829ccfcf3677bcf0c3b518b66a976adbac7111039ddb589c5b64acc7138ff",
      Command:
        "/usr/bin/docker-entrypoint.sh server /data --console-address :9001",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 9000,
          PublicPort: 9000,
          Type: "tcp",
        },
        {
          IP: "0.0.0.0",
          PrivatePort: 9001,
          PublicPort: 9001,
          Type: "tcp",
        },
      ],
      Labels: {
        architecture: "aarch64",
        "build-date": "2024-01-18T10:06:04",
        "com.docker.compose.config-hash":
          "652f72f553b545ce937962a67478e6962fd36f590ae052240e740e7c2525d8ab",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:b0a829ccfcf3677bcf0c3b518b66a976adbac7111039ddb589c5b64acc7138ff",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "minio",
        "com.docker.compose.version": "2.24.0",
        "com.redhat.component": "ubi9-micro-container",
        "com.redhat.license_terms":
          "https://www.redhat.com/en/about/red-hat-end-user-license-agreements#UBI",
        description:
          "MinIO object storage is fundamentally different. Designed for performance and the S3 API, it is 100% open-source. MinIO is ideal for large, private cloud environments with stringent security requirements and delivers mission-critical availability across a diverse range of workloads.",
        "desktop.docker.io/binds/0/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/data",
        "desktop.docker.io/binds/0/SourceKind": "hostFile",
        "desktop.docker.io/binds/0/Target": "/data",
        "distribution-scope": "public",
        "io.buildah.version": "1.29.0",
        "io.k8s.description":
          "Very small image which doesn't install the package manager.",
        "io.k8s.display-name": "Ubi9-micro",
        "io.openshift.expose-services": "",
        maintainer: "MinIO Inc <dev@min.io>",
        name: "MinIO",
        release: "RELEASE.2024-01-29T03-56-32Z",
        summary:
          "MinIO is a High Performance Object Storage, API compatible with Amazon S3 cloud storage service.",
        url: "https://access.redhat.com/containers/#/registry.access.redhat.com/ubi9/ubi-micro/images/9.3-13",
        "vcs-ref": "303dc144996db01765d69e8ea45d2d617d953e42",
        "vcs-type": "git",
        vendor: "MinIO Inc <dev@min.io>",
        version: "RELEASE.2024-01-29T03-56-32Z",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:07",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "db52611f101b9d3d51e0cb4b0860830fc8136731a9f4cfd8525ce2c04532001d",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.7",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/data",
          Destination: "/data",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
      ],
    },
    {
      Id: "f5b3f298ec833614502098bfb969997ffb866b34918336b217a9971178813d09",
      Names: ["/docker-resourcemanager-1"],
      Image: "apache/hadoop:3",
      ImageID:
        "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
      Command:
        "/usr/local/bin/dumb-init -- /opt/starter.sh yarn resourcemanager",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 8088,
          PublicPort: 8088,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "0036e05608888694a026e9e6a16bf47147159d37adbac32393762c48fd0c9672",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "resourcemanager",
        "com.docker.compose.version": "2.24.0",
        "desktop.docker.io/binds/0/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/test.sh",
        "desktop.docker.io/binds/0/SourceKind": "hostFile",
        "desktop.docker.io/binds/0/Target": "/opt/test.sh",
        "org.label-schema.build-date": "20190305",
        "org.label-schema.license": "GPLv2",
        "org.label-schema.name": "CentOS Base Image",
        "org.label-schema.schema-version": "1.0",
        "org.label-schema.vendor": "CentOS",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:0b",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "2315424334c11983135249f4a39c0cb889ab001d164c64e5f6806f9700457bb1",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.11",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "volume",
          Name: "455dac93c88e7855aac0e49f3a2aa4396b13ca20bec022fc5f985ceb2c077183",
          Source: "",
          Destination: "/data",
          Driver: "local",
          Mode: "",
          RW: true,
          Propagation: "",
        },
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/test.sh",
          Destination: "/opt/test.sh",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
      ],
    },
    {
      Id: "6e4fb22cec8ef3af2ae1e3d806645eaa2a36a263fd6be0ceb326f7362b53b877",
      Names: ["/docker-spark-1"],
      Image: "docker.io/deadcoder11u2/datahive:spark",
      ImageID:
        "sha256:1dcb5ef7c8582a2b73e366c8d3211f6de31e318b3a1fdf1bb0f43a3aa678b99e",
      Command: "java -jar /opt/datahive/spark.jar",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 8080,
          PublicPort: 8085,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "e564f3fde78c9206283da55bb8f918fb0f5b725f684d04ee8b27151ea56407ed",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:1dcb5ef7c8582a2b73e366c8d3211f6de31e318b3a1fdf1bb0f43a3aa678b99e",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "spark",
        "com.docker.compose.version": "2.24.0",
        "desktop.docker.io/binds/0/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/app/spark",
        "desktop.docker.io/binds/0/SourceKind": "hostFile",
        "desktop.docker.io/binds/0/Target": "/opt/datahive/spark",
        "desktop.docker.io/binds/1/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/m2",
        "desktop.docker.io/binds/1/SourceKind": "hostFile",
        "desktop.docker.io/binds/1/Target": "/root/.m2",
        "desktop.docker.io/binds/2/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/app/proto",
        "desktop.docker.io/binds/2/SourceKind": "hostFile",
        "desktop.docker.io/binds/2/Target": "/opt/datahive/proto",
        "org.opencontainers.image.ref.name": "ubuntu",
        "org.opencontainers.image.version": "20.04",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:08",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "f9513f308e60dd365f80c030144dbc70326f32da021978c995cae1c62c8c7e25",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.8",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/app/proto",
          Destination: "/opt/datahive/proto",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/app/spark",
          Destination: "/opt/datahive/spark",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/m2",
          Destination: "/root/.m2",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
      ],
    },
    {
      Id: "9f16494022b5e6136284cbcd92a97ca8ddfb6b6926f8e041be30acc8a506cabb",
      Names: ["/docker-dev-ingestion-1"],
      Image: "docker.io/deadcoder11u2/datahive:ingestion",
      ImageID:
        "sha256:4d7e3ed0b2205915201ce4a16ec4dc6eea4743b9e19b6603e4f739a97e457122",
      Command: "java -jar /opt/datahive/ingestion.jar",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 8080,
          PublicPort: 8081,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "0805960b0222f980e1e9dd92b28dd2bf08dca20a3ef977ac73734a932f406701",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:4d7e3ed0b2205915201ce4a16ec4dc6eea4743b9e19b6603e4f739a97e457122",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "dev-ingestion",
        "com.docker.compose.version": "2.24.0",
        "desktop.docker.io/binds/0/Source":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/m2",
        "desktop.docker.io/binds/0/SourceKind": "hostFile",
        "desktop.docker.io/binds/0/Target": "/root/.m2",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:09",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "20748f3ba95b59ae7910990cea1340ae01112d7e34eb26cc0057baeb95c8d3c1",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.9",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "bind",
          Source:
            "/host_mnt/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/m2",
          Destination: "/root/.m2",
          Mode: "rw",
          RW: true,
          Propagation: "rprivate",
        },
      ],
    },
    {
      Id: "1c5831bb21bc88a32b9517f1a03dae56e42e0292fc3602148ca64a59e549dadc",
      Names: ["/docker-namenode-1"],
      Image: "apache/hadoop:3",
      ImageID:
        "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
      Command: "/usr/local/bin/dumb-init -- /opt/starter.sh hdfs namenode",
      Created: 1708149185,
      Ports: [
        {
          IP: "0.0.0.0",
          PrivatePort: 9870,
          PublicPort: 9870,
          Type: "tcp",
        },
      ],
      Labels: {
        "com.docker.compose.config-hash":
          "c7842634697fb60dafae710994f95d031144c6a50b3f738ca85e3be938b99bf1",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "namenode",
        "com.docker.compose.version": "2.24.0",
        "org.label-schema.build-date": "20190305",
        "org.label-schema.license": "GPLv2",
        "org.label-schema.name": "CentOS Base Image",
        "org.label-schema.schema-version": "1.0",
        "org.label-schema.vendor": "CentOS",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:05",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "039a7b4a413fdcd987c9c9a02c14127ffbe5578c0a5cb1a3e3740a9a8123ab03",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.5",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "volume",
          Name: "54df7f02ecc74a10d5ba0ced5e726ebc4bf4c47d2d3cb9992c6464ed76b823b9",
          Source: "",
          Destination: "/data",
          Driver: "local",
          Mode: "",
          RW: true,
          Propagation: "",
        },
      ],
    },
    {
      Id: "39caa98d68ce6d1a49c2d998b309040231db0838f13a5bb14f823934daaf7bd7",
      Names: ["/docker-nodemanager-1"],
      Image: "apache/hadoop:3",
      ImageID:
        "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
      Command: "/usr/local/bin/dumb-init -- /opt/starter.sh yarn nodemanager",
      Created: 1708149185,
      Ports: [],
      Labels: {
        "com.docker.compose.config-hash":
          "391cce35da1dac50ee63fa732f6e70f9ef193f0a3c6d812cfc8895d40f6b0c73",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image":
          "sha256:82a636eb83ecbc15fd1d6b3cb37247c4642926831695cad7cfc90573c4bcef73",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "docker",
        "com.docker.compose.project.config_files":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker/docker-compose.yml",
        "com.docker.compose.project.working_dir":
          "/Users/vaibhavgawad/Desktop/New Datahive/datahive/docker",
        "com.docker.compose.service": "nodemanager",
        "com.docker.compose.version": "2.24.0",
        "org.label-schema.build-date": "20190305",
        "org.label-schema.license": "GPLv2",
        "org.label-schema.name": "CentOS Base Image",
        "org.label-schema.schema-version": "1.0",
        "org.label-schema.vendor": "CentOS",
      },
      State: "paused",
      Status: "Up 3 hours (Paused)",
      HostConfig: {
        NetworkMode: "docker_default",
      },
      NetworkSettings: {
        Networks: {
          docker_default: {
            IPAMConfig: null,
            Links: null,
            Aliases: null,
            MacAddress: "02:42:ac:12:00:06",
            NetworkID:
              "053cfff60446cbb3bf5f16e8b0524e431ce263bb377a931d4a7e9f2371113eab",
            EndpointID:
              "978a6379855c9e6feae39049b40eed42bf6db071fc995a1d5b1c449e112c29b6",
            Gateway: "172.18.0.1",
            IPAddress: "172.18.0.6",
            IPPrefixLen: 16,
            IPv6Gateway: "",
            GlobalIPv6Address: "",
            GlobalIPv6PrefixLen: 0,
            DriverOpts: null,
            DNSNames: null,
          },
        },
      },
      Mounts: [
        {
          Type: "volume",
          Name: "ee38dac56f38690ec9362f3be2f8bf7d6a7dbcfa23eaf813e28ed8ac52d2e2ce",
          Source: "",
          Destination: "/data",
          Driver: "local",
          Mode: "",
          RW: true,
          Propagation: "",
        },
      ],
    },
  ];
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

export const getImage = async (id) =>{
  return ({
    "Id": "sha256:1dcb5ef7c8582a2b73e366c8d3211f6de31e318b3a1fdf1bb0f43a3aa678b99e",
    "RepoTags": [
        "deadcoder11u2/datahive:spark"
    ],
    "RepoDigests": [],
    "Parent": "",
    "Comment": "buildkit.dockerfile.v0",
    "Created": "2024-01-30T10:16:32.800049667Z",
    "Container": "",
    "ContainerConfig": {
        "Hostname": "",
        "Domainname": "",
        "User": "",
        "AttachStdin": false,
        "AttachStdout": false,
        "AttachStderr": false,
        "Tty": false,
        "OpenStdin": false,
        "StdinOnce": false,
        "Env": null,
        "Cmd": null,
        "Image": "",
        "Volumes": null,
        "WorkingDir": "",
        "Entrypoint": null,
        "OnBuild": null,
        "Labels": null
    },
    "DockerVersion": "",
    "Author": "",
    "Config": {
        "Hostname": "",
        "Domainname": "",
        "User": "spark",
        "AttachStdin": false,
        "AttachStdout": false,
        "AttachStderr": false,
        "Tty": false,
        "OpenStdin": false,
        "StdinOnce": false,
        "Env": [
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
            "SPARK_USER=spark"
        ],
        "Cmd": null,
        "Image": "",
        "Volumes": null,
        "WorkingDir": "/opt/spark/work-dir",
        "Entrypoint": [
            "java",
            "-jar",
            "/opt/datahive/spark.jar"
        ],
        "OnBuild": null,
        "Labels": {
            "com.docker.compose.project": "docker",
            "com.docker.compose.service": "spark",
            "com.docker.compose.version": "2.24.0",
            "org.opencontainers.image.ref.name": "ubuntu",
            "org.opencontainers.image.version": "20.04"
        }
    },
    "Architecture": "arm64",
    "Variant": "v8",
    "Os": "linux",
    "Size": 968303931,
    "GraphDriver": {
        "Data": {
            "LowerDir": "/var/lib/docker/overlay2/153529b747022931066fe4a2744bf4ed8fd73b4bf95be2c5cb9282b2211ae72b/diff:/var/lib/docker/overlay2/be54806eb06233d58f3abfbc5a56e5604c1af34354fb3cbbe2969e3c69b30e2f/diff:/var/lib/docker/overlay2/93d9ac9723edf4ffc61f9688160c01c30cca6b7c7cea6775f9acf9b371e62c3d/diff:/var/lib/docker/overlay2/127baec377c477d24650341e4ff7c6a79b0d222aba9595e055fb52a678bcea76/diff:/var/lib/docker/overlay2/caef6df97054f36008736f48e5e5857b507eba5234052bf1ce4442287a0f236b/diff:/var/lib/docker/overlay2/ad3f5b94ef28280b40e46d69380f7b9fa06f68f074e57dcb3ed2dc13626e5f0d/diff:/var/lib/docker/overlay2/4fbc3161189e2cfc55b2d7e6cbebfccf4210823cc9ae31b88c79296b0710c608/diff:/var/lib/docker/overlay2/5a7adaac906a8834ed020c4742ea30a9d371594264e029468ea229b7b3335596/diff:/var/lib/docker/overlay2/daa6b91286b7d72e3889390a5b335cf35d2ed812f99f4433c612b51d7d263b46/diff:/var/lib/docker/overlay2/e373f3ca1985eb4310c0006bcabd12a95ea31ff4f995656f4fcd43f753225935/diff",
            "MergedDir": "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/merged",
            "UpperDir": "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/diff",
            "WorkDir": "/var/lib/docker/overlay2/11olnl5011uvqgjyuy4uhnd3z/work"
        },
        "Name": "overlay2"
    },
    "RootFS": {
        "Type": "layers",
        "Layers": [
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
            "sha256:6786f45e08f7c5d7d9d33c50cdb450e56f65a08c2fa733d389a07bad3e33d8e8"
        ]
    },
    "Metadata": {
        "LastTagTime": "2024-01-30T10:16:32.885809042Z"
    }
});
}
