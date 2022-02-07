<script>
	import LeadForm from '../forms/LeadForm.svelte';
	// import ProjectForm from "../forms/ProjectForm.svelte";

	export let copy = {
		headline: '',
		lead: '',
		formalAsk: '',
		callToAction: '',
		href: ''
	};
</script>

<section>
	<h4>{copy.headline}</h4>
	<p>{copy.lead}</p>
	<p>{copy.formalAsk}</p>
	<slot />
	{#if copy.callToAction}
		<a href={copy.href} role="button">{copy.callToAction}</a>
	{/if}
</section>
