import React from "react";
import Logo from '../../assets/logo.png'
import ApprovedLoan from '../../assets/approvedLoan.png'


const LoanApproval=()=>{
    return(
        <div className=" font-inter">
            <div className="w-[600px] h-[880px] mx-[420px] my-[72px] pt-[30px]">
                <img className="w-[76px] h-[46px] mx-[262px] mb-[30px]" src={Logo} alt="" />
                <p className="w-[218px] h-[60px] mx-[191px] mb-[32.32px] text-[28px] font-semibold leading-[60px]">
                    Congratulations!
                </p>

                <img className="w-[193px] h-[146px] ml-[204px] mr-[203px] mb-[30.63px]" src={ApprovedLoan} alt="" />

                <div className="w-[473px] h-[241px] ml-[79px] mb-[69px] mr-[48px]">
                    <p className="text-left text-xs leading-[16.8px] font-normal">Hello Hamida,
                        <br /><br />

                        Your loan reqest has been pre-approved by Zenith Bank. Kindly make sure you go through the pre-approval letter and contract attached to this mail. It contains information about the terms and conditions of your loan.
                        <br />
                        Please return to this email with the completed form after filling it out and signing it, and also upload a copy to the Homehub app.
                        <br /><br />
                        Loan Department
                        Zenith Bank.
                        <br /><br /><br />

                        If you need help setting up, the Homehub customer Service team is standing by. Reach out by sending an email to customer@homehub.com
                    </p>
                </div>

                <div className="w-[478px] mx-[61px] mb-[30px] border border-[#CDCDCF]"></div>

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

export default LoanApproval