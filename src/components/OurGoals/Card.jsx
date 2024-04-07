import Image from "next/image";
const Card = ({ goal }) => {
  const { img, title, description } = goal;

  return (
    <div className="card  bg-base-100 shadow-xl border-2">
      <div className="card-body">
        <div className="bg-[#FEDAE3] p-2 w-12 h-12 flex items-center justify-center rounded-lg">
          <Image
            className=" h-[27px] w-[27px]"
            src={img}
            width={300}
            height={50}
            alt=""
          />
        </div>

        <h2 className="card-title font-semibold"> {title} !</h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default Card;
