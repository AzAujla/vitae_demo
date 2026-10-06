<script lang="ts">
	type MarkComponent = {
		label: 'Theory' | 'Practical' | 'Internal';
		marks: number;
	};

	type SubjectResult = {
		code: string;
		name: string;
		components: MarkComponent[];
		total: number;
	};

	type SemesterResult = {
		semester: number;
		examination: string;
		rollNumber: string;
		registrationNumber: string;
		sgpa: number;
		declarationDate: string;
		subjects: SubjectResult[];
	};

	const results: Record<number, SemesterResult> = {
		1: {
			semester: 1,
			examination: 'December 2025',
			rollNumber: '33253',
			registrationNumber: '14222000580',
			sgpa: 7.5,
			declarationDate: '21 April 2026',
			subjects: [
				{
					code: 'MBA502',
					name: 'Statistics for Managers',
					components: [
						{ label: 'Theory', marks: 41 },
						{ label: 'Internal', marks: 40 }
					],
					total: 81
				},
				{
					code: 'MBA505',
					name: 'Marketing Management',
					components: [
						{ label: 'Theory', marks: 29 },
						{ label: 'Internal', marks: 36 }
					],
					total: 65
				},
				{
					code: 'MBA501',
					name: 'Managerial Economics',
					components: [
						{ label: 'Theory', marks: 33 },
						{ label: 'Internal', marks: 35 }
					],
					total: 68
				},
				{
					code: 'MBA504',
					name: 'Organisational Behaviour',
					components: [
						{ label: 'Theory', marks: 32 },
						{ label: 'Internal', marks: 40 }
					],
					total: 72
				},
				{
					code: 'MBA503',
					name: 'Management Accounting',
					components: [
						{ label: 'Theory', marks: 23 },
						{ label: 'Internal', marks: 34 }
					],
					total: 57
				},
				{
					code: 'MBA507',
					name: 'Workshop on Business Research',
					components: [{ label: 'Internal', marks: 33 }],
					total: 33
				},
				{
					code: 'MBA506',
					name: 'Workshop on Business Computing',
					components: [{ label: 'Internal', marks: 43 }],
					total: 43
				}
			]
		},

		2: {
			semester: 2,
			examination: 'May 2026',
			rollNumber: '32954',
			registrationNumber: '14222000580',
			sgpa: 7.47,
			declarationDate: '27 August 2026',
			subjects: [
				{
					code: 'MBA551',
					name: 'Business Environment',
					components: [
						{ label: 'Theory', marks: 26 },
						{ label: 'Internal', marks: 44 }
					],
					total: 70
				},
				{
					code: 'MBA552',
					name: 'Human Resource Management',
					components: [
						{ label: 'Theory', marks: 31 },
						{ label: 'Internal', marks: 40 }
					],
					total: 71
				},
				{
					code: 'MBA553',
					name: 'Decision Modelling and Optimisation',
					components: [
						{ label: 'Theory', marks: 34 },
						{ label: 'Internal', marks: 44 }
					],
					total: 78
				},
				{
					code: 'MBA554',
					name: 'Financial Management',
					components: [
						{ label: 'Theory', marks: 40 },
						{ label: 'Internal', marks: 30 }
					],
					total: 70
				},
				{
					code: 'MBA555',
					name: 'Legal Aspect of Business',
					components: [
						{ label: 'Theory', marks: 20 },
						{ label: 'Internal', marks: 31 }
					],
					total: 51
				},
				{
					code: 'MMBA556',
					name: 'Summer Training Report & Viva-Voce',
					components: [{ label: 'Practical', marks: 69 }],
					total: 69
				},
				{
					code: 'MBA557',
					name: 'Workshop on Business Communication',
					components: [{ label: 'Internal', marks: 35 }],
					total: 35
				},
				{
					code: 'MBA558',
					name: 'Workshop on Multivariate Statistical Techniques',
					components: [{ label: 'Internal', marks: 32 }],
					total: 32
				}
			]
		}
	};

	let selectedSemester = $state<1 | 2>(2);

	let currentResult = $derived(results[selectedSemester]);

	let totalMarks = $derived(
		currentResult.subjects.reduce((sum, subject) => sum + subject.total, 0)
	);

	let componentCount = $derived(
		currentResult.subjects.reduce((sum, subject) => sum + subject.components.length, 0)
	);
</script>

<svelte:head>
	<title>Academic Results | Campus</title>
	<meta name="description" content="View your semester-wise academic results." />
</svelte:head>

<main class="min-h-screen bg-base-200/50 px-4 py-5">
	<div class="mx-auto max-w-lg space-y-5">
		<!-- Page header -->
		<header>
			<p class="text-xs font-medium uppercase tracking-widest text-base-content/50">Academics</p>

			<h1 class="mt-1 text-2xl font-bold tracking-tight">Examination Results</h1>

			<p class="mt-1 text-sm text-base-content/60">Your semester-wise academic performance.</p>
		</header>

		<!-- Semester selector -->
		<section>
			<div class="join grid w-full grid-cols-2">
				{#each [1, 2] as semester}
					<button
						class="btn join-item"
						class:btn-primary={selectedSemester === semester}
						class:btn-ghost={selectedSemester !== semester}
						onclick={() => (selectedSemester = semester as 1 | 2)}
					>
						Semester {semester}
					</button>
				{/each}
			</div>
		</section>

		<!-- Result summary -->
		<section class="card overflow-hidden bg-primary text-primary-content shadow-sm">
			<div class="card-body gap-5 p-5">
				<div class="flex items-center justify-between">
					<span class="badge border-none bg-primary-content/15 text-primary-content">
						Semester {currentResult.semester}
					</span>

					<span class="flex items-center gap-1 text-xs opacity-80">
						<i class="icon">verified</i>
						Published Result
					</span>
				</div>

				<div class="flex items-end justify-between gap-4">
					<div>
						<p class="text-sm opacity-75">Semester Grade Point Average</p>
						<h2 class="mt-1 text-5xl font-bold tracking-tight tabular-nums">
							{currentResult.sgpa.toFixed(2)}
						</h2>
						<p class="mt-2 text-xs opacity-70">SGPA · Out of 10.00</p>
					</div>

					<div class="text-right">
						<p class="text-xs opacity-70">Examination</p>
						<p class="mt-1 text-sm font-semibold">
							{currentResult.examination}
						</p>
					</div>
				</div>

				<div class="divider my-0 border-primary-content/20"></div>

				<div class="grid grid-cols-2 gap-4">
					<div>
						<p class="text-xs opacity-70">Subjects</p>
						<p class="mt-1 text-lg font-semibold">
							{currentResult.subjects.length}
						</p>
					</div>

					<div>
						<p class="text-xs opacity-70">Total Marks</p>
						<p class="mt-1 text-lg font-semibold">
							{totalMarks}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Result metadata -->
		<section class="rounded-xl border border-base-300 bg-base-100 p-4">
			<div class="flex items-center gap-3">
				<div
					class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-base-200 text-base-content/70"
				>
					<i class="icon text-xl">calendar_month</i>
				</div>

				<div class="min-w-0 flex-1">
					<p class="text-xs text-base-content/50">Result Declaration Date</p>
					<p class="mt-1 text-sm font-semibold">
						{currentResult.declarationDate}
					</p>
				</div>

				<i class="icon text-base-content/30">event_available</i>
			</div>
		</section>

		<!-- Subject results -->
		<section class="space-y-3">
			<div class="flex items-center justify-between">
				<div>
					<h2 class="font-bold">Subject-wise Results</h2>
					<p class="mt-1 text-xs text-base-content/50">Detailed marks breakdown</p>
				</div>

				<span class="badge badge-outline">
					{currentResult.subjects.length} Subjects
				</span>
			</div>

			{#each currentResult.subjects as subject, index}
				<article class="card border border-base-300 bg-base-100 shadow-sm">
					<div class="card-body gap-3 p-4">
						<!-- Subject heading -->
						<div class="flex items-start gap-3">
							<div
								class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
							>
								{String(index + 1).padStart(2, '0')}
							</div>

							<div class="min-w-0 flex-1">
								<h3 class="text-sm font-semibold leading-snug">
									{subject.name}
								</h3>
								<p class="mt-1 text-xs text-base-content/45">
									{subject.code}
								</p>
							</div>

							<div class="text-right">
								<p class="text-xl font-bold tabular-nums">
									{subject.total}
								</p>
								<p class="text-[10px] text-base-content/45">Total</p>
							</div>
						</div>

						<!-- Marks breakdown -->
						<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
							{#each subject.components as component}
								<div class="rounded-lg bg-base-200/70 px-3 py-2">
									<p class="text-[11px] text-base-content/50">
										{component.label}
									</p>
									<p class="mt-1 text-base font-semibold tabular-nums">
										{component.marks}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</section>

		<!-- Student information -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body gap-3 p-4">
				<div class="flex items-center gap-2">
					<i class="icon text-base-content/50">school</i>
					<h2 class="text-sm font-semibold">Examination Details</h2>
				</div>

				<div class="divide-y divide-base-200">
					<div class="flex justify-between gap-3 py-3 text-sm">
						<span class="text-base-content/50">University</span>
						<span class="text-right font-medium">Panjab University</span>
					</div>

					<div class="flex justify-between gap-3 py-3 text-sm">
						<span class="text-base-content/50">Programme</span>
						<span class="text-right font-medium">MBA (General)</span>
					</div>

					<div class="flex justify-between gap-3 py-3 text-sm">
						<span class="text-base-content/50">Roll Number</span>
						<span class="font-medium tabular-nums">
							{currentResult.rollNumber}
						</span>
					</div>

					<div class="flex justify-between gap-3 py-3 text-sm">
						<span class="text-base-content/50">Registration Number</span>
						<span class="font-medium tabular-nums">
							{currentResult.registrationNumber}
						</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer note -->
		<div class="flex items-start gap-2 px-2 pb-5 text-xs leading-relaxed text-base-content/45">
			<i class="icon mt-0.5">info</i>
			<p>
				Marks are displayed as published in the university result statement. TH = Theory, PR =
				Practical, IN = Internal Assessment.
			</p>
		</div>
	</div>
</main>
