<script lang="ts">
	const sections = [
		{
			title: 'Attendance',
			description: 'Track your subject-wise attendance.',
			icon: 'calendar_clock',
			href: '/app/academics/attendance',
			color: 'text-primary',
			background: 'bg-primary/10'
		},
		{
			title: 'Results',
			description: 'View your examination results.',
			icon: 'analytics',
			href: '/app/academics/results',
			color: 'text-secondary',
			background: 'bg-secondary/10'
		}
	];
</script>

<div class="grid grid-cols-2 gap-3 p-4">
	{#each sections as section}
		<a
			href={section.href}
			class="card border border-base-300 bg-base-100 shadow-sm transition-all hover:border-primary/40 hover:shadow-md active:scale-[0.98]"
		>
			<div class="card-body gap-4 p-4">
				<div class="flex items-center justify-between">
					<div
						class={`flex size-11 items-center justify-center rounded-xl ${section.background} ${section.color}`}
					>
						<i class="icon text-4xl">
							{section.icon}
						</i>
					</div>

					<i class="icon text-base-content opacity-40"> north_east </i>
				</div>

				<div>
					<h2 class="font-semibold">{section.title}</h2>
					<p class="mt-1 text-xs leading-relaxed text-base-content/50">
						{section.description}
					</p>
				</div>
			</div>
		</a>
	{/each}
</div>
