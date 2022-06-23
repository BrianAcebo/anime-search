<script>
    import { animeResults } from "$lib/stores/animeResults";
    import HeroText from "$lib/components/HeroText.svelte";
    let currentTab = 0; // Change tabs
</script>


{#await $animeResults then results}


{#if results.result && results.result.length > 0}


    <!-- Main Container -->
<div class="absolute md:top-1/3 top-[15%] lg:pb-0 pb-10 lg:px-32 md:px-12 px-5 flex justify-center items-center lg:flex-row flex-col w-full">
    
    
    <!-- Title Info Container -->
    <div class="lg:w-3/4 w-full lg:pr-10 p-0">
        {#each results.result as result, i}
        <div class="{i == currentTab ? 'block' : 'hidden'}">
            #{i + 1}
            <HeroText tinyTitle={result.similarity + '% Similarity'} heroTitle={result.anilist.title.english} description={result.anilist.title.native} />
            <p>Episode: {result.episode ? result.episode : ''}</p>
        </div>
        {/each}
    </div>
    <!-- /Title Info Container -->


        <!-- Image Container -->
    <div class="lg:w-1/4 w-full lg:m-0 mt-10">
        {#each results.result as result, i}
            <div class="w-full {i == currentTab ? 'block' : 'hidden'}">
                <img src="{result.image}" class="w-full h-auto rounded-lg drop-shadow-lg"/>
            </div>
        {/each}
    </div>
        <!-- /Image Container -->


    <!-- Tab Btns -->
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a on:click={() => currentTab-- } class="{currentTab == 0 ? 'hidden' : 'inline-flex'} btn btn-circle absolute lg:left-0 left-auto right-14">❮</a> 
        <a on:click={() => currentTab++ } class="{currentTab < results.result.length - 1 ? 'inline-flex' : 'hidden'} btn btn-circle absolute right-0">❯</a>
    </div>
    <!-- /Tab Btns -->


</div>
    <!-- /Main Container -->


{:else}


<div class="text-center w-full absolute top-[20%] p-10">
    <h1 class="text-xl">Sorry, search not found.</h1>
</div>


{/if}


{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
