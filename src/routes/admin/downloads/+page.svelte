<script lang="ts">
	const classes = [
		{ name: 'MBA 2025–27 · General', students: 62, completed: 54, published: 49 },
		{ name: 'MBA 2025–27 · HR', students: 48, completed: 45, published: 42 },
		{ name: 'MBA 2024–26 · General', students: 59, completed: 59, published: 57 }
	];

	const exportOptions = [
		{
			title: 'Download Class CVs',
			description: 'Download all completed CVs for the selected class.',
			icon: 'description',
			format: 'ZIP',
			detail: 'One PDF per student',
			primary: true
		},
		{
			title: 'Download Full Batch CVs',
			description: 'Download every available CV across the selected batch.',
			icon: 'folder_zip',
			format: 'ZIP',
			detail: 'Includes published and draft CVs',
			primary: false
		},
		{
			title: 'Download CV Data',
			description: 'Export structured student information for analysis.',
			icon: 'table_view',
			format: 'CSV',
			detail: 'Student and CV fields',
			primary: false
		}
	];

	let selectedClass = $state(classes[0].name);
	let includeDrafts = $state(false);
	let onlyPublished = $state(true);
	let showNotice = $state(false);

	let selected = $derived(classes.find((item) => item.name === selectedClass) ?? classes[0]);
	function download(label: string) {
		// Replace this with the actual download endpoint.
		console.log('Download requested:', {
			type: label,
			class: selectedClass,
			includeDrafts,
			onlyPublished
		});

		showNotice = true;
		setTimeout(() => (showNotice = false), 2500);
	}
</script>

<svelte:head>
	<title>Downloads | Teacher Portal | Vitae</title>
	<meta name="description" content="Download student CVs and class data." />
</svelte:head>

<main class="min-h-screen bg-base-200/50 px-4 py-5 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl space-y-5">
		<header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<a href="/admin/dashboard" class="btn btn-ghost btn-xs -ml-2 mb-2 gap-1">
					<i class="icon text-sm">arrow_back</i>
					Dashboard
				</a>
				<p class="text-xs font-medium uppercase tracking-widest text-base-content/50">
					Teacher Portal
				</p>
				<h1 class="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Downloads</h1>
				<p class="mt-1 text-sm text-base-content/60">
					Export student CVs without asking students to submit forms individually.
				</p>
			</div>
		</header>

		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body gap-4 p-4 sm:p-5">
				<div>
					<h2 class="card-title text-base">Select Class</h2>
					<p class="text-xs text-base-content/50">Choose the class or batch to export.</p>
				</div>

				<select class="select select-bordered w-full bg-base-100" bind:value={selectedClass}>
					{#each classes as classItem}
						<option value={classItem.name}>{classItem.name}</option>
					{/each}
				</select>

				<div class="grid grid-cols-3 gap-2">
					<div class="rounded-lg bg-base-200/70 p-3">
						<p class="text-[10px] text-base-content/50">Students</p>
						<p class="mt-1 text-lg font-bold">{selected.students}</p>
					</div>
					<div class="rounded-lg bg-success/10 p-3">
						<p class="text-[10px] text-base-content/50">Completed</p>
						<p class="mt-1 text-lg font-bold text-success">{selected.completed}</p>
					</div>
					<div class="rounded-lg bg-primary/10 p-3">
						<p class="text-[10px] text-base-content/50">Published</p>
						<p class="mt-1 text-lg font-bold text-primary">{selected.published}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="grid gap-4 md:grid-cols-2">
			{#each exportOptions as option}
				<div class="card border border-base-300 bg-base-100 shadow-sm">
					<div class="card-body p-5">
						<div class="flex items-start justify-between gap-4">
							<div
								class={`grid size-12 shrink-0 place-items-center rounded-xl ${
									option.primary ? 'bg-primary/10 text-primary' : 'bg-base-200 text-base-content'
								}`}
							>
								<i class="icon text-2xl">{option.icon}</i>
							</div>
							<span class="badge badge-outline">{option.format}</span>
						</div>

						<div class="mt-3">
							<h2 class="text-base font-bold">{option.title}</h2>
							<p class="mt-1 text-sm leading-relaxed text-base-content/60">
								{option.description}
							</p>
						</div>

						<div class="mt-2 flex items-center gap-2 text-xs text-base-content/50">
							<i class="icon text-sm">info</i>
							{option.detail}
						</div>

						<button
							class={`btn btn-sm mt-4 w-full ${option.primary ? 'btn-primary' : 'btn-outline'}`}
							onclick={() => download(option.title)}
						>
							<i class="icon">download</i>
							{option.title}
						</button>
					</div>
				</div>
			{/each}
		</section>

		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body gap-4 p-4 sm:p-5">
				<div>
					<h2 class="card-title text-base">Export Options</h2>
					<p class="text-xs text-base-content/50">Control which student records are included.</p>
				</div>

				<div class="grid gap-3 sm:grid-cols-2">
					<label
						class="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-base-300 p-3"
					>
						<div>
							<p class="text-sm font-medium">Published CVs only</p>
							<p class="text-xs text-base-content/50">Exclude unpublished student CVs.</p>
						</div>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={onlyPublished} />
					</label>

					<label
						class="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-base-300 p-3"
					>
						<div>
							<p class="text-sm font-medium">Include draft CVs</p>
							<p class="text-xs text-base-content/50">
								Useful for checking incomplete submissions.
							</p>
						</div>
						<input type="checkbox" class="toggle toggle-primary" bind:checked={includeDrafts} />
					</label>
				</div>

				<div class="rounded-lg bg-base-200/70 p-3">
					<div class="flex items-start gap-2">
						<i class="icon mt-0.5 text-base-content/50">security</i>
						<p class="text-xs leading-relaxed text-base-content/60">
							Downloads contain student-provided CV information. Keep exported files secure and
							share them only with authorized placement or academic personnel.
						</p>
					</div>
				</div>
			</div>
		</section>

		{#if showNotice}
			<div class="alert alert-success shadow-sm">
				<i class="icon">check_circle</i>
				<span class="text-sm"
					>Download request created. Connect the button to your backend export endpoint.</span
				>
			</div>
		{/if}
	</div>
</main>
