import adapter from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html"
		}),
		paths: {
			base: mode === "production" ? "/flames-game" : ""
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		prerender: {
			default: true
		}
	}
};

export default config;
