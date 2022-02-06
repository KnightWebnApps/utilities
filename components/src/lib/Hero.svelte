<script>
	export let copy = {
		headline: '',
		subhead: '',
		callToAction: '',
		href: '',
		imgSrcs: ['']
	};
</script>

<header class="hero">
	<div class="content">
		<h1>{copy.headline}</h1>
		<p>{copy.subhead}</p>
		<a href={copy.href} role="button">{copy.callToAction}</a>
	</div>
	<img src={copy.imgSrcs[0]} alt="hero" />
</header>

<style>
	.hero {
		display: grid;
		grid-template-areas: 'hero';
		height: 65vh;
		max-height: 600px;
		align-items: center;
	}

	.hero > * {
		grid-area: hero;
		/* display: grid; */
	}

	.hero > .content {
		z-index: 1;
		background-color: #00000052;
		max-width: 35%;
		min-width: 30ch;
		padding: var(--spacing);
		margin: 1rem 0 1rem 5%;
	}

	.hero img {
		object-fit: cover;
		object-position: 2vw -5vmin;
		height: min(65vh, 600px);
		width: 80%;
		justify-self: end;
		transition: 180ms width ease-in;
	}

	@media (min-width: 60rem) {
		img {
			width: 80%;
		}
	}
</style>
