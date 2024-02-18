import React from "react";
import Stat from "../components/Stat";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 h-full  ">
      <Stat title="CPU Usage" />
      <Stat title="Memory Usage" />
      <Stat title="Network Usage" />
      <Stat title="Disk Usage" />
    </div>
  );
}
