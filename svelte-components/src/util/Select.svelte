<script>
  export let label ='';
  export let name;
  export let options = [];
  export let value
  export let multiple = false;
</script>

{#if multiple}

  <label for={name}>
    {label}
    <select multiple bind:value {name} id="select">
      <!-- <option value="">Select</option> -->
      {#each options as opt}
        <option value={opt}>{opt}</option>
      {/each}
    </select>
  </label>

{:else}
  
  <label for={name}>
    {label}
    <select bind:value {name} id="select">
      <option value="">Select</option>
      {#each options as opt, i}
        <option value={{opt}}>{opt}</option>
      {/each}
    </select>
  </label>

{/if}

<style>
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  #select {
    border-radius: var(--border-radius);
    font-family: inherit;
    width: 100%;
    margin-top: 15px;
  }
</style>