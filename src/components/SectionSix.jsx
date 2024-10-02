import React from 'react'

const SectionSix = () => {
    return (
        <section className="bg-blue12">
            <div className="max-w-[1240px] m-auto py-14 font-robRegular">
                <h2 className="font-robRegular text-center text-3xl text-white">
                    Join our waiting list
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 w-full mt-8">
                    <div className=" bg-white md:w-[500px] px-3 py-2 flex justify-between items-center gap-5  rounded-md">
                        <input
                            type="text"
                            className="bg-red-3001 outline-none w-4/6 sm:text-sm md:text-lg font-robRegular"
                            placeholder="Enter your email"
                        />
                        <button className="rounded-[5px] p-3 font-robRegular items-center justify-center w-1/2 font-robRegular md:w-48 bg-blue12 text-white">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix
