<script>
  export let type = "text";
  export let value
  export let name = "input"
  export let placeholder = ""
</script>

<label for={name}>
  <slot></slot>
  {#if type === "text"}
    <input {name} type="text" bind:value {placeholder} >
  {:else if type === "email"}
    <input {name} type="email" bind:value {placeholder} >
  {:else if type === "password"}
    <input {name} type="password" bind:value {placeholder} >
  {:else if type === "search"}
    <input {name} type="search" bind:value {placeholder} >
  {:else if type === "date"}
    <input {name} type="date" bind:value {placeholder} >
  {:else if type === "time"}
    <input {name} type="time" bind:value {placeholder} >
  {:else if type === "file"}
    <input {name} type="file" bind:value {placeholder} >
  {:else if type === "number"}
    <input {name} type="number" bind:value {placeholder} >
  {:else if type === "color"}
    <input {name} type="color" bind:value {placeholder} >
  {/if}
</label>