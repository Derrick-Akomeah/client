import Image from 'next/image';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const ContactUs = () => {
	return (
		<div>
			<Header />
			<div className="flex space-x-40 font-inter">
				<div>
					<div className="ml-[120px] text-left mt-[105px]">
						<p className=" text-xl font-semibold text-orange-500 mb-[10px]">
							Contact Us
						</p>
						<h1 className=" text-5xl font-semibold mb-[8px]">
							Let's Get In <span className="text-orange-500">Touch</span>
						</h1>
						<p className="w-[500px] h-[104px] mb-[78px] text-[#7A7A7A]">
							Et euismod neque tortor vulputate imperdiet. At sapien in vehicula
							viverra dignissim libero risus tellus placerat. Laoreet aliquet id
							sociis nibh ut nisl. Arcu amet quis nec volutpat nunc. Rhoncus
							nunc quis dignissim amet.
						</p>
					</div>

					<div className=" text-left ml-[120px] mt-20 mb-[147px] space-y-[43px] text-gray-500">
						<div className="flex space-x-2">
							<Image src="/contact-location.png" width="32" height="32" />
							<p>Greater Accra-Tema</p>
						</div>

						<div className="flex space-x-2">
							<Image src="/contact-phone.png" width="32" height="32" />
							<p>+233 24 006 295</p>
						</div>

						<div className="flex space-x-2">
							<Image
								src="/contact-email.png"
								width="32"
								height="32"
								className="text-orange-500"
							/>
							<p>admin@homehub.com</p>
						</div>
					</div>

					<Image
						src="/social-media.png"
						width="232"
						height="40"
						className="ml-[120px] mb-[69px]"
					/>
				</div>

				<div>
					<div className="relative left-[280px] w-[395px] h-[711px] border-[2px] border-orange-500"></div>
					<form
						action="#"
						className=" absolute top-[60px] right-[100px] bg-white w-[588px] h-[639px] mt-[105px] px-[51px] space-y-8 border-2 shadow-lg border-gray-100 rounded-lg"
					>
						<div className="mt-[63px]">
							<label
								for="firstName"
								className="block mb-[13px] text-left text-base font-bold  text-black"
							>
								Name
							</label>
							<input
								type="text"
								id="firstName"
								className=" text-gray-900 text-sm block w-[486px] h-[55px] bg-[#F6F6F6] border border-gray-100"
								required
							></input>
						</div>

						<div className="mt-[24px]">
							<label
								for="email"
								className="block mb-2 text-left text-base font-bold text-black"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className=" text-sm block w-[486px] h-[55px] border border-gray-100 bg-[#F6F6F6] text-white"
								required
							></input>
						</div>

						<div class="sm:col-span-2">
							<label
								for="message"
								className="block mb-2 text-base text-left font-bold text-black"
							>
								Message
							</label>
							<textarea
								id="message"
								rows="6"
								className="block w-[486px] h-[173px] text-sm text-orange-500 border  bg-[#F6F6F6] border-gray-100"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-[486px] h-[60px] mt-[24px] mb-[65px] py-[18px] pl-[172px] pr-[171px] text-xl text-center text-white rounded-sm bg-orange-500 hover:bg-orange-700"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
