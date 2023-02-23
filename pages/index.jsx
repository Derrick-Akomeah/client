import Image from 'next/image';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Homepage = () => {
	return (
		<>
			<Header />
			<div className=" font-inter">
				<div className="flex space-x-8">
					<div className="w-[700px] h-[900px]">
						<h1 className=" capitalize text-left text-6xl text-[#093d47] font-bold mt-24 ml-[120px] w-[586px] h-[204px] mb-[10px]">
							Find Your <span className="text-orange-500">Dream</span> Home
							&amp; Embrace True{' '}
							<span className=" text-orange-500">Comfort</span>.
						</h1>
						<div className=" ml-[120px] mb-[24px] w-[484px] h-[52px] text-left">
							<p>Urna rutrum mauris adipiscing sapien ornare eget integer.</p>
							<p>Tortor amet nulla nibh mattis leo in vivera nec suscipit.</p>
						</div>
						<p className="bg-orange-500 w-[204px] h-[60px] pl-[45px] pr-[46px] py-[18px] ml-[120px] mb-[108px] text-white font-semibold rounded-sm cursor-pointer">
							Get Started
						</p>

						<div className="flex ml-[120px] space-x-[24px]">
							<p className="border-2 border-[#093d47] w-[78px] h-[43px] px-[24px] py-[12px] text-[#093d47] font-semibold rounded-sm cursor-pointer">
								Buy
							</p>
							<p className=" border-2 border-[#093d47] w-[78px] h-[43px] px-[24px] py-[12px]  text-[#093d47] font-semibold rounded-sm cursor-pointer">
								Rent
							</p>
						</div>
					</div>

					<div className=" relative mr-[120px] mt-[56px] mb-[122px]">
						<Image src="/homepage1.png" width="612" height="736" />

						<div className=" absolute bottom-[64px] right-[332px] w-[893px] h-[92px] mt-[24px] ml-[120px] bg-white flex justify-around space-x-7 rounded-sm shadow-lg border">
							<div className=" pt-2 w-[220px]">
								<p className=" text-left text-slate-400 mb-2">Location</p>
								<p className="text-left">East Legon Hills</p>
							</div>

							<div className="pt-2 w-[150px]">
								<p className="text-left text-slate-400 mb-2">Property Type</p>
								<p className=" text-left">Apartment</p>
							</div>

							<div className="pt-2 w-[130px]">
								<p className=" text-left text-slate-400 mb-2">Price Range</p>
								<p>$18,000-$100,000</p>
							</div>

							<p className="bg-orange-500 w-[120px] h-[50px] px-2 pt-3 mt-3 text-white font-semibold rounded-sm cursor-pointer">
								Search
							</p>
						</div>
					</div>
				</div>

				<div className=" flex space-x-[71px] mb-[140px]">
					<div className="relative ml-[120px] mt-12 rounded-md border">
						<Image src="/homepage4.png" width="470" height="564" />
						<div className="absolute top-56 -right-40">
							<Image src="/homepage5.png" width="306" height="313" />
						</div>
					</div>
					<div>
						<div className=" text-left ml-36 mt-8">
							<p className=" text-orange-500 font-semibold">About Us</p>
							<h1 className=" text-5xl font-bold w-[541px] h-[168px] text-[#093d47]">
								We Are The <span className=" text-orange-500">Leading</span>{' '}
								Real Estate Rental{' '}
								<span className=" text-orange-500">Marketplace</span>
							</h1>
							<p className=" w-[498px] h-[180px] mt-8 mb-[36px] text-[16px]">
								Donec ac eu diam ipsum donec neque odio. Aliquam faucibus sit
								elit lacina ultrices nulla proin. Dui risus sit sollicitudin
								vitae facilisi sed neque sagittis. Mauris euismod mauris et sit.
								Bibendum aenean justo etiam vestibulum duis malesuada arcu
								semper. Diam posuere pellentesque scelerisque pellentesque. Diam
								orci consequat ligula fringila. Id a pellentesque iaculis
								mattis.
							</p>
						</div>

						<div className="flex">
							<p className="bg-orange-500 text-white w-[204px] h-[60px] pl-[45px] pr-[46px] py-[18px] ml-36 font-semibold rounded-sm cursor-pointer">
								Get Started
							</p>
							<p className=" w-[204px] h-[60px] pl-[45px] pr-[46px] py-[18px] ml-6 text-[#093d47] border-2 border-[#093d47] font-semibold rounded-sm cursor-pointer">
								Contact Us
							</p>
						</div>
					</div>
				</div>

				<div className="text-left ml-[120px] mr-[120px]">
					<p className=" text-orange-500 font-semibold mb-[16px]">Properties</p>
					<div className="flex space-x-[431px] ">
						<Image
							src="/OFP.png"
							width="565"
							height="56"
							className="mr-[413px]"
						/>
						<button className=" w-[204px] h-[60px] py-[18px] px-[64px] ml-6 text-lg text-[#093d47] border-2 border-[#093d47] font-bold rounded-sm cursor-pointer">
							View All
						</button>
					</div>
				</div>

				<div className="space-y-[24px] my-6">
					<div className="flex space-x-[24px] ml-[120px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<Image src="/featuredProperty1.png" width="384" height="258" />
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>

						<div className="w-[384px] h-[424px] rounded-lg shadow-md ">
							<div>
								<Image src="/featuredProperty2.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/featuredProperty3.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex space-x-[24px] ml-[120px]">
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/featuredProperty4.png" width="384" height="258" />
							</div>

							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>
						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/featuredProperty5.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>

						<div className="w-[384px] h-[424px] rounded-lg shadow-md">
							<div>
								<Image src="/featuredProperty6.png" width="384" height="258" />
							</div>
							<div className="space-y-4 ml-4">
								<p className="bg-orange-100 w-[100px] h-[30px] px-2 mt-3 text-orange-500 font-semibold rounded-3xl">
									For Rent
								</p>
								<h1 className="text-left">Modern Apartment</h1>
								<div className="flex">
									<Image src="/location_on.png" width="13" height="17" />
									<p>East Legon Hills</p>
								</div>
								<div className="flex">
									<Image src="/finance_chip.png" width="18" height="12" />
									<p className="text-left text-orange-500">$100/month</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex space-x-[449px]">
					<div className="relative w-[255px] h-[309px] border-[3px] border-[#2D465A] ml-[120px] mt-36">
						<div className="absolute top-8 left-8 w-[588px] h-[558.47px] ">
							<Image src="/HomePage2.png" width="588" height="558" />
						</div>
					</div>

					<div className="text-[#093d47] mt-[227px] text-left  w-[541px] h-[174px]">
						<h1 className="font-bold text-5xl mb-[18px]">
							<span className="text-orange-500">Secure</span> A Home With Our{' '}
							<span className="text-orange-500">Mortgage Plans</span> From Our
							Partners
						</h1>

						<p className="w-[498px] h-[156px]">
							Donec ac eu diam ipsum donec neque odio. Aliquam faucibus sit elit
							laclnia ultrices nulla proin. Dui risus sit solicitudin vitae
							facilisi sed neque sagittis. Mauris euismod mauris et sit.
							Bibendum aenean justo etiam vestibulum duis malesuada arcu semper.
							Diam posuere pellentesque scelerisque pellentesque. Diam orci
							consequat ligula fringila. Id a pellentesque iaculis matttis.
						</p>

						<p className=" w-[204px] h-[60px] py-18 pl-[45px] pr-[50px] pt-3 ml-1 mt-8 mb-[40px] text-lg text-center text-[#093d47] border-2 border-[#093d47] font-bold rounded-sm cursor-pointer">
							Contact Us
						</p>
					</div>
				</div>

				<div className="relative">
					<Image
						src="/featuredProperty1.png"
						width="1200"
						height="399"
						className=" mt-[433px] mb-[120px]  ml-[120px] rounded-[8px]"
					/>

					<div className="absolute top-20 left-28">
						<h1 className="text-white text-4xl text-center mx-[261px] font-bold w-[678px] h-[58px]">
							Are You An Agent or Individual?
						</h1>

						<p className="text-white text-xl font-[400px] w-[653px] h-[30px] mx-[274px]">
							Kindly enter your email address to get your home listed
						</p>

						<div className=" absolute left-4 flex justify-between mt-8 mx-[204px] w-[792px] h-[96px] rounded-[8px] bg-white ">
							<p className="w-[233px] h-[27px] pl-[16px] text-lg pb-[36px] pt-[33px]">
								Enter your email address
							</p>

							<p className="bg-orange-500 w-[181px] h-[65px] px-[41px] pt-[21px] pb-[20px] mt-[15px] mb-[16px] mr-[16px] text-white text-lg font-semibold rounded-md cursor-pointer">
								Get Listed
							</p>
						</div>
					</div>
				</div>

				<div className="text-left ml-[120px] mt-24">
					<p className=" text-orange-500 font-bold mb-[16px]">Partners</p>
					<h1 className=" text-5xl font-bold w-[613px] h-[58px] text-[#093d47]">
						Get To Know Our <span className=" text-orange-500">Partners</span>
					</h1>
				</div>

				<div className="flex ml-[120px] my-16">
					<Image src="/partner1.png" width="282" height="97" />
					<Image src="/partner2.png" width="282" height="98" />
					<Image src="/partner3.png" width="282" height="98" />
					<Image src="/partner4.png" width="265" height="93" />
				</div>

				<div className="text-left ml-[120px] mt-[167px] mb-[41px] w-[560px]">
					<p className=" text-orange-500 font-bold">Testimonials</p>
					<h1 className=" text-5xl font-bold text-[#093d47] mt-[16px] w-[613px] h-[128px]">
						We Always Want You To{' '}
						<span className="text-orange-500">Be Happy</span>
					</h1>
				</div>

				<div className=" static w-[404px] h-[583px] mt-[20px] bg-orange-500 space-x-6 pt-[520px] pr-20">
					<Image
						src="/arrow_back_ios2.png"
						width="20"
						height="33"
						className=" text-slate-300"
					/>
					<Image
						src="/arrow_back_ios"
						width="20"
						height="33"
						className="text-white"
					/>
				</div>
				<div className="relative left-32 bottom-[580px] flex space-x-[24px] mt-[40px]">
					<div className="w-[384px] h-[463px]  border-2 border-gray-500 rounded-md bg-white">
						<Image
							src="/profilePicture1.png"
							width="80"
							height="80"
							className=" mt-[40px] mb-[16px] mx-[152px]"
							alt=""
						/>
						<p className="mb-[26px]">Client Name</p>
						<Image
							src="/formatQuote.png"
							width="27"
							height="18"
							className="ml-[178.67px] mr-[178.66px] mb-[27.67px]"
							alt=""
						/>
						<p className=" w-[305px] h-[156px] ml-[39px] mr-[40px] mb-[19px] text-[#7A7A7A] text-base">
							Odio fermentum nascetur vitae enim feugiat.Pharetra nulla platea
							leo sit mauris faucibus.Sed in in dolor eu lectus justo volutpat
							proin. Imperdiet in elit nunc semper volutpat suspendisse amet
							elit ornare.
						</p>
						<div className="flex justify-center space-x-4 mt-[19px] mb-[42px]">
							<Image src="/star.png" width="20" height="19" />
							<Image src="/star.png" width="20" height="19" />
							<Image src="/star.png" width="20" height="19" />
							<Image src="/star.png" width="20" height="19" />
							<Image src="/star_rate_half.png" width="20" height="19" />
						</div>
					</div>

					<div className="w-[384px] h-[463px] border-2 border-gray-500 rounded-md">
						<Image
							src="/profilePicture2.png"
							width="80"
							height="80"
							className=" mt-[40px] mb-[16px] mx-[152px]"
							alt=""
						/>
						<p className="mb-[26px]">Client Name</p>
						<Image
							src="/formatQuote.png"
							width="27"
							height="18"
							className="ml-[178.67px] mr-[178.66px] mb-[27.67px]"
							alt=""
						/>
						<p className=" w-[305px] h-[156px] ml-[39px] mr-[40px] mb-[19px] text-[#7A7A7A] text-base">
							Odio fermentum nascetur vitae enim feugiat.Pharetra nulla platea
							leo sit mauris faucibus.Sed in in dolor eu lectus justo volutpat
							proin. Imperdiet in elit nunc semper volutpat suspendisse amet
							elit ornare.
						</p>
						<div className="flex justify-center space-x-4 mt-[19px] mb-[42px]">
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star_rate_half.png" width="20" height="19" alt="" />
						</div>
					</div>

					<div className="w-[384px] h-[463px] border-2 border-gray-500 rounded-md">
						<Image
							src="/profilePicture3.png"
							width="80"
							height="80"
							className=" mt-[40px] mb-[16px] mx-[152px]"
							alt=""
						/>
						<p className="mb-[26px]">Client Name</p>
						<Image
							src="/formatQuote.png"
							width="27"
							height="18"
							className="ml-[178.67px] mr-[178.66px] mb-[27.67px]"
							alt=""
						/>
						<p className="w-[305px] h-[156px] ml-[39px] mr-[40px]  text-[#7A7A7A] text-base">
							Odio fermentum nascetur vitae enim feugiat.Pharetra nulla platea
							leo sit mauris faucibus.Sed in in dolor eu lectus justo volutpat
							proin. Imperdiet in elit nunc semper volutpat suspendisse amet
							elit ornare.
						</p>
						<div className="flex justify-center space-x-4 mt-[19px] mb-[42px]">
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star.png" width="20" height="19" alt="" />
							<Image src="/star_rate_half.png" width="20" height="19" alt="" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Homepage;
