<script>
	import Head from "svelte-seo";
	import "../app.css"
	import Footer from "$lib/Components/footer"
</script>

<Head>
	<meta name="theme-color" content="#df7803"/>
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