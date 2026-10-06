<script lang="ts">
	type Subject = {
		id: number;
		name: string;
		attendance: number;
		nextLecture: string | null;
	};

	let subjects: Subject[] = $state([
		{
			id: 1,
			name: 'Other Lectures',
			attendance: 100,
			nextLecture: null
		},
		{
			id: 2,
			name: 'Strategic Management',
			attendance: 75,
			nextLecture: 'Thu, 8 Oct, 2026'
		},
		{
			id: 3,
			name: 'Financial Engineering',
			attendance: 77,
			nextLecture: 'Tue, 6 Oct, 2026'
		},
		{
			id: 4,
			name: 'Research Project',
			attendance: 100,
			nextLecture: 'Wed, 7 Oct, 2026'
		},
		{
			id: 5,
			name: 'Financial Statement Analysis',
			attendance: 95,
			nextLecture: 'Mon, 5 Oct, 2026'
		},
		{
			id: 6,
			name: 'Investment Management',
			attendance: 77,
			nextLecture: 'Wed, 7 Oct, 2026'
		},
		{
			id: 7,
			name: 'Advertising & Consumer Behaviour',
			attendance: 81,
			nextLecture: 'Mon, 5 Oct, 2026'
		},
		{
			id: 8,
			name: 'Marketing Research & Project Management',
			attendance: 70,
			nextLecture: 'Wed, 7 Oct, 2026'
		}
	]);

	let selectedSubject = $state<Subject | null>(null);

	let averageAttendance = $derived(
		subjects.length
			? subjects.reduce((sum, subject) => sum + subject.attendance, 0) / subjects.length
			: 0
	);

	let lowAttendance = $derived(subjects.filter((subject) => subject.attendance < 75).length);
</script>

<svelte:head>
	<title>My Subjects | Campus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div data-theme="night" class="min-h-screen bg-base-100 text-base-content">
	<main class="mx-auto min-h-screen w-full max-w-lg">
		<!-- Header -->
		<header
			class="sticky top-0 z-20 border-b border-base-content/10 bg-base-100/95 px-5 pb-4 pt-6 backdrop-blur"
		>
			<div class="flex items-center justify-between">
				<div>
					<p class="text-xs font-medium uppercase tracking-widest text-base-content/40">
						Academic Overview
					</p>
					<h1 class="mt-1 text-2xl font-semibold tracking-tight">My Subjects</h1>
				</div>

				<div class="badge badge-primary badge-outline">Semester III</div>
			</div>
		</header>

		<!-- Attendance summary -->
		<section class="px-5 pt-5">
			<div class="card border border-base-content/10 bg-base-200/60">
				<div class="card-body flex-row items-center justify-between gap-3 p-4">
					<div>
						<p class="text-xs text-base-content/50">Average Attendance</p>

						<h2 class="mt-1 text-3xl font-bold tracking-tight">
							{averageAttendance.toFixed(1)}%
						</h2>

						<p class="mt-1 text-xs text-base-content/50">
							Across {subjects.length} subjects
						</p>
					</div>

					<div class="text-right">
						<div class="badge badge-success badge-outline">
							{subjects.length - lowAttendance} On Track
						</div>

						{#if lowAttendance > 0}
							<p class="mt-2 text-xs text-warning">
								{lowAttendance} below 75%
							</p>
						{/if}
					</div>
				</div>
			</div>
		</section>

		<!-- Subject list -->
		<section class="px-5 pb-8 pt-6">
			<div class="mb-5 flex items-center justify-between">
				<h2 class="text-sm font-semibold text-base-content/70">All Subjects</h2>

				<span class="text-xs text-base-content/40">
					{subjects.length} Subjects
				</span>
			</div>

			<div class="space-y-2">
				{#each subjects as subject (subject.id)}
					<button
						type="button"
						onclick={() => (selectedSubject = subject)}
						class="flex w-full items-center gap-4 rounded-2xl px-2 py-4 text-left transition-colors hover:bg-base-200/70 active:bg-base-300/50"
					>
						<!-- Circular attendance indicator -->
						<div
							class="attendance-ring shrink-0"
							class:low={subject.attendance < 75}
							style={`--progress: ${subject.attendance}`}
						>
							<div class="attendance-ring-inner">
								<span class="text-sm font-medium tabular-nums">
									{subject.attendance}%
								</span>
							</div>
						</div>

						<!-- Subject details -->
						<div class="min-w-0 flex-1">
							<h3 class="text-[15px] font-medium leading-snug">
								{subject.name}
							</h3>

							<p class="mt-1.5 text-sm text-base-content/55">
								{#if subject.nextLecture}
									Next Lec on {subject.nextLecture}
								{:else}
									No upcoming classes
								{/if}
							</p>
						</div>

						<icon name="chevron-right" size="sm" color="base-content" class="shrink-0 opacity-30" />
					</button>
				{/each}
			</div>
		</section>

		<!-- Subject detail dialog -->
		{#if selectedSubject}
			<dialog open class="modal modal-bottom sm:modal-middle">
				<div class="modal-box border border-base-content/10 bg-base-200">
					<div class="mb-5 flex items-start justify-between gap-3">
						<div>
							<p class="text-xs uppercase tracking-wider text-base-content/40">Subject Details</p>
							<h3 class="mt-2 text-lg font-semibold">
								{selectedSubject.name}
							</h3>
						</div>

						<button
							class="btn btn-circle btn-ghost btn-sm"
							onclick={() => (selectedSubject = null)}
							aria-label="Close"
						>
							<icon name="x" />
						</button>
					</div>

					<div class="flex items-center gap-5 rounded-xl bg-base-300/50 p-4">
						<div class="attendance-ring" style={`--progress: ${selectedSubject.attendance}`}>
							<div class="attendance-ring-inner">
								<span class="text-sm font-semibold">
									{selectedSubject.attendance}%
								</span>
							</div>
						</div>

						<div>
							<p class="text-xs text-base-content/50">Attendance Percentage</p>
							<p class="mt-1 font-semibold">
								{selectedSubject.attendance >= 75 ? 'Attendance sufficient' : 'Attendance shortage'}
							</p>
						</div>
					</div>

					<div class="mt-4 rounded-xl bg-base-300/50 p-4">
						<p class="text-xs text-base-content/50">Next Lecture</p>
						<p class="mt-1 text-sm font-medium">
							{selectedSubject.nextLecture ?? 'No upcoming classes'}
						</p>
					</div>

					<div class="modal-action">
						<button class="btn btn-primary w-full" onclick={() => (selectedSubject = null)}>
							Close
						</button>
					</div>
				</div>

				<button
					class="modal-backdrop"
					onclick={() => (selectedSubject = null)}
					aria-label="Close dialog"
				></button>
			</dialog>
		{/if}
	</main>
</div>

<style>
	.attendance-ring {
		--ring-size: 76px;

		width: var(--ring-size);
		height: var(--ring-size);
		border-radius: 50%;

		display: grid;
		place-items: center;

		background: conic-gradient(
			from 0deg,
			var(--color-primary) calc(var(--progress) * 1%),
			color-mix(in srgb, var(--color-base-content) 15%, transparent) 0
		);
	}

	.attendance-ring.low {
		background: conic-gradient(
			from 0deg,
			var(--color-warning) calc(var(--progress) * 1%),
			color-mix(in srgb, var(--color-base-content) 15%, transparent) 0
		);
	}

	.attendance-ring-inner {
		width: calc(var(--ring-size) - 11px);
		height: calc(var(--ring-size) - 11px);

		display: grid;
		place-items: center;

		border-radius: 50%;
		background: var(--color-base-100);
	}
</style>
