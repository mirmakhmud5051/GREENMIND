import circle1 from "../../assets/circle1.png";
import circle2 from "../../assets/circle2.png";
import circle3 from "../../assets/circle3.png";

function About() {
  return (
    <div className=" flex flex-col items-center justify-center mt-[100px]">
      <div className="text-center">
        <h1 className=" text-3xl font-bold ">About us</h1>
        <p className=" text-[rgba(30,30,30,0.5)] text-lg font-medium ">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className=" flex items-center justify-center gap-[120px] mt-[40px] ">
        <div className=" flex flex-col items-center justify-center text-center gap-[10px]  ">
          <img className=" w-[100px] " src={circle1} alt="" />
          <h2 className=" text-lg font-bold ">Large Assortment</h2>
          <p className=" text-lg font-medium text-[rgba(30,30,30,0.5)] w-[350px] ">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center text-center gap-[10px]  ">
          <img src={circle2} alt="" />
          <h2 className=" text-lg font-bold ">Fast & Free Shipping</h2>
          <p className=" text-lg font-medium text-[rgba(30,30,30,0.5)] w-[350px] ">
           
            4-days or less delivery time, free shipping and an expedited
            delivery opinion.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center text-center gap-[10px] ">
          <img src={circle3} alt="" />
          <h2 className=" text-lg font-bold ">24/7 Support</h2>
          <p className=" text-lg font-medium text-[rgba(30,30,30,0.5)] w-[350px] ">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
