import React from "react";
import Logo from '../../assets/logo.png'
import Checkmark from '../../assets/Checkmark.png'

const MortgageFormSuccess =()=>{
    return(
        <div className="w-[694px] h-[680px] mx-auto mt-4 mb-[104px] pt-[16px] border-2 border-slate-100 shadow-lg">
            <img className="w-[67px] h-[41px] mt-[47px] ml-[67px]" src={Logo} alt="" />
            <img className="w-[100px] h-[99px] ml-[310px] mt-[93px] mb-[33px]" src={Checkmark} alt="" />
            <p className="w-[409px] h-[28px] text-xl font-semibold ml-[143px] mr-[142px] mb-[20px]">
                Your form was submitted successfully
            </p>

            <p className=" text-center text-[#7A7A7A] w-[561px] h-[52px] ml-[67px] mr-[66px] mb-[80px] text-base font-normal">
                Your mortgage application is going through an underwriting process. You will be contacted soon to close on the property.
            </p>

            <button className="w-[147px] h-[60px] border border-[#2D465A] rounded-[4px] text-xl py-18 pl-[45px] pr-[44px] ml-[274px] mr-[273px] mb-[228px]">
                Finish
            </button>

        </div>
    )
}

export default MortgageFormSuccess