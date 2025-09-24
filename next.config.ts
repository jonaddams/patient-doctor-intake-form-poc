import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		WEB_SDK_VERSION: process.env.NEXT_PUBLIC_WEB_SDK_VERSION,
	},
	// Configure externals for Turbopack (development) - now stable
	turbopack: {
		resolveAlias: {
			// Map @nutrient-sdk/viewer to the global NutrientViewer for Turbopack
			"@nutrient-sdk/viewer": "NutrientViewer",
		},
	},
	// Configure externals for Webpack (production builds)
	webpack: (config, { isServer }) => {
		// Exclude @nutrient-sdk/viewer from the bundle since we're loading it via CDN
		config.externals = config.externals || [];

		if (isServer) {
			config.externals.push("@nutrient-sdk/viewer");
		} else {
			config.externals.push({
				"@nutrient-sdk/viewer": "NutrientViewer",
			});
		}

		return config;
	},
};

export default nextConfig;
