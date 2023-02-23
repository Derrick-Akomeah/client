import React from "react";
import AccountLogo from '../../assets/account_circle.png'
import Notification from '../../assets/notifications.png'
import Notification1 from '../../assets/circle_notifications.png'
import Bookings from '../../assets/book.png'
import Payments from '../../assets/paid.png'
import Mortgages from '../../assets/real_estate_agent.png'
import SavedProperties from "../../assets/star_rate_half.png";
import Orange from '../../assets/orange-dot.png'


const Notifications = () => {
    return(
        <div className="flex space-x-[24px]">
            <div className="w-[282px] h-[336px] mt-[42px] ml-[120px] mb-[32px] flex-col rounded-[8px] shadow-lg">
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={AccountLogo} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">My Account</p>
                </div>

                <div className="w-[282px] h-[56px] flex bg-[#FFF6EF]">
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
                <div className="w-[282px] h-[56px] flex">
                    <img className="w-[20px] h-[20px] my-[18px] ml-[18px] mr-[12px]" src={SavedProperties} alt="" />
                    <p className="my-[18.5px] text-[#FA790F]">Saved Properties</p>
                </div>
            </div>

            <div className="w-[894px] h-[700px] mt-[39px] mb-[372px] rounded-[8px] shadow-md">
                <div className="flex space-x-[400px] mb-[55px]">
                    <h1 className="text-[#FA790F] text-left text-3xl font-semibold w-[277px] h-[38px] ml-[24px] my-[24px]">
                        Notifications
                    </h1>
                    <button className="w-[162px] h-[39px] my-[24px] mr-2 border border-[#2D465A] text-base font-semibold rounded-[4px]">
                        <p>Mark all as read</p>
                    </button>
                </div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[16px] mt-[16px]" src={Notification1} alt="" />
                    </div>

                    <div>
                        <p className=" mt-[16px] mr-[147px]">
                            Announcement:<span className="text-[#7A7A7A]"> Pellentesque arcu semper pulvinar ornare enim elit consequat.</span>
                        </p>
                    </div>

                    <div>
                        <img className="mt-[20px]" src={Orange} alt="" />
                    </div>
                </div>  

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[16px] mt-[16px]" src={Notification1} alt="" />
                    </div>

                    <div>
                        <p className=" mt-[16px] mr-[147px]">
                            Announcement:<span className="text-[#7A7A7A]"> Pellentesque arcu semper pulvinar ornare enim elit consequat.</span>
                        </p>
                    </div>

                    <div>
                        <img className="mt-[20px]" src={Orange} alt="" />
                    </div>
                </div>

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[16px] mt-[16px]" src={Notification1} alt="" />
                    </div>

                    <div>
                        <p className=" mt-[16px] mr-[147px]">
                            Announcement:<span className="text-[#7A7A7A]"> Pellentesque arcu semper pulvinar ornare enim elit consequat.</span>
                        </p>
                    </div>   
                </div>  

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[16px] mt-[16px]" src={Notification1} alt="" />
                    </div>

                    <div>
                        <p className=" mt-[16px] mr-[147px]">
                            Announcement:<span className="text-[#7A7A7A]"> Pellentesque arcu semper pulvinar ornare enim elit consequat.</span>
                        </p>
                    </div>
                </div>
                
                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>  

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[16px] mt-[16px]" src={Notification1} alt="" />
                    </div>

                    <div>
                        <p className=" mt-[16px] mr-[147px]">
                            Announcement:<span className="text-[#7A7A7A]"> Pellentesque arcu semper pulvinar ornare enim elit consequat.</span>
                        </p>
                    </div>

                    <div>
                        <img className="mt-[20px]" src={Orange} alt="" />
                    </div>
                </div>  
                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>
                <button className="bg-orange-500 w-[150px] h-[60px] mx-[372px] mt-[18.5px] mb-[32px] text-white text-xl font-semibold rounded-[8px]">
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Notifications