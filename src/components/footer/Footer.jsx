import footerIcons from "../../assets/footer-icons.png";

function Footer() {
  return (
    <div className=' bg-[rgba(193,220,220,1)] mt-[100px] w-full h-[400px] justify-center gap-[100px] flex  flex-col' >
      <div footer-top className=' flex items-center justify-between px-[50px] ' >
        <div logo className=' ml-[40px] flex flex-col gap-[20px] ' >
          <h1 className=' text-[rgba(0,0,0,1)] font-medium moda text-3xl ' >GREENMIND</h1>
          <p className=' text-[rgba(30,30,30,0.5)] text-2xl font-medium w-[189px]  ' >We help you find your dream plant</p>
          <img className='w-[170px] ' src={footerIcons} alt="" />
        </div>
        <div uls className='mr-[100px] ' >
          <nav className=' flex items-center gap-[70px] ' >
            <ul className=' flex flex-col gap-[20px] ' >
              <span className=' text-[rgba(0,0,0,1)] text-lg font-bold ' >Information</span>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg ' >About</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Product</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Blog</li>
            </ul>
            <ul  className=' flex flex-col gap-[20px] '>
              <span className=' text-[rgba(0,0,0,1)] text-lg font-bold '>Company</span>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Community</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Career</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Our story</li>
            </ul>
            <ul  className=' flex flex-col gap-[20px] '>
              <span className=' text-[rgba(0,0,0,1)] text-lg font-bold '>Contact</span>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Getting Started</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>pricing</li>
              <li className=' text-[rgba(30,30,30,0.5)] font-medium text-lg '>Resources</li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <p className=' text-lg font-medium text-[rgba(30,30,30,0.5)] pl-[40px]  ' >2023 all Right Reserved Term of use GREENMIND</p>
      </div>
    </div>
  );
}

export default Footer;
