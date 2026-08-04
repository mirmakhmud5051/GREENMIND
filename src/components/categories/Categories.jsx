import categories1 from "../../assets/categories1.png";
import categories2 from "../../assets/categories2.png";
import categories3 from "../../assets/categories3.png";

function Categories() {
  return (
    <div className="flex items-center flex-col justify-center mt-[100px]">
      <div className='text-center mb-[50px] items-center justify-center'>
        <h1 className=' text-3xl font-bold mb-[10px]  '>Categories</h1>
        <p className=' text-lg font-medium text-[rgba(30,30,30,0.5)] '>Find what your are looking for </p>
      </div>
      <div className='flex items-center justify-center w-full h-[700px]  gap-[100px] pl-[50px] bg-[rgba(193,220,220,1)]'>
        <div className='flex flex-col items-center justify-center gap-[15px] mt-[40px]'>
          <img src={categories1} alt="" />
          <h2 className=' text-[rgba(30,30,30,1)] text-lg font-bold '>Natural Plants</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-[15px]'>
          <img src={categories2} alt="" />
          <h2 className=' text-[rgba(30,30,30,1)] text-lg font-bold '>Plant Accessories</h2>
          <p className=' text-[rgba(30,30,30,0.5)] text-lg font-medium '>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='w-[146px] h-[50px] bg-[rgba(255,255,255,1)] rounded-2xl'>Explore </button>
        </div>
        <div className='flex flex-col items-center justify-center gap-[15px] mt-[40px]'>
          <img src={categories3} alt="" />
          <h2 className=' text-[rgba(30,30,30,1)] text-lg font-bold '>Artificial plants</h2>
        </div>
      </div>
    </div>
  );
}

export default Categories;
