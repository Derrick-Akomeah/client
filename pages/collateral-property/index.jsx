import React from "react";
import { Link } from "react-router-dom";
import BackLogo from '../../assets/back.png'
import MiniHouse from '../../assets/miniHouse.png'

const CollateralProperty = ()=>{
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

            <div className=" -mt-12 border-l border-[#DADADA] w-[2px] h-[1381px]"></div>

            <div className="flex-col -mt-2 ml-[66px] mr-[139px] text-left">
                <p className="text-[#234B6D] mb-[20px]">Just a few more steps to go...</p>
                <p className="w-[231px] h-[29px] mb-[20px] font-semibold text-2xl">
                    Collateral Property
                </p>
                <p className="w-[678px] h-[52px] mb-[66px] text-xl text-[#7A7A7A]">Donec ac eu diam ipsum donec neque odio. Aliquam faucibus sit elit lacinia ultrices nulla proin.  Dui risus sit sollicitudin vitae facilisi sed neque sagittis
                </p>

                <div className="flex-col">
                    <label for="" className="block mb-2 mt-4 text-left text-md  text-black ">
                        Select Property Type
                    </label>
                    <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[437px] h-[48px] p-2.5 border-2 border-gray-200 rounded-sm" required placeholder="-Select option-">
                    </input>
                    <div className="flex space-x-[190px]">
                        <div>
                            <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black ">
                            How much is your property worth?
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                        <div>
                            <label for="firstName" className="block w-[306px] h-[38px] mb-[10px] mt-4 text-left text-md  text-black">
                                Do you currently have a loan on this property?
                            </label>

                            <div className="flex mb-[85px]">
                                <input type="radio" id="firstName" className=" text-gray-900 text-sm w-[16px] accent-orange-500 mr-[8px]" required>
                                </input>
                                <label for="firstName" className="block mb-2 text-left text-md  text-black pt-1 pl-1 pr-12">
                                    Yes
                                </label>
                    
                                <input type="radio" id="firstName" className=" text-gray-900 text-sm w-[16px] accent-orange-500 mr-[8px]" required>
                                </input>
                                <label for="firstName" className="block mb-2 text-left text-md  text-black pt-1 pl-1 pr-12">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <p className="mt-[16px] mb-[20px]  font-normal text-base">Proof of Asset</p>
                    <p className="w-[498px] h-[52px] mb-[12px] text-[#7A7A7A]">
                        Please upload purchase receipts, title deed or any other document as proof
                    </p>

                    <div className="flex mb-[80px]">
                        <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[290px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                        </input>
                        <div className="bg-orange-500 w-[122px] h-[48px] rounded-r-md">
                            <p className="text-white text-sm font-bold px-[24.5px] py-[14px]">Browse file</p>
                        </div>
                        
                    </div>

                    <div className="flex space-x-[30px]">
                        <Link to='/business-information'>
                            <button className="w-[165px] h-[60px] py-[18px] pl-[41px] pr-[40px] text-orange-500 font-semibold border border-orange-500 rounded-[4px]">
                                Previous
                            </button>
                        </Link>
                        
                        <Link to='/application-success'>
                            <button className="w-[165px] h-[60px] py-[18px] px-[45px] text-white font-semibold bg-orange-500 rounded-[4px]">
                                Complete
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default CollateralProperty
    