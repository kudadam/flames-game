<script>

    import Head from "svelte-seo";

    const meta = {
        title: "FLAMES GAME ⬤ Home",
        description: "The best website where you can play the flames love game online",
        canonical: "https://flames-game.netlify.app",
        keywords: "flames, flames love game, flames love, flames game, flames lovers game"

    }
</script>

<Head
 title = "{meta.title}"
 description = "{meta.description}"
 canonical = {meta.canonical}
 keywords = {meta.keywords}
 
 openGraph = {{
     title: `${meta.title}`,
     description: `${meta.description}`,
     url: `${meta.canonical}`
 }}
>

<meta name="google-site-verification" content="-AKcJ597nZ6UCEiGKAa9kgtjnYlHQsIc6L1vSUGWkuM" />
</Head>


<main>
    <div id="hero">
        <h1>FLAMES</h1>
    </div>
    <div id="buttons-container">
        <a sveltekit:prefetch href="/new" class="button">New</a>
        <a class="button" href="https://www.kudadam.com/blog/the-flames-game">About</a>

    </div>
</main>

<style type="text/css">
    main {
        min-height: 100vh;
        max-width: 900px;
        margin: 0px auto;
        padding-top: 50px;
        overflow: hidden;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    }

    #buttons-container {
        width: 300px;
        grid-row: 2/4;
        margin: 10% auto;
        bottom: 0%;
    }

    #hero {
        grid-row: 1/2;
    }

    main  h1 {
        font-weight: bolder;
        color: transparent;
        background: linear-gradient(to right, #ec1b1b,75%,#ffff02);
        background-clip: text;  
        -webkit-background-clip: text;
        -webkit-text-fill-mode: transparent;
        text-align: center;
        font-size: clamp(4.5rem, 1em + 10vw, 9rem) !important;
    }
</style>
