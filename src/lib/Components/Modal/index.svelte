<script>
    export let open = false;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const closeModal = ()=>{
        open = !open;
        dispatch("close")
    }
</script>


{#if open}
    <div class="backdrop" on:click|self={closeModal}>
        <div style:margin="0px 20px">
            <div class="modal">
                <slot/>
            </div>
        </div>

    </div>
{/if}


<style>
    .backdrop {
        position: fixed;
        background: rgba(0,0,0,0.8);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal {
        background: white;
        max-width: 450px;
        margin: 15% auto;
        padding: 10px;
        border-radius: 5px;
    }
</style>