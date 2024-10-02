import React from 'react'
import PhoneMockup from './PhoneMockup'


const SectionFour = () => {
    return (
        <section className="">
            <div className="max-w-[1240px] m-auto py-[2rem] md:py-[5rem] flex items-center justify-center px-5 md:px-9">
                <div className="flex flex-col md:flex-row pb-10 pt-10 px-5 bg-blue12 w-full rounded-[25px] gap-5">
                    <PhoneMockup />
                    <div className="w-full md:w-1/2 flex flex-col pt-5 font-robRegular ">
                        <h2 className="text-3xl mb-5 text-white">
                            Create receipt from templates
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
                            placeat dolor, architecto fugit maiores aliquid modi explicabo.
                            Optio consequatur ducimus, corrupti harum magni fuga ipsam nulla
                            nobis, debitis maiores quas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFour
