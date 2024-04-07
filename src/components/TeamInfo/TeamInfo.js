"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const TeamInfo = () => {
  const [teamInfos, setTeamInfos] = useState();

  useEffect(() => {
    fetch("/teamInfo.json")
      .then((res) => res.json())
      .then((data) => setTeamInfos(data));
  }, []);
  return (
    <div className="lg:px-40 ">
      <div className="text-center ">
        <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
          Team
        </span>
        <h2 className="text-3xl font-semibold my-2 mt-3">Our Wonderful Team</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-7 px-4">
        {teamInfos?.map((teamInfo) => (
          <Card key={teamInfo?.id} teamInfo={teamInfo}></Card>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
