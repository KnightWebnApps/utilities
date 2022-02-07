<script>
	/** @type {{ href: string, title: string}[]}*/
	export let routes = [];
</script>

<nav>
	<a href="/">
		<img src="/illustrations/logo.svg" alt="Logo" />
	</a>
	<ul>
		{#each routes as route}
			<li>
				<a href={route.href}>{route.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	img {
		width: 42px;
		height: 42px;
	}
</style>
