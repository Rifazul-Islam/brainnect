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
    <div className="my-5 md:my-10">
      <div className="text-center ">
        <span className="our_badge">
          Services
        </span>
        <h2 className="primary_title">Our Services</h2>
      </div>

      <div className="service_card_container">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
