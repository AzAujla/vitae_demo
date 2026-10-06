<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { context } from '#lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		{@render children()}
		<label
			for="my-drawer-3"
			class="btn drawer-button lg:hidden z-10 fixed top-4 left-4 icon text-3xl"
		>
			menu
		</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<li class="text-4xl pb-4 font-semibold great-vibes-regular">{context.appName}</li>
			<li><a href="/ppt">Presentation</a></li>
			<li><a href="/app">Mobile App</a></li>
			<li><a>Web App</a></li>
		</ul>
	</div>
</div>
