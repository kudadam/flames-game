<script>
    import Head from "svelte-seo";
    import Modal from "$lib/Components/Modal";
    import Flames from "./flames.js";

    const meta = {
        title: "FLAMES GAME ⬤ Relationship Calculator",
        description: "The FLAMES game is a game which is usually played by kids, it can determine the relationship between two people with the use of their names.",
        canonical: "https://flames-game.netlify.app/new"
    }

    $: formReady = false;
    let data = {
        name: "",
        partner: "",
        relationship: ""
    }
    let open = true;

    const onlyLetters = event => {
        let regex = /[^a-zA-Z\s]+/g;
        event.target.value = event.target.value.replace(regex,"");
    }


    const handleSubmit = event =>{
        const formdata = new FormData(event.target);
        const relationship = new Flames(formdata.get("name"), formdata.get("partner"));
        data.name = formdata.get("name");
        data.partner = formdata.get("partner");
        data.relationship = relationship.relationship[1];
        formReady = true;
        open = true;
        event.target.reset();
    }
</script>

{#if formReady}
    <Modal {open} on:close={()=>{
        open = !open;
        formReady = !formReady

    }}>
        <h1 class="flames">FLAMES</h1>
        <h3 style="text-align: center; font-weight:bolder">{data.relationship}</h3>
    </Modal>
{/if}

<Head
 title = {meta.title}
 description = {meta.description}
 canonical = {meta.canonical}

 openGraph={{
     title: `${meta.title}`,
     description: `${meta.description}`
 }}
/>

<main>
    <h1>FLAMES</h1>
    <form  on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="name">
                Your Name
            </label>
            <input required type="text" on:keypress={onlyLetters} id="name" name="name">
        </div>
        <div>
            <label for="partner">Partner's Name</label>
            <input type="text" required name="partner" id="partner">
        </div>
        <input type="submit" class="button" value="FLAMES">
    </form>
</main>

<style type="text/css">
    main {
        max-width: 550px;
        margin: 0px auto;
        padding-top: 10%;
    }

    main  h1 {
        font-weight: bolder;
        color: transparent;
        background: linear-gradient(to right, #ec1b1b,75%,#ffff02);
        background-clip: text;  
        -webkit-background-clip: text;
        -webkit-text-fill-mode: transparent;
        text-align: center;
        font-size: clamp(3.5rem, 1em + 10vw, 6rem) !important;
    }

    form input[type="text"] {
        border: 3px solid white;
        padding: 5px;
        width: 100%;
        background: white;
        border: 3px solid var(--primary-color);
        border-radius: 3px;
        margin: 15px 0px;
    }

    form {
        font-weight: 500;
        font-size: 1.2em;
        margin: 15px;
    }

    label {
        display: block;
        color: white;
        text-shadow: 2px  2px black;
    }

    .flames {
        font-weight: bolder;
        color: transparent;
        background: linear-gradient(to right, #ec1b1b,75%,#ffff02);
        background-clip: text;  
        -webkit-background-clip: text;
        -webkit-text-fill-mode: transparent;
        text-align: center;
    }
</style>