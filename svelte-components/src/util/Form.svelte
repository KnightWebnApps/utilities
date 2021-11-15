<script>
  export let onSubmit = () => {}
  export let afterSubmit = () => {}
  export let buttonText = "Submit"
  export let errorText = "Something Went Wrong!"
  let errorMessage = ''
  let isLoading = false;  
  const action = async e => {
    e.preventDefault();
    isLoading = true;
    errorMessage = ''
    
    try {
      await onSubmit();
      
    } catch (error) {
      console.error(errror)
      errorMessage = errorText;
    }
    afterSubmit()
  }
</script>

<form >

  <slot></slot>

  {errorMessage}

  {#if isLoading}
    <slot name="loading">...Loading</slot>
  {:else}
    <button on:click|preventDefault={action}>{ buttonText }</button>
    <slot name="actions"></slot>
  {/if}

</form>