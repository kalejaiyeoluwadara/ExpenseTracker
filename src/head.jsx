import React from 'react'

function Head() {
  return (
    <div
      style={{
        backgroundColor: "hsl(10, 79%, 65%)",
      }}
      className="flex sm:w-[50%] w-[85%] justify-between items-center rounded-xl px-2 py-4  text-white"
    >
      <div className="flex flex-col gap-3">
        <p className="font-[400]">My balance</p>
        <p className="font-[700] text-[25px] ">$921.48</p>
      </div>
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
    </div>
  );
}

export default Head
