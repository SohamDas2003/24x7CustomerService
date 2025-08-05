"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Phone,
	PhoneCall,
	Star,
	ChevronDown,
	Calendar,
	Clock,
	Timer,
} from "lucide-react";
import Image from "next/image";
import { TollFreeNumber } from "./TollFreeNum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import logo from "../public/logo.png";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
	const services = [
		"Washing Machine Service",
		"Front Load Washing Machine",
		"Top Load Washing Machine",
		"Refrigerator Service",
		"Single-door Refrigerator",
		"Double-door Refrigerator",
		"Side-by-Side Refrigerator",
		"Microwave Oven Repair",
		"Commercial Microwave",
		"LED TV Service",
		"OLED TV",
		"OLED LED TV",
		"Curve TV",
		"Smart TV",
		"Plasma TV",
		"Dishwasher",
		"Dryer",
		"Chimney/Hob",
		"Air Conditioner Service",
		"Split AC",
		"Cassette AC",
		"Window AC",
		"Ductable AC",
		"Commercial Appliances",
		"Kitchen Appliances Package",
		"Other Products",
	];

	// Progressive fade-in animation for service buttons
	const [visibleButtons, setVisibleButtons] = useState<number[]>([]);
	const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Progressive fade-in animation for appliance service cards
	const applianceServices = [
		{
			title: "Front Load Washing Machine Service",
			image: "/front.png",
		},
		{
			title: "Top Load Washing Machine Service",
			image: "/top.png",
		},
		{
			title: "Side by Side Refrigerator Service",
			image: "/side.png",
		},
		{
			title: "Double Door Refrigerator Service",
			image: "/double.png",
		},
		{
			title: "Grill Microwave Oven Service",
			image: "/grill.png",
		},
		{
			title: "Convection Microwave Oven Service",
			image: "/convection.png",
		},
		{
			title: "Dishwasher Service",
			image: "/dishwasher.png",
		},
		{
			title: "Television Service",
			image: "/tv.png",
		},
	];
	const [visibleCards, setVisibleCards] = useState<number[]>([]);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Animation states for info rows
	const [visibleRows, setVisibleRows] = useState<number[]>([]);
	const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Animation states for text elements
	const [visibleTexts, setVisibleTexts] = useState<{ [key: string]: boolean }>(
		{}
	);
	const textRefs = useRef<{ [key: string]: HTMLElement | null }>({});

	// Animation states for sections
	const [visibleSections, setVisibleSections] = useState<{
		[key: string]: boolean;
	}>({});
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

	// Animation states for FAQ items
	const [visibleFaqItems, setVisibleFaqItems] = useState<number[]>([]);
	const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Animation states for location badges
	const [visibleLocationBadges, setVisibleLocationBadges] = useState<number[]>(
		[]
	);
	const locationRefs = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Number(entry.target.getAttribute("data-index"));
					if (entry.isIntersecting) {
						setVisibleButtons((prev) =>
							prev.includes(index)
								? prev
								: [...prev, index].sort((a, b) => a - b)
						);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		buttonRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idx = Number(entry.target.getAttribute("data-card-index"));
					if (entry.isIntersecting) {
						setVisibleCards((prev) =>
							prev.includes(idx) ? prev : [...prev, idx].sort((a, b) => a - b)
						);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		cardRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	// Effect for info rows animation
	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idx = Number(entry.target.getAttribute("data-info-index"));
					if (entry.isIntersecting) {
						setVisibleRows((prev) =>
							prev.includes(idx) ? prev : [...prev, idx].sort((a, b) => a - b)
						);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		rowRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	// Effect for text elements animation
	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const textId = entry.target.getAttribute("data-text-id");
					if (entry.isIntersecting && textId) {
						setVisibleTexts((prev) => ({ ...prev, [textId]: true }));
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);

		Object.values(textRefs.current).forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	// Effect for sections animation
	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const sectionId = entry.target.getAttribute("data-section-id");
					if (entry.isIntersecting && sectionId) {
						setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);

		Object.values(sectionRefs.current).forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	// Effect for FAQ items animation
	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idx = Number(entry.target.getAttribute("data-faq-index"));
					if (entry.isIntersecting) {
						setVisibleFaqItems((prev) =>
							prev.includes(idx) ? prev : [...prev, idx].sort((a, b) => a - b)
						);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		faqRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	// Effect for location badges animation
	useEffect(() => {
		if (typeof window === "undefined") return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idx = Number(entry.target.getAttribute("data-location-index"));
					if (entry.isIntersecting) {
						setVisibleLocationBadges((prev) =>
							prev.includes(idx) ? prev : [...prev, idx].sort((a, b) => a - b)
						);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);
		locationRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});
		return () => observer.disconnect();
	}, []);

	const infoRows = [
		{
			icon: <Calendar className="w-6 h-6 text-red-700" />,
			text: "Booking Schedule: Customer Care Executive Support",
		},
		{
			icon: <Clock className="w-6 h-6 text-red-700" />,
			text: "24X7(24Hours 7days a week)",
		},
		{
			icon: <Timer className="w-6 h-6 text-red-700" />,
			text: "Service Available: All Day",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="bg-white shadow-sm py-4 animate-fade-in">
				<div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
					<div
						ref={(el) => (textRefs.current["logo"] = el)}
						data-text-id="logo"
						className={`transition-all duration-700 ease-out transform ${
							visibleTexts["logo"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}>
						<Image
							src={logo}
							alt="Repair India Logo"
							className="h-12 md:h-16 w-auto hover:scale-105 transition-transform duration-300"
							width={120}
							height={40}
						/>
					</div>
					<nav
						ref={(el) => (textRefs.current["nav"] = el)}
						data-text-id="nav"
						className={`hidden md:flex space-x-8 transition-all duration-700 ease-out transform ${
							visibleTexts["nav"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}>
						<a
							href="#home"
							className="text-black-600 hover:text-black-800 transition-all duration-300 font-roboto-condensed hover:scale-110 hover:-translate-y-1"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("home")
									?.scrollIntoView({ behavior: "smooth" });
							}}>
							HOME
						</a>
						<a
							href="#services"
							className="text-black-600 hover:text-black-800 transition-all duration-300 font-roboto-condensed hover:scale-110 hover:-translate-y-1"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("services")
									?.scrollIntoView({ behavior: "smooth" });
							}}>
							SERVICE
						</a>
						<a
							href="#about"
							className="text-black-600 hover:text-black-800 transition-all duration-300 font-roboto-condensed hover:scale-110 hover:-translate-y-1"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("about")
									?.scrollIntoView({ behavior: "smooth" });
							}}>
							ABOUT
						</a>
						<a
							href="#contact"
							className="text-black-600 hover:text-black-800 transition-all duration-300 font-roboto-condensed hover:scale-110 hover:-translate-y-1"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" });
							}}>
							CONTACT
						</a>
					</nav>
					<div
						ref={(el) => (textRefs.current["call-button"] = el)}
						data-text-id="call-button"
						className={`transition-all duration-700 ease-out transform ${
							visibleTexts["call-button"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}>
						<Button
							className="bg-[#A50035] hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold shadow-lg font-roboto-condensed hover:scale-105 hover:shadow-xl transition-all duration-300"
							onClick={() => (window.location.href = `tel:${TollFreeNumber}`)}>
							<PhoneCall className="w-5 h-5 mr-2" />
							Call Now
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section
				id="home"
				className="relative min-h-[180px] sm:min-h-[320px] md:min-h-[500px] bg-white overflow-hidden flex items-center justify-center">
				{/* Image Carousel */}
				<div className="absolute inset-0">
					<Swiper
						spaceBetween={0}
						centeredSlides={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination]}
						className="h-[44vw] min-h-[180px] sm:h-[400px] md:min-h-[800px]"
						loop={true}>
						<SwiperSlide>
							<div
								className="w-full h-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url('banner.png')`,
								}}></div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								className="w-full h-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url('banner.png')`,
								}}></div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								className="w-full h-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url('banner.png')`,
								}}></div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			{/* <div className="relative z-10 max-w-7xl mx-auto px-4 py-20"> */}
			<div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
				<div
					ref={(el) => (textRefs.current["hero-text"] = el)}
					data-text-id="hero-text"
					className={`flex flex-col w-full items-center mt-12 transition-all duration-700 ease-out transform ${
						visibleTexts["hero-text"]
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}>
					<p className="text-black-700 leading-relaxed font-roboto-condensed text-justify">
						Our Service Center Will support you around the clock 24X7! Please
						login and submit the form from one of our team members and contact
						you within 1 hour or click on the toll free number below.
					</p>
					<div className="text-center mt-6 w-full">
						<Button
							className="bg-[#A50035] hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
							onClick={() => (window.location.href = `tel:${TollFreeNumber}`)}>
							24X7 Executive Support
						</Button>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* Second Hero Section */}
			<section className="py-10">
				<div className="w-full mx-auto">
					<div
						ref={(el) => (sectionRefs.current["second-hero"] = el)}
						data-section-id="second-hero"
						className={`overflow-hidden transition-all duration-700 ease-out transform ${
							visibleSections["second-hero"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						<div className="w-full aspect-[16/9] flex items-center justify-center">
							<Image
								src="banner2.png"
								alt="Second Hero Banner"
								width={1280}
								height={720}
								className="w-full h-auto object-contain"
								draggable="false"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-10 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col lg:flex-row gap-16 items-start">
						{/* Left Column - Contact Info */}
						<div className="space-y-8 animate-slide-in-left w-full lg:w-[65%]">
							<div
								ref={(el) => (textRefs.current["contact-intro"] = el)}
								data-text-id="contact-intro"
								className={`text-left transition-all duration-700 ease-out transform ${
									visibleTexts["contact-intro"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<p className="text-black-700 mb-4 text-justify">
									<span className="text-lg md:text-xl">
										Use the form below to contact us for general inquiries or
										questions about our services/products.
									</span>
								</p>
								<div className="space-y-4 text-base md:text-lg text-black-600">
									{infoRows.map((row, idx) => (
										<div
											key={idx}
											ref={(el) => (rowRefs.current[idx] = el)}
											data-info-index={idx}
											className={`flex items-center space-x-2 text-left mt-2 transition-all duration-700 ease-out transform ${
												visibleRows.includes(idx)
													? "opacity-100 translate-x-0"
													: "opacity-0 -translate-x-8"
											}`}
											style={{
												transitionDelay: `${visibleRows.indexOf(idx) * 80}ms`,
											}}>
											{row.icon}
											<span>{row.text}</span>
										</div>
									))}
								</div>
							</div>

							<Card
								ref={(el) => (textRefs.current["contact-card"] = el)}
								data-text-id="contact-card"
								className={`p-6 bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all duration-700 ease-out transform ${
									visibleTexts["contact-card"]
										? "opacity-100 translate-y-0 scale-100"
										: "opacity-0 translate-y-8 scale-95"
								}`}>
								<h3 className="text-xl font-semibold text-center mb-4">
									Get in touch for Your product service
								</h3>
								<div className="text-center">
									<Button
										onClick={() =>
											(window.location.href = `tel:${TollFreeNumber}`)
										}
										className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300">
										<Phone className="w-5 h-5 mr-2" />
										Helpline Number
									</Button>
								</div>
							</Card>

							{/* Service Center Image */}
							<div
								ref={(el) => (textRefs.current["service-image"] = el)}
								data-text-id="service-image"
								className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform group ${
									visibleTexts["service-image"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<Image
									src="service.png"
									alt="Professional technician servicing home appliances"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									width={800}
									height={800}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
							</div>

							<div
								ref={(el) => (textRefs.current["nearest-service"] = el)}
								data-text-id="nearest-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["nearest-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="text-xl font-bold mb-4">
									Nearest Service Centre
								</h3>
								<p className="text-black-600 text-base md:text-lg leading-relaxed text-justify">
									All Home Appliances are repaired and serviced with 100%
									customer satisfaction. We provide all trained certified,
									verified technicians who hold many years of professional
									experience in a particular microwave oven service,
									Refrigerator Service, Air Conditioner Service, Washing Machine
									service, Dishwasher service, LED Repair/OLED TV Repair & many
									more. If you have any queries or to book a service request
									contact us by clicking our toll-free number or mail us within
									half an hour we will get in touch with you soon.
								</p>
							</div>
							<div
								ref={(el) => (textRefs.current["expert-repair"] = el)}
								data-text-id="expert-repair"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["expert-repair"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="text-xl font-bold mb-4">
									Expert Home Appliance Repair & Service – Guaranteed
									Satisfaction!
								</h3>
								<p className="text-black-600 text-base md:text-lg leading-relaxed text-justify">
									We specialize in repairing and servicing all home appliances
									with 100% customer satisfaction. Our team consists of
									certified and verified technicians, each with years of
									professional experience in their respective fields. We provide
									expert solutions for:
								</p>
								<ul className="list-none space-y-1 pl-0 font-semibold my-2">
									<li className="flex items-start">
										<span className="mr-2">✔</span>Microwave Oven Repair &
										Service
									</li>
									<li className="flex items-start">
										<span className="mr-2">✔</span>Refrigerator Repair & Service
									</li>
									<li className="flex items-start">
										<span className="mr-2">✔</span>Air Conditioner (AC) Repair &
										Service
									</li>
									<li className="flex items-start">
										<span className="mr-2">✔</span>Washing Machine Repair &
										Service
									</li>
									<li className="flex items-start">
										<span className="mr-2">✔</span>Dishwasher Repair & Service
									</li>
									<li className="flex items-start">
										<span className="mr-2">✔</span>LED/QLED TV Repair & More!
									</li>
								</ul>
								<p>
									For any inquiries or to book a service request, contact us via
									our toll-free number or email us.
								</p>
							</div>
						</div>
						{/* Right Column - Services List */}
						<div className="w-full lg:w-[35%]">
							<h2
								ref={(el) => (textRefs.current["services-title"] = el)}
								data-text-id="services-title"
								className={`text-2xl font-bold text-center mb-8 transition-all duration-700 ease-out transform ${
									visibleTexts["services-title"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								Products Repairs & Services List
							</h2>
							<div className="grid gap-3">
								{services.map((service, index) => (
									<div
										key={index}
										ref={(el) => (buttonRefs.current[index] = el)}
										data-index={index}
										className={`transition-all duration-700 ease-out transform ${
											visibleButtons.includes(index)
												? "opacity-100 translate-x-0"
												: "opacity-0 translate-x-8"
										}`}
										style={{
											transitionDelay: `${
												visibleButtons.indexOf(index) * 40
											}ms`,
										}}>
										<Button
											variant="outline"
											className="h-10 md:h-12 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-black-700 hover:text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md w-full"
											onClick={(e) => {
												e.preventDefault();
												window.scrollTo({ top: 0, behavior: "smooth" });
											}}>
											{service}
										</Button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* All Models Appliances Service Section */}
			<section className="py-8 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2
						ref={(el) => (textRefs.current["appliances-title"] = el)}
						data-text-id="appliances-title"
						className={`text-3xl font-bold text-center mb-6 transition-all duration-700 ease-out transform ${
							visibleTexts["appliances-title"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						All Models Appliances Service
					</h2>

					{/* Service Cards Grid with progressive fade-in */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{applianceServices.map((service, index) => (
							<div
								key={index}
								ref={(el) => (cardRefs.current[index] = el)}
								data-card-index={index}
								className={`text-center group w-full transition-all duration-700 ease-out transform ${
									visibleCards.includes(index)
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									transitionDelay: `${visibleCards.indexOf(index) * 100}ms`,
								}}>
								<div
									className="bg-white rounded-lg p-4 mb-3 flex items-center justify-center hover:bg-white transition-all duration-300 group-hover:scale-105 w-full"
									onClick={() =>
										(window.location.href = `tel:${TollFreeNumber}`)
									}
									style={{
										minHeight: "180px",
										height: "clamp(180px, 22vw, 260px)",
										overflow: "hidden",
									}}>
									<Image
										src={service.image}
										alt={service.title}
										className="rounded group-hover:scale-110 transition-transform duration-500 w-full h-full object-contain"
										width={260}
										height={160}
									/>
								</div>
								<p className="text-base md:text-lg text-black-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
									{service.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Gray Information Section */}
			<section className="py-10 bg-gray-600 text-white">
				<div
					ref={(el) => (sectionRefs.current["gray-info"] = el)}
					data-section-id="gray-info"
					className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ease-out transform ${
						visibleSections["gray-info"]
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}>
					<p className="text-lg mb-6">
						Same day repair service within Chennai.
					</p>
					<p className="mb-4">
						Our technicians will come to your home, correctly diagnose the
						problem, and provide you with the best service and there in the
						industry.
					</p>
					<p className="mb-4">
						All of our technicians are trained and highly qualified to repair
						all products.
					</p>
					<p>
						We Repair All Appliances Products with a completely authentic
						process.
					</p>
				</div>
			</section>

			{/* Topest Home Appliances Service Center */}
			<section id="about" className="py-6 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<h2
						ref={(el) => (textRefs.current["about-title"] = el)}
						data-text-id="about-title"
						className={`text-2xl font-bold mb-8 transition-all duration-700 ease-out transform ${
							visibleTexts["about-title"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						Topest Home Appliances Service Center
					</h2>

					<div className="space-y-6 text-black-700 leading-relaxed text-justify">
						<p
							ref={(el) => (textRefs.current["about-intro"] = el)}
							data-text-id="about-intro"
							className={`transition-all duration-700 ease-out transform ${
								visibleTexts["about-intro"]
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							All brands are famous for their high-quality home appliances and
							electronics, offering a wide range of products including washing
							machines, refrigerators, microwaves, televisions, dishwashers,
							dryers, hobs and chimneys, air conditioners, and more. As we are
							an outsourcing service and repair provider for all brand&aposs
							products(not holding any authority), it&aposs essential to
							understand the importance of these home appliances and the common
							faults they may cause.
						</p>

						<div className="space-y-4">
							<div
								ref={(el) => (textRefs.current["washing-service"] = el)}
								data-text-id="washing-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["washing-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="font-semibold text-black-800 mb-2">
									Washing Machine Service:
								</h3>
								<p>
									washing machines are known for their efficiency and
									durability. However, common faults may include issues with
									drainage, motor problems, not Turning On, or &ldquo;Washing
									Machine Not Spinning Problem&rdquo;, any errors code like
									PE/HE/OE/LE/FE or electronic control failures all are
									rectified. Proper diagnosis and timely repairs are extremely
									very important to ensure optimal performance.
								</p>
							</div>

							<div
								ref={(el) => (textRefs.current["refrigerator-service"] = el)}
								data-text-id="refrigerator-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["refrigerator-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="font-semibold text-black-800 mb-2">
									Refrigerators Service:
								</h3>
								<p>
									refrigerators hold feature innovative designs and advanced
									cooling technologies. Faults often revolve around temperature
									regulation, not Working Noisy Compressors issues or any
									defrosting errors, or Refrigerators not Freezing, or
									malfunctioning ice makers. Prompt regular servicing is
									necessary to prevent food spoilage and maintain energy
									efficiency.
								</p>
							</div>

							<div
								ref={(el) => (textRefs.current["microwave-service"] = el)}
								data-text-id="microwave-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["microwave-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="font-semibold text-black-800 mb-2">
									Microwaves Service:
								</h3>
								<p>
									microwaves offer convenience and versatility for kitchen work.
									Faults may arise from faulty door switches, heating element
									malfunctions board Repair, and replacement, not Heating
									issues, sensor issues, or control panel issues. Swift repairs
									are vital for safe usage and consistent cooking results.
								</p>
							</div>

							<div
								ref={(el) => (textRefs.current["tv-service"] = el)}
								data-text-id="tv-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["tv-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="font-semibold text-black-800 mb-2">
									Televisions Service:
								</h3>
								<p>
									televisions deliver fascinating entertainment experiences with
									cutting-edge displays and smart technology features. Common
									faults may include display glitches issues, audio/video
									problems, connectivity issues, or remote faults. Accurate
									problems and repairs are essential to restore viewing
									pleasure.
								</p>
							</div>

							<div
								ref={(el) => (textRefs.current["ac-service"] = el)}
								data-text-id="ac-service"
								className={`transition-all duration-700 ease-out transform ${
									visibleTexts["ac-service"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								<h3 className="font-semibold text-black-800 mb-2">
									Air Conditioner Service:
								</h3>
								<p>
									As we are an outsourced AC servicing & repairing team, our
									originators are experts in providing repair, service,
									installation/ uninstallation solutions for all kinds of air
									conditioner models. our service center technicians can do all
									brands of AC services such as Voltas ac service, Daikin AC
									service, Godrej AC, Carrier AC, Blue Star AC service, Haier AC
									service, Toshiba AC repair service like split AC installation,
									uninstallation split AC Gas filling, window AC repair, and
									cassette AC repair services & more.
								</p>
							</div>
						</div>

						<p
							ref={(el) => (textRefs.current["about-conclusion"] = el)}
							data-text-id="about-conclusion"
							className={`transition-all duration-700 ease-out transform ${
								visibleTexts["about-conclusion"]
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							As we are an independent service provider especially only in
							out-of-warranty appliances, our commitment is to deliver satisfied
							repair services using genuine spare/brand parts backed by a
							guarantee. With our expertise and dedication, we ensure that every
							repair restores your appliance to its optimal functionality,
							extending its lifespan and maximizing your investment. Whether
							it&aposs a washing machine, dishwasher, microwave, television,
							dishwasher, dryer, hob, chimney, air conditioner, or any other
							product, our skilled technicians extremely carefully diagnose and
							address any faults with precision and care. By utilizing authentic
							parts reliability, provides you with peace of mind and confidence
							in the longevity of your repaired & serviced appliance. Trust us
							to deliver professional and reliable repair solutions to your
							out-of-warranty appliances, ensuring they continue to serve you
							effectively for years to come.
						</p>

						<div className="mt-4">
							<h3
								ref={(el) => (textRefs.current["faq-title"] = el)}
								data-text-id="faq-title"
								className={`font-semibold text-black-800 mb-4 transition-all duration-700 ease-out transform ${
									visibleTexts["faq-title"]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}>
								Frequently Asked Questions
							</h3>
							<div className="space-y-2">
								<div
									ref={(el) => (faqRefs.current[0] = el)}
									data-faq-index={0}
									className={`transition-all duration-700 ease-out transform ${
										visibleFaqItems.includes(0)
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}>
									<Collapsible>
										<CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-md">
											<span className="font-medium text-black-800">
												What types of AC service and repair do you provide?
											</span>
											<ChevronDown className="w-5 h-5 text-black-500 transition-transform duration-300" />
										</CollapsibleTrigger>
										<CollapsibleContent className="p-4 bg-white border border-gray-200 rounded-lg mt-1 animate-slide-up">
											<p className="text-black-600 text-sm">
												We provide comprehensive AC services including split AC
												repair, window AC repair, cassette AC repair, central AC
												maintenance, gas filling, installation, uninstallation,
												and regular servicing for all major brands like Voltas,
												Daikin, Godrej, Carrier, Blue Star, Haier, and Toshiba.
											</p>
										</CollapsibleContent>
									</Collapsible>
								</div>

								<div
									ref={(el) => (faqRefs.current[1] = el)}
									data-faq-index={1}
									className={`transition-all duration-700 ease-out transform ${
										visibleFaqItems.includes(1)
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}
									style={{ transitionDelay: "100ms" }}>
									<Collapsible>
										<CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-md">
											<span className="font-medium text-black-800">
												What types of services do you offer?
											</span>
											<ChevronDown className="w-5 h-5 text-black-500 transition-transform duration-300" />
										</CollapsibleTrigger>
										<CollapsibleContent className="p-4 bg-white border border-gray-200 rounded-lg mt-1 animate-slide-up">
											<p className="text-black-600 text-sm">
												We offer repair and maintenance services for washing
												machines, refrigerators, microwaves, televisions,
												dishwashers, dryers, air conditioners, and other home
												appliances. Our services include diagnosis, repair,
												parts replacement, and preventive maintenance.
											</p>
										</CollapsibleContent>
									</Collapsible>
								</div>

								<div
									ref={(el) => (faqRefs.current[2] = el)}
									data-faq-index={2}
									className={`transition-all duration-700 ease-out transform ${
										visibleFaqItems.includes(2)
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}
									style={{ transitionDelay: "200ms" }}>
									<Collapsible>
										<CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-md">
											<span className="font-medium text-black-800">
												Do you provide warranty on repairs?
											</span>
											<ChevronDown className="w-5 h-5 text-black-500 transition-transform duration-300" />
										</CollapsibleTrigger>
										<CollapsibleContent className="p-4 bg-white border border-gray-200 rounded-lg mt-1 animate-slide-up">
											<p className="text-black-600 text-sm">
												Yes, we provide warranty on all our repair services and
												genuine spare parts. The warranty period varies
												depending on the type of repair and parts used. We
												ensure complete customer satisfaction with our
												guaranteed service quality.
											</p>
										</CollapsibleContent>
									</Collapsible>
								</div>

								<div
									ref={(el) => (faqRefs.current[3] = el)}
									data-faq-index={3}
									className={`transition-all duration-700 ease-out transform ${
										visibleFaqItems.includes(3)
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}
									style={{ transitionDelay: "300ms" }}>
									<Collapsible>
										<CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-md">
											<span className="font-medium text-black-800">
												Which areas do you provide service in?
											</span>
											<ChevronDown className="w-5 h-5 text-black-500 transition-transform duration-300" />
										</CollapsibleTrigger>
										<CollapsibleContent className="p-4 bg-white border border-gray-200 rounded-lg mt-1 animate-slide-up">
											<p className="text-black-600 text-sm">
												Adugodi, Agra, Agram, A F Station yelahanka,
												amruthahalli, Anandnagar, Arabic college, Austin town,
												Avalahalli, Banashankari 2nd stage, Banashankari,
												Banashankari 3rd stage, Banaswadi, Bangalore city,
												Bannerghatta road, btm layout Basavanagudi, Bellandur,
												Benson town, Bommanahalli, Brigade road, C.V Ramnagar,
												Chamrajpet, Chandra layout, Chickpet, Chikkalasandra,
												Dharmaram college, Doddakallasandra, Domlur, Electronic
												city, Fraser town, Gavipuram Guttanahalli,
												Gayathrinagar, Girinagar, Gunjur, HMT, H A L 2nd stage,
												Hsr layout, Hongasandra, Hosakerehalli, Hosur road,
												Indiranagar, JP Nagar, JC Nagar, Jayanagar, Jayanagar
												west, Jayanagar east, Jayanagar 3rd block, jayanagar 4th
												block, Jigani, JP nagar 3rd Phase, Kacharakanahalli,
												Kalkunte, Kalyan nagar, Kamakshipalya, Koramangala 1st,
												Koramangala 8th block, Kumaraswamy layout, Kundalahalli,
												Lalbagh west, Lingarajapuram, Madivala, Magadi road,
												Mahadevapuram, Malleshwaram, Malleshwaram west,
												Marathahalli colony, Mathikere, Mico layout, Nagarbhavi,
												Nagasandhra, Nandini layout, New Thippasandhra, Palace
												Guttahalli, Padmanabhanagar, Panathur, RT nagar,
												Rajajinagar 1st block, Rajarajeshwari nagar, Ramamurthy
												Nagar, Richmond town, Vartur, Vijaynagar, Wilson garden,
												Yeshwantpur, Yemlur.
											</p>
										</CollapsibleContent>
									</Collapsible>
								</div>

								<div
									ref={(el) => (faqRefs.current[4] = el)}
									data-faq-index={4}
									className={`transition-all duration-700 ease-out transform ${
										visibleFaqItems.includes(4)
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}
									style={{ transitionDelay: "400ms" }}>
									<Collapsible>
										<CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-md">
											<span className="font-medium text-black-800">
												How quickly can you respond to service requests?
											</span>
											<ChevronDown className="w-5 h-5 text-black-500 transition-transform duration-300" />
										</CollapsibleTrigger>
										<CollapsibleContent className="p-4 bg-white border border-gray-200 rounded-lg mt-1 animate-slide-up">
											<p className="text-black-600 text-sm">
												We provide 24x7 customer support and our team will
												contact you within 1 hour of your service request. Our
												certified technicians are available for same-day service
												visits from 8:00 AM to 8:00 PM, Monday through Sunday.
											</p>
										</CollapsibleContent>
									</Collapsible>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Banner Section with Overlay Text */}
			<section className="bg-white">
				<div className="w-full mx-auto">
					<div
						ref={(el) => (sectionRefs.current["banner-overlay"] = el)}
						data-section-id="banner-overlay"
						className={`relative bg-white overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out transform ${
							visibleSections["banner-overlay"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						<div className="relative h-[34rem] bg-cover bg-center bg-no-repeat bg-[url('/banner3.png')]">
							{/* Overlay */}
							<div className="absolute inset-0 bg-black bg-opacity-40"></div>
							{/* Content Overlay */}
							<div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white">
								<h2
									ref={(el) => (textRefs.current["banner-title"] = el)}
									data-text-id="banner-title"
									className={`text-xl md:text-3xl font-bold mb-4 transition-all duration-700 ease-out transform ${
										visibleTexts["banner-title"]
											? "opacity-100 translate-x-0"
											: "opacity-0 -translate-x-8"
									}`}>
									Same day repair service within 90mins.
								</h2>
								<p
									ref={(el) => (textRefs.current["banner-text1"] = el)}
									data-text-id="banner-text1"
									className={`text-base md:text-md mb-4 max-w-2xl transition-all duration-700 ease-out transform ${
										visibleTexts["banner-text1"]
											? "opacity-100 translate-x-0"
											: "opacity-0 -translate-x-8"
									}`}
									style={{ transitionDelay: "200ms" }}>
									Our technicians will come to your home, correctly diagnose the
									problem, and provide you with the best service out there in
									the industry.
								</p>
								<p
									ref={(el) => (textRefs.current["banner-text2"] = el)}
									data-text-id="banner-text2"
									className={`text-base md:text-md mb-4 max-w-2xl transition-all duration-700 ease-out transform ${
										visibleTexts["banner-text2"]
											? "opacity-100 translate-x-0"
											: "opacity-0 -translate-x-8"
									}`}
									style={{ transitionDelay: "400ms" }}>
									All of our technicians are trained and highly qualified to
									repair all products.
								</p>
								<p
									ref={(el) => (textRefs.current["banner-text3"] = el)}
									data-text-id="banner-text3"
									className={`text-base md:text-md max-w-2xl transition-all duration-700 ease-out transform ${
										visibleTexts["banner-text3"]
											? "opacity-100 translate-x-0"
											: "opacity-0 -translate-x-8"
									}`}
									style={{ transitionDelay: "600ms" }}>
									We Repair All Appliances Products with a completely authentic
									process.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Locations We Serve Section */}
			<section className="py-6 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2
						ref={(el) => (textRefs.current["locations-title"] = el)}
						data-text-id="locations-title"
						className={`text-2xl font-bold mb-6 text-center transition-all duration-700 ease-out transform ${
							visibleTexts["locations-title"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						Available in Pan India & All Major Cities
					</h2>
					<div className="flex flex-wrap justify-center gap-3">
						{[
							"Pan India",
							"Thane",
							"Navi Pan India",
							"Mira Road",
							"Bangalure",
							"Kolkata",
							"Ahmedabad",
							"Hyderbaad",
							"Nashik",
							"Pune",
							"Vijayawada",
							"Agra",
							"Howrah",
							"Ludhiana",
							"Mayuru",
							"Noida",
							"Delhi",
							"Gurgaon",
							"Ghayabaad",
							"Lucknow",
							"Paryagraj",
							"Kanpur",
							"Goa",
							"Bhopal",
							"Patana",
							"Gonda",
							"Faizabad",
							"Patiala",
							"Indore",
							"Vapi",
							"Valsad",
							"Deradun",
							"Bhopal",
							"Rajkot",
						].map((loc, idx) => (
							<span
								key={idx}
								ref={(el) => (locationRefs.current[idx] = el)}
								data-location-index={idx}
								className={`px-4 py-2 rounded-full bg-red-50 text-[#A50035] text-sm font-semibold shadow-sm border border-red-200 hover:bg-blue-100 transition-all duration-700 ease-out transform ${
									visibleLocationBadges.includes(idx)
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{
									transitionDelay: `${
										visibleLocationBadges.indexOf(idx) * 50
									}ms`,
								}}>
								{loc}
							</span>
						))}
					</div>
				</div>
			</section>
			{/* Customer Ratings */}
			<section className="py-4">
				<div
					ref={(el) => (sectionRefs.current["customer-ratings"] = el)}
					data-section-id="customer-ratings"
					className={`mx-auto p-10 text-center bg-[#dff8ff] transition-all duration-700 ease-out transform ${
						visibleSections["customer-ratings"]
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}>
					<h2
						ref={(el) => (textRefs.current["ratings-title"] = el)}
						data-text-id="ratings-title"
						className={`text-3xl font-bold text-black-800 mb-8 transition-all duration-700 ease-out transform ${
							visibleTexts["ratings-title"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}>
						Our Customers Ratings And Reviews
					</h2>
					<div className="flex justify-center items-center space-x-8 mb-8">
						<div
							ref={(el) => (textRefs.current["rating-google"] = el)}
							data-text-id="rating-google"
							className={`text-center transition-all duration-700 ease-out transform ${
								visibleTexts["rating-google"]
									? "opacity-100 scale-100"
									: "opacity-0 scale-95"
							}`}
							style={{ transitionDelay: "200ms" }}>
							<div className="text-6xl font-bold text-black-800 hover:scale-110 transition-transform duration-300">
								4.9
							</div>
							<div className="flex justify-center space-x-1 mt-2">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
										style={{ animationDelay: `${i * 100}ms` }}
									/>
								))}
							</div>
							<p className="text-black-600 mt-2">2,394 Ratings</p>
							<p className="text-black-600 mt-2">Google Reviews</p>
						</div>
						<div
							ref={(el) => (textRefs.current["rating-service"] = el)}
							data-text-id="rating-service"
							className={`text-center transition-all duration-700 ease-out transform ${
								visibleTexts["rating-service"]
									? "opacity-100 scale-100"
									: "opacity-0 scale-95"
							}`}
							style={{ transitionDelay: "400ms" }}>
							<div className="text-6xl font-bold text-black-800 hover:scale-110 transition-transform duration-300">
								A+
							</div>
							<div className="flex justify-center space-x-1 mt-2">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
										style={{ animationDelay: `${i * 100}ms` }}
									/>
								))}
							</div>
							<p className="text-black-600 mt-2">Service Centre Reviews</p>
							<p className="text-black-600 mt-2">All Over India</p>
						</div>
					</div>
					<div
						ref={(el) => (textRefs.current["trusted-text"] = el)}
						data-text-id="trusted-text"
						className={`text-center transition-all duration-700 ease-out transform ${
							visibleTexts["trusted-text"]
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: "600ms" }}>
						<p className="text-xl font-semibold px-4 py-2 hover:scale-105 transition-transform duration-300">
							Trusted by over 1700+ Customers
						</p>
						<p className="text-black-600 mt-4">
							We are an experienced service provider and We are available on
							your demand.
						</p>
					</div>
				</div>
			</section>

			{/* Disclaimer Section */}
			<section id="contact" className="py-6 bg-white">
				<div
					ref={(el) => (textRefs.current["disclaimer"] = el)}
					data-text-id="disclaimer"
					className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ease-out transform ${
						visibleTexts["disclaimer"]
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-8"
					}`}>
					<h3 className="text-xl font-bold mb-4">Disclaimer:</h3>
					<div className="space-y-2 text-black-700">
						<p>
							{" "}
							&ldquo;We are an independent service provider and We have no
							authorization from any company, as &ldquo; Home Appliances 24x7
							Customer Service India&rdquo;.
						</p>
						<p>
							We deal with all brand&apos;s products only after the standard
							one-year warranty.
						</p>
						<p className="font-semibold">24*7/365 Customer Service India</p>
						<p>Service Available on National Holidays</p>
					</div>
				</div>
			</section>

			{/* Bottom Call Button */}
			<div
				ref={(el) => (textRefs.current["bottom-call"] = el)}
				data-text-id="bottom-call"
				className={`bg-[#A50035] text-white py-4 transition-all duration-700 ease-out transform ${
					visibleTexts["bottom-call"]
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-8"
				}`}>
				<div className="max-w-7xl mx-auto px-4 text-center">
					<Button
						className="bg-[#A50035] hover:bg-red-700 text-white border-white border-2 px-8 py-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
						onClick={() => (window.location.href = `tel:${TollFreeNumber}`)}>
						<Phone className="w-5 h-5 mr-2 animate-bounce" />
						{TollFreeNumber}
					</Button>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<p className="text-black-300">
						© 2025 24x7 Customer Service India. All rights reserved.
						Professional appliance repair services.
					</p>
				</div>
			</footer>
		</div>
	);
}
