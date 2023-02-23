import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<>
			<Header />
			<div className=" font-inter">
				<div className=" h-[732px] bg-[#014352] flex space-x-[91px] mb-[100px]">
					<div className=" w-[497px] h-[240px] ml-[120px] mr-[79px] mt-[234px] font-semibold text-5xl text-left text-white space-y-4">
						<h1 className="font-bold">
							We Are The <span className=" text-orange-500">Leading</span>
						</h1>
						<h1 className="font-bold">Real Estate Rental</h1>
						<h1 className="font-bold">
							<span className="text-orange-500">Marketplace</span>
						</h1>
					</div>
					<div className=" mt-[65px]">
						<Image src="/aboutUs1.png" width="732" height="667" />
					</div>
				</div>

				<div className=" ml-56 mt-24 mb-16 text-left w-[1040px] space-y-6">
					<h1 className="font-bold text-5xl w-[542px] h-[80px] mb-[16px]">
						Know About <span className=" text-orange-500">Homehub</span>.
					</h1>

					<p className="w-[996px] h-[160px] text-base text-[#58575F]">
						Velit eget pellentesque tortor erat diam accumsan ullamcorper
						viverra. Varius fames diam sed egestas sit ac. Nisl tellus arcu
						tortor montes nulla faucibus egestas potenti donec.Malesuada sodales
						viverra senectus sed. Id id tortor sed scelerisque sed ut tempor
						pretium sit. Commodo donec urna vestibulum augue semper volutpat
						euismod ullamcorper arcu. Magna luctus mauris diam at diam ipsum sed
						non sed. Metus arcu nullam eu pretium aliquam morbi scelerisque
						tempus tincidunt. Eget tortor sed mi tellus porta penatibus.
						Fermentum neque sapien auctor eleifend. Eget tincidunt netus blandit
						a consequat tristique. Ut tempor sed lacinia arcu.
					</p>
				</div>

				<div className="flex mx-[120px] space-x-[24px] mb-[80px]">
					<div className="border rounded-lg shadow-md">
						<Image src="/aboutUs2.png" width="384" height="393" />
					</div>

					<div className=" rounded-lg shadow-md border">
						<Image src="/aboutUs3.png" width="384" height="393" />
					</div>

					<div className=" rounded-lg shadow-md border">
						<Image src="/aboutUs4.png" width="384" height="393" />
					</div>
				</div>

				<div className=" text-left mb-16 w-[1040px] ml-[221px]">
					<h1 className="w-[558px] h-[32px] text-5xl font-semibold mb-[19px]">
						Our <span className=" text-orange-500">Values</span> &amp;{' '}
						<span className=" text-orange-500">Objectives</span>
					</h1>
					<p className="w-[996px] h-[96px]  mr-[223px] mb-[67px] text-base text-[#58575F]">
						Malesuada sodales viverra senectus sed. Id id tortor sed scelerisque
						sed ut tempor pretium sit. Commodo donec urna vestibulum augue
						semper volupat euismod ullamcorper arcu. Magna luctus mauris diam
						diam at diam ipsum sed non sed. Metus arcu nullam eu pretium aliquam
						morbi scelerisque tempus tincidunt.
					</p>
				</div>

				<div className="space-y-[24px] mb-48">
					<div className="ml-[104px] flex text-left">
						<Image src="/curved-div.png" width="14" height="199" />
						<div className=" w-[578px] h-[199px] border rounded-md pt-6 px-6 shadow-md">
							<h1 className=" text-2xl font-bold">Core Value</h1>
							<p>
								Ac et risus neque consequat nibh sed. Sit urna purus habitasse
								lectus quis nisi fames magnis dui. Neque non donec nibh lobortis
								cursus tellus ut risus bibendum. Phasellus libero mattis sit
								imperdiet et rhoncus ullamcorper elit.
							</p>
						</div>
						<div className=" w-[588px] h-[199px] ml-[24px] rounded-md pt-6 px-6 border shadow-md">
							<h1 className=" text-2xl font-bold">Core Value</h1>
							<p>
								Ac et risus neque consequat nibh sed. Sit urna purus habitasse
								lectus quis nisi fames magnis dui. Neque non donec nibh lobortis
								cursus tellus ut risus bibendum. Phasellus libero mattis sit
								imperdiet et rhoncus ullamcorper elit.
							</p>
						</div>
					</div>

					<div className=" ml-32 flex space-x-[24px] text-left">
						<div className="w-[588px] h-[199px] rounded-md pt-6 px-6 border shadow-md">
							<h1 className=" text-2xl font-bold">Core Value</h1>
							<p>
								Ac et risus neque consequat nibh sed. Sit urna purus habitasse
								lectus quis nisi fames magnis dui. Neque non donec nibh lobortis
								cursus tellus ut risus bibendum. Phasellus libero mattis sit
								imperdiet et rhoncus ullamcorper elit.
							</p>
						</div>

						<div className=" w-[588px] h-[199px] rounded-md mb-4 pt-6 px-6 border shadow-md">
							<h1 className=" text-2xl font-bold">Core Value</h1>
							<p>
								Ac et risus neque consequat nibh sed. Sit urna purus habitasse
								lectus quis nisi fames magnis dui. Neque non donec nibh lobortis
								cursus tellus ut risus bibendum. Phasellus libero mattis sit
								imperdiet et rhoncus ullamcorper elit.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutUs;
