<script>
  export let future = async () => {};
</script>

<style>
  .center {
    display: grid;
    place-items: center;
  }
</style>

{#await $future}
  <div class="center">
    <h2>Loading...</h2>
  </div>
{:then value}
  <slot {value} />
{:catch error}
  <div class="center">{error}</div>
{/await}