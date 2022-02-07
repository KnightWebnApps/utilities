<script>
	export let copy = {
		headline: '',
		subhead: '',
		bullets: ["Here's a bullet"]
	};
</script>

<section id="bullets">
	<div class="container">
		{#if copy.headline && copy.headline.length > 0}
			<h3>{copy.headline}</h3>
		{/if}
		{#if copy.subhead && copy.subhead.length > 0}
			<p>{copy.subhead}</p>
		{/if}
		<ul class="bi-column">
			{#each copy.bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
		{#if copy.callToAction}
			<a href={copy.href} role="button">{copy.callToAction}</a>
		{/if}
	</div>
</section>

<style>
	#bullets {
		background-color: var(--primary);
		width: 100vw;
		margin: 0 0 0 -50vw;
		position: relative;
		left: 50%;
		top: 0;
		padding: calc(var(--spacing) * 2);
		margin-bottom: calc(var(--spacing) * 4);
	}

	#bullets > .container > * {
		color: #000;
	}

	li {
		font-size: 20px;
	}

	.bi-column {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing);
	}

	@media (max-width: 600px) {
		.bi-column {
			grid-template-columns: 1fr;
		}
	}
</style>
