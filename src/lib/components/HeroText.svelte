<script>
    export let tinyTitle;
    export let heroTitle;
    export let description;
</script>


<div class="flex justify-start items-center mb-3">
    <div class="w-16 h-[2px] bg-white mr-5"></div>
    <p class="text-base">{tinyTitle}</p>
</div>


<h1 class="md:text-[75px] md:leading-[80px] text-[45px] font-bold capitalize mb-3">{heroTitle}</h1>


{#if description}
<p class="md:text-xl text-lg mb-5 block">{description}</p>
{/if}