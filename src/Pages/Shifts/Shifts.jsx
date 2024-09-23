import { useEffect, useState } from 'react'
import ShiftCard from '../../Components/LibraryShift/ShiftsCard/ShiftCard'
import { fetchShifts } from '../../APIs/authApi'

const Shifts = () => {

    const [shifts,setShifts] = useState([])
    const fourHourShifts = shifts.filter(shift => shift.shift_type === "4 Hour Shift")
    const eightHourShifts = shifts.filter(shift => shift.shift_type === "8 Hour Shift")
    const twelveHourShifts = shifts.filter(shift => shift.shift_type === "12 Hour Shift")
    // console.log(fourHourShifts)

    async function fetchData() {
        const fetchedShifts = await fetchShifts()
        setShifts(fetchedShifts)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center px-3 pt-10 font-bold'>Four Hour Shifts</h1>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-6 border-b-2 pb-20 place-items-center">

                    {
                        fourHourShifts.map((shift,index)=>{
                            return <ShiftCard
                            key={index}
                            id={shift._id} 
                            name={shift.shift_name} 
                            startTime={shift.start_time} 
                            endTime={shift.end_time}
                            price = {shift.discounted_price}
                            />
                        })
                    }                  
                </div>
            </div>
            <div>
                <h1 className='text-4xl text-center px-3 pt-10 font-bold'>Eight Hour Shifts</h1>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-6 border-b-2 pb-20 place-items-center">

                    {
                        eightHourShifts.map((shift,index)=>{
                            return <ShiftCard
                            key={index}
                            id={shift._id} 
                            name={shift.shift_name} 
                            startTime={shift.start_time} 
                            endTime={shift.end_time}
                            price = {shift.discounted_price}
                            />
                        })
                    }  
                    
                </div>
            </div>

            <div>
                <h1 className='text-4xl text-center px-3 pt-10 font-bold'>Twelve Hour Shifts</h1>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-6 border-b-2 pb-20 place-items-center">
                {
                        twelveHourShifts.map((shift,index)=>{
                            return <ShiftCard
                            key={index}
                            id={shift._id} 
                            name={shift.shift_name.toUpperCase()} 
                            startTime={shift.start_time} 
                            endTime={shift.end_time}
                            price = {shift.discounted_price}
                            />
                        })
                    }  
                </div>
            </div>
        </div>
    )
}

export default Shifts
