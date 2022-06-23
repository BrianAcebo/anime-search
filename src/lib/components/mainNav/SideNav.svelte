<script>
    import NavLinks from "$lib/components/mainNav/NavLinks.svelte";
    import SearchBar from "$lib/components/mainNav/SearchBar.svelte";
    import { openSideNav } from "$lib/stores/sideNav";
</script>

<div class="{!$openSideNav ? 'right-[-100%]' : 'right-0'} top-0 absolute w-full h-screen bg-dark drop-shadow-lg ease-in-out duration-300 z-10">
    <div class="flex flex-col pt-24 justify-between items-center w-full h-[75vh]" on:click={() => openSideNav.set(!openSideNav)}>
        <NavLinks />

        <SearchBar />
    </div>
</div>