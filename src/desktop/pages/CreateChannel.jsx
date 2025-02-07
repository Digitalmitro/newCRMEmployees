import { useNavigate } from "react-router-dom";

function CreateChannel() {
    const navigate=useNavigate()
    const handleAddPeople=()=>{
        navigate("/addpeople-channel")
    }
  return (
    <div className="w-full p-4 border-b-2 border-orange-400 space-y-2 ">
        <h2 className="text-[14px] font-medium">
        Create a channel
        </h2>
        <p className="text-[13px]">Name</p>
        <input type="text" className="border-b-2 border-gray-300 outline-none w-full  text-[12px] p-1"
        placeholder="project-peigon"/>
        <div className="flex justify-end">
        <button className="text-[12px] text-orange-400 border border-orange-400 rounded px-3 cursor-pointer" onClick={handleAddPeople}>Next</button>
        </div>
    </div>
  );
}

export default CreateChannel;
