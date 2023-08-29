import React,{useState} from 'react'
import data from './data.json'
import {motion,AnimatePresence} from 'framer-motion'
const Bar = ({amount,day}) =>{
    const [disp,setDisp] = useState(false);
    return (
      <div
        onMouseOver={() => {
          setDisp(true);
        }}
        onMouseLeave={() => {
          setDisp(false);
        }}
        className="flex relative flex-col items-center justify-center"
      >
        <AnimatePresence>
          {disp && (
            <motion.p
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}
              exit={{
                opacity:0
              }}
              transition={{
                duration:0.6
              }}
              style={{
                backgroundColor: "hsl(25, 47%, 15%)",
              }}
              className="px-2 py-1 -top-10 absolute rounded-md text-white"
            >
              ${amount}
            </motion.p>
          )}
        </AnimatePresence>

        <div
          style={{
            height: `${amount * 3}px`,
          }}
          className={`${
            amount < 50 ? "bg-red-400" : "bg-blue-300"
          } w-[40px] cursor-pointer rounded-md `}
        ></div>
        <p>{day}</p>
      </div>
    );
}
function Bars() {
  return (
    <div className=" h-[500px] justify-between px-8 py-6 flex flex-col sm:w-[50%] w-[85%] bg-white rounded-xl ">
      <div>
        <p className="font-[500] text-[25px] ">Spending - Last 7 days</p>
      </div>
      <div className="flex  h-[400px] mb-6 justify-around items-end">
        {
        data.map((d,id) =>{
            const {day,amount} = d;
            return(
                <Bar key={id} amount={amount} day={day} />
            )
        })
       }
       
       
      
      </div>
      <div className="flex br pt-10 justify-between items-center">
        <div>
          <p className="opacity-[0.7]">Total this month</p>
          <p className="font-[600] text-[40px] ">$478.33</p>
        </div>
        <div className="text-end">
          <p className="font-[600] text-[16px] ">+2.4%</p>
          <p className="text-[13px] opacity-[0.7]">from last moth</p>
        </div>
      </div>
    </div>
  );
}

export default Bars
