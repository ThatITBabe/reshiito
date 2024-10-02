import React, { useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isFeaturesOpen, setFeaturesOpen] = useState(false);
    const [isCompanyOpen, setCompanyOpen] = useState(false);

    const toggleProducts = () => setProductsOpen(!isProductsOpen);
    const toggleFeatures = () => setFeaturesOpen(!isFeaturesOpen);
    const toggleCompany = () => setCompanyOpen(!isCompanyOpen);

    return (
        <header className={`fixed w-full z-40 py-4 md:py-2 top-0 ${isScrolled ? 'bg-white' : 'bg-blue12'}`}>
            <div className="px-4 max-w-[1240px] m-auto flex justify-between items-center ">
                <div className="hidden md:flex gap-10 items-center">
                    <img
                        alt="logo"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="bg-white"
                        style={{ color: 'transparent' }}
                        srcSet="./favicon.webp"
                        src="./favicon.webp"
                    />

                    <ul className="hidden md:flex gap-8">

                        <li className="font-robRegular relative cursor-pointer group">
                            <div className={`peer ${isScrolled ? 'text-black' : 'text-white'}`}>Products</div>

                            <div className="hidden group-hover:block absolute top-5 bg-white shadow-md rounded-md p-5 w-64 h-64 z-10">
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Receipt maker</div>
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Invoice maker</div>
                            </div>
                        </li>

                        <li className={`font-robRegular cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>
                            Pricing
                        </li>

                        <li className="font-robRegular relative cursor-pointer group">
                            <div className={`peer ${isScrolled ? 'text-black' : 'text-white'}`}>Features</div>

                            <div className="hidden group-hover:block absolute top-5 bg-white shadow-md rounded-md p-5 w-64 h-64 z-10">
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Microsoft 365</div>
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Sage</div>
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Quickbooks</div>
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Xero</div>
                            </div>
                        </li>

                        <li className="font-robRegular relative cursor-pointer group">
                            <div className={`peer ${isScrolled ? 'text-black' : 'text-white'}`}>Company</div>

                            <div className="hidden group-hover:block absolute top-5 bg-white shadow-md rounded-md p-3 w-64 h-64 z-10">
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">About</div>
                                <div className="p-3 mb-2 rounded-md cursor-pointer hover:bg-blue-100">Policies</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex gap-4">
                    <button className={`rounded-[5px] p-3 font-robRegular items-center justify-center  w-[150px] py-2 border ${isScrolled ? 'border-blue12 text-blue12 bg-white' : 'bg-blue12 border-white text-white'}`}>
                        Get a demo
                    </button>
                    <button className={`rounded-[5px] p-3 font-robRegular items-center justify-center px-[15px] w-[100px] py-2 ${isScrolled ? 'bg-blue12 text-white' : 'bg-white text-blue12'}`}>
                        Sign In
                    </button>
                </div>



                <div className="w-full flex justify-between items-center md:hidden">
                    <div className={`h-full bg-white fixed top-0 right-0 w-full py-5 px-5 z-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <img
                                alt="logo"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                className="bg-white"
                                style={{ color: 'transparent' }}
                                src="./favicon.webp"
                            />
                            <button className="block md:hidden" onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                                </svg>
                            </button>
                        </div>





                        <div className="mt-12 flex flex-col gap-4 font-robMedium">
                            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleProducts}>
                                Products
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            {isProductsOpen ? (
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">Receipt maker</div>
                                    <div className="font-robRegular">Invoice maker</div>
                                </div>
                            ) : null}

                            <div>Pricing</div>

                            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleFeatures}>
                                Features
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            {isFeaturesOpen ? (
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">Microsoft 365</div>
                                    <div className="font-robRegular">Sage</div>
                                    <div className="font-robRegular">Quickbooks</div>
                                    <div className="font-robRegular">Xero</div>
                                </div>
                            ) : null}

                            <div className="flex items-center justify-between gap-4 cursor-pointer" onClick={toggleCompany}>
                                Company
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            {isCompanyOpen ? (
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">About</div>
                                    <div className="font-robRegular">Policies</div>
                                </div>
                            ) : null}
                        </div>









                        <div className="pt-10 left-0 my-10 w-full flex items-center justify-center">
                            <button className="rounded-[5px] p-3 font-robRegular items-center justify-center w-3/5 font-robRegular bg-blue12 text-white font-medium m-auto">
                                Get a Demo
                            </button>
                        </div>
                    </div>
                    {/* Menu toggle button */}
                    <button className="block md:hidden" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill={isScrolled ? '#0b72fd' : 'white'}
                            viewBox="0 0 256 256"
                        >
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                        </svg>
                    </button>

                    <img
                        alt="logo"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="bg-white"
                        style={{ color: 'transparent' }}
                        srcSet="./favicon.webp"
                        src="./favicon.webp"
                    />

                    <a href="/" className={`font-robMedium text-[15px] underline underline-offset-4 ${isScrolled ? 'text-blue12' : 'text-white'}`}>
                        Get a demo
                    </a>

                </div>


                {/* <div className="w-full flex justify-between items-center md:hidden">
                    <div className="h-full bg-white fixed top-0 right-0 w-full md:hidden py-5 px-5 z-10 slide-left">
                        <div className="flex items-center justify-between">
                            <img
                                alt="logo"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                data-nimg="1"
                                className="bg-white"
                                style={{ color: 'transparent' }}
                                srcSet="./favicon.webp"
                                src="./favicon.webp"
                            />
                            <button className="block md:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-12 flex flex-col gap-4 font-robMedium">
                            <div className="flex items-center justify-between gap-4">
                                Products
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            <div className="accordion_accordionBody__4vFS7">
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">Receipt maker</div>
                                    <div className="font-robRegular">Invoice maker</div>
                                </div>
                            </div>
                            <div className="">Pricing</div>
                            <div className="flex items-center justify-between gap-4">
                                Features
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            <div className="accordion_accordionBody__4vFS7">
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">Microsoft 365</div>
                                    <div className="font-robRegular">Sage</div>
                                    <div className="font-robRegular">Quickbooks</div>
                                    <div className="font-robRegular">Xero</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                Company
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                </svg>
                            </div>
                            <div className="accordion_accordionBody__4vFS7">
                                <div className="bg-blue100 px-2 py-3 flex flex-col gap-3 rounded-[10px]">
                                    <div className="font-robRegular">About</div>
                                    <div className="font-robRegular">Policies</div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 left-0 my-10 w-full flex items-center justify-center">
                            <button className="rounded-[5px] p-3 font-robRegular items-center justify-center w-3/5 font-robRegular bg-blue12 text-white font-medium m-auto">
                                Get a Demo
                            </button>
                        </div>
                    </div>
                    <button className="block md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="white"
                            viewBox="0 0 256 256"
                        >
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                        </svg>
                    </button>
                    <img
                        alt="logo"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        className="bg-white"
                        style={{ color: 'transparent' }}
                        srcSet="/_next/image?url=%2Flogos%2Fnew-logo-11-blue-bg.png&w=64&q=75 1x, /_next/image?url=%2Flogos%2Fnew-logo-11-blue-bg.png&w=128&q=75 2x"
                        src="/_next/image?url=%2Flogos%2Fnew-logo-11-blue-bg.png&w=128&q=75"
                    />
                    <a href="/" className={`font-robMedium text-[15px] underline underline-offset-4 ${isScrolled ? 'text-blue12' : 'text-white'}`}>
                        Get a demo
                    </a>
                </div> */}
            </div>
        </header >
    )
}

export default Header





