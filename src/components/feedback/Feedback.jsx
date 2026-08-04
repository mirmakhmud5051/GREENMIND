import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";




function Feedback() {
  return (
    <div className='flex items-center justify-center  '>
      <div className='flex items-center justify-around'>
        <h1 className=' text-lg bg-amber-900 ' >What customers say about GREENMIND?</h1>
        <div></div>
      </div>
      <div  className=' flex  ' >
        <div>
          <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div>
            <img src={man1} alt="" />
            <h2>Jhon Doe</h2>
          </div>
        <p>4.5</p>
        </div>
        <div>
          <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div>
            <img src={man2} alt="" />
            <h2>Jhon Doe</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
