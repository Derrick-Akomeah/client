import React from "react";
import Ellipse3 from '../../assets/Ellipse3.png'
import Ellipse4 from '../../assets/Ellipse4.png'
import Vector2 from '../../assets/Vector2.png'
import Location from '../../assets/location_on.png'
import AccountLogo from '../../assets/account_circle.png'
import Notification from '../../assets/notifications.png'
import Book1 from '../../assets/book1.png'
import Bookings from '../../assets/book.png'
import Payments from '../../assets/paid.png'
import Mortgages from '../../assets/real_estate_agent.png'
import SavedProperties from "../../assets/star_rate_half.png";



const Visits = () => {
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
                <div className="w-[282px] h-[56px] flex bg-[#FFF6EF]">
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
                <h1 className="text-[#FA790F] text-left text-3xl font-semibold w-[277px] h-[38px] ml-[24px] my-[24px]">
                    Bookings
                </h1>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[20px] mt-[18px]" src={Book1} alt="" />
                    </div>

                    <div className="mt-2">
                        <img className="-ml-[1px]" src={Ellipse3} alt="" />
                        <img className="ml-[1px]" src={Vector2} alt="" />
                        <img className="" src={Ellipse4} alt="" />
                    </div>

                    <div>
                        <span className="text-[#58575F] mr-[16px]">21/07/22</span>
                        <span className="text-[#58575F]">9:30 am</span>

                        <p className="text-xs text-left text-[#A1A1A1] mt-[8px]">Modern Apartment</p>
                    </div>

                    <div>
                        <div className="ml-[158px] mr-[215px] mt-[16px] flex space-x-[8px] text-base text-[#A1A1A1]">
                            <img src={Location} alt="" />
                            <span>San Francisco</span>
                        </div>  
                    </div>

                    <div className="mr-[24px] mt-[16px]">
                        <p className="text-orange-500">Accepted</p>
                    </div>
                </div>  

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[20px] mt-[18px]" src={Book1} alt="" />
                    </div>

                    <div className="mt-2">
                        <img className="-ml-[1px]" src={Ellipse3} alt="" />
                        <img className="ml-[1px]" src={Vector2} alt="" />
                        <img className="" src={Ellipse4} alt="" />
                    </div>

                    <div>
                        <span className="text-[#58575F] mr-[16px]">21/07/22</span>
                        <span className="text-[#58575F]">9:30 am</span>

                        <p className="text-xs text-left text-[#A1A1A1] mt-[8px]">Modern Apartment</p>
                    </div>

                    <div>
                        <div className="ml-[158px] mr-[215px] mt-[16px] flex space-x-[8px] text-base text-[#A1A1A1]">
                            <img src={Location} alt="" />
                            <span>San Francisco</span>
                        </div>  
                    </div>

                    <div className="mr-[24px] mt-[16px]">
                        <p className="text-orange-500">Accepted</p>
                    </div>
                </div>

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[20px] mt-[18px]" src={Book1} alt="" />
                    </div>

                    <div className="mt-2">
                        <img className="-ml-[1px]" src={Ellipse3} alt="" />
                        <img className="ml-[1px]" src={Vector2} alt="" />
                        <img className="" src={Ellipse4} alt="" />
                    </div>

                    <div>
                        <span className="text-[#58575F] mr-[16px]">21/07/22</span>
                        <span className="text-[#58575F]">9:30 am</span>

                        <p className="text-xs text-left text-[#A1A1A1] mt-[8px]">Modern Apartment</p>
                    </div>  

                    <div>
                        <div className="ml-[158px] mr-[215px] mt-[16px] flex space-x-[8px] text-base text-[#A1A1A1]">
                            <img src={Location} alt="" />
                            <span>San Francisco</span>
                        </div>  
                    </div>

                    <div className="mr-[24px] mt-[16px]">
                        <p className="text-[#273B53]">Pending</p>
                    </div>
                </div>  

                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[20px] mt-[18px]" src={Book1} alt="" />
                    </div>

                    <div className="mt-2">
                        <img className="-ml-[1px]" src={Ellipse3} alt="" />
                        <img className="ml-[1px]" src={Vector2} alt="" />
                        <img className="" src={Ellipse4} alt="" />
                    </div>

                    <div>
                        <span className="text-[#58575F] mr-[16px]">21/07/22</span>
                        <span className="text-[#58575F]">9:30 am</span>

                        <p className="text-xs text-left text-[#A1A1A1] mt-[8px]">Modern Apartment</p>
                    </div>

                    <div>
                        <div className="ml-[158px] mr-[215px] mt-[16px] flex space-x-[8px] text-base text-[#A1A1A1]">
                            <img src={Location} alt="" />
                            <span>San Francisco</span>
                        </div>  
                    </div>

                    <div className="mr-[24px] mt-[16px]">
                        <p className="text-[#31D309]">Visited</p>
                    </div>
                </div>
                
                <div className="w-[846px] h-[2px] border-t-[0.6px] border-[#A1A1A1] mx-[24px]"></div>  

                <div className="flex space-x-[24px] mt-[15.5px] mb-[22.5px]">
                    <div className="w-[56px] h-[56px] ml-[24px] bg-[#F4F4F4] rounded-[32px]">
                        <img className="ml-[20px] mt-[18px]" src={Book1} alt="" />
                    </div>

                    <div className="mt-2">
                        <img className="-ml-[1px]" src={Ellipse3} alt="" />
                        <img className="ml-[1px]" src={Vector2} alt="" />
                        <img className="" src={Ellipse4} alt="" />
                    </div>

                    <div>
                        <span className="text-[#58575F] mr-[16px]">21/07/22</span>
                        <span className="text-[#58575F]">9:30 am</span>

                        <p className="text-xs text-left text-[#A1A1A1] mt-[8px]">Modern Apartment</p>
                    </div>

                    <div>
                        <div className="ml-[158px] mr-[215px] mt-[16px] flex space-x-[8px] text-base text-[#A1A1A1]">
                            <img src={Location} alt="" />
                            <span>San Francisco</span>
                        </div>  
                    </div>

                    <div className="mr-[24px] mt-[16px]">
                        <p className="text-[#31D309]">Visited</p>
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

export default Visits