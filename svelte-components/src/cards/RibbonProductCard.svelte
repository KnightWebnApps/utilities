<script>
  /**
   *
   * @param {string} string
   * @param {number} length
   * @returns string or string with "..." appended
   */
  export const showAllOrEllipsis = (string, length) =>
    string.length > length ? string.substring(0, length) + "..." : string;

  export let product;
</script>

<a href={`/products/${product.id}`}>
  <article>
    <h2>{showAllOrEllipsis(product.name, 17)}</h2>
    <img
      src={`http://localhost:3000/${product.image.url}`}
      alt={`${product.name} image`}
    />
    <button class="button">Buy Now</button>
    <!-- <ProductButton {product} /> -->
  </article>
</a>

<style>
  a {
    width: 100%;
    height: 500px;
  }

  article {
    position: relative;
    background-color: #00000090;
    color: var(--middle-blue-green);
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: visible;
    border-radius: 10px;
    height: 400px;
  }

  article h2 {
    position: absolute;
    top: 40px;
    left: -15px;
    width: 90%;
    transition: opacity 200ms ease-out, transform 200ms ease-out;
    padding: 0.2em 0 0.2em 1em;
    background-color: var(--gamboge);
    border-radius: 30px;
    border-bottom-left-radius: 0;
    z-index: 3;
    color: var(--black);
  }

  article h2::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 62%;
    top: 49px;
    left: -0.5px;
    background: var(--alloy-orange);
    border-radius: 20px 0 0 20px;
    z-index: 2;
  }

  article h2::after {
    content: "";
    background: var(--gamboge);
    position: absolute;
    width: 15px;
    height: 25%;
    top: 49px;
    left: -0.5px;
  }

  img {
    transition: transform 200ms ease-out;
    position: absolute;
    bottom: 10%;
    height: 90%;
    z-index: 0;
  }

  button {
    position: absolute;
    bottom: 10px;
  }

  article:hover h2 {
    opacity: 0;
    transform: translateY(-100%);
  }

  article:hover img {
    transform: scale(1.2);
  }
</style>
