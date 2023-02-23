import React from "react";
import BackLogo from '../../assets/back.png'
import RentBG from '../../assets/rent-background.png'

const Rent = ()=> {
    return(
        <div className=" font-inter">
            <div className="text-left ml-36 mb-16">
                <img src={BackLogo} alt="" />
                <h1 className=" text-5xl font-semibold text-orange-500 mt-4">Rent Payment</h1>
            </div>

            <div className="flex ml-48 mb-32">
                <div className="relative ml-28 w-[50%]">
                    <img className="h-[480px]" src={RentBG} alt="" />
                    <div className="text-white absolute top-10 left-16">
                        <h1 className=" text-left text-xl font-semibold">Summary</h1>
                        <div className="mt-6 w-[340px]">
                            <div className="flex justify-between text-lg">
                                <h1>Item</h1>
                                <h1>Cost</h1>
                            </div>
                            <div className="flex justify-between mt-4 mb-2">
                                <p>Rent Rate</p>
                                <p>100.00</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <p>Period</p>
                                <p>12 months</p>
                            </div>

                            <div className="flex justify-between mb-2">
                                <p>Maintenance Rate</p>
                                <p>5.00</p>
                            </div>

                            <div className=" absolute top-[166px] -left-10">
                                <div className="flex justify-between mt-48 bg-[#203342] w-[413px] h-[50px] text-lg px-10 py-3 rounded-sm">
                                    <p >Total</p>
                                    <p>$1260.00</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                    
                <div className="w-[60%] h-[340px] -mt-6 pt-8">
                    <div className="pl-4">
                        <label for="paymentMethod" className="block mb-2 mt-4 text-left text-md  text-black pl-3">
                            Choose a Payment Method
                        </label>

                        <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100" placeholder="-select-one-" required>
                        </input>

                        <label for="cardNumber" className="block mb-2 mt-4 text-left text-md  text-black">
                            Card Number
                        </label>

                        <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100" required>
                        </input>

                        <div className="flex space-x-8">
                            <div>
                                <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                    Expiry Date
                                </label>

                                <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[190px] p-2.5  bg-[#F6F6F6] border border-gray-100" placeholder="mm/yy" required>
                                </input>
                            </div>

                            <div>
                                <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                    Cvv
                                </label>

                                <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[190px] p-2.5  bg-[#F6F6F6] border border-gray-100" placeholder="***" required>
                                </input>
                            </div>
                        </div>
                        <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                    Name on Card
                                </label>

                                <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100" placeholder="-select one-" required>
                                </input>

                                <p className=" w-[415px] h-[50px] px-2 pt-3 ml-1 mt-8 text-lg text-center text-white bg-orange-500 font-semibold rounded-sm cursor-pointer">
                                    Make Payment
                                </p>
                </div>
                
                </div>
        </div>
        </div>
    )
}

export default Rent