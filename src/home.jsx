import React from 'react'
import Head from "./head";
import Bars from './bars';
function Home() {
  return (
    <div className="h-screen cover w-screen flex flex-col gap-4 items-center justify-center">
      <Head />
      <Bars/>
    </div>
  );
}

export default Home
