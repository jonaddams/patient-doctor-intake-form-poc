"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface PatientData {
	patient: {
		firstName: string;
		lastName: string;
	};
	visitInfo: {
		date: string;
		time: string;
		provider: string;
	};
}

export default function Home() {
	const [patientData, setPatientData] = useState<PatientData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [currentTime, setCurrentTime] = useState<string>("");
	const [appointmentDate, setAppointmentDate] = useState<string>("");
	const [appointmentTime, setAppointmentTime] = useState<string>("");

	useEffect(() => {
		// Load patient data
		const loadPatientData = async () => {
			setIsLoading(true);
			const response = await fetch("/data/patient-data.json");
			const data = await response.json();
			setPatientData(data);
			setIsLoading(false);
		};

		loadPatientData();

		// Set appointment date and time
		const now = new Date();
		const appointmentDateTime = new Date(now.getTime() + 20 * 60 * 1000); // Add 20 minutes

		setAppointmentDate(now.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		}));

		setAppointmentTime(appointmentDateTime.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		}));

		// Update current time
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				}),
			);
		};

		updateTime();
		const timeInterval = setInterval(updateTime, 1000);

		return () => clearInterval(timeInterval);
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-white flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
					<p className="text-gray-600">Loading check-in information...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
			{/* Header - Medical Practice Style */}
			<header className="bg-white shadow-sm border-b-2 border-blue-600">
				<div className="max-w-4xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
								<svg
									className="w-7 h-7 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="Medical center icon"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<div>
								<h1 className="text-xl font-bold text-gray-900">
									Springfield Family Medical Center
								</h1>
								<p className="text-sm text-gray-600">
									Digital Patient Check-In
								</p>
							</div>
						</div>
						<div className="text-right">
							<div className="text-sm text-gray-600">Today</div>
							<div className="font-semibold text-gray-900">{currentTime}</div>
						</div>
					</div>
				</div>
			</header>

			{/* Main Check-In Interface */}
			<main className="max-w-4xl mx-auto px-6 py-12">
				{/* Welcome Section */}
				<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
					<div className="text-center mb-8">
						<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<svg
								className="w-10 h-10 text-green-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Patient profile icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</div>
						<h2 className="text-3xl font-bold text-gray-900 mb-2">
							Welcome, {patientData?.patient.firstName}!
						</h2>
						<p className="text-lg text-gray-600 mb-6">
							Thank you for choosing Springfield Family Medical Center
						</p>
					</div>

					{/* Appointment Details */}
					<div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="font-semibold text-blue-900 mb-3 flex items-center">
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Calendar icon"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 7V3a4 4 0 118 0v4m-4 5v6M3 10h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Today&apos;s Appointment
								</h3>
								<div className="space-y-1 text-blue-800">
									<p>
										<strong>Date:</strong> {appointmentDate}
									</p>
									<p>
										<strong>Time:</strong> {appointmentTime}
									</p>
									<p>
										<strong>Provider:</strong> {patientData?.visitInfo.provider}
									</p>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-blue-900 mb-3 flex items-center">
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Document icon"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									Visit Type
								</h3>
								<div className="text-blue-800">
									<p>Annual Physical Examination</p>
									<p className="text-sm text-blue-600 mt-1">
										Comprehensive health check-up
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Check-In Instructions */}
					<div className="mb-8">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">
							Before Your Appointment
						</h3>
						<div className="bg-green-50 border border-green-200 rounded-lg p-4">
							<div className="flex items-start">
								<div className="w-6 h-6 text-green-600 mr-3 mt-0.5">
									<svg
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-label="Lightning icon"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium text-green-900 mb-2">Good news!</p>
									<p className="text-green-800 text-sm">
										We&apos;ve pre-filled your intake forms with information from
										your previous visits. Please review and update any
										information as needed, then provide your electronic
										signatures.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Begin Check-In Button */}
					<div className="text-center">
						<Link
							href="/patient-portal"
							className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-200 text-lg"
						>
							<svg
								className="w-6 h-6 mr-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Begin check-in"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
							Begin Check-In
						</Link>
					</div>

					<div className="mt-6 text-center text-sm text-gray-500">
						<p>Estimated completion time: 3-5 minutes</p>
					</div>
				</div>

				{/* Help Information */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
					<h3 className="font-semibold text-gray-900 mb-4 flex items-center">
						<svg
							className="w-5 h-5 mr-2 text-blue-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Help icon"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Need Assistance?
					</h3>
					<div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
						<div>
							<p className="font-medium text-gray-900">Technical Support</p>
							<p>
								If you experience any issues with this tablet, please bring it
								to our front desk staff.
							</p>
						</div>
						<div>
							<p className="font-medium text-gray-900">Medical Questions</p>
							<p>
								For questions about your forms or appointment, our staff is
								happy to help.
							</p>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-gray-50 border-t border-gray-200 py-6">
				<div className="max-w-4xl mx-auto px-6 text-center text-xs text-gray-500">
					<p>
						Springfield Family Medical Center • Secure Digital Check-In System
					</p>
					<p className="mt-1">
						Your information is protected and HIPAA compliant
					</p>
				</div>
			</footer>
		</div>
	);
}
