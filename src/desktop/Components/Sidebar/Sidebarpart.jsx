import { Link, useNavigate } from "react-router-dom";
import home from "../../../assets/desktop/home.svg";
import attendence from "../../../assets/desktop/attendence.svg";
import bidirection from "../../../assets/desktop/bidirection.svg";
import book from "../../../assets/desktop/book.svg";
import calls from "../../../assets/desktop/calls.svg";
import notes from "../../../assets/desktop/notes.svg";
import sales from "../../../assets/desktop/sales.svg";
import arrow from "../../../assets/desktop/arrow.svg";
import edit from "../../../assets/desktop/edit.svg";
import logo from "../../../assets/desktop/logo.svg";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";


function Sidebarpart() {
  const {getChannels}=useAuth()
  const [employees, setEmployees] = useState([]);
  const [channels, setChannels] = useState([]);
  const { getAllUsers, userData } = useAuth();

  useEffect(() => {
    const allUsers = async () => {
      const users = await getAllUsers();

      setEmployees(users);
    };

    const channel=async()=>{
      const data=await getChannels()
      setChannels(data)
    }
    channel()
    allUsers();
  }, []);

  const handleCowrokers=()=>{
    navigate("/addCoworker")
  }

  const navigate = useNavigate();
  const handleChat = (name,id) => {
    navigate("/chat", {
      state: {
        name,id
      },
    });
    console.log(name,id)
  };
  const handleChannel = () => {
    navigate("/create-channel");
  };
  const handleChannelChat=(name,id)=>{
    navigate("/channelchat",{
      state: {
        name,id
      },
    });
  }

  

  return (
    <div className="  flex ">
      <div className="px-3 pt-2 border border-orange-400">
        {/* Navigation Links */}
        <nav className="flex flex-col gap-1  items-center">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-center">
              <img src={logo} alt="" className="h-[70px] w-[70px]" />
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 p-2 ">
            <div className="flex flex-col items-center">
              <img src={home} alt="" className="h-[40px] w-[40px]" />
              <p className="text-[12px] font-semibold">Home</p>
            </div>
          </Link>
          <Link to="/attendance" className="flex items-center gap-2 p-2 ">
            <div className="flex flex-col items-center">
              <img src={attendence} alt="" className="h-[30px] w-[30px]" />
              <p className="text-[12px] font-semibold">Attendance</p>
            </div>
          </Link>
          <Link to="/projects" className="flex items-center gap-2 p-2 ">
            <div className="flex flex-col items-center">
              <img src={book} alt="" className="h-[35px] w-[35px]" />
              <p className="text-[12px] font-semibold">Projects</p>
            </div>
          </Link>
          <Link to="/callbacklist" className="flex items-center gap-2 p-2 ">
            <div className="flex flex-col items-center">
              <img src={calls} alt="" className="h-[30px] w-[30px]" />
              <p className="text-[12px] font-semibold">Callback</p>
            </div>
          </Link>
          <Link to="/transferlist" className="flex items-center gap-2 p-2">
            <div className="flex flex-col items-center">
              <img src={bidirection} alt="" className="h-[30px] w-[30px]" />
              <p className="text-[12px] font-semibold">Transfer</p>
            </div>
          </Link>
          <Link to="/saleslist" className="flex items-center gap-2 p-2">
            <div className="flex flex-col items-center">
              <img src={sales} alt="" className="h-[30px] w-[30px]" />
              <p className="text-[12px] font-semibold">Sales</p>
            </div>
          </Link>
          <Link to="/notes" className="flex items-center gap-2 p-2 ">
            <div className="flex flex-col items-center">
              <img src={notes} alt="" className="h-[35px] w-[35px]" />
              <p className="text-[12px] font-semibold">Notes</p>
            </div>
          </Link>
          <div className="flex flex-col items-center">
          <p
          className=" rounded border items-center  flex justify-center w-10  text-2xl font-medium text-white bg-orange-600"
        >{userData?.name?.charAt(0)}</p>
          </div>
        </nav>
      </div>

      <div className="bg-gray-200 w-[300px] p-4 border border-orange-400">
        <div className="flex justify-between pt-4 mb-4">
          <h2 className="text-[15px] font-medium   flex gap-2">
            {userData?.name}
            <img src={arrow} alt="" className="w-[8px] pt-1" />
          </h2>
          <img src={edit} alt="" className="w-[10px] h-[10px]" />
        </div>

        {/* Channels Section */}
        <div className="mb-4 pt-8">
          <h3 className="text-[12px] font-semibold text-gray-600 flex gap-2">
            Channels <img src={arrow} alt="" className="w-[8px] pt-1" />
          </h3>
          <ul className="mt-2">
            {channels.map((channel)=>(
              <li key={channel._id}>
              <p className="block p-2 text-gray-700 text-[12px] cursor-pointer" onClick={()=>handleChannelChat(channel.name,channel._id)}>
                {channel.name}
              </p>
            </li>
            ))
              
            }
            <li>
              <p
                className="block p-2 text-gray-700 text-[10px] cursor-pointer"
                onClick={handleChannel}
              >
                + Add Channels
              </p>
            </li>
          </ul>
        </div>

        {/* Messages Section */}
        <div className="mb-4">
          <h3 className="text-[12px] font-semibold text-gray-600 flex gap-2">
            Messages <img src={arrow} alt="" className="w-[8px] pt-1" />
          </h3>
          <ul className="mt-2">
            {employees.slice(0,4).map((user, i) => (
              <li
                key={i}
                className="block p-2 text-gray-700 text-[12px] cursor-pointer"
                onClick={() => handleChat(user.name, user._id)}
              >
                {user.name}
              </li>
            ))}
            <li className="block p-2 text-gray-700 text-[12px] cursor-pointer" onClick={handleCowrokers}>
              + Add Coworker
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebarpart;
