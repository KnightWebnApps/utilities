<script>
  export let src,
    alt,
    width = "600px",
    height = "600px",
    title,
    description,
    href,
    ctaText,
    onCTA = () => {}
</script>

<header>
  <img {src} {alt} data-height={height} data-width={width} />
  <section>
    <div class="content">
      <h1>{title}</h1>
      <p>{description}</p>
      <a {href} role="button" on:click={onCTA}>{ctaText}</a>
    </div>
  </section>
</header>

<style>
  header {
    min-height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  header > img {
    aspect-ratio: attr(width) / attr(height);
  }

  .content {
    display: grid;
    place-items: center;
    padding: 2em;
  }

  @media (max-width: 840px) {
    header {
      grid-template-columns: 1fr;
    }
    header > section {
      display: block;
      width: 100%;
    }
  }
</style>
