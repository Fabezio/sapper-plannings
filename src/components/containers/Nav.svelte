<script>
	// import { url } from "inspector";

	export let segment;
	export let links;
	// const links = [
	// 	{ url: undefined, label: "Planning", visible: true },
	// 	{ url: "calendar", label: "Calendrier", visible: true },
	// 	{ url: "about", label: "About", visible: false },
	// 	{ url: "blog", label: "Blog", visible: false, prefetch: true },
	// ];
</script>

<nav>
	<ul>
		{#each links as { url, label, visible, prefetch }}
			{#if visible}
				<li>
					{#if !prefetch}
						<a
							aria-current={segment === url ? "page" : undefined}
							href={url === undefined ? "." : url}>{label}</a
						>
					{:else}
						<a
							aria-current={segment === url ? "page" : undefined}
							href={url === undefined ? "." : url}
							rel="prefetch"
							>{label}
						</a>
					{/if}
				</li>
			{/if}
		{/each}
		<!-- <li>
			<a
				aria-current={segment === undefined ? "page" : undefined}
				href=".">planning</a
			>
		</li> -->
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- <li><a aria-current="{segment === 'planning' ? 'page' : undefined}" href="planning">planning</a></li> -->
		<!-- <li>
			<a
				aria-current={segment === "calendar" ? "page" : undefined}
				href="calendar">calendrier</a
			>
		</li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
		/* border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em; */

		padding: 0.25rem;
		/* height: 3rem; */
		margin-bottom: 0;
		background: rgba(0, 0, 0, 0.05);
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: "";
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
