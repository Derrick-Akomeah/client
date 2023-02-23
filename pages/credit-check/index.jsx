import React from "react";
import { Link } from "react-router-dom";
import BackLogo from '../../assets/back.png'
import MiniHouse from '../../assets/miniHouse.png'

const CreditCheck = ()=>{
    return(
        <div className="flex">
            <div>
                <div className="ml-[120px] mb-[40px] mr-[82px]">
                    <img src={BackLogo} alt="" />
                    <h1 className="text-left text-[#FA790F] text-5xl font-semibold mt-[8px]">
                        Mortgage Hub
                    </h1>
                </div>

                <div className=" ml-[120px] flex space-x-[16px] mb-[45px]">
                    <img src={MiniHouse} alt="" />
                    <div className="text-left">
                        <h1>Modern Apartment</h1>
                        <p className="text-[#7A7A7A]">East Legon Hills</p>
                        <p className="text-[#7A7A7A]">3 bedroom</p>
                    </div>
                </div>

                <p className="ml-[120px] mb-[16px] text-left text-[#7A7A7A]">Amount Requested: $ 2300</p>
                <p className="ml-[120px] mb-[16px] text-left text-[#7A7A7A]">Lender: Zenith</p>
            </div>

            <div className=" -mt-12 border-l border-[#DADADA] w-[2px] h-[951px]"></div>

            <div className="flex-col ml-[66px] mr-[139px] text-left">
                <p className="w-[728px] h-[119px]  font-semibold text-2xl">
                    Before we begin, we need to do a soft credit check to see <p className="mt-4">how much you can afford.</p>
                </p>
                <p className="w-[531px] h-[24px] mt-[20px] mb-[66px] text-xl text-[#7A7A7A]">This step is necessary as it is required by the industry.</p>

                <div className="flex space-x-[30px]">
                    <Link to='/mortgage'>
                        <button className="w-[165px] h-[60px] py-[18px] pl-[41px] pr-[40px] text-orange-500 border border-orange-500 rounded-[4px]">
                            Previous
                        </button>
                    </Link>
                    
                    <Link to='/know-you'>
                        <button className="w-[165px] h-[60px] py-[18px] px-[45px] text-white bg-orange-500 rounded-[4px]">
                            Let's go
                        </button>
                    
                    </Link>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default CreditCheck
    