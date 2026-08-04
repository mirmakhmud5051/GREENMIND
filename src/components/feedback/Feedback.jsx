import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";

function Feedback() {
  return (
    <div className="flex items-center justify-center flex-col gap-[100px] mt-[100px]  ">
      <div className="flex items-center justify-around">
        <h1 className=" text-3xl font-bold">
          What customers say about GREENMIND?
        </h1>
      </div>
      <div className=" flex gap-[80px] ">
        <div className=" bg-[rgba(193,220,220,1)] rounded-2xl flex flex-col py-[30px] w-[800px  ] pl-[100px] ">
          <p className=" w-[600px] text-lg font-medium text-[rgba(30,30,30,0.75)] ">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className=" flex items-center justify-between px-[60px] ">
            <img src={man1} alt="" />
            <h2 className=" pr-[300px] text-[rgba(30,30,30,1)] text-lg font-bold  ">
              Jhon Doe
            </h2>
            <p className=" text-lg font-bold text-[rgba(30,30,30,1)] mr-[100px] ">
              4.5
            </p>
          </div>
        </div>
        <div className=" bg-[rgba(193,220,220,1)] rounded-2xl flex flex-col py-[30px] w-[800px  ] ">
          <p className=" w-[600px] text-lg font-medium text-[rgba(30,30,30,0.75)] ">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className=" flex items-center justify-between px-[60px] ">
            <img src={man2} alt="" />
            <h2 className=" pr-[300px] text-[rgba(30,30,30,1)] text-lg font-bold  ">
              Jhon Doe
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
