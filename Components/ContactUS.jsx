import { IoLocationSharp } from "react-icons/io5";
function ContactUS() {
  return (
    <div className="main w-full h-auto">

        <div className="title px-[12rem]">
            <h1 className="hidden  text-[40px] md:flex flex-col font-bold text-blue-800">CONTACT <span className="px-2 text-red-800 md:px-0">US</span></h1>
        </div>


        <h1 className=" flex items-center justify-center  font-bold text-[40px] md:hidden  text-blue-800">CONTACT <span className="px-2 text-red-800 md:px-0">US</span></h1>

      <div className="boxs gap-4 flex flex-wrap items-center justify-center p-10">

        <div className="box1 bg-blue-900 w-[450px] h-[250px] rounded-[20px] text-white p-12 flex flex-col  gap-4">
            <IoLocationSharp className="text-[30px] text-red-500"/>
            <h1 className="font-bold text-[20px]">OUR OFFICE</h1>
            <p className="flex flex-col">Thiruvananthapuram,<span>
            Kerala</span></p>
        </div>
        <div className="box1 bg-blue-900 w-[450px] h-[250px] rounded-[20px] text-white p-12 flex flex-col  gap-4">
            <IoLocationSharp className="text-[30px] text-red-500"/>
            <h1 className="font-bold text-[20px]">OUR OFFICE</h1>
            <p className="flex flex-col">Thiruvananthapuram,<span>
            Kerala</span></p>
        </div>
        <div className="box1 bg-blue-900 w-[450px] h-[250px] rounded-[20px] text-white p-12 flex flex-col  gap-4">
            <IoLocationSharp className="text-[30px] text-red-500"/>
            <h1 className="font-bold text-[20px]">OUR OFFICE</h1>
            <p className="flex flex-col">Thiruvananthapuram,<span>
            Kerala</span></p>
        </div>
      </div>

      
    </div>
  )
}

export default ContactUS
