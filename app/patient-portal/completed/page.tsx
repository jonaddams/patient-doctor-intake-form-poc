"use client";

import Link from "next/link";

export default function CompletedPage() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="max-w-md w-full mx-auto">
				<div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
					{/* Success Icon */}
					<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg
							className="w-8 h-8 text-green-600"
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

					{/* Title */}
					<h1 className="text-2xl font-bold text-gray-900 mb-4">
						Forms Complete!
					</h1>

					{/* Message */}
					<p className="text-gray-600 mb-8 leading-relaxed">
						Thank you for completing the patient intake forms. Please take this
						device to the receptionist to complete your check-in process.
					</p>

					{/* Instructions */}
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
						<div className="flex items-start">
							<svg
								className="w-5 h-5 text-blue-600 mr-2 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div className="text-left">
								<p className="text-blue-900 font-medium text-sm">Next Steps:</p>
								<p className="text-blue-800 text-sm mt-1">
									Please return this tablet to the front desk. Our staff will
									review your information and prepare for your appointment.
								</p>
							</div>
						</div>
					</div>

					{/* Back to Demo Link */}
					<div className="border-t border-gray-200 pt-6">
						<Link
							href="/"
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
						>
							← Back to Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
