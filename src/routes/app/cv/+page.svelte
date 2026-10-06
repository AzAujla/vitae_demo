<script lang="ts">
	import ProfileCard from '#lib/ProfileCard.svelte';
	import type { StudentCV, Location, DateRange, SkillCategory, Link } from './types';

	// ------------------------------------------------
	// Initial CV data
	// Replace with data fetched from your backend.
	// ------------------------------------------------

	const uid = () => crypto.randomUUID();

	const emptyDateRange = (): DateRange => ({
		startDate: '',
		endDate: '',
		isOngoing: false
	});

	const emptyLocation = (): Location => ({
		address: '',
		city: '',
		state: '',
		country: '',
		postalCode: ''
	});

	const emptyLink = (): Link => ({
		label: '',
		url: ''
	});

	const cv = $state<StudentCV>({
		id: 'cv-001',
		studentId: 'student-001',

		personalInfo: {
			firstName: 'Azeem',
			middleName: 'Partap Singh',
			lastName: '',
			headline: 'MBA Student | Software Development | Financial Modelling',
			summary: '',
			contact: {
				email: 'azeempartapsingh.ubs@gmail.com',
				phone: '+91 7696251014',
				alternatePhone: '',
				linkedin: 'https://www.linkedin.com/in/azeempartap-singh',
				portfolio: '',
				website: ''
			},
			address: {
				city: 'Ludhiana',
				state: 'Punjab',
				country: 'India',
				address: '',
				postalCode: ''
			}
		},

		education: [
			{
				id: uid(),
				institution: 'University Business School, Panjab University',
				degree: 'M.B.A.',
				fieldOfStudy: 'General',
				location: {
					city: 'Chandigarh',
					state: 'Punjab',
					country: 'India'
				},
				duration: {
					startDate: '2025',
					endDate: '2027'
				},
				status: 'Pursuing'
			},
			{
				id: uid(),
				institution: 'SCD Government College',
				degree: 'B.C.A.',
				fieldOfStudy: 'Computer Applications',
				location: {
					city: 'Ludhiana',
					state: 'Punjab',
					country: 'India'
				},
				duration: {
					startDate: '2022',
					endDate: '2025'
				},
				score: {
					value: 76.64,
					type: 'Percentage'
				},
				status: 'Completed'
			},
			{
				id: uid(),
				institution: 'Guru Nanak Public School',
				degree: 'Senior Secondary (XII)',
				fieldOfStudy: '',
				location: {
					city: 'Ludhiana',
					state: 'Punjab',
					country: 'India'
				},
				duration: {
					startDate: '2022',
					endDate: '2022'
				},
				score: {
					value: 87.4,
					type: 'Percentage'
				},
				status: 'Completed'
			},
			{
				id: uid(),
				institution: 'Guru Nanak Public School',
				degree: 'Secondary (X)',
				fieldOfStudy: '',
				location: {
					city: 'Ludhiana',
					state: 'Punjab',
					country: 'India'
				},
				duration: {
					startDate: '2020',
					endDate: '2020'
				},
				score: {
					value: 92.6,
					type: 'Percentage'
				},
				status: 'Completed'
			}
		],

		experience: [
			{
				id: uid(),
				company: 'Ark Infotech Services',
				designation: 'Web Application Development',
				employmentType: 'Internship',
				duration: {
					startDate: 'May 2024',
					endDate: 'Feb 2025',
					isOngoing: false
				},
				location: {
					city: '',
					state: '',
					country: 'India'
				},
				description:
					'Internship involving web application development, client onboarding and operational assistance.',
				responsibilities: [
					'Helping in Client Onboarding and Operational Assistance',
					'Coordinated development teams for the development of a Mobile App'
				],
				achievements: [],
				technologies: [],
				links: []
			}
		],

		projects: [
			{
				id: uid(),
				title: 'Financial Modelling Bootcamp',
				description:
					'Built financial models to evaluate startup ideas and prepared an equity thesis using financial models for decision making.',
				role: '',
				duration: {
					startDate: '2026',
					endDate: '2026'
				},
				status: 'Completed',
				organization: 'CSDE',
				highlights: [
					'Built Financial Models such as Three Statement Models to evaluate Startup Ideas',
					'Prepared and Presented Equity Thesis by using Financial Models for Decision Making',
					'Received Letter of Appreciation from Dr. Suveera Gill, Hon. Director, CSDE'
				],
				technologies: [],
				links: [],
				collaborators: []
			},
			{
				id: uid(),
				title: 'Corporate Valuation Bootcamp',
				description:
					'Built valuation models using Discounted Cash Flow valuation and P/E Ratio estimation.',
				role: '',
				duration: {
					startDate: '2025',
					endDate: '2025'
				},
				status: 'Completed',
				organization: 'CSDE',
				highlights: [
					'Built Models for Discounted Cash Flow Valuation',
					'Built Models for P/E Ratio Estimation'
				],
				technologies: [],
				links: [],
				collaborators: []
			},
			{
				id: uid(),
				title: 'Analysis of BFSI Sector to Identify Firms in Need of Executive Search',
				description:
					'Live project involving analysis of the BFSI sector to identify firms in need of executive search.',
				role: '',
				duration: {
					startDate: '2025',
					endDate: '2025'
				},
				status: 'Completed',
				organization: '',
				highlights: [],
				technologies: [],
				links: [],
				collaborators: []
			},
			{
				id: uid(),
				title: 'Companion Web Application for Fiction Writing',
				description:
					'Companion web application for productivity and project tracking for fiction writing.',
				role: 'Team Lead',
				duration: {
					startDate: '2024',
					endDate: '2024'
				},
				status: 'Completed',
				organization: 'PCTE, Baddowal',
				highlights: [
					'Led a team comprising three other members',
					'Developed the application in under 24 hours'
				],
				technologies: [],
				links: [],
				collaborators: ['Three other team members']
			}
		],

		certifications: [
			{
				id: uid(),
				name: 'Financial Modelling Bootcamp',
				issuer: 'CSDE',
				issueDate: '2026',
				expiryDate: '',
				credentialId: '',
				credentialUrl: '',
				description:
					'Bootcamp covering financial modelling, startup evaluation and equity thesis preparation.',
				skills: ['Financial Modelling', 'Three Statement Models', 'Equity Analysis']
			},
			{
				id: uid(),
				name: 'Corporate Valuation Bootcamp',
				issuer: 'CSDE',
				issueDate: '2025',
				expiryDate: '',
				credentialId: '',
				credentialUrl: '',
				description: 'Bootcamp covering DCF valuation and P/E ratio estimation.',
				skills: ['Corporate Valuation', 'DCF Valuation', 'P/E Ratio Estimation']
			},
			{
				id: uid(),
				name: 'NSS A Certificate',
				issuer: 'National Service Scheme',
				issueDate: '2024',
				expiryDate: '',
				credentialId: '',
				credentialUrl: '',
				description: '',
				skills: []
			}
		],

		achievements: [
			{
				id: uid(),
				title: 'First Position – Business Situational Insights',
				description: '',
				organization: 'GNKCW Ludhiana',
				date: '2025',
				category: 'Competition',
				position: 'First Position',
				links: []
			},
			{
				id: uid(),
				title: 'District Level Inter-College Programming Events',
				description: 'Won at five District Level Inter-College Programming Events.',
				organization: '',
				date: '2022–2024',
				category: 'Competition',
				position: 'Twice First Place, Once Second, Twice Third',
				links: []
			},
			{
				id: uid(),
				title: 'Zonal First Place – Creative Essay Writing',
				description:
					'Won first place in Creative Essay Writing at the Zonal Youth Festival for an English essay on “Dreams of the Youth”.',
				organization: 'KLSD College, Ludhiana',
				date: '2023',
				category: 'Competition',
				position: 'Zonal First Place',
				links: []
			}
		],

		positionsOfResponsibility: [
			{
				id: uid(),
				title: 'Technical Head',
				organization: 'National Service Scheme (NSS)',
				duration: {
					startDate: '2023',
					endDate: '2023'
				},
				location: {
					city: '',
					state: 'Punjab',
					country: 'India'
				},
				description: '',
				responsibilities: [],
				achievements: []
			},
			{
				id: uid(),
				title: 'Event Coordinator',
				organization: 'Red Ribbon Club',
				duration: {
					startDate: '2023',
					endDate: '2023'
				},
				location: {
					city: '',
					state: 'Punjab',
					country: 'India'
				},
				description: '',
				responsibilities: [],
				achievements: []
			},
			{
				id: uid(),
				title: 'Editor – Social and Environmental Section',
				organization: 'Satluj, SCD Government College',
				duration: {
					startDate: '2023',
					endDate: '2024'
				},
				location: {
					city: 'Ludhiana',
					state: 'Punjab',
					country: 'India'
				},
				description:
					'Editor for the Social and Environmental section of Satluj, the college magazine.',
				responsibilities: [],
				achievements: []
			},
			{
				id: uid(),
				title: 'Discipline Head',
				organization: 'Student Administration Body, GNPS Ludhiana',
				duration: {
					startDate: '2019',
					endDate: '2019'
				},
				location: {
					city: 'Ludhiana',
					state: 'Punjab',
					country: 'India'
				},
				description: '',
				responsibilities: [],
				achievements: []
			}
		],

		skills: [
			{
				id: uid(),
				name: 'Software Development',
				description: 'Programming languages used for software development.',
				skills: [
					{
						name: 'Python',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'Rust',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'C++',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					}
				]
			},
			{
				id: uid(),
				name: 'Web & Mobile Development',
				description: 'Technologies used for web and mobile application development.',
				skills: [
					{
						name: 'PHP',
						proficiency: 'Advanced',
						description: 'CodeIgniter and Laravel',
						yearsOfExperience: 0
					},
					{
						name: 'JavaScript',
						proficiency: 'Advanced',
						description: 'React, Svelte and React Native',
						yearsOfExperience: 0
					},
					{
						name: 'Flutter',
						proficiency: 'Intermediate',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'Dart',
						proficiency: 'Intermediate',
						description: '',
						yearsOfExperience: 0
					}
				]
			},
			{
				id: uid(),
				name: 'Microsoft Office',
				description: 'Productivity and office automation.',
				skills: [
					{
						name: 'Microsoft Excel',
						proficiency: 'Advanced',
						description: 'VBA Macros and custom scripts',
						yearsOfExperience: 0
					},
					{
						name: 'Microsoft Word',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'Microsoft PowerPoint',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					}
				]
			},
			{
				id: uid(),
				name: 'Quantitative & Communication',
				description: '',
				skills: [
					{
						name: 'Quantitative Aptitude',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'Public Speaking',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					},
					{
						name: 'Creative Writing',
						proficiency: 'Advanced',
						description: '',
						yearsOfExperience: 0
					}
				]
			}
		],

		extracurricularActivities: [
			{
				id: uid(),
				title: 'Drug Awareness Play',
				organization: '',
				category: 'Cultural',
				duration: {
					startDate: '2024',
					endDate: '2024'
				},
				description: 'Organized and participated in a play to raise drug awareness.',
				role: '',
				achievements: [],
				links: []
			},
			{
				id: uid(),
				title: 'Zonal Youth Fest Debate',
				organization: '',
				category: 'Cultural',
				duration: {
					startDate: '2022',
					endDate: '2023'
				},
				description: 'Participated in debate competitions at the Zonal Youth Fest.',
				role: '',
				achievements: [],
				links: []
			},
			{
				id: uid(),
				title: 'Ad-Mad Show',
				organization: 'PCTE, Baddowal',
				category: 'Cultural',
				duration: {
					startDate: '2024',
					endDate: '2024'
				},
				description: '',
				role: '',
				achievements: ['Won First Prize'],
				links: []
			},
			{
				id: uid(),
				title: 'Red Ribbon Club',
				organization: 'SCD Government College',
				category: 'Clubs & Organizations',
				duration: {
					startDate: '2023',
					endDate: '2023'
				},
				description: '',
				role: '',
				achievements: [],
				links: []
			},
			{
				id: uid(),
				title: 'National Service Scheme',
				organization: 'SCD Government College',
				category: 'Clubs & Organizations',
				duration: {
					startDate: '2023',
					endDate: '2024'
				},
				description: '',
				role: '',
				achievements: [],
				links: []
			},
			{
				id: uid(),
				title: 'Consulting Club',
				organization: 'University Business School',
				category: 'Clubs & Organizations',
				duration: {
					startDate: '2025',
					endDate: '',
					isOngoing: true
				},
				description: '',
				role: '',
				achievements: [],
				links: []
			},
			{
				id: uid(),
				title: 'NSS Camp Cleaning and Social Service Campaign',
				organization: 'National Service Scheme',
				category: 'Volunteering',
				duration: {
					startDate: '2024',
					endDate: '2024'
				},
				description:
					'Organized cleaning and social service campaigns to provide food and warm clothing to people in need as part of NSS Camp.',
				role: '',
				achievements: [],
				links: []
			}
		],

		interests: [
			{
				id: uid(),
				name: 'History',
				description: ''
			},
			{
				id: uid(),
				name: 'Economics',
				description: ''
			},
			{
				id: uid(),
				name: 'Computer Science',
				description: ''
			},
			{
				id: uid(),
				name: 'Writing',
				description: ''
			},
			{
				id: uid(),
				name: 'Music',
				description: ''
			}
		],

		metadata: {
			status: 'Draft',
			visibility: 'Private',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			version: 1
		}
	});

	// ------------------------------------------------
	// Helper functions
	// ------------------------------------------------

	function parseList(value: string): string[] {
		return value
			.split(',')
			.map((item) => item.trim())
			.filter(Boolean);
	}

	function formatList(value: string[]): string {
		return value.join(', ');
	}

	function updateList<T>(items: T[], index: number, value: T) {
		items[index] = value;
	}

	function removeItem<T>(items: T[], index: number) {
		items.splice(index, 1);
	}

	function addEducation() {
		cv.education.push({
			id: uid(),
			institution: '',
			degree: '',
			fieldOfStudy: '',
			duration: emptyDateRange(),
			location: emptyLocation(),
			score: {
				value: 0,
				type: 'Percentage'
			},
			status: 'Pursuing'
		});
	}

	function addExperience() {
		cv.experience.push({
			id: uid(),
			company: '',
			designation: '',
			employmentType: 'Internship',
			duration: emptyDateRange(),
			location: emptyLocation(),
			description: '',
			responsibilities: [],
			achievements: [],
			technologies: [],
			links: []
		});
	}

	function addProject() {
		cv.projects.push({
			id: uid(),
			title: '',
			description: '',
			role: '',
			duration: emptyDateRange(),
			status: 'Ongoing',
			organization: '',
			highlights: [],
			technologies: [],
			links: [],
			collaborators: []
		});
	}

	function addCertification() {
		cv.certifications.push({
			id: uid(),
			name: '',
			issuer: '',
			issueDate: '',
			expiryDate: '',
			credentialId: '',
			credentialUrl: '',
			description: '',
			skills: []
		});
	}

	function addAchievement() {
		cv.achievements.push({
			id: uid(),
			title: '',
			description: '',
			organization: '',
			date: '',
			category: 'Academic',
			position: '',
			links: []
		});
	}

	function addPosition() {
		cv.positionsOfResponsibility.push({
			id: uid(),
			title: '',
			organization: '',
			duration: emptyDateRange(),
			location: emptyLocation(),
			description: '',
			responsibilities: [],
			achievements: []
		});
	}

	function addSkillCategory() {
		cv.skills.push({
			id: uid(),
			name: '',
			description: '',
			skills: []
		});
	}

	function addSkill(category: SkillCategory) {
		category.skills.push({
			name: '',
			proficiency: 'Intermediate',
			description: '',
			yearsOfExperience: 0
		});
	}

	function addActivity() {
		cv.extracurricularActivities.push({
			id: uid(),
			title: '',
			organization: '',
			category: 'Other',
			duration: emptyDateRange(),
			description: '',
			role: '',
			achievements: [],
			links: []
		});
	}

	function addInterest() {
		cv.interests.push({
			id: uid(),
			name: '',
			description: ''
		});
	}

	function addLink(links: Link[]) {
		links.push(emptyLink());
	}

	function removeLink(links: Link[], index: number) {
		links.splice(index, 1);
	}

	function saveLocally() {
		cv.metadata.updatedAt = new Date().toISOString();

		// Connect this to your API or form submission.
		console.log('CV updated:', structuredClone(cv));
	}

	// ------------------------------------------------
	// Derived information
	// ------------------------------------------------

	let sectionCounts = $derived([
		cv.education.length,
		cv.experience.length,
		cv.projects.length,
		cv.certifications.length,
		cv.achievements.length,
		cv.positionsOfResponsibility.length,
		cv.skills.reduce((sum, category) => sum + category.skills.length, 0),
		cv.extracurricularActivities.length,
		cv.interests.length
	]);

	let completionCount = $derived(sectionCounts.reduce((sum, count) => sum + count, 0));

	let sectionCount = 9;

	// ------------------------------------------------
	// Reusable styling
	// ------------------------------------------------

	const inputClass = 'input input-bordered input-sm w-full bg-base-100';

	const selectClass = 'select select-bordered select-sm w-full bg-base-100';

	const textareaClass = 'textarea textarea-bordered textarea-sm w-full bg-base-100';

	const labelClass = 'label-text text-xs font-medium text-base-content/60';
	let editing = $state(false);
</script>

<svelte:head>
	<title>My CV | Campus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main class="min-h-screen bg-base-200/50 px-4 py-5">
	<div class="mx-auto max-w-3xl space-y-5">
		<!-- ==========================================
         Header
    =========================================== -->

		<header class="flex flex-wrap items-start justify-between gap-3">
			<div class="min-w-0">
				<p class="text-xs font-medium uppercase tracking-widest text-base-content/50">
					Professional Profile
				</p>
				<h1 class="mt-1 text-2xl font-bold tracking-tight">My CV</h1>
				<p class="mt-1 text-sm text-base-content/60">
					{editing
						? 'Edit your professional information and experience.'
						: 'Your CV in a clean, printable layout.'}
				</p>
			</div>

			<div class="flex shrink-0 items-center gap-2">
				<span class="badge badge-warning badge-outline">{cv.metadata.status}</span>
				{#if editing}
					<button class="btn btn-primary btn-sm" onclick={saveLocally}>
						<i class="icon">save</i>
						Save changes
					</button>
					<button class="btn btn-ghost btn-sm" onclick={() => (editing = false)}>
						<i class="icon">visibility</i>
						Read
					</button>
				{:else}
					<button class="btn btn-primary btn-sm" onclick={() => (editing = true)}>
						<i class="icon">edit</i>
						Edit CV
					</button>
				{/if}
			</div>
		</header>

		<!-- ==========================================
         Reading view: formatted CV
    =========================================== -->
		{#if !editing}
			<ProfileCard {cv} />

			<article class="cv-paper card border border-base-300 bg-base-100 shadow-sm">
				<div class="cv-paper-body">
					<header class="cv-document-header">
						<div>
							<h2 class="cv-name">
								{[cv.personalInfo.firstName, cv.personalInfo.middleName, cv.personalInfo.lastName]
									.filter(Boolean)
									.join(' ') || 'Your Name'}
							</h2>
							{#if cv.personalInfo.headline}
								<p class="cv-headline">{cv.personalInfo.headline}</p>
							{/if}
						</div>
					</header>

					<div class="cv-contact">
						{#if cv.personalInfo.contact.email}<span>{cv.personalInfo.contact.email}</span>{/if}
						{#if cv.personalInfo.contact.linkedin}<span
								><a href={cv.personalInfo.contact.linkedin} target="_blank" rel="noreferrer"
									>LinkedIn</a
								></span
							>{/if}
						{#if cv.personalInfo.contact.phone}<span>{cv.personalInfo.contact.phone}</span>{/if}
						{#if cv.personalInfo.address?.city}<span
								>{[cv.personalInfo.address.city, cv.personalInfo.address.state]
									.filter(Boolean)
									.join(', ')}</span
							>{/if}
					</div>

					{#if cv.personalInfo.summary}
						<section class="cv-section">
							<h3>PROFILE</h3>
							<p>{cv.personalInfo.summary}</p>
						</section>
					{/if}

					{#if cv.education.length}
						<section class="cv-section">
							<h3>ACADEMIC RECORD</h3>
							<div class="cv-table-wrap">
								<table class="cv-table">
									<tbody>
										{#each cv.education as item (item.id)}
											<tr>
												<td class="cv-date">{item.duration.endDate || item.duration.startDate}</td>
												<td
													><strong>{item.degree}</strong>{#if item.fieldOfStudy}<span
															class="cv-muted"
														>
															· {item.fieldOfStudy}</span
														>{/if}</td
												>
												<td
													>{item.institution}{#if item.location?.city}<span class="cv-muted"
															>, {item.location.city}</span
														>{/if}</td
												>
												<td class="cv-score"
													>{#if item.score}{item.score.value}{item.score.type === 'Percentage'
															? '%'
															: ` ${item.score.type}`}{:else}{item.status}{/if}</td
												>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</section>
					{/if}

					{#if cv.experience.length}
						<section class="cv-section">
							<h3>INTERNSHIPS & EXPERIENCE</h3>
							{#each cv.experience as item (item.id)}
								<div class="cv-entry">
									<div class="cv-entry-heading">
										<strong>{item.designation}</strong>
										<span
											>{item.duration.startDate}{item.duration.endDate
												? ` – ${item.duration.endDate}`
												: item.duration.isOngoing
													? ' – Present'
													: ''}</span
										>
									</div>
									<div class="cv-subheading">
										{item.company}{#if item.location?.city}
											· {item.location.city}{/if}
									</div>
									{#if item.description}<p>{item.description}</p>{/if}
									{#if item.responsibilities?.length}
										<ul>
											{#each item.responsibilities as point}<li>{point}</li>{/each}
										</ul>
									{/if}
								</div>
							{/each}
						</section>
					{/if}

					{#if cv.projects.length || cv.certifications.length}
						<section class="cv-section">
							<h3>CERTIFICATES & PROJECTS</h3>
							{#each cv.certifications as item (item.id)}
								<div class="cv-entry">
									<div class="cv-entry-heading">
										<strong
											>{item.name}{#if item.issuer}, {item.issuer}{/if}</strong
										><span>{item.issueDate}</span>
									</div>
									{#if item.description}<p>{item.description}</p>{/if}
									{#if item.skills?.length}<p class="cv-muted">{item.skills.join(' · ')}</p>{/if}
								</div>
							{/each}
							{#each cv.projects as item (item.id)}
								<div class="cv-entry">
									<div class="cv-entry-heading">
										<strong>{item.title}</strong><span
											>{item.duration.startDate}{item.duration.endDate
												? ` – ${item.duration.endDate}`
												: ''}</span
										>
									</div>
									{#if item.organization}<div class="cv-subheading">
											{item.organization}{#if item.role}
												· {item.role}{/if}
										</div>{/if}
									{#if item.description}<p>{item.description}</p>{/if}
									{#if item.highlights?.length}<ul>
											{#each item.highlights as point}<li>{point}</li>{/each}
										</ul>{/if}
								</div>
							{/each}
						</section>
					{/if}

					{#if cv.achievements.length || cv.positionsOfResponsibility.length}
						<section class="cv-section">
							<h3>ACADEMIC & CO-CURRICULAR ACHIEVEMENTS</h3>
							{#each cv.achievements as item (item.id)}
								<div class="cv-entry cv-compact-entry">
									<div class="cv-entry-heading">
										<strong>{item.title}</strong><span>{item.date}</span>
									</div>
									{#if item.position || item.organization}<p class="cv-muted">
											{[item.position, item.organization].filter(Boolean).join(' · ')}
										</p>{/if}
									{#if item.description}<p>{item.description}</p>{/if}
								</div>
							{/each}
							{#each cv.positionsOfResponsibility as item (item.id)}
								<div class="cv-entry cv-compact-entry">
									<div class="cv-entry-heading">
										<strong
											>{item.title}{#if item.organization}, {item.organization}{/if}</strong
										><span
											>{item.duration.startDate}{item.duration.endDate
												? ` – ${item.duration.endDate}`
												: item.duration.isOngoing
													? ' – Present'
													: ''}</span
										>
									</div>
									{#if item.description}<p>{item.description}</p>{/if}
								</div>
							{/each}
						</section>
					{/if}

					{#if cv.skills.length}
						<section class="cv-section">
							<h3>SKILLS</h3>
							<div class="cv-skills">
								{#each cv.skills as category (category.id)}
									{#if category.skills.length}
										<div>
											<strong>{category.name}</strong><span
												>{category.skills
													.map((skill) => skill.name)
													.filter(Boolean)
													.join(', ')}</span
											>
										</div>
									{/if}
								{/each}
							</div>
						</section>
					{/if}

					{#if cv.extracurricularActivities.length}
						<section class="cv-section">
							<h3>EXTRA-CURRICULAR ACTIVITIES</h3>
							{#each cv.extracurricularActivities as item (item.id)}
								<div class="cv-entry cv-compact-entry">
									<div class="cv-entry-heading">
										<strong>{item.title}</strong><span
											>{item.duration.startDate}{item.duration.endDate
												? ` – ${item.duration.endDate}`
												: item.duration.isOngoing
													? ' – Present'
													: ''}</span
										>
									</div>
									{#if item.organization}<div class="cv-subheading">
											{item.organization} · {item.category}
										</div>{/if}
									{#if item.description}<p>{item.description}</p>{/if}
									{#if item.achievements?.length}<ul>
											{#each item.achievements as point}<li>{point}</li>{/each}
										</ul>{/if}
								</div>
							{/each}
						</section>
					{/if}

					{#if cv.interests.length}
						<section class="cv-section">
							<h3>OTHER INTERESTS</h3>
							<p class="cv-interest-list">
								{cv.interests
									.map((item) => item.name)
									.filter(Boolean)
									.join(' · ')}
							</p>
						</section>
					{/if}
				</div>
			</article>
		{:else}
			<!-- ==========================================
         Overview
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body gap-4 p-4">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-xs text-base-content/50">CV overview</p>
							<h2 class="mt-1 text-lg font-bold">
								{cv.personalInfo.firstName || 'Your'}'s CV
							</h2>
						</div>

						<div class="avatar placeholder">
							<div class="size-12 rounded-xl bg-primary/10 text-primary">
								<i class="icon text-2xl">description</i>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-3 gap-2">
						<div class="rounded-xl bg-base-200 p-3">
							<p class="text-xl font-bold">{cv.education.length}</p>
							<p class="text-[11px] text-base-content/50">Education</p>
						</div>
						<div class="rounded-xl bg-base-200 p-3">
							<p class="text-xl font-bold">{cv.experience.length}</p>
							<p class="text-[11px] text-base-content/50">Experience</p>
						</div>
						<div class="rounded-xl bg-base-200 p-3">
							<p class="text-xl font-bold">{cv.projects.length}</p>
							<p class="text-[11px] text-base-content/50">Projects</p>
						</div>
					</div>

					<div class="flex items-center justify-between text-xs">
						<span class="text-base-content/50">
							{completionCount} entries across {sectionCount} sections
						</span>
						<span class="font-medium text-primary">
							{cv.metadata.version === 1 ? 'Version 1' : `Version ${cv.metadata.version}`}
						</span>
					</div>
				</div>
			</section>

			<!-- ==========================================
         Personal Information
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="mb-3 flex items-center gap-3">
						<div class="rounded-xl bg-primary/10 p-2 text-primary">
							<i class="icon text-xl">person</i>
						</div>
						<div>
							<h2 class="font-bold">Personal Information</h2>
							<p class="text-xs text-base-content/50">Your identity and contact details</p>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<label class="form-control">
							<span class={labelClass}>First name</span>
							<input class={inputClass} bind:value={cv.personalInfo.firstName} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Middle name</span>
							<input class={inputClass} bind:value={cv.personalInfo.middleName} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Last name</span>
							<input class={inputClass} bind:value={cv.personalInfo.lastName} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Date of birth</span>
							<input class={inputClass} type="date" bind:value={cv.personalInfo.dateOfBirth} />
						</label>

						<label class="form-control sm:col-span-2">
							<span class={labelClass}>Professional headline</span>
							<input class={inputClass} bind:value={cv.personalInfo.headline} />
						</label>

						<label class="form-control sm:col-span-2">
							<span class={labelClass}>Professional summary</span>
							<textarea
								class={`${textareaClass} min-h-24`}
								bind:value={cv.personalInfo.summary}
								placeholder="Write a short professional introduction..."></textarea>
						</label>
					</div>

					<div class="divider my-1 text-xs text-base-content/40">Contact Details</div>

					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<label class="form-control">
							<span class={labelClass}>Email</span>
							<input class={inputClass} type="email" bind:value={cv.personalInfo.contact.email} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Phone</span>
							<input class={inputClass} bind:value={cv.personalInfo.contact.phone} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Alternate phone</span>
							<input class={inputClass} bind:value={cv.personalInfo.contact.alternatePhone} />
						</label>

						<label class="form-control">
							<span class={labelClass}>LinkedIn</span>
							<input
								class={inputClass}
								bind:value={cv.personalInfo.contact.linkedin}
								placeholder="https://linkedin.com/in/..."
							/>
						</label>

						<label class="form-control">
							<span class={labelClass}>Portfolio</span>
							<input class={inputClass} bind:value={cv.personalInfo.contact.portfolio} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Website</span>
							<input class={inputClass} bind:value={cv.personalInfo.contact.website} />
						</label>
					</div>

					<div class="divider my-1 text-xs text-base-content/40">Address</div>

					<div class="grid grid-cols-2 gap-3">
						<label class="form-control col-span-2">
							<span class={labelClass}>Address</span>
							<input class={inputClass} bind:value={cv.personalInfo.address!.address} />
						</label>

						<label class="form-control">
							<span class={labelClass}>City</span>
							<input class={inputClass} bind:value={cv.personalInfo.address!.city} />
						</label>

						<label class="form-control">
							<span class={labelClass}>State</span>
							<input class={inputClass} bind:value={cv.personalInfo.address!.state} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Country</span>
							<input class={inputClass} bind:value={cv.personalInfo.address!.country} />
						</label>

						<label class="form-control">
							<span class={labelClass}>Postal code</span>
							<input class={inputClass} bind:value={cv.personalInfo.address!.postalCode} />
						</label>
					</div>
				</div>
			</section>

			<!-- ==========================================
         Education
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-info/10 text-info">
							<i class="icon text-xl">school</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Education</h2>
							<p class="text-xs text-base-content/50">Academic qualifications and scores</p>
						</div>
						<span class="badge badge-ghost">{cv.education.length}</span>
					</div>

					{#each cv.education as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">
									Education #{i + 1}
								</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.education, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Institution</span>
									<input class={inputClass} bind:value={item.institution} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Degree</span>
									<input class={inputClass} bind:value={item.degree} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Field of study</span>
									<input class={inputClass} bind:value={item.fieldOfStudy} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Start date / year</span>
									<input class={inputClass} bind:value={item.duration.startDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>End date / year</span>
									<input
										class={inputClass}
										bind:value={item.duration.endDate}
										disabled={item.duration.isOngoing}
									/>
								</label>

								<label class="form-control">
									<span class={labelClass}>Status</span>
									<select class={selectClass} bind:value={item.status}>
										<option value="Completed">Completed</option>
										<option value="Pursuing">Pursuing</option>
										<option value="Discontinued">Discontinued</option>
									</select>
								</label>

								{#if item.status !== 'Pursuing'}
									<label class="form-control">
										<span class={labelClass}>Score type</span>
										<select class={selectClass} bind:value={item.score!.type}>
											<option value="Percentage">Percentage</option>
											<option value="CGPA">CGPA</option>
											<option value="GPA">GPA</option>
											<option value="Grade">Grade</option>
										</select>
									</label>

									<label class="form-control">
										<span class={labelClass}>Score</span>
										<input
											class={inputClass}
											type="number"
											step="0.01"
											bind:value={item.score!.value}
										/>
									</label>

									<label class="form-control">
										<span class={labelClass}>Score scale (optional)</span>
										<input
											class={inputClass}
											type="number"
											step="0.01"
											bind:value={item.score!.scale}
										/>
									</label>
								{/if}

								<label class="form-control">
									<span class={labelClass}>City</span>
									<input class={inputClass} bind:value={item.location!.city} />
								</label>

								<label class="form-control">
									<span class={labelClass}>State</span>
									<input class={inputClass} bind:value={item.location!.state} />
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>
							</div>

							<label class="label mt-2 cursor-pointer justify-start gap-2">
								<input
									type="checkbox"
									class="checkbox checkbox-primary checkbox-sm"
									bind:checked={item.duration.isOngoing}
								/>
								<span class="label-text text-xs">Currently pursuing</span>
							</label>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addEducation}>
						<i class="icon">add</i>
						Add Education
					</button>
				</div>
			</section>

			<!-- ==========================================
         Experience
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-success/10 text-success">
							<i class="icon text-xl">work</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Work Experience</h2>
							<p class="text-xs text-base-content/50">Employment and internships</p>
						</div>
						<span class="badge badge-ghost">{cv.experience.length}</span>
					</div>

					{#each cv.experience as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Experience #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.experience, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control">
									<span class={labelClass}>Company</span>
									<input class={inputClass} bind:value={item.company} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Designation</span>
									<input class={inputClass} bind:value={item.designation} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Employment type</span>
									<select class={selectClass} bind:value={item.employmentType}>
										<option value="Internship">Internship</option>
										<option value="Full-time">Full-time</option>
										<option value="Part-time">Part-time</option>
										<option value="Contract">Contract</option>
										<option value="Freelance">Freelance</option>
										<option value="Apprenticeship">Apprenticeship</option>
										<option value="Other">Other</option>
									</select>
								</label>

								<label class="form-control">
									<span class={labelClass}>Location</span>
									<input class={inputClass} bind:value={item.location!.city} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Start date</span>
									<input class={inputClass} bind:value={item.duration.startDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>End date</span>
									<input
										class={inputClass}
										bind:value={item.duration.endDate}
										disabled={item.duration.isOngoing}
									/>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Responsibilities (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.responsibilities)}
										oninput={(e) => (item.responsibilities = parseList(e.currentTarget.value))}
									></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Achievements (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.achievements ?? [])}
										oninput={(e) => (item.achievements = parseList(e.currentTarget.value))}
									></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Technologies (comma separated)</span>
									<input
										class={inputClass}
										value={formatList(item.technologies ?? [])}
										oninput={(e) => (item.technologies = parseList(e.currentTarget.value))}
									/>
								</label>
							</div>

							<label class="label mt-2 cursor-pointer justify-start gap-2">
								<input
									type="checkbox"
									class="checkbox checkbox-primary checkbox-sm"
									bind:checked={item.duration.isOngoing}
								/>
								<span class="label-text text-xs">Currently working here</span>
							</label>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addExperience}>
						<i class="icon">add</i>
						Add Experience
					</button>
				</div>
			</section>

			<!-- ==========================================
         Projects
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-secondary/10 text-secondary">
							<i class="icon text-xl">code</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Projects</h2>
							<p class="text-xs text-base-content/50">Academic and personal projects</p>
						</div>
						<span class="badge badge-ghost">{cv.projects.length}</span>
					</div>

					{#each cv.projects as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Project #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.projects, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Project title</span>
									<input class={inputClass} bind:value={item.title} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Role</span>
									<input class={inputClass} bind:value={item.role} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Organization</span>
									<input class={inputClass} bind:value={item.organization} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Start date</span>
									<input class={inputClass} bind:value={item.duration!.startDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>End date</span>
									<input class={inputClass} bind:value={item.duration!.endDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Status</span>
									<select class={selectClass} bind:value={item.status}>
										<option value="Completed">Completed</option>
										<option value="Ongoing">Ongoing</option>
										<option value="Discontinued">Discontinued</option>
									</select>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Highlights (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.highlights)}
										oninput={(e) => (item.highlights = parseList(e.currentTarget.value))}
									></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Technologies (comma separated)</span>
									<input
										class={inputClass}
										value={formatList(item.technologies ?? [])}
										oninput={(e) => (item.technologies = parseList(e.currentTarget.value))}
									/>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Collaborators (comma separated)</span>
									<input
										class={inputClass}
										value={formatList(item.collaborators ?? [])}
										oninput={(e) => (item.collaborators = parseList(e.currentTarget.value))}
									/>
								</label>
							</div>

							<!-- Project links -->
							<div class="mt-4 space-y-2">
								<div class="flex items-center justify-between">
									<span class="text-xs font-medium text-base-content/60">Project Links</span>
									<button
										class="btn btn-ghost btn-xs text-primary"
										onclick={() => addLink(item.links!)}
									>
										<i class="icon">add</i>
										Add link
									</button>
								</div>

								{#each item.links ?? [] as link, j}
									<div class="flex gap-2">
										<input class={inputClass} placeholder="Label" bind:value={link.label} />
										<input class={inputClass} placeholder="URL" bind:value={link.url} />
										<button
											class="btn btn-ghost btn-square btn-sm text-error"
											onclick={() => removeLink(item.links!, j)}
										>
											<i class="icon">close</i>
										</button>
									</div>
								{/each}
							</div>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addProject}>
						<i class="icon">add</i>
						Add Project
					</button>
				</div>
			</section>

			<!-- ==========================================
         Certifications
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-warning/10 text-warning">
							<i class="icon text-xl">workspace_premium</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Certifications</h2>
							<p class="text-xs text-base-content/50">Courses, certificates and training</p>
						</div>
						<span class="badge badge-ghost">{cv.certifications.length}</span>
					</div>

					{#each cv.certifications as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Certification #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.certifications, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Certification name</span>
									<input class={inputClass} bind:value={item.name} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Issuing organization</span>
									<input class={inputClass} bind:value={item.issuer} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Credential ID</span>
									<input class={inputClass} bind:value={item.credentialId} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Issue date</span>
									<input class={inputClass} type="date" bind:value={item.issueDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Expiry date</span>
									<input class={inputClass} type="date" bind:value={item.expiryDate} />
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Credential URL</span>
									<input class={inputClass} bind:value={item.credentialUrl} />
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Related skills (comma separated)</span>
									<input
										class={inputClass}
										value={formatList(item.skills ?? [])}
										oninput={(e) => (item.skills = parseList(e.currentTarget.value))}
									/>
								</label>
							</div>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addCertification}>
						<i class="icon">add</i>
						Add Certification
					</button>
				</div>
			</section>

			<!-- ==========================================
         Achievements
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-warning/10 text-warning">
							<i class="icon text-xl">emoji_events</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Achievements</h2>
							<p class="text-xs text-base-content/50">Awards and recognitions</p>
						</div>
						<span class="badge badge-ghost">{cv.achievements.length}</span>
					</div>

					{#each cv.achievements as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Achievement #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.achievements, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Title</span>
									<input class={inputClass} bind:value={item.title} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Organization</span>
									<input class={inputClass} bind:value={item.organization} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Date</span>
									<input class={inputClass} bind:value={item.date} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Category</span>
									<select class={selectClass} bind:value={item.category}>
										<option value="Academic">Academic</option>
										<option value="Competition">Competition</option>
										<option value="Leadership">Leadership</option>
										<option value="Recognition">Recognition</option>
										<option value="Professional">Professional</option>
										<option value="Other">Other</option>
									</select>
								</label>

								<label class="form-control">
									<span class={labelClass}>Position / Rank</span>
									<input class={inputClass} bind:value={item.position} />
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>
							</div>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addAchievement}>
						<i class="icon">add</i>
						Add Achievement
					</button>
				</div>
			</section>

			<!-- ==========================================
         Positions of Responsibility
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-secondary/10 text-secondary">
							<i class="icon text-xl">groups</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Positions of Responsibility</h2>
							<p class="text-xs text-base-content/50">Leadership and organizational roles</p>
						</div>
						<span class="badge badge-ghost">{cv.positionsOfResponsibility.length}</span>
					</div>

					{#each cv.positionsOfResponsibility as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Position #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.positionsOfResponsibility, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control">
									<span class={labelClass}>Position / Title</span>
									<input class={inputClass} bind:value={item.title} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Organization</span>
									<input class={inputClass} bind:value={item.organization} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Start date</span>
									<input class={inputClass} bind:value={item.duration.startDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>End date</span>
									<input
										class={inputClass}
										bind:value={item.duration.endDate}
										disabled={item.duration.isOngoing}
									/>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Responsibilities (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.responsibilities ?? [])}
										oninput={(e) => (item.responsibilities = parseList(e.currentTarget.value))}
									></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Achievements (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.achievements ?? [])}
										oninput={(e) => (item.achievements = parseList(e.currentTarget.value))}
									></textarea>
								</label>
							</div>

							<label class="label mt-2 cursor-pointer justify-start gap-2">
								<input
									type="checkbox"
									class="checkbox checkbox-primary checkbox-sm"
									bind:checked={item.duration.isOngoing}
								/>
								<span class="label-text text-xs">Currently holding this position</span>
							</label>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addPosition}>
						<i class="icon">add</i>
						Add Position
					</button>
				</div>
			</section>

			<!-- ==========================================
         Skills
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-info/10 text-info">
							<i class="icon text-xl">psychology</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Skills</h2>
							<p class="text-xs text-base-content/50">Organize skills by category</p>
						</div>
						<span class="badge badge-ghost">{cv.skills.length}</span>
					</div>

					{#each cv.skills as category, i (category.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Category #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.skills, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<label class="form-control">
								<span class={labelClass}>Category name</span>
								<input class={inputClass} bind:value={category.name} />
							</label>

							<label class="form-control mt-3">
								<span class={labelClass}>Description</span>
								<textarea class={textareaClass} bind:value={category.description}></textarea>
							</label>

							<div class="mt-4 space-y-3">
								<div class="flex items-center justify-between">
									<span class="text-xs font-semibold text-base-content/60">Individual Skills</span>
									<button
										class="btn btn-ghost btn-xs text-primary"
										onclick={() => addSkill(category)}
									>
										<i class="icon">add</i>
										Add skill
									</button>
								</div>

								{#each category.skills as skill, j}
									<div class="rounded-xl bg-base-200/60 p-3">
										<div class="mb-2 flex items-center justify-between">
											<span class="text-xs font-medium">Skill #{j + 1}</span>
											<button
												class="btn btn-ghost btn-xs text-error"
												onclick={() => removeItem(category.skills, j)}
											>
												<i class="icon">delete</i>
											</button>
										</div>

										<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
											<label class="form-control">
												<span class={labelClass}>Skill name</span>
												<input class={inputClass} bind:value={skill.name} />
											</label>

											<label class="form-control">
												<span class={labelClass}>Proficiency</span>
												<select class={selectClass} bind:value={skill.proficiency}>
													<option value="Beginner">Beginner</option>
													<option value="Intermediate">Intermediate</option>
													<option value="Advanced">Advanced</option>
													<option value="Expert">Expert</option>
												</select>
											</label>

											<label class="form-control">
												<span class={labelClass}>Years of experience</span>
												<input
													class={inputClass}
													type="number"
													min="0"
													step="0.5"
													bind:value={skill.yearsOfExperience}
												/>
											</label>

											<label class="form-control">
												<span class={labelClass}>Description</span>
												<input class={inputClass} bind:value={skill.description} />
											</label>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addSkillCategory}>
						<i class="icon">add</i>
						Add Skill Category
					</button>
				</div>
			</section>

			<!-- ==========================================
         Extracurricular Activities
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-success/10 text-success">
							<i class="icon text-xl">diversity_3</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Extracurricular Activities</h2>
							<p class="text-xs text-base-content/50">Activities beyond academics</p>
						</div>
						<span class="badge badge-ghost">{cv.extracurricularActivities.length}</span>
					</div>

					{#each cv.extracurricularActivities as item, i (item.id)}
						<div class="editor-item">
							<div class="item-heading">
								<span class="font-semibold text-sm">Activity #{i + 1}</span>
								<button
									class="btn btn-ghost btn-xs text-error"
									onclick={() => removeItem(cv.extracurricularActivities, i)}
								>
									<i class="icon">delete</i>
									Remove
								</button>
							</div>

							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Activity title</span>
									<input class={inputClass} bind:value={item.title} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Organization</span>
									<input class={inputClass} bind:value={item.organization} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Role</span>
									<input class={inputClass} bind:value={item.role} />
								</label>

								<label class="form-control">
									<span class={labelClass}>Category</span>
									<select class={selectClass} bind:value={item.category}>
										<option value="Cultural">Cultural</option>
										<option value="Sports">Sports</option>
										<option value="Volunteering">Volunteering</option>
										<option value="Clubs & Organizations">Clubs & Organizations</option>
										<option value="Social Service">Social Service</option>
										<option value="Other">Other</option>
									</select>
								</label>

								<label class="form-control">
									<span class={labelClass}>Start date</span>
									<input class={inputClass} bind:value={item.duration!.startDate} />
								</label>

								<label class="form-control">
									<span class={labelClass}>End date</span>
									<input class={inputClass} bind:value={item.duration!.endDate} />
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Description</span>
									<textarea class={textareaClass} bind:value={item.description}></textarea>
								</label>

								<label class="form-control sm:col-span-2">
									<span class={labelClass}>Achievements (comma separated)</span>
									<textarea
										class={textareaClass}
										value={formatList(item.achievements ?? [])}
										oninput={(e) => (item.achievements = parseList(e.currentTarget.value))}
									></textarea>
								</label>
							</div>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addActivity}>
						<i class="icon">add</i>
						Add Activity
					</button>
				</div>
			</section>

			<!-- ==========================================
         Interests
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-secondary/10 text-secondary">
							<i class="icon text-xl">interests</i>
						</div>
						<div class="min-w-0 flex-1">
							<h2 class="font-bold">Interests</h2>
							<p class="text-xs text-base-content/50">Personal and professional interests</p>
						</div>
						<span class="badge badge-ghost">{cv.interests.length}</span>
					</div>

					{#each cv.interests as item, i (item.id)}
						<div class="flex items-center gap-2">
							<input class={inputClass} placeholder="Interest name" bind:value={item.name} />
							<input
								class={inputClass}
								placeholder="Description (optional)"
								bind:value={item.description}
							/>
							<button
								class="btn btn-ghost btn-square btn-sm text-error"
								onclick={() => removeItem(cv.interests, i)}
							>
								<i class="icon">delete</i>
							</button>
						</div>
					{/each}

					<button class="btn btn-outline btn-primary btn-sm w-full" onclick={addInterest}>
						<i class="icon">add</i>
						Add Interest
					</button>
				</div>
			</section>

			<!-- ==========================================
         CV Settings
    =========================================== -->

			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-4">
					<div class="section-heading">
						<div class="section-icon bg-base-300 text-base-content">
							<i class="icon text-xl">settings</i>
						</div>
						<div>
							<h2 class="font-bold">CV Settings</h2>
							<p class="text-xs text-base-content/50">Publication and visibility</p>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<label class="form-control">
							<span class={labelClass}>CV Status</span>
							<select class={selectClass} bind:value={cv.metadata.status}>
								<option value="Draft">Draft</option>
								<option value="Published">Published</option>
								<option value="Archived">Archived</option>
							</select>
						</label>

						<label class="form-control">
							<span class={labelClass}>Visibility</span>
							<select class={selectClass} bind:value={cv.metadata.visibility}>
								<option value="Private">Private</option>
								<option value="College">College</option>
								<option value="Public">Public</option>
							</select>
						</label>

						<label class="form-control">
							<span class={labelClass}>Version</span>
							<input class={inputClass} type="number" min="1" bind:value={cv.metadata.version} />
						</label>

						<div class="form-control">
							<span class={labelClass}>Last updated</span>
							<div
								class="input input-bordered input-sm flex items-center bg-base-200 text-xs text-base-content/60"
							>
								{new Date(cv.metadata.updatedAt).toLocaleString()}
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}
	</div>
</main>

<style>
	.cv-paper {
		width: 100%;
		max-width: 850px;
		margin-inline: auto;
		border-radius: 0.5rem;
	}

	.cv-paper-body {
		padding: clamp(1rem, 4vw, 2.5rem);
		color: var(--color-base-content);
		font-size: 0.82rem;
		line-height: 1.45;
	}

	.cv-document-header {
		border-bottom: 2px solid var(--color-base-content);
		padding-bottom: 0.65rem;
		text-align: center;
	}

	.cv-name {
		font-size: clamp(1.35rem, 4vw, 1.8rem);
		font-weight: 800;
		letter-spacing: 0.035em;
		text-transform: uppercase;
	}

	.cv-headline {
		margin-top: 0.25rem;
		color: color-mix(in srgb, var(--color-base-content) 70%, transparent);
		font-size: 0.8rem;
	}

	.cv-contact {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem 0.8rem;
		padding: 0.6rem 0 0.25rem;
		font-size: 0.72rem;
	}

	.cv-contact a {
		color: var(--color-primary);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.cv-section {
		margin-top: 1rem;
		break-inside: avoid;
	}

	.cv-section > h3 {
		margin-bottom: 0.45rem;
		border-bottom: 1px solid var(--color-base-content);
		padding: 0.25rem 0.4rem;
		background: var(--color-base-200);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.045em;
	}

	.cv-table-wrap {
		overflow-x: auto;
	}
	.cv-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.73rem;
	}
	.cv-table td {
		border: 1px solid var(--color-base-300);
		padding: 0.35rem 0.4rem;
		vertical-align: top;
	}
	.cv-date,
	.cv-score {
		white-space: nowrap;
		text-align: center;
	}
	.cv-muted {
		color: color-mix(in srgb, var(--color-base-content) 65%, transparent);
	}
	.cv-entry {
		margin: 0.45rem 0 0.65rem;
		break-inside: avoid;
	}
	.cv-entry-heading {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.75rem;
	}
	.cv-entry-heading > span {
		flex-shrink: 0;
		white-space: nowrap;
		font-size: 0.72rem;
		color: color-mix(in srgb, var(--color-base-content) 70%, transparent);
	}
	.cv-subheading {
		margin-top: 0.05rem;
		font-size: 0.75rem;
		color: color-mix(in srgb, var(--color-base-content) 75%, transparent);
	}
	.cv-entry p {
		margin-top: 0.15rem;
	}
	.cv-entry ul {
		margin: 0.2rem 0 0 1.1rem;
		list-style: disc;
	}
	.cv-entry li {
		padding-left: 0.1rem;
	}
	.cv-compact-entry {
		margin-top: 0.35rem;
		margin-bottom: 0.4rem;
	}
	.cv-skills {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border: 1px solid var(--color-base-300);
	}
	.cv-skills > div {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.45rem;
		border-bottom: 1px solid var(--color-base-300);
	}
	.cv-skills > div:nth-child(odd) {
		border-right: 1px solid var(--color-base-300);
	}
	.cv-skills strong {
		font-size: 0.72rem;
	}
	.cv-skills span {
		font-size: 0.72rem;
	}
	.cv-interest-list {
		text-align: center;
	}

	@media (max-width: 520px) {
		.cv-paper-body {
			padding: 1rem 0.8rem;
			font-size: 0.75rem;
		}
		.cv-table {
			min-width: 560px;
		}
		.cv-skills {
			grid-template-columns: 1fr;
		}
		.cv-skills > div:nth-child(odd) {
			border-right: 0;
		}
	}

	@media print {
		:global(body) {
			background: white !important;
		}
		:global(main) {
			padding: 0 !important;
			background: white !important;
		}
		:global(main > div) {
			max-width: none !important;
		}
		.cv-paper {
			max-width: none;
			border: 0;
			box-shadow: none;
		}
		.cv-paper-body {
			padding: 0;
		}
	}
	.section-heading {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.section-icon {
		display: grid;
		width: 2.5rem;
		height: 2.5rem;
		flex-shrink: 0;
		place-items: center;
		border-radius: 0.75rem;
	}

	.editor-item {
		border: 1px solid var(--color-base-300);
		border-radius: 0.875rem;
		padding: 1rem;
		margin-bottom: 0.875rem;
		background: color-mix(in srgb, var(--color-base-200) 25%, transparent);
	}

	.item-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
