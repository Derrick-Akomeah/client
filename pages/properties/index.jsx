import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Image from 'next/image';

const Properties = () => {
	return (
		<>
			<Header />
			<div className=" font-inter">
				<div>
					<div className="text-left ml-[120px] mt-[62.31px] ">
						<p className=" text-lg font-bold text-orange-500 mb-[16px]">
							Properties
						</p>
						<h1 className=" text-4xl font-bold">
							Our <span className=" text-orange-500">Properties</span>
						</h1>
					</div>

					<div className="flex w-[450px]">
						<p className=" border-2 border-[#093d47] w-[80px] h-[40px] px-2 py-1 ml-[120px] mt-4 text-[#093d47] text-base font-semibold rounded-sm">
							Buy
						</p>
						<p className=" border-2 border-[#093d47] w-[80px] h-[40px] px-2 py-1 ml-6 mt-4 text-[#093d47] text-base font-semibold rounded-sm">
							Rent
						</p>
					</div>
				</div>

				<div className="w-[1200px] h-[92px] mt-4 mb-[54px] pr-[12px] ml-[120px] flex space-x-7 rounded-sm border border-gray-100 shadow-lg">
					<div className="ml-[18px] mr-[20px] pt-[16px] w-[250px]">
						<p className=" text-left text-slate-400 mb-[16px]">Location</p>
						<p className="text-left">East Legon Hills</p>
					</div>

					<div className="pt-[16px] w-[250px]">
						<p className="text-left text-slate-400 mb-[16px]">Property Type</p>
						<p className=" text-left">Apartment</p>
					</div>

					<div className="pt-[16px] w-[250px]">
						<p className=" text-left text-slate-400 mb-[16px]">Price Range</p>
						<p className="text-left">$18,000-$100,000</p>
					</div>

					<div className="pt-[16px] pl-2 w-[180px] mr-[82px] text-left">
						<p className=" text-slate-400 mb-[16px]">Amenities</p>
						<p>-select to choose-</p>
					</div>

					<button className="bg-orange-500 w-[138px] h-[60px] px-2 mt-[16px] -ml-[16px] text-white font-semibold rounded-sm">
						Search
					</button>
				</div>

				<div className=" space-y-[24px] my-6 mb-[90px]">
					<div className="flex space-x-8 ml-[120px] w-[1200px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property1.png" width="384" height="258" />
							</div>

							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>

						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property2.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property3.png" width="384" height="258" />
							</div>

							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex space-x-8 ml-[120px] w-[1200px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property4.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property5.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property6.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex space-x-8 ml-[120px] w-[1200px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property7.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property8.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property9.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex space-x-8 ml-[120px] w-[1200px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property10.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property11.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2 ">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property12.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex space-x-8 ml-[120px] w-[1200px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property13.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property14.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image
										src="/finance_chip.png"
										width="28"
										height="12"
										className="ml-2"
									/>
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/property15.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left text-xl font-medium ml-2">
									Modern Apartment
								</h1>
								<div className="flex">
									<Image
										src="/location_on.png"
										width="13"
										height="17"
										className="ml-2"
									/>
									<p className="ml-[8px]">East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="28" height="12" />
									<p className="text-left text-orange-500 ml-[8px]">
										$100/month
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button className=" mb-[62px] text-white text-xl w-[228px] h-[60px] bg-orange-500 rounded-sm">
					Load More
				</button>
			</div>
			<Footer />
		</>
	);
};

export default Properties;
