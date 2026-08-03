//  images
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flower2.png";
import flower3 from "../../assets/flower3.png";

function Banner() {
  return (
    <div className=" flex items-center justify-center mt-[100px] ">
      <div className=" flex items-center justify-center  gap-[40px] ">
        <div className=" flex flex-col items-start gap-[10px]  justify-start ">
          <h1 className=" text-3xl font-bold w-[250px] ">
            Best Selling Plants
          </h1>
          <p className="w-[190px]">
            Easiest way to healthy life by buying your favourite plants
          </p>
          <button className='w-[140px] h-[40px] rounded-2xl bg-[rgba(193,220,220,1)]'>See More </button>
        </div>
        <div >
          <img src={flower1} alt="" />
          <h3 className=' text-lg font-medium mt-[10px] '>Natural Plants</h3>
          <span className=' text-lg font-medium text-[rgba(30,30,30,0.5)]'>$1,400.00</span>
        </div>
        <div>
          <img src={flower2} alt="" />
          <h3 className=' text-lg font-medium mt-[10px] '>Artificial Plants</h3>
          <span  className=' text-lg font-medium text-[rgba(30,30,30,0.5)]'>$900,00</span>
        </div>
        <div>
          <img src={flower3} alt="" />
          <h3 className=' text-lg font-medium mt-[10px] '>Artificial Plants</h3>
          <span  className=' text-lg font-medium text-[rgba(30,30,30,0.5)]'>$3,500.00</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
