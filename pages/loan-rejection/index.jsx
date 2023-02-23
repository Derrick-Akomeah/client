import React from "react";
import Logo from '../../assets/logo.png'
import RejectedLoan from '../../assets/loanRejection.png'


const LoanRejection=()=>{
    return(
        <div className=" font-inter">
            <div className="w-[600px] h-[880px] mx-[420px] my-[72px] pt-[30px]">
                <img className="w-[76px] h-[46px] mx-[262px] mb-[30px]" src={Logo} alt="" />
                <p className="w-[218px] h-[60px] ml-[204px] mr-[203px] mb-[22px] text-[28px] font-semibold leading-[60px]">
                    Loan Rejection
                </p>

                <img className="w-[216px] h-[160px] ml-[204px] mr-[203px] mb-[30.63px]" src={RejectedLoan} alt="" />

                <div className="w-[473px] h-[326px] ml-[79px] mr-[48px]">
                    <p className="text-left text-xs leading-[16.8px] font-normal">
                        Hello Hamida,
                        <br /><br />
                        This mail is to notify you about the rejection of your loan request that you submitted to Zenith Bank. Unfortunately, you failed to fulfil the criteria that is prescribed for the loan approval at our Bank  or the credentials and assets that you provided failed to be verified by our verification team. Thanks for showing interest in our loan scheme.
                        <br /><br />

                        You may contact the concerned branch for further queries if any.
                        <br /><br />

                        Loan Department
                        <br />
                        Zenith Bank.
                        <br /><br /><br />

                        If you need help setting up, the Homehub customer Service team is standing by. Reach out by sending an email to customer@homehub.com
                        <br /><br />

                        The Homehub Team
                    </p>
                </div>

                <div className="w-[478px] mx-[61px] mt-[16px] mb-[30px] border border-[#CDCDCF]"></div>

                

                <p className="text-left leading-[18px] font-normal w-[200px] h-[18px] mx-[214px] mb-[30px] text-xs text-[#605A5A]">
                    Sent with love from homehub.com
                </p>

                <p className="w-[433px] h-[30px] ml-[83px] mr-[84px] mb-[49.99px] text-center text-[#605A5A] text-xs">
                    If you are having issues clicking the get started button, copy and paste the 
                    URL below in your web browser. https://homehub.com/get_started
                </p>

                <p className="w-[394px] h-[17.8px] mx-[103px] text-xs text-[#605A5A]">
                    (c) 2022 Homehub . All Rights Reserveed
                </p>

            </div>

        </div>
    )
}

export default LoanRejection