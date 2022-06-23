<script>
  import HeroText from "$lib/components/HeroText.svelte";
  import { animeResults } from "$lib/stores/animeResults";
  import { goto } from "$app/navigation";
  import { Circle } from "svelte-loading-spinners";
  import { onMount } from 'svelte';
  import anime from 'animejs';
  
  const tinyTitle = 'The anime search engine';
  const heroTitle = 'Easily find anime';
  const description = 'Search anime to find the exact moment and episode all by simply uploading an image.';


  // Upload image and handle api
  let uploadFile;
  let searching = false;
	
  const sendFileToApi = async (e) => {
    searching = true;
    let image = e.target.files[0];

    // Format for Trace.moe API
    const formData = new FormData();
    formData.append("image", image);

    await fetch("https://api.trace.moe/search?anilistInfo", {
      method: "POST",
      body: formData,
    }).then((e) => {
      animeResults.set(e.json());
      goto('/results');
    });
  }


  // Animations for svg background
  let innerHeight;
  let innerWidth;

  onMount(() => {
    let heroTimeline = anime.timeline({autoplay: true});

    // Demon slayer
    anime({
      targets: "#svg1",
      translateX: 10,
      translateY: -10,
      direction: "alternate",
      easing: "linear",
      duration: 6000,
      loop: true
    });

    // Naruto
    anime({
      targets: "#svg2",
      translateX: 0,
      translateY: 10,
      direction: "alternate",
      easing: "linear",
      duration: 3000,
      loop: true
    });

    // Attack on Titan
    anime({
      targets: "#svg3",
      translateX: 0,
      translateY: 10,
      direction: "alternate",
      easing: "linear",
      duration: 4000,
      loop: true
    });

    // Squigly
    anime({
      targets: "#svg4",
      translateX: -50,
      translateY: -25,
      direction: "alternate",
      easing: "linear",
      duration: 6000,
      loop: true
    });
  });
</script>


<div class="h-screen overflow-y-hidden max-h-[100vh]">


<img id="svg1" class="hero_svg w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] absolute top-[-25px] right-[-50px] z-0" src="/img/site/assets/home1.svg">
<img id="svg2" class="hero_svg w-36 h-36 md:w-64 md:h-64 absolute md:top-[20%] top-[25%] md:right-[20rem] right-12 z-0" src="/img/site/assets/home2.svg">
<img id="svg3" class="hero_svg w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] absolute bottom-[10%] md:right-24 right-10 z-0" src="/img/site/assets/home3.svg">
<img id="svg4" class="hero_svg h-[115vh] absolute bottom-0 top-0 md:left-0 left-[-50px] z-0" src="/img/site/assets/home4.svg">


<div class="absolute md:top-1/3 top-1/4 lg:left-32 md:left-12 left-5 md:mr-12 mr-5">

  
  <HeroText {tinyTitle} {heroTitle} {description} />


  {#if searching}

  <Circle color="#ffffff" />

  {:else}

  <input 
    class="p-4 block w-full text-sm rounded-lg cursor-pointer focus:outline-none text-white bg-gray drop-shadow-xl" 
    type="file" 
    accept=".jpg, .jpeg, .png" 
    on:change={(e) => sendFileToApi(e)} 
    bind:this={uploadFile}
  />

  {/if}
</div>


</div>