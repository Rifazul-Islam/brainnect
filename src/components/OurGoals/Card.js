import Image from "next/image";
const Card = ({ goal }) => {
  const { img, title, description } = goal;

  return (
    <div className="service_card">
      <div>
        <div className="service_icon">
          <Image
            src={img}
            width={300}
            height={50}
            alt="service-icon"
          />
        </div>

        <h2> {title}</h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default Card;
