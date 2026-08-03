// images
import background from "../../assets/hero_background-black.png";
import direct from "../../assets/hero_direct.png";
import direct2 from "../../assets/hero_direct2.png";
import flower from "../../assets/hero_flower.png";

// icons
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
<div className=' flex items-center justify-center '>
      <div className="flex items-center justify-around  bg-[rgba(193,220,220,1)] w-[1350px] rounded-[50px] ">
      <div className=" flex flex-col gap-[30px] ">
        <h1 className=' text-6xl font-extrabold w-[400px] ' >Buy your dream plants </h1>
        <div className=' flex  gap-[30px] text-lg '>
          <div>
            <p className=' text-3xl font-medium '>50+</p>
            <p>Plant Species</p>
          </div>
          <div>
            <p className=' text-3xl font-medium ' >100+</p>
            <p>Customers</p>
          </div>
        </div>
        <div className=' flex w-[400px] bg-white items-center px-[20px] rounded-2xl  '>
          <input className='w-[370px] h-[65px] bg-white ' type="text" placeholder="What are you looking for?" />
    <div className='w-[40px] h-[40px] bg-[rgba(193,220,220,1)] flex items-center justify-center rounded-[10px] '>
          <CiSearch  />

    </div>
        </div>
      </div>
      <div className=" relative ">
        <img className=" ml-[60px] mt-[6px] " src={flower} alt="flower" />
        <img src={direct} className='absolute bottom-[30px] left-[-40px]' alt="" />
        <img src={direct2} className=' absolute top-[100px] right-[3px] ' alt="" />
      </div>
    </div>

</div>
  );
}

export default Hero;
