<script>
    import { openSideNav } from "$lib/stores/sideNav";
</script>

<a href="/" on:click={() => openSideNav.set(!openSideNav)}>Home</a>
<a href="/" on:click={() => openSideNav.set(!openSideNav)}>About</a>
<a href="/" on:click={() => openSideNav.set(!openSideNav)}>Contact</a>
<a href="/" on:click={() => openSideNav.set(!openSideNav)}>GitHub</a>