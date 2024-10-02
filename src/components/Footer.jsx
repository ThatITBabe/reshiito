import React from 'react'
import playStore from './playstore.webp'
import appleStore from './apple-store.svg'

const Footer = () => {
    return (
        <footer className="pt-14">
            <div className="px-4 max-w-[1240px] m-auto flex flex-col md:flex-row justify-start gap-5 md:gap-2">
                <ul className="basis-[33%] borderx px-2">
                    <h3 className="font-robSemiBold mb-4">Products</h3>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Receipt maker
                    </li>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Invoice maker
                    </li>
                </ul>
                <ul className="basis-[33%] borderx px-2">
                    <h3 className="font-robSemiBold mb-4">Features</h3>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Microsoft 365
                    </li>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Sage
                    </li>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Quickbooks
                    </li>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Xero
                    </li>
                </ul>
                <ul className="basis-[33%] borderx px-2">
                    <h3 className="font-robSemiBold mb-4">Company</h3>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        About
                    </li>
                    <li className="font-robRegular text-[14px] py-1 cursor-pointer">
                        Policies
                    </li>
                </ul>
            </div>
            <div className="py-10 px-4 max-w-[1240px] m-auto flex items-center gap-3">
                <img
                    alt=""
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: 'transparent' }}
                    src={appleStore}
                />
                <img
                    alt=""
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: 'transparent' }}
                    srcSet={playStore}
                    src={playStore}
                />
            </div>
        </footer>
    )
}

export default Footer
