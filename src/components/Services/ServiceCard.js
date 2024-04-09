import Image from "next/image";
const ServiceCard = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="service_card">
      <div>
        <div className="service_icon">
          <Image
            src={img}
            width={300}
            height={50}
            alt=""
          />
        </div>

        <h2> {title} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default ServiceCard;
