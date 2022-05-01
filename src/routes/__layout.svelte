<script>
	import Head from "svelte-seo";
	import "../app.css"
	import Footer from "$lib/Components/footer"
</script>

<Head>
	<meta name="theme-color" content="#df7803"/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
</Head>

<div id="body">
	<slot/>
</div>
<Footer/>

<style>
	#body {
		margin: 0px auto;
		background: url("/background.svg") no-repeat center fixed;
		background-size: cover;
		height: 100vh;
		background-position: fixed;
	}
</style>