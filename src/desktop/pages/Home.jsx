import attendence from "../../assets/desktop/attendence.svg";
import calls from "../../assets/desktop/calls.svg";
import sales from "../../assets/desktop/saleshome.svg";
import project from "../../assets/desktop/projectshome.svg";
import transfer from "../../assets/desktop/transferhome.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate()
  const handleAttendaneList=()=>{
    navigate("/attendance-list")
  }
  const handleCallback=()=>{
    navigate("/callbacklist")
  }
  const handleSales=()=>{
    navigate("/callbacklist")
  }
  const handleTransfer=()=>{
    navigate("/transferlist")

  }
  return (
    <div className=" w-full  ">
      
      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-8 w-full p-6">
        <div className="p-4 border rounded-md text-center h-[150px] w-full flex flex-col justify-center items-center cursor-pointer" onClick={handleAttendaneList}>
          <img src={attendence} alt="" className="w-[50px] h-[50px]" />
          <p className="flex flex-col p-2 text-[12px]">
            Attendee List: February 87
          </p>
        </div>
        <div className="p-4 border rounded-md text-center h-[150px] w-full flex flex-col justify-center items-center cursor-pointer" onClick={handleCallback}>
          <img src={calls} alt="" className="w-[50px] h-[50px]" />
          <p className="flex flex-col p-2 text-[12px]">All Callback: 1</p>
        </div>
        <div className="p-4 border rounded-md text-center h-[150px] w-full flex flex-col justify-center items-center cursor-pointer" onClick={handleSales}>
          <img src={sales} alt="" className="w-[50px] h-[50px]" />
          <p className="flex flex-col p-2 text-[12px]">All Sales: 0</p>
        </div>
        <div className="p-4 border rounded-md text-center h-[150px] w-full flex flex-col justify-center items-center cursor-pointer" onClick={handleTransfer}>
          <img src={transfer} alt="" className="w-[50px] h-[50px]" />
          <p className="flex flex-col p-2 text-[12px]"> All Transfer: 0</p>
        </div>
        <div className="p-4 border rounded-md text-center h-[150px] w-full flex flex-col justify-center items-center cursor-pointer" >
          <img src={project} alt="" className="w-[50px] h-[50px]" />
          <p className="flex flex-col p-2 text-[12px]"> Projects: 0</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
