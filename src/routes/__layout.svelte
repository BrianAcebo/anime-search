<script>
  import "../styles.css";
  import MainNav from "$lib/components/mainNav/MainNav.svelte";
</script>

<div class="overflow-x-hidden w-screen">
<MainNav />

<slot></slot>
</div>