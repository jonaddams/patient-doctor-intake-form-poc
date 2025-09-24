"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Viewer from "@/components/Viewer";

interface PatientData {
	patient: {
		firstName: string;
		lastName: string;
		middleName: string;
		dateOfBirth: string;
		phone: string;
		email: string;
	};
	visitInfo: {
		date: string;
		time: string;
		provider: string;
		reasonForVisit: string;
	};
}

export default function PatientPortal() {
	const router = useRouter();
	const [currentStep, setCurrentStep] = useState(0);
	const [patientData, setPatientData] = useState<PatientData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [currentDocument, setCurrentDocument] = useState<string | null>(null);

	const forms = [
		{
			name: "Patient Demographics",
			file: "Patient Demographics Form.pdf",
			duration: "1 min",
		},
		{
			name: "Emergency Contact",
			file: "Emergency Contact Information.pdf",
			duration: "30 sec",
		},
		{
			name: "Insurance Verification",
			file: "Insurance Verification Form.pdf",
			duration: "45 sec",
		},
		{
			name: "Medical History",
			file: "Medical History Questionnaire.pdf",
			duration: "1 min",
		},
		{
			name: "HIPAA Authorization",
			file: "HIPAA Authorization Form.pdf",
			duration: "30 sec",
		},
		{
			name: "Financial Responsibility",
			file: "Financial Responsibility Agreement.pdf",
			duration: "45 sec",
		},
	];

	useEffect(() => {
		// Simulate loading patient data
		const loadPatientData = async () => {
			setIsLoading(true);
			// In a real app, this would be an API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const response = await fetch("/data/patient-data.json");
			const data = await response.json();
			setPatientData(data);
			setIsLoading(false);
		};

		loadPatientData();
	}, []);

	const handleFormComplete = () => {
		if (currentStep < forms.length - 1) {
			setCurrentStep(currentStep + 1);
			setCurrentDocument(null);
		} else {
			// All forms completed - redirect to completion page
			router.push("/patient-portal/completed");
		}
	};

	const openForm = (formIndex: number) => {
		setCurrentDocument(`/documents/${forms[formIndex].file}`);
		setCurrentStep(formIndex);
	};

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
					<p className="text-gray-600">Loading your information...</p>
				</div>
			</div>
		);
	}

	if (currentDocument) {
		return (
			<div className="min-h-screen bg-white">
				{/* Header */}
				<div className="bg-white shadow-sm border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center space-x-4">
								<h1 className="text-xl font-semibold text-gray-900">
									{forms[currentStep].name}
								</h1>
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
									Form {currentStep + 1} of {forms.length}
								</span>
							</div>
							<div className="flex space-x-3">
								<button
									type="button"
									onClick={() => setCurrentDocument(null)}
									className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
								>
									← Back to Forms
								</button>
								<button
									type="button"
									onClick={handleFormComplete}
									className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-green-700"
								>
									Complete & Continue →
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Document Viewer */}
				<div className="h-[calc(100vh-4rem)]">
					<Viewer document={currentDocument} />
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
								<svg
									className="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
							<div>
								<h1 className="text-xl font-semibold text-gray-900">
									Patient Check-In
								</h1>
								<p className="text-xs text-gray-600">
									Springfield Family Medical Center
								</p>
							</div>
						</div>
						<Link
							href="/"
							className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
						>
							← Back to Demo
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Welcome Section */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
					<div className="flex items-center mb-4">
						<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
							<svg
								className="w-6 h-6 text-green-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div>
							<h2 className="text-2xl font-bold text-gray-900">
								Welcome, {patientData?.patient.firstName}{" "}
								{patientData?.patient.lastName}!
							</h2>
							<p className="text-gray-600">
								We&apos;re ready for your appointment today
							</p>
						</div>
					</div>

					<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
						<div className="flex items-center mb-2">
							<svg
								className="w-5 h-5 text-blue-600 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3a4 4 0 118 0v4m-4 5v6M3 10h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<strong className="text-blue-900">Today&apos;s Appointment</strong>
						</div>
						<div className="text-blue-800 text-sm">
							<p>
								<strong>Date:</strong> {patientData?.visitInfo.date} at{" "}
								{patientData?.visitInfo.time}
							</p>
							<p>
								<strong>Provider:</strong> {patientData?.visitInfo.provider}
							</p>
							<p>
								<strong>Reason:</strong> {patientData?.visitInfo.reasonForVisit}
							</p>
						</div>
					</div>
				</div>

				{/* Pre-population Notice */}
				<div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
					<div className="flex items-start">
						<div className="w-6 h-6 text-green-600 mr-3 mt-0.5">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<div>
							<h3 className="font-semibold text-green-900 mb-2">
								Smart Form Pre-Population
							</h3>
							<p className="text-green-800 text-sm">
								Great news! We&apos;ve pre-filled your forms using information from
								your previous visits. Please review each form to ensure accuracy
								and make any necessary updates.
							</p>
						</div>
					</div>
				</div>

				{/* Progress Indicator */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-lg font-semibold text-gray-900">
							Your Progress
						</h3>
						<span className="text-sm text-gray-600">
							{currentStep} of {forms.length} completed
						</span>
					</div>

					<div className="w-full bg-gray-200 rounded-full h-2">
						<div
							className="bg-green-600 h-2 rounded-full transition-all duration-300"
							style={{ width: `${(currentStep / forms.length) * 100}%` }}
						></div>
					</div>

					<p className="text-sm text-gray-600 mt-2">
						Estimated time remaining:{" "}
						{Math.max(0, forms.length - currentStep) * 45} seconds
					</p>
				</div>

				{/* Forms List */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
					<h3 className="text-lg font-semibold text-gray-900 mb-6">
						Intake Forms
					</h3>

					<div className="space-y-4">
						{forms.map((form, index) => (
							<div
								key={form.name}
								className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
									index < currentStep
										? "bg-green-50 border-green-200"
										: index === currentStep
											? "bg-blue-50 border-blue-200"
											: "bg-gray-50 border-gray-200"
								}`}
							>
								<div className="flex items-center">
									<div
										className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
											index < currentStep
												? "bg-green-600 text-white"
												: index === currentStep
													? "bg-blue-600 text-white"
													: "bg-gray-300 text-gray-600"
										}`}
									>
										{index < currentStep ? (
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-label="Completed checkmark"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										) : (
											<span className="text-sm font-medium">{index + 1}</span>
										)}
									</div>
									<div>
										<h4
											className={`font-medium ${
												index < currentStep
													? "text-green-900"
													: index === currentStep
														? "text-blue-900"
														: "text-gray-900"
											}`}
										>
											{form.name}
										</h4>
										<p className="text-sm text-gray-600">
											{index < currentStep
												? "Completed"
												: `Est. ${form.duration}`}
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									{index < currentStep && (
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
											<svg
												className="w-3 h-3 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-label="Complete checkmark"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											Complete
										</span>
									)}

									{index === currentStep && (
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
											Current
										</span>
									)}

									<button
										type="button"
										onClick={() => openForm(index)}
										className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
											index === currentStep
												? "bg-blue-600 text-white hover:bg-blue-700"
												: index < currentStep
													? "bg-green-600 text-white hover:bg-green-700"
													: "bg-gray-300 text-gray-500 cursor-not-allowed"
										}`}
										disabled={index > currentStep}
									>
										{index < currentStep
											? "Review"
											: index === currentStep
												? "Complete"
												: "Locked"}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Help Section */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">
						Need Help?
					</h3>
					<div className="grid md:grid-cols-2 gap-4 text-sm">
						<div className="flex items-start">
							<svg
								className="w-5 h-5 text-blue-600 mr-2 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Technical help icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div>
								<strong className="text-gray-900">Technical Issues</strong>
								<p className="text-gray-600">
									Contact IT support at (555) 123-TECH
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<svg
								className="w-5 h-5 text-green-600 mr-2 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-label="Medical questions icon"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<div>
								<strong className="text-gray-900">Medical Questions</strong>
								<p className="text-gray-600">
									Ask our front desk staff for assistance
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
