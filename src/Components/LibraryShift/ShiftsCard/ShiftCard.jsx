import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
const ShiftCard = ({id,name,startTime,endTime,price}) => {

  const{user} = useAuth()
  return (
    <div>

      <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-fit border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-3xl font-semibold text-center border-b-2 pb-2">{name}<br />
            <span className="text-2xl">({startTime} - {endTime})</span>
          </h3>
          <p className="text-3xl font-semibold text-center"> ₹ {price}<span className="text-lg">/mo</span></p>
        </div>
        <ul className="md:font-semibold flex flex-col gap-2 mt-3 font-bold text-lg md:text-base">
          <li className="flex items-center justify-between gap-4">Quit and Peaceful Atmosphere <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">Air-Conditioning Facility <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">High Speed Internet <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">Newspapers Available ( Hindi & English ) <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">Magzines <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">Early Access <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          <li className="flex items-center justify-between gap-4">Affordable Price <span className="text-green-500 text-2xl md:text-xl "><FaRegCheckCircle /></span></li>
          
        </ul>
        <div className="mt-4 w-full border-2">
          <Link to={`${user?`/shifts/${id}/view-plans`:"/login"}`} className=""><button className="rounded-sm w-full border-2 py-2 bg-orange-500 text-white font-semibold hover:bg-orange-800 hover:text-white">View Plans</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
