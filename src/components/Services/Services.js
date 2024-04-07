"use client";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-16">
      <div className="text-center ">
        <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
          Services
        </span>
        <h2 className="text-3xl font-semibold my-2 mt-3">Our Services</h2>
      </div>

      <div className="lg:px-40 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
