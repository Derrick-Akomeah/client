import React from "react";
import BackLogo from '../../assets/back.png'
import MiniHouse from '../../assets/miniHouse.png'

const LoanProcessing = ()=>{
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

            <div className="flex-col -mt-[1px] ml-[66px] mr-[139px] text-left">
                <p className="text-[#234B6D]  mb-[20px]">This is the last step to close on property</p>
                <p className="w-[307px] h-[29px] mb-[20px] font-semibold text-2xl">
                    Complete Loan Processing
                </p>
                <p className="w-[678px] h-[52px] mb-[66px] text-base font-normal text-[#7A7A7A]">Please check your email for a loan estimate form and go through carefully before signing to confirm the receipt of this loan
                </p>

                <div className="flex-col">
                    <p className="mt-[16px] mb-[20px]  font-normal text-base">Proof of Asset</p>
                    <p className="w-[498px] h-[52px] mb-[12px] text-[#7A7A7A]">
                        Kindly upload a copy of the signed document here <span className=" text-base text-black font-normal">(valid for 10 days)</span>
                    </p>

                    <div className="flex mb-[80px]">
                        <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[290px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                        </input>
                        <div className="bg-orange-500 w-[122px] h-[48px] rounded-r-md">
                            <p className="text-white text-sm font-bold px-[24.5px] py-[14px]">Browse file</p>
                        </div>
                        
                    </div>

                    <div className="flex space-x-[30px]">
                        <button className="w-[165px] h-[60px] py-[18px] pl-[41px] pr-[40px] text-orange-500 font-semibold border border-orange-500 rounded-[4px]">
                            <p className="text-left w-[120px] h-[24px]">Cancel Loan</p>
                        </button>
                        <button className="w-[165px] h-[60px] py-[18px] px-[45px] text-white font-semibold bg-orange-500 rounded-[4px]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default LoanProcessing
    