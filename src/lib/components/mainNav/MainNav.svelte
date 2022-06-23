<script>
  import Logo from "$lib/components/mainNav/Logo.svelte";
  import NavLinks from "$lib/components/mainNav/NavLinks.svelte";
  import SearchBar from "$lib/components/mainNav/SearchBar.svelte";
  import SideNav from "$lib/components/mainNav/SideNav.svelte";
  import { openSideNav } from "$lib/stores/sideNav";
</script>


<nav class="py-6 lg:px-32 px-5 flex justify-between z-20 fixed w-full">
  <div class="flex w-1/2 justify-between items-center">
   <Logo />

    <div class="lg:flex hidden w-3/4 justify-between items-center">
      <NavLinks />
    </div>
  </div>

  <div class="w-1/4 flex justify-end items-center z-10">
    <div class="lg:block hidden">
      <SearchBar />
    </div>

    <div class="lg:hidden block">
      <div on:click={() => openSideNav.set(!$openSideNav)} class="cursor-pointer p-4 flex justify-center items-center bg-gray flex-col rounded-lg drop-shadow-lg">
        <div class="{$openSideNav ? 'skew-y-[35deg]' : ''} w-4 h-[2px] bg-white mb-1 ease-in-out duration-300"></div>
        <div class="w-4 h-[2px] bg-white mb-1"></div>
        <div class="{$openSideNav ? 'skew-y-[-35deg]' : ''} w-4 h-[2px] bg-white ease-in-out duration-300"></div>
      </div>
    </div>
  </div>
</nav>

<SideNav />
