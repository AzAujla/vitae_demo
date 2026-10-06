<script lang="ts">
	const student = {
		name: 'Azeem Aujla',
		rollNo: '14222000580',
		course: 'Masters of Business Administration (General)',
		semester: 'Semester III'
	};

	const stats = [
		{
			label: 'CGPA',
			value: '7.48',
			icon: 'kid_star',
			color: 'text-primary'
		},
		{
			label: 'Attendance',
			value: '76.4%',
			icon: 'calendar-check',
			color: 'text-success'
		}
	];

	const attendance = [
		{ subject: 'Investment Management', attended: 21, total: 27 },
		{ subject: 'Research Project', attended: 5, total: 5 },
		{ subject: 'Financial Engineering', attended: 24, total: 31 },
		{ subject: 'MR & PM', attended: 22, total: 31 }
	];

	const results = [
		{
			subject: 'Database Management',
			code: 'BCA-501',
			marks: '91/100',
			grade: 'A+'
		},
		{
			subject: 'Software Engineering',
			code: 'BCA-502',
			marks: '84/100',
			grade: 'A'
		},
		{
			subject: 'Computer Networks',
			code: 'BCA-503',
			marks: '93/100',
			grade: 'A+'
		}
	];

	const cvSections = [
		{ name: 'Personal Information', complete: true },
		{ name: 'Academic Records', complete: true },
		{ name: 'Skills & Certifications', complete: false },
		{ name: 'Projects & Experience', complete: false }
	];

	const cvProgress = 78;
</script>

<svelte:head>
	<title>Campus | Student Dashboard</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main class="min-h-screen bg-base-200/50 pb-8">
	<div class="mx-auto max-w-lg space-y-5 px-4 pt-5">
		<!-- Header -->
		<header class="flex items-center justify-between">
			<div>
				<p class="text-xs font-medium text-base-content/50">
					{new Date().toDateString().toUpperCase()}
				</p>
				<h1 class="mt-1 text-2xl font-bold tracking-tight">
					Hello, {student.name.split(' ')[0]}
				</h1>
				<p class="text-sm text-base-content/60">Here's your academic overview.</p>
			</div>

			<div class="avatar placeholder">
				<div class="size-12 rounded-full bg-primary text-primary-content grid place-items-center">
					<span class="font-bold">AA</span>
				</div>
			</div>
		</header>

		<!-- Student profile -->
		<section class="card overflow-hidden bg-primary text-primary-content shadow-md">
			<div class="card-body gap-3 p-5">
				<div class="flex items-center justify-between">
					<span class="badge border-none bg-primary-content/15 text-primary-content">
						Active Student
					</span>
					<span class="text-xs opacity-70">2025–27</span>
				</div>

				<div>
					<h2 class="text-xl font-bold">{student.name}</h2>
					<p class="mt-1 text-sm opacity-75">{student.course}</p>
				</div>

				<div
					class="flex flex-wrap gap-x-4 gap-y-1 border-t border-primary-content/20 pt-3 text-xs opacity-80"
				>
					<span>{student.rollNo}</span>
					<span>{student.semester}</span>
				</div>
			</div>
		</section>

		<!-- Academic statistics -->
		<section>
			<div class="mb-3 flex items-center justify-between">
				<h2 class="font-bold">Academic Performance</h2>
				<span class="text-xs text-base-content/50">Current session</span>
			</div>

			<div class="grid grid-cols-2 gap-3">
				{#each stats as stat}
					<div class="card border border-base-300 bg-base-100 shadow-sm">
						<div class="card-body gap-1 p-4">
							<div class="flex items-center justify-between">
								<span class="text-xs text-base-content/60">
									{stat.label}
								</span>
								<span class={`text-lg ${stat.color}`}>●</span>
							</div>

							<p class="text-2xl font-bold tracking-tight">{stat.value}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- CV overview -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body gap-4 p-5">
				<div class="flex items-center justify-between">
					<div>
						<h2 class="card-title text-base">My CV</h2>
						<p class="text-xs text-base-content/50">Your professional profile</p>
					</div>

					<span class="badge badge-success badge-outline gap-1">
						<span>✓</span> Synced
					</span>
				</div>

				<div class="flex items-center gap-3">
					<div
						class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
					>
						<span>▤</span>
					</div>

					<div class="min-w-0 flex-1">
						<p class="text-sm font-semibold">Student CV</p>
						<p class="text-xs text-base-content/50">Updated 02 October 2026</p>
					</div>

					<span class="text-lg font-bold text-primary">{cvProgress}%</span>
				</div>

				<progress class="progress progress-primary w-full" value={cvProgress} max="100"></progress>

				<div class="space-y-3">
					{#each cvSections as section}
						<div class="flex items-center justify-between gap-2 text-sm">
							<span class="text-base-content/70">{section.name}</span>

							{#if section.complete}
								<span class="text-xs font-medium text-success">Complete ✓</span>
							{:else}
								<span class="text-xs font-medium text-warning">Pending</span>
							{/if}
						</div>
					{/each}
				</div>

				<div class="rounded-lg bg-success/10 p-3">
					<div class="flex items-center gap-2 text-xs text-success">
						<span>✓</span>
						College records successfully synchronized
					</div>
				</div>
			</div>
		</section>

		<!-- Attendance -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body gap-4 p-5">
				<div>
					<h2 class="card-title text-base">Attendance</h2>
					<p class="text-xs text-base-content/50">Subject-wise attendance overview</p>
				</div>

				{#each attendance as item}
					{@const percentage = (item.attended / item.total) * 100}

					<div>
						<div class="mb-2 flex items-center justify-between gap-2">
							<span class="text-sm font-medium">{item.subject}</span>
							<span class={`text-xs font-bold ${percentage >= 75 ? 'text-success' : 'text-error'}`}>
								{percentage.toFixed(1)}%
							</span>
						</div>

						<progress
							class={`progress w-full ${percentage >= 75 ? 'progress-success' : 'progress-error'}`}
							value={percentage}
							max="100"
						></progress>

						<p class="mt-1 text-[11px] text-base-content/40">
							{item.attended} / {item.total} classes
						</p>
					</div>
				{/each}

				<div class="rounded-lg bg-base-200 p-3 text-xs text-base-content/60">
					Minimum attendance requirement:
					<strong class="text-base-content">75%</strong>
				</div>
			</div>
		</section>

		<!-- Recent results -->
		<section class="space-y-3">
			<div>
				<h2 class="font-bold">Recent Results</h2>
				<p class="text-xs text-base-content/50">Latest published examination results</p>
			</div>

			<div class="space-y-3">
				{#each results as result}
					<div class="card border border-base-300 bg-base-100 shadow-sm">
						<div class="card-body flex-row items-center gap-3 p-4">
							<div
								class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success/10 font-bold text-success"
							>
								✓
							</div>

							<div class="min-w-0 flex-1">
								<h3 class="truncate text-sm font-semibold">
									{result.subject}
								</h3>
								<p class="mt-1 text-xs text-base-content/50">
									{result.code} · {result.marks}
								</p>
							</div>

							<div class="badge badge-primary badge-outline font-bold">
								{result.grade}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Synchronization status -->
		<section class="rounded-2xl border border-success/20 bg-success/5 p-4">
			<div class="flex items-center gap-3">
				<div
					class="flex size-10 shrink-0 items-center justify-center rounded-full bg-success/10 text-lg text-success"
				>
					✓
				</div>

				<div class="min-w-0">
					<p class="text-sm font-semibold">Everything is up to date</p>
					<p class="mt-1 text-xs text-base-content/50">Last synced today at 7:42 AM</p>
				</div>

				<span class="badge badge-success badge-sm ml-auto">Online</span>
			</div>
		</section>

		<footer class="pb-4 pt-2 text-center text-xs text-base-content/40">
			University Business School · 2026
		</footer>
	</div>
</main>
