import { ReactTyped } from "react-typed"
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px]  mt-12 md:mt-20 w-full h-[50vh] md:h-[70vh] mx-auto text-center flex flex-col  ">
        <p className="text-[#00df9a] font-bold p-2 ">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Fast, flexible financing for </p>
          <ReactTyped className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 md:pl-6 sm:pl-4" strings={["BTB", "BTC", "SASS"]} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>

    </div>
  )
}

export default Hero