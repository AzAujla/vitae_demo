<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	let { children } = $props();

	let time = $state('');
	const dock = [
		{ label: 'Home', icon: 'home', href: '/app' },
		{ label: 'CV', icon: 'description', href: '/app/cv' },
		{ label: 'Academics', icon: 'school', href: '/app/academics' },
		{ label: 'Profile', icon: 'account_circle', href: '/app/profile' }
	];
	onMount(() => {
		setInterval(() => {
			let t = new Date();
			time = `${(t.getHours() % 12).toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}`;
		}, 500);
	});
</script>

<div class="w-full h-screen grid place-items-center">
	<div class="mockup-phone">
		<div class="mockup-phone-camera"></div>
		<div class="mockup-phone-display bg-base-200 flex flex-col items-stretch">
			<div class="w-full h-12 flex items-center p-8 pb-6">
				<span class="text-lg">{time}</span>
				<span class="mx-auto"></span>
				<span class="icon text-lg">mobile_vibrate</span>
				<span class="icon text-lg">mobiledata_arrows</span>
				<span class="icon text-lg">5g_mobiledata_badge</span>
				<span class="icon text-lg">sim_card</span>
				<span class="icon text-lg">network_cell</span>
				<span class="icon text-lg">battery_android_full</span>
			</div>
			<div class="grow relative flex flex-col items-stretch overflow-y-auto">
				<div class="grow">
					{@render children()}
				</div>
				<div
					class="sticky bottom-0 h-16 flex items-center justify-around w-full bg-base-200 rounded-t-2xl p-2 z-30"
				>
					{#each dock as item, i (i)}
						<a
							href={item.href}
							class={`btn btn-square flex-col items-center ${(item.href === '/app' && page.url.pathname === '/app') || (item.href !== '/app' && page.url.pathname.startsWith(item.href)) ? 'border-b-2 border-b-accent rounded-b-none pb-3' : ''}`}
						>
							<i class="icon-thick text-xl"> {item.icon} </i>
							{#if !((item.href === '/app' && page.url.pathname === '/app') || (item.href !== '/app' && page.url.pathname.startsWith(item.href)))}
								{item.label}
							{/if}
						</a>
					{/each}
				</div>
			</div>
			<div class="w-full h-12 flex items-center p-8 pt-6 justify-around text-3xl">
				<i class="icon"> menu </i>
				<i class="icon"> crop_square </i>
				<i class="icon"> arrow_back_2 </i>
			</div>
		</div>
	</div>
</div>
