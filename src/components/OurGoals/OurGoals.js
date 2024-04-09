"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const OurGoals = () => {
  const [goals, setGoals] = useState();

  useEffect(() => {
    fetch("/goals.json")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <div className="my-10 px-4 lg:px-40 ">
      <div className="text-center">
        <span className="our_badge">
          Goals
        </span>
        <h2 className="primary_title"> Our Goals</h2>
      </div>
      {/* card section */}
      <div>
        <div className="service_card_container">
          {goals?.map((goal) => (
            <Card key={goal.id} goal={goal}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
