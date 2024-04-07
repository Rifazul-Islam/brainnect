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

  //   console.log(goals);
  return (
    <div className="my-10 px-4 lg:px-40 ">
      <div className="text-center">
        <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
          Goals
        </span>
        <h2 className="text-3xl font-semibold my-2 mt-3"> Our Goals</h2>
      </div>
      {/* card section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {goals?.map((goal) => (
            <Card key={goal.id} goal={goal}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
