<script lang="ts">
	const teacher = {
		name: 'Ms. Shikha',
		department: 'University Business School',
		programme: 'MBA'
	};

	const classInfo = {
		name: 'MBA 2025–27',
		section: 'General',
		students: 62,
		updated: '07 October 2026'
	};

	const stats = [
		{ label: 'Total Students', value: '62', icon: 'groups', tone: 'text-primary' },
		{ label: 'CVs Completed', value: '54', icon: 'task_alt', tone: 'text-success' },
		{ label: 'CVs Pending', value: '8', icon: 'pending_actions', tone: 'text-warning' },
		{ label: 'Published CVs', value: '49', icon: 'verified', tone: 'text-info' }
	];

	const students = [
		{
			name: 'Azeem Aujla',
			rollNo: 'MBA25-001',
			completion: 100,
			status: 'Published',
			updated: '06 Oct 2026'
		},
		{
			name: 'Harpreet Kaur',
			rollNo: 'MBA25-002',
			completion: 100,
			status: 'Published',
			updated: '06 Oct 2026'
		},
		{
			name: 'Arshdeep Singh',
			rollNo: 'MBA25-003',
			completion: 86,
			status: 'Draft',
			updated: '05 Oct 2026'
		},
		{
			name: 'Simran Kaur',
			rollNo: 'MBA25-004',
			completion: 72,
			status: 'Draft',
			updated: '04 Oct 2026'
		},
		{
			name: 'Gurmanpreet Singh',
			rollNo: 'MBA25-005',
			completion: 100,
			status: 'Published',
			updated: '03 Oct 2026'
		}
	];

	const completionSections = [
		{ label: 'Personal Information', value: 62 },
		{ label: 'Education', value: 61 },
		{ label: 'Experience', value: 48 },
		{ label: 'Projects', value: 52 },
		{ label: 'Skills', value: 58 },
		{ label: 'Certifications', value: 43 }
	];

	let search = $state('');
	let statusFilter = $state('All');

	const filteredStudents = $derived(
		students.filter((student) => {
			const matchesSearch =
				!search ||
				student.name.toLowerCase().includes(search.toLowerCase()) ||
				student.rollNo.toLowerCase().includes(search.toLowerCase());

			const matchesStatus = statusFilter === 'All' || student.status === statusFilter;

			return matchesSearch && matchesStatus;
		})
	);
</script>

<svelte:head>
	<title>Teacher Dashboard | Vitae</title>
	<meta name="description" content="Teacher dashboard for managing student CV submissions." />
</svelte:head>

<main class="min-h-screen bg-base-200/50 px-4 py-5 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl space-y-5">
		<header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<p class="text-xs font-medium uppercase tracking-widest text-base-content/50">
					Teacher Portal
				</p>
				<h1 class="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
					Good morning, {teacher.name}
				</h1>
				<p class="mt-1 text-sm text-base-content/60">
					Manage student CV submissions without collecting forms manually.
				</p>
			</div>

			<div class="flex gap-2">
				<a href="/admin/downloads" class="btn btn-primary btn-sm">
					<i class="icon">download</i>
					Downloads
				</a>
			</div>
		</header>

		<section class="card overflow-hidden bg-primary text-primary-content shadow-md">
			<div class="card-body p-5 sm:p-6">
				<div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div class="flex flex-wrap items-center gap-2">
							<span class="badge border-none bg-primary-content/15 text-primary-content">
								Active Class
							</span>
							<span class="text-xs opacity-70">{classInfo.section}</span>
						</div>

						<h2 class="mt-3 text-xl font-bold">{classInfo.name}</h2>
						<p class="mt-1 text-sm opacity-75">{teacher.programme} · {teacher.department}</p>
					</div>

					<div class="rounded-xl bg-primary-content/10 px-5 py-4 sm:min-w-48">
						<p class="text-xs opacity-70">CV completion</p>
						<p class="mt-1 text-3xl font-black">87.1%</p>
						<progress class="progress mt-2 w-full bg-primary-content/20" value="54" max="62"
						></progress>
						<p class="mt-1 text-xs opacity-70">54 of 62 students completed</p>
					</div>
				</div>
			</div>
		</section>

		<section class="grid grid-cols-2 gap-3 lg:grid-cols-4">
			{#each stats as stat}
				<div class="card border border-base-300 bg-base-100 shadow-sm">
					<div class="card-body gap-2 p-4">
						<div class="flex items-center justify-between">
							<span class="text-xs text-base-content/55">{stat.label}</span>
							<i class={`icon ${stat.tone}`}>{stat.icon}</i>
						</div>
						<p class="text-2xl font-bold tracking-tight">{stat.value}</p>
					</div>
				</div>
			{/each}
		</section>

		<div class="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)]">
			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body gap-4 p-4 sm:p-5">
					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 class="card-title text-base">Student CVs</h2>
							<p class="text-xs text-base-content/50">Latest submission status</p>
						</div>

						<a href="/teacher/downloads" class="btn btn-ghost btn-xs">
							View all
							<i class="icon text-sm">arrow_forward</i>
						</a>
					</div>

					<div class="flex flex-col gap-2 sm:flex-row">
						<label class="input input-bordered input-sm flex flex-1 items-center gap-2 bg-base-100">
							<i class="icon text-base-content/40">search</i>
							<input bind:value={search} placeholder="Search student or roll number" />
						</label>

						<select
							class="select select-bordered select-sm bg-base-100 sm:w-32"
							bind:value={statusFilter}
						>
							<option>All</option>
							<option>Published</option>
							<option>Draft</option>
						</select>
					</div>

					<div class="overflow-x-auto">
						<table class="table table-sm">
							<thead>
								<tr>
									<th>Student</th>
									<th class="hidden sm:table-cell">Progress</th>
									<th>Status</th>
									<th class="text-right">Updated</th>
								</tr>
							</thead>
							<tbody>
								{#each filteredStudents as student}
									<tr class="hover">
										<td>
											<div class="flex items-center gap-2.5">
												<div class="avatar placeholder">
													<div
														class="size-8 rounded-full bg-primary/10 text-xs font-bold text-primary"
													>
														{student.name
															.split(' ')
															.map((part) => part[0])
															.slice(0, 2)
															.join('')}
													</div>
												</div>
												<div>
													<p class="text-xs font-semibold">{student.name}</p>
													<p class="text-[10px] text-base-content/50">{student.rollNo}</p>
												</div>
											</div>
										</td>
										<td class="hidden sm:table-cell">
											<div class="flex items-center gap-2">
												<progress
													class="progress progress-primary w-20"
													value={student.completion}
													max="100"
												></progress>
												<span class="text-[10px] font-semibold">{student.completion}%</span>
											</div>
										</td>
										<td>
											<span
												class={`badge badge-xs ${
													student.status === 'Published' ? 'badge-success' : 'badge-warning'
												}`}
											>
												{student.status}
											</span>
										</td>
										<td class="text-right text-[10px] text-base-content/50">{student.updated}</td>
									</tr>
								{:else}
									<tr>
										<td colspan="4" class="py-8 text-center text-sm text-base-content/50">
											No students found.
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body gap-4 p-4 sm:p-5">
					<div>
						<h2 class="card-title text-base">Class CV Coverage</h2>
						<p class="text-xs text-base-content/50">Students who have supplied each section</p>
					</div>

					<div class="space-y-4">
						{#each completionSections as section}
							<div>
								<div class="mb-1.5 flex items-center justify-between gap-2">
									<span class="text-xs font-medium">{section.label}</span>
									<span class="text-[10px] text-base-content/50">{section.value}/62</span>
								</div>
								<progress class="progress progress-primary w-full" value={section.value} max="62"
								></progress>
							</div>
						{/each}
					</div>

					<div class="rounded-lg bg-warning/10 p-3">
						<div class="flex items-start gap-2 text-xs">
							<i class="icon mt-0.5 text-warning">info</i>
							<p class="text-base-content/65">
								8 students still have incomplete CVs. You can download the completed class CVs while
								they finish their submissions.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<section class="grid gap-3 sm:grid-cols-3">
			<a
				href="/teacher/downloads"
				class="card border border-base-300 bg-base-100 shadow-sm transition hover:border-primary/40"
			>
				<div class="card-body flex-row items-center gap-3 p-4">
					<div
						class="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"
					>
						<i class="icon">download</i>
					</div>
					<div>
						<h3 class="text-sm font-semibold">Download Class CVs</h3>
						<p class="text-xs text-base-content/50">Download CVs for the current class</p>
					</div>
				</div>
			</a>

			<a
				href="/teacher/downloads"
				class="card border border-base-300 bg-base-100 shadow-sm transition hover:border-primary/40"
			>
				<div class="card-body flex-row items-center gap-3 p-4">
					<div
						class="grid size-10 shrink-0 place-items-center rounded-xl bg-base-200 text-base-content"
					>
						<i class="icon">folder_zip</i>
					</div>
					<div>
						<h3 class="text-sm font-semibold">Download Full Batch CVs</h3>
						<p class="text-xs text-base-content/50">Export the complete batch archive</p>
					</div>
				</div>
			</a>

			<div class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body flex-row items-center gap-3 p-4">
					<div
						class="grid size-10 shrink-0 place-items-center rounded-xl bg-success/10 text-success"
					>
						<i class="icon">sync</i>
					</div>
					<div>
						<h3 class="text-sm font-semibold">Last synchronized</h3>
						<p class="text-xs text-base-content/50">{classInfo.updated}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
