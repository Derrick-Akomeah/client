import React from "react";
import AccountLogo from '../../assets/account_circle.png'
import Notification from '../../assets/notifications.png'
import Bookings from '../../assets/book.png'
import Payments from '../../assets/paid.png'
import Mortgages from '../../assets/real_estate_agent.png'
import SavedProperties from "../../assets/star_rate_half.png";
import Property7 from '../../assets/property7.png'
import Property8 from '../../assets/property8.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';



const Notifications = () => {
    return(
        <div className="flex space-x-[24px]">
            <div className="w-[282px] h-[336px] mt-[42px] ml-[120px] mb-[32px] flex-col rounded-[8px] shadow-lg">
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={AccountLogo} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">My Account</p>
                </div>

                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={Notification} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Notifications</p>
                </div>
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={Bookings} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Bookings</p>
                </div>
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={Payments} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Payments</p>
                </div>
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={Mortgages} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Mortgages</p>
                </div>
                <div className="w-[282px] h-[56px] flex bg-[#FFF6EF]">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={SavedProperties} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Saved Properties</p>
                </div>
            </div>

            <div className="w-[894px] h-[700px] mt-[39px] mb-[372px] rounded-[8px] shadow-md">
                <h1 className="text-[#FA790F] text-left text-3xl font-semibold w-[277px] h-[38px] ml-[24px] my-[24px]">
                    Saved Properties
                </h1>

                <div className="flex space-x-8">
                <div className="w-[600px] h-[440px] rounded-lg shadow-md">
                        <div>
                            <img className="w-[432px] h-[258px]" src={Property7} alt="" />
                        </div>
                        
                        <div className="space-y-4 ml-4">
                            <p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
                                For Rent
                            </p> 
                            <h1 className="text-left">Modern Apartment</h1>
                            <div className="flex">
                                <LocationOnOutlinedIcon />
                                <p>East Legon Hills</p>
                            </div>
                            <div className="flex">
                                <PaidOutlinedIcon />
                                <p className="text-left text-orange-500">$100/month</p>
                            </div>
                        </div>     
                    </div> 

                    <div className="w-[600px] h-[440px] rounded-lg shadow-md">
                        <div>
                            <img className="w-[432px] h-[258px]" src={Property8} alt="" />
                        </div>
                        
                        <div className="space-y-4 ml-4">
                            <p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
                                For Rent
                            </p> 
                            <h1 className="text-left">Modern Apartment</h1>
                            <div className="flex">
                                <LocationOnOutlinedIcon />
                                <p>East Legon Hills</p>
                            </div>
                            <div className="flex">
                                <PaidOutlinedIcon />
                                <p className="text-left text-orange-500">$100/month</p>
                            </div>
                        </div>     
                    </div> 

                </div>
               
            
            </div>
        </div>
    )
}

export default Notifications