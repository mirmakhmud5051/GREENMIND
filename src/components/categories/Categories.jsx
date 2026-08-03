import categories1 from "../../assets/categories1.png";
import categories2 from "../../assets/categories2.png";
import categories3 from "../../assets/categories3.png";

function Categories() {
  return (
    <div className="flex items-center flex-col justify-center mt-[100px]">
      <div className='text-center mb-[50px] items-center justify-center'>
        <h1 className=' text-3xl font-bold  '>Categories</h1>
        <p className=' text-lg font-medium text-[rgba(30,30,30,0.5)] '>Find what your are looking for </p>
      </div>
      <div className='flex items-center justify-center gap-[100px] ml-[20px]'>
        <div>
          <img src={categories1} alt="" />
          <h2>Natural Plants</h2>
        </div>
        <div>
          <img src={categories2} alt="" />
          <h2>Plant Accessories</h2>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Explore </button>
        </div>
        <div>
          <img src={categories3} alt="" />
          <h2>Artificial plants</h2>
        </div>
      </div>
    </div>
  );
}

export default Categories;
