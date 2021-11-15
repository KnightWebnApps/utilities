<script>
  export let product
</script>

<a href={`/products/${product.id}`}>
  <img src={`http://localhost:3000${product.image.url}`} alt={`${product.name} picture`}>
  <article>
				<h2>{product.name}</h2>
        <p>
          {#each product.tags as tag}
            <a class="tag" href={`/tags/${tag.id}`}>
              #{tag.name}
            </a>
          {/each}
        </p>
				<h4>${(product.price / 100).toFixed(2)}</h4>
        <button class="button">Buy Now</button>
			</article>
</a>

<style>
  a {
    width: 400px;
    overflow: hidden;
    height: 500px;
  }

  article {
    background-color: #00000090;
    color: var(--middle-blue-green);
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a > img {
    width: 100%;
    height: 100%;
  }
  /* a:active, a:hover img{
    transform: scale(1.1);
    transition: transform 200ms ease-out;
  } */
  
  a:hover article{
    transform: translateY(-100%);
    transition: transform 200ms ease-out;
  }

  img {
		height: 200px;
	}

  .tag {
    border-radius: 10px 10px;
    padding: 0 1em;
    background-color: var(--gamboge);
    color: var(--rich-black-fogra-29);
  }
</style>