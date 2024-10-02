import React from 'react'

const SectionOne = () => {
  return (
    <section className="bg-blue12  md:pt-10 ">
      <div className="h-[70vh] md:h-[65vh] flex flex-col justify-center items-center max-w-[1240px] pt-[200px] md:mt-[90px] md:pt-20 pb-48 px-5 m-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-5 w-full md:w-2/3 ">
            <h1 className="text-3xl md:text-[3.5rem] md:leading-[55px] text-white text-center font-robSemiBold">
              Master Your Finances, Effortlessly Organize Receipts & Track
              Expenses
            </h1>
            <p className="leading-[20px] font-robRegular text-lg text-center text-white md:text-xl">
              Reshiito simplifies receipt recording and expense tracking and
              caters to diverse business requirements with ease.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 w-full">
            <button className="rounded-[5px] p-3 font-robRegular items-center justify-center w-1/2 font-robRegular md:w-48 bg-white text-blue12 font-medium">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
