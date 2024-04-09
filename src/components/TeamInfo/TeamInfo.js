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
    <div className="team_section py-10">
      <div className="text-center ">
        <span className="our_badge">
          Team
        </span>
        <h2 className="primary_title">Our Wonderful Team</h2>
      </div>

      <div className="service_card_container !mt-10">
        {teamInfos?.map((teamInfo) => (
          <Card key={teamInfo?.id} teamInfo={teamInfo}></Card>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
