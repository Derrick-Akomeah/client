import React from "react";
import { Link } from "react-router-dom";
import BackLogo from '../../assets/back.png'
import PropertyTour1 from '../../assets/propertiesTour1.png'
import PropertyTour2 from '../../assets/propertiesTour2.png'
import PropertyTour3 from '../../assets/propertiesTour3.png'
import PropertyTour4 from '../../assets/propertiesTour4.png'
import Currency from '../../assets/finance_chip.png'
import Point from '../../assets/dot.png'
import CheckCirle from '../../assets/check_circleO.png'
import UncheckCirle from '../../assets/uncheck_circle.png'
import BGImage from '../../assets/ARBG.png'
import ArrowImage from '../../assets/arrowImage.png'
import Arrow from '../../assets/arrow.png'
import Ellipse from '../../assets/Ellipse.png'


const PropertyBooking= () => {
    return(
        <div className=" font-inter">
            <img className=' ml-36 mb-6' src={BackLogo} alt="" />
            <div className=' flex space-x-12 ml-36 mb-16'>
                <div>
                    <img className='w-[588px] h-[582px]' src={PropertyTour1} alt=""/>
                </div>
                <div className='flex-col space-y-6'>
                    <div className=' flex space-x-7'>
                        <img className='w-[281px] h-[278px]' src={PropertyTour2} alt=""/>
                        <img className='w-[281px] h-[278px]' src={PropertyTour3} alt=""/>
                    </div>
                    <div className="relative">
                        <img src={PropertyTour4} alt=""/>
                        <div className="absolute bottom-8 right-4">
                            <p className=" border-2 border-orange-500 text-xl text-orange-500 p-2 w-[200px] rounded-sm hover:bg-black cursor-pointer">See All Photos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex space-x-8">
                <div className="ml-36">
                    <div className="flex justify-between w-[580px]">
                        <p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
                            For Rent
                        </p>
                        <div className="flex space-x-2">
                            <img className=" w-[30px] h-[16px] mt-4" src={Currency} alt="" />
                            <p className="text-orange-500 text-xl pt-2">$100/month</p>
                        </div>
                    </div>

                    <div className="text-left mt-6">
                        <h1 className="text-2xl  font-semibold">Modern Apartment</h1>
                        <div className="flex space-x-8 pt-3">
                            <p>East Legon Hills</p>
                            <img className="w-[8px] h-[8px] mt-2" src={Point} alt="" />
                            <p>3 bedrooms</p> 
                            <img className="w-[8px] h-[8px] mt-2" src={Point} alt="" />
                            <p>2 baths</p>
                        </div>
                        <div className="my-4 w-[600px] h-[5px] border-t border-[#A1A1A1]"></div>
                        <h1 className="text-2xl  font-semibold">Description</h1>
                        <p className="w-[587px] h-[320px] text-[#7A7A7A] text-[16px] mt-2 mb-8">
                            Vitae aliquam scelerisque convallis commodo egestas turpis ornare non. Nascetur orci nibh est turpis. Eu sagittis et tempor volutpat ultrices lacus. Ut nunc dolor egestas pharetra placerat magna amet eu. Ut duis ut volutpat at tristique quam ultricies integer sit. Nunc turpis eu sit at nec mattis. Congue faucibus turpis erat vivamus lectus et. Amet congue purus convallis gravida nisl ipsum donec. Urna posuere viverra tristique pellentesque odio. Faucibus odio pellentesque dignissim non vitae. Venenatis egestas vestibulum venenatis dictum risus vulputate amet vitae condimentum. Dolor facilisis sit amet felis non phasellus quis aliquam placerat. Justo amet bibendum sollicitudin adipiscing nunc ipsum dui non. Facilisi orci molestie maecenas ligula.
                            Mattis etiam pulvinar ac velit tristique ut tempor. Massa fusce blandit et diam. Lectus duis fringilla eget eu pellentesque. Diam nisl id amet proin in aliquam. Purus porttitor dignissim aliquet cursus. Lacus dictum lobortis a tellus arcu vulputate scelerisque. Ut sit nunc varius senectus. Nisl pretium vulputate sed massa pellentesque quis condimentum in sit.
                        </p>

                        <h1 className="text-2xl mb-8 mt-24  font-semibold">Amenities</h1>
                        <div className="flex space-x-32 mb-8">
                            <div className=" flex-col space-y-6">
                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt="" />
                                    <p>Swimming Pool</p>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt="" />
                                    <p>Boy's Quarters</p>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt="" />
                                    <p>Balcony</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt="" />
                                    <p>Wifi</p>
                                </div>
                            </div>

                            <div className=" flex-col space-y-6">
                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt="" />
                                    <p>Personal Meter</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt="" />
                                    <p>Shared Meter</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt="" />
                                    <p>Personal Kitchen</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt="" />
                                    <p>Shared Meter</p>
                                </div>     
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="w-[588px] h-[505px] shadow-md">
                    <div className="flex space-x-16 pl-6 pt-4 text-lg">
                        <Link to='/properties-tour'><h1 className="text-[#A1A1A1]">Rent Now</h1></Link>
                        <Link><h1 className="text-orange-500">Book A Visit</h1></Link>   
                    </div>
                    <div className="mt-4 ml-6 w-[520px] h-[5px] border-t border-[#A1A1A1]">
                        <div className="ml-36 -mt-1 border-[3.2px] border-[#FA790F] w-[120px]"></div>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <img className="relative ml-6" src={Ellipse} alt="" />
                            <img className="absolute -bottom-[182px] left-[814px]" src={Arrow} alt="" />  
                            <p className="mt-2">This month</p>   
                            <img className="mr-10" src={ArrowImage} alt="" />    
                        </div>
                        
                        <div className="text-[#757575]">
                        <div className="flex justify-between w-[444px] ml-14">
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thur</p>
                            <p>Fri</p>
                            <p>Sat</p>
                            <p>Sun</p>
                        </div>

                        <div className="flex justify-between w-[460px] ml-14 mt-2">
                            <p>1</p>
                            <p className="ml-1">2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p className="pr-4">7</p>
                        </div>

                        <div className="flex justify-between w-[460px] ml-14 mt-2">
                        <p>8</p>
                        <p className="pl-3">9</p>
                        <p className="ml-2">10</p>
                        <p className="ml-1">11</p>
                        <p className="ml-1">12</p>
                        <p>13</p>
                        <p className="pr-4">14</p>
                        </div>

                        <div className="flex justify-between w-[460px] ml-14 mt-2">
                        <p>15</p>
                        <p className="pl-1">16</p>
                        <p className="ml-1 pl-2">17</p>
                        <p className="ml-1 bg-orange-500 rounded-2xl text-white px-1">18</p>
                        <p className="mr-1">19</p>
                        <p>20</p>
                        <p className="pr-4">21</p>
                        </div>

                            <div className="flex justify-between w-[460px] ml-14 mt-2">
                            <p>22</p>
                            <p className="pl-1">23</p>
                            <p className="ml-1">24</p>
                            <p className="ml-1">25</p>
                            <p className="ml-1">26</p>
                            <p>27</p>
                            <p className="pr-4">28</p>
                            </div>

                            <div className="flex justify-between w-[162px] ml-14 mt-2">
                            <p>29</p>
                            <p>30</p>
                            <p>31</p>
                            </div>
                        </div>           
                    </div>

                    <div>
                        <h1 className="ml-12 text-left font-[400px] text-lg mt-8 mb-4">Available time for visit</h1>
                        <div className=" flex-col space-y-4">
                            <div className="ml-12 w-[487px] h-[60px] border border-[#2D465A] rounded-md">
                                <p className="mt-4">8:00 AM</p>
                            </div>

                            <div className="ml-12 flex space-x-4">
                                <div className="w-[235.5px] h-[60px] border border-[#2D465A] rounded-md">
                                    <p className="mt-4">9:00 AM</p>
                                </div>
                                <div className="bg-orange-500 text-white w-[235.5px] h-[60px] border border-[#2D465A] rounded-md">
                                    <p className="mt-4">Confirm</p>
                                </div>
                            </div>

                            <div className="ml-12 w-[487px] h-[60px] border border-[#2D465A] rounded-md">
                                <p className="mt-4">10:00 AM</p>
                            </div>

                            <div className="ml-12 w-[487px] h-[60px] border border-[#2D465A] rounded-md">
                                <p className="mt-4">11:00 AM</p>
                            </div>
                        </div>
                        <Link to='/visits'>
                            <p className=" w-[540px] h-[50px] pt-3 mt-10 text-lg text-center text-white bg-orange-500 font-semibold rounded-sm cursor-pointer ml-6">
                                Book A Visit
                            </p>
                        </Link>
                        
                    </div>


                </div>

                <div>

                </div>
            </div>

            <div className=" relative mt-8 mb-32 ml-36">
                <img src={BGImage} alt="" />
                <button className=" absolute top-[240px] left-[500px] w-[232px] h-[60px] text-white bg-orange-500 text-xl font-semibold rounded-md">Take An AR Tour</button>
            </div>

        </div>
    )
}

export default PropertyBooking