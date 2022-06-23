<script>
  import "../styles.css";
  import MainNav from "$lib/components/mainNav/MainNav.svelte";
</script>

<div class="overflow-x-hidden w-screen max-w-[100vw]">
<MainNav />

<slot></slot>
</div>