import React from "react";
import {Link} from "react-router-dom";
import BackLogo from '../../assets/back.png'
import PropertyTour1 from '../../assets/propertiesTour1.png'
import PropertyTour2 from '../../assets/propertiesTour2.png'
import PropertyTour3 from '../../assets/propertiesTour3.png'
import PropertyTour4 from '../../assets/propertiesTour4.png'
import Currency from '../../assets/finance_chip.png'
import Point from '../../assets/dot.png'
import CheckCirle from '../../assets/check_circle.png'
import UncheckCirle from '../../assets/uncheck_circle.png'
import BGImage from '../../assets/ARBG.png'
import {ReactComponent as Calendar} from "../../assets/calendar.svg";

const PropertiesTour = () => {
    return (
        <div className=" font-inter">
            <img className=' ml-36 mb-6' src={BackLogo} alt=""/>
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
                            <p className=" border-2 border-orange-500 text-xl text-orange-500 p-2 w-[200px] rounded-sm hover:bg-black cursor-pointer">See
                                All Photos</p>
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
                            <img className=" w-[30px] h-[16px] mt-4" src={Currency} alt=""/>
                            <p className="text-orange-500 text-xl pt-2">$100/month</p>
                        </div>
                    </div>

                    <div className="text-left mt-6">
                        <h1 className="text-2xl  font-semibold">Modern Apartment</h1>
                        <div className="flex space-x-8 pt-3">
                            <p>East Legon Hills</p>
                            <img className="w-[8px] h-[8px] mt-2" src={Point} alt=""/>
                            <p>3 bedrooms</p>
                            <img className="w-[8px] h-[8px] mt-2" src={Point} alt=""/>
                            <p>2 baths</p>
                        </div>
                        <div className="my-4 w-[600px] h-[5px] border-t border-[#A1A1A1]"></div>
                        <h1 className="text-2xl  font-semibold">Description</h1>
                        <p className="w-[587px] h-[320px] text-[#7A7A7A] mt-2 mb-8">
                            Vitae aliquam scelerisque convallis commodo egestas turpis ornare non. Nascetur orci nibh
                            est turpis. Eu sagittis et tempor volutpat ultrices lacus. Ut nunc dolor egestas pharetra
                            placerat magna amet eu. Ut duis ut volutpat at tristique quam ultricies integer sit. Nunc
                            turpis eu sit at nec mattis. Congue faucibus turpis erat vivamus lectus et. Amet congue
                            purus convallis gravida nisl ipsum donec. Urna posuere viverra tristique pellentesque odio.
                            Faucibus odio pellentesque dignissim non vitae. Venenatis egestas vestibulum venenatis
                            dictum risus vulputate amet vitae condimentum. Dolor facilisis sit amet felis non phasellus
                            quis aliquam placerat. Justo amet bibendum sollicitudin adipiscing nunc ipsum dui non.
                            Facilisi orci molestie maecenas ligula.
                            Mattis etiam pulvinar ac velit tristique ut tempor. Massa fusce blandit et diam. Lectus duis
                            fringilla eget eu pellentesque. Diam nisl id amet proin in aliquam. Purus porttitor
                            dignissim aliquet cursus. Lacus dictum lobortis a tellus arcu vulputate scelerisque. Ut sit
                            nunc varius senectus. Nisl pretium vulputate sed massa pellentesque quis condimentum in sit.
                        </p>

                        <h1 className="text-2xl mb-8 mt-24  font-semibold">Amenities</h1>
                        <div className="flex space-x-32 mb-8">
                            <div className=" flex-col space-y-6">
                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt=""/>
                                    <p>Swimming Pool</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt=""/>
                                    <p>Boy's Quarters</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt=""/>
                                    <p>Balcony</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt=""/>
                                    <p>Wifi</p>
                                </div>
                            </div>

                            <div className=" flex-col space-y-6">
                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt=""/>
                                    <p>Personal Meter</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt=""/>
                                    <p>Shared Meter</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={CheckCirle} alt=""/>
                                    <p>Personal Kitchen</p>
                                </div>

                                <div className="flex space-x-2">
                                    <img src={UncheckCirle} alt=""/>
                                    <p>Shared Meter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[588px] h-[505px] shadow-md">
                    <div className="flex space-x-16 pl-6 pt-4 text-lg">
                        <Link to='/rent'><h1 className="text-orange-500">Rent Now</h1></Link>
                        <Link to='/book'><h1 className="text-[#A1A1A1]">Book A Visit</h1></Link>
                    </div>
                    <div className="mt-4 ml-6 w-[520px] h-[5px] border-t border-[#A1A1A1]">
                        <div className=" -mt-1 border-[3.2px] border-[#FA790F] w-[90px]">

                        </div>
                    </div>

                    <div className="pl-6">
                        <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                            How many months of rent?
                        </label>

                        <input type="text" id="firstName"
                               className=" text-gray-900 text-sm block w-[520px] p-2.5  bg-[#F6F6F6] border border-gray-100"
                               placeholder="-Select one-" required>
                        </input>

                        <label for="firstName" className="block mb-2 mt-4 text-md  text-black text-right mr-12">
                            Calculating at <span className="text-orange-500">$100/month</span>
                        </label>

                        <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                            Expected date of report
                        </label>

                        <input type="text" id="firstName"
                               className=" relative text-gray-900 text-sm block w-[520px] p-2.5  bg-[#F6F6F6] border border-gray-100"
                               placeholder="dd/mm/yyyy" required>
                        </input>

                        <Calendar className="absolute -bottom-[364px] right-[220px]"/>
                        <Link to='/rent'>
                            <p className=" w-[520px] h-[50px] pt-3 mt-10 text-lg text-center text-white bg-orange-500 font-semibold rounded-sm cursor-pointer">
                                Rent Now
                            </p>
                        </Link>

                        <Link to='/mortgage'>
                            <p className=" w-[520px] h-[50px] pt-3 mt-6 text-lg text-center text-orange-500 bg-transparent font-semibold rounded-sm cursor-pointer">
                                Apply for Mortgage
                            </p>
                        </Link>

                    </div>


                </div>

                <div>

                </div>
            </div>

            <div className=" relative mt-8 mb-32 ml-36">
                <img src={BGImage} alt=""/>
                <button
                    className=" absolute top-[240px] left-[500px] w-[232px] h-[60px] text-white bg-orange-500 text-xl font-semibold rounded-md">Take
                    An AR Tour
                </button>
            </div>

        </div>
    )
}

export default PropertiesTour