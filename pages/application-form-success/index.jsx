import Logo from '../../assets/logo.png'
import Checkmark from '../../assets/Checkmark.png'
import Image from "next/image";

const Index =()=>{
    return(
        <div className="w-[694px] h-[680px] mx-auto mt-4 mb-[104px] pt-[16px] border-2 border-slate-100 shadow-lg">
            <Image className="mt-[47px] ml-[67px]" src='/logo.png' width='67' height='41' alt="" />
            <Image className="ml-[310px] mt-[93px] mb-[33px]" src='/Checkmark.png' width='100' height='99' alt="" />
            <p className="w-[409px] h-[28px] text-xl font-semibold ml-[143px] mr-[142px] mb-[20px]">
                Your application was submitted successfully
            </p>

            <p className=" text-center text-[#7A7A7A] w-[561px] h-[52px] ml-[67px] mr-[66px] mb-[80px] text-base font-normal">
                A preapproval letter would be sent to you within 24 hours in your email. We will get in touch with you soon with additional details.
            </p>

            <button className="w-[147px] h-[60px] border border-[#2D465A] rounded-[4px] text-xl py-18 pl-[45px] pr-[44px] ml-[274px] mr-[273px] mb-[228px]">
                Finish
            </button>

        </div>
    )
}

export default Index