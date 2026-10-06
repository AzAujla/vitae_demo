<script lang="ts">
	// Place at: src/routes/ppt/+page.svelte
	// Install:  npm i gsap
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let root: HTMLElement;
	let progress: HTMLElement;

	const forms = [
		'Placement registration',
		'Internship details',
		'Scholarship form',
		'Society recruitment',
		'Alumni survey',
		'Event registration',
		'Exam data correction',
		'Company-specific form'
	];

	const painPoints = [
		{
			who: 'Students',
			title: 'The same details, typed again and again',
			text: 'Name, roll number, marks, internships and skills are re-entered into a new Google Form for every placement drive, society and event. Old CVs go out of date and versions get mixed up.'
		},
		{
			who: 'Faculty and staff',
			title: 'Chasing data instead of using it',
			text: 'Coordinators collect CVs over WhatsApp and email, then clean spreadsheets by hand. Results and attendance sit in separate places, and nothing is in one format.'
		},
		{
			who: 'The institution',
			title: 'Records nobody can fully trust',
			text: 'Self-reported marks and stale CVs reach recruiters. There is no single, verified source for a student profile.'
		}
	];

	const personas = [
		{
			name: 'Simran Kaur',
			role: 'MBA student, Semester III',
			quote: 'I have filled my own roll number so many times that I could recite it in my sleep.',
			goals: ['Apply to many companies quickly', 'Keep one CV that is always current', 'Show verified results to recruiters'],
			frustrations: ['Repeated Google Forms', 'Marks typed from memory', 'Several CV versions on her phone'],
			tag: 'Primary user'
		},
		{
			name: 'Dr. Rakesh Verma',
			role: 'Faculty and placement coordinator',
			quote: 'I do not need more data. I need the right student file, in PDF, in two clicks.',
			goals: ['Find any student and their CV fast', 'Download results and CVs in bulk', 'Send recruiters consistent profiles'],
			frustrations: ['CVs arriving in random formats', 'Manual spreadsheet cleaning', 'Not sure which file is the latest'],
			tag: 'Secondary user'
		}
	];

	const journey = [
		{
			actor: 'Student, mobile app',
			title: 'Sign in with college credentials',
			text: 'Profile, attendance and results sync from college records, so the student never types them.'
		},
		{
			actor: 'Student, mobile app',
			title: 'Build the CV once',
			text: 'Guided editor for education, experience, projects, certifications, skills and achievements, with a live preview.'
		},
		{
			actor: 'Student, mobile app',
			title: 'Review the dashboard',
			text: 'CV completeness, attendance against the 75% rule and semester results in one view.'
		},
		{
			actor: 'Faculty, PC app',
			title: 'Search and open a student',
			text: 'Filter by batch, specialisation or score. See the same CV the student sees.'
		},
		{
			actor: 'Faculty, PC app',
			title: 'Download the PDF',
			text: 'One student or a whole batch, CV and result sheet, in one consistent format.'
		}
	];

	const later = [
		{ icon: 'share', title: 'Share to LinkedIn', text: 'Post achievements or a CV link directly from the app.' },
		{ icon: 'notifications', title: 'Notifications', text: 'Attendance shortage, new results, deadlines and recruiter requests.' },
		{ icon: 'autorenew', title: 'Automatic result updates', text: 'Results appear the moment the university declares them.' },
		{ icon: 'qr_code_2', title: 'Verified CV link and QR', text: 'Recruiters scan to confirm marks against college records.' },
		{ icon: 'auto_awesome', title: 'AI CV suggestions', text: 'Rewrite weak bullets and flag missing sections.' },
		{ icon: 'tune', title: 'Role-specific CV versions', text: 'Finance, marketing and consulting variants from one profile.' },
		{ icon: 'forms_add_on', title: 'One-tap form autofill', text: 'Fill external forms from the profile with a browser extension.' },
		{ icon: 'table_view', title: 'Excel export for coordinators', text: 'Batch data as a spreadsheet for recruiters.' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const mm = gsap.matchMedia();

		mm.add('(prefers-reduced-motion: no-preference)', () => {
			const ctx = gsap.context(() => {
				// Page progress bar
				gsap.to(progress, {
					scaleX: 1,
					ease: 'none',
					scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
				});

				// Hero: staged entrance on load, parallax on the way out
				const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
				heroTl
					.from('.hero-brand', { y: 40, opacity: 0, duration: 1 })
					.from('.hero-line', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.5')
					.from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3');

				gsap.to('.hero-inner', {
					yPercent: -18,
					opacity: 0,
					ease: 'none',
					scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
				});

				// Generic reveal: fade and rise in, hold, fade and lift out. Scrubbed, so it also plays in reverse.
				gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
					const from = el.dataset.reveal;
					const x = from === 'left' ? -70 : from === 'right' ? 70 : 0;
					const y = from === 'left' || from === 'right' ? 0 : 70;
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: 'top 98%',
							end: 'bottom 2%',
							scrub: 0.6
						}
					});
					tl.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration: 1, ease: 'power2.out' })
						.to(el, { opacity: 1, duration: 2.2 })
						.to(el, { opacity: 0, y: -50, scale: 0.97, duration: 1, ease: 'power2.in' });
				});

				// Staggered groups
				gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
					const items = group.querySelectorAll('[data-item]');
					gsap.fromTo(
						items,
						{ opacity: 0, y: 50, rotate: (i) => (i % 2 ? 2 : -2) },
						{
							opacity: 1,
							y: 0,
							rotate: 0,
							stagger: 0.12,
							duration: 0.8,
							ease: 'back.out(1.4)',
							scrollTrigger: { trigger: group, start: 'top 80%', toggleActions: 'play none none reverse' }
						}
					);
					gsap.to(group, {
						opacity: 0,
						y: -40,
						ease: 'none',
						scrollTrigger: { trigger: group, start: 'bottom 25%', end: 'bottom 0%', scrub: true }
					});
				});

				// Form pile: chips drift to a tidy single card as the Vitae slide arrives
				gsap.utils.toArray<HTMLElement>('.chip').forEach((chip, i) => {
					gsap.to(chip, {
						x: () => (i % 2 ? 1 : -1) * gsap.utils.random(6, 26),
						rotate: () => gsap.utils.random(-5, 5),
						ease: 'none',
						scrollTrigger: { trigger: '.problem', start: 'top bottom', end: 'bottom top', scrub: 1 }
					});
				});

				// Journey line draws as you scroll
				gsap.fromTo(
					'.journey-line-fill',
					{ scaleY: 0 },
					{
						scaleY: 1,
						ease: 'none',
						transformOrigin: 'top',
						scrollTrigger: { trigger: '.journey-list', start: 'top 60%', end: 'bottom 60%', scrub: 0.5 }
					}
				);

				gsap.utils.toArray<HTMLElement>('.journey-dot').forEach((dot) => {
					gsap.fromTo(
						dot,
						{ scale: 0.6, backgroundColor: 'var(--paper)' },
						{
							scale: 1.15,
							backgroundColor: 'var(--saffron)',
							ease: 'none',
							scrollTrigger: { trigger: dot, start: 'top 65%', end: 'top 55%', scrub: true }
						}
					);
				});

				// Value prop: before side fades, after side takes over
				gsap.to('.before', {
					opacity: 0.35,
					filter: 'grayscale(1)',
					ease: 'none',
					scrollTrigger: { trigger: '.value-grid', start: 'top 50%', end: 'center 40%', scrub: true }
				});
				gsap.fromTo(
					'.after',
					{ scale: 0.96 },
					{
						scale: 1,
						ease: 'none',
						scrollTrigger: { trigger: '.value-grid', start: 'top 50%', end: 'center 40%', scrub: true }
					}
				);

				// Closing
				gsap.from('.close-word', {
					yPercent: 100,
					opacity: 0,
					stagger: 0.1,
					duration: 0.9,
					ease: 'power3.out',
					scrollTrigger: { trigger: '.closing', start: 'top 60%', toggleActions: 'play none none reverse' }
				});
			}, root);

			return () => ctx.revert();
		});

		return () => mm.revert();
	});
</script>

<svelte:head>
	<title>Vitae | Product pitch</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="progress-track" aria-hidden="true"><div class="progress" bind:this={progress}></div></div>

<main class="deck" bind:this={root}>
	<!-- 1. Hero -->
	<section class="slide hero">
		<div class="hero-inner">
			<p class="hero-brand great-vibes-regular">Vitae</p>
			<h1 class="display">
				<span class="mask"><span class="hero-line">Fill it once.</span></span>
				<span class="mask"><span class="hero-line saffron">Use it everywhere.</span></span>
			</h1>
			<p class="hero-sub">
				A student profile, CV and result app for MBA students, with a desktop companion for faculty.
			</p>
			<p class="hero-sub small">Project Management, MBA 2025-27, University Business School, Panjab University</p>
		</div>
		<div class="scroll-cue" aria-hidden="true">Scroll</div>
	</section>

	<!-- 2. Problem -->
	<section class="slide problem">
		<div class="wrap two-col">
			<div>
				<h2 data-reveal class="h2">Every form asks for the same things.</h2>
				<p data-reveal class="lede">
					Placement season, society drives and surveys all run on separate Google Forms. Students repeat
					themselves. Staff collect, clean and chase.
				</p>
				<div class="chips" data-reveal="left">
					{#each forms as f}
						<span class="chip">{f}</span>
					{/each}
				</div>
			</div>
			<div class="stack" data-stagger>
				{#each painPoints as p}
					<article class="pain" data-item>
						<span class="who">{p.who}</span>
						<h3>{p.title}</h3>
						<p>{p.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- 3. Personas -->
	<section class="slide personas">
		<div class="wrap">
			<h2 data-reveal class="h2">Two people, one record.</h2>
			<div class="persona-grid">
				{#each personas as p, i}
					<article class="persona" data-reveal={i === 0 ? 'left' : 'right'}>
						<div class="persona-top">
							<div class="avatar-mark" aria-hidden="true">{p.name.split(' ').map((s) => s[0]).join('').slice(0, 2)}</div>
							<div>
								<h3>{p.name}</h3>
								<p class="role">{p.role}</p>
							</div>
							<span class="tag">{p.tag}</span>
						</div>
						<blockquote>{p.quote}</blockquote>
						<div class="cols">
							<div>
								<h4>Wants</h4>
								<ul>
									{#each p.goals as g}<li>{g}</li>{/each}
								</ul>
							</div>
							<div>
								<h4>Struggles with</h4>
								<ul>
									{#each p.frustrations as g}<li>{g}</li>{/each}
								</ul>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- 4. MVP -->
	<section class="slide mvp">
		<div class="wrap two-col center">
			<div>
				<h2 data-reveal class="h2">The MVP: one app for students, one desk for staff.</h2>
				<ul class="mvp-list" data-stagger>
					<li data-item>
						<strong>Vitae Mobile</strong> for students. Dashboard, CV builder with live preview, results by
						semester, attendance tracker and profile.
					</li>
					<li data-item>
						<strong>Vitae Desk</strong> for faculty, staff and admins. Search students, view CVs and
						results, download PDFs.
					</li>
					<li data-item>
						<strong>Single source of truth.</strong> College records feed both, so marks are never typed by hand.
					</li>
				</ul>
			</div>
			<div class="phone-wrap" data-reveal="right">
				<div class="phone">
					<div class="phone-top">
						<span class="great-vibes-regular brand-s">Vitae</span>
						<span class="mini-badge">Draft</span>
					</div>
					<div class="phone-card hero-card">
						<small>Active student</small>
						<strong>Semester III</strong>
						<div class="bar"><span style="width:78%"></span></div>
						<small>CV 78% complete</small>
					</div>
					<div class="phone-row"><span>Attendance</span><b>76.4%</b></div>
					<div class="phone-row"><span>SGPA, Sem 2</span><b>7.47</b></div>
					<div class="phone-row"><span>Download CV</span><b>PDF</b></div>
				</div>
			</div>
		</div>
	</section>

	<!-- 5. Journey -->
	<section class="slide journey">
		<div class="wrap narrow">
			<h2 data-reveal class="h2">How a profile travels from phone to PDF.</h2>
			<ol class="journey-list">
				<span class="journey-line" aria-hidden="true"><span class="journey-line-fill"></span></span>
				{#each journey as s, i}
					<li class="step" data-reveal={i % 2 ? 'right' : 'left'}>
						<span class="journey-dot" aria-hidden="true">{i + 1}</span>
						<div>
							<span class="actor">{s.actor}</span>
							<h3>{s.title}</h3>
							<p>{s.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- 6. Value proposition -->
	<section class="slide value">
		<div class="wrap">
			<h2 data-reveal class="h2">What changes with Vitae.</h2>
			<div class="value-grid">
				<div class="before panel">
					<h3>Today</h3>
					<ul>
						<li>Re-type details in every form</li>
						<li>CVs scattered across chats and drives</li>
						<li>Marks reported by the student</li>
						<li>Staff clean spreadsheets by hand</li>
					</ul>
				</div>
				<div class="after panel">
					<h3>With Vitae</h3>
					<ul>
						<li>Enter details one time, update anywhere</li>
						<li>One live CV with a clean printable layout</li>
						<li>Results and attendance synced from college records</li>
						<li>Faculty search and download PDFs in clicks</li>
					</ul>
				</div>
			</div>
			<p data-reveal class="lede centered">
				Students save time. Staff get consistent files. Recruiters get trustworthy profiles.
			</p>
		</div>
	</section>

	<!-- 7. Later -->
	<section class="slide later">
		<div class="wrap">
			<h2 data-reveal class="h2">Left out of the MVP on purpose.</h2>
			<p data-reveal class="lede">
				These make the product better, but none of them are needed to prove that fill-once works.
			</p>
			<div class="later-grid" data-stagger>
				{#each later as f}
					<article class="feature" data-item>
						<i class="icon">{f.icon}</i>
						<h3>{f.title}</h3>
						<p>{f.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- 8. Close -->
	<section class="slide closing">
		<div class="wrap centered-col">
			<p class="hero-brand great-vibes-regular">Vitae</p>
			<h2 class="display">
				<span class="mask"><span class="close-word">Fill</span></span>
				<span class="mask"><span class="close-word">it</span></span>
				<span class="mask"><span class="close-word saffron">once.</span></span>
			</h2>
			<p data-reveal class="lede centered">Thank you. Questions?</p>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: auto;
	}

	.deck {
		--ink: #0d2b25;
		--ink-soft: #3c5a53;
		--paper: #eef5f2;
		--panel: #ffffff;
		--emerald: #0f7a5c;
		--saffron: #f0a92b;
		--line: #c9dcd5;

		width: 100%;
		background: var(--paper);
		color: var(--ink);
		font-family: 'Instrument Sans', system-ui, sans-serif;
		overflow-x: clip;
	}

	.progress-track {
		position: fixed;
		inset: 0 0 auto 0;
		height: 4px;
		z-index: 60;
		background: transparent;
	}
	.progress {
		height: 100%;
		background: #f0a92b;
		transform: scaleX(0);
		transform-origin: left;
	}

	.slide {
		min-height: 100vh;
		display: grid;
		align-items: center;
		padding: clamp(4rem, 10vh, 7rem) clamp(1.25rem, 5vw, 4rem);
	}

	.wrap {
		width: 100%;
		max-width: 1100px;
		margin-inline: auto;
	}
	.wrap.narrow {
		max-width: 760px;
	}
	.two-col {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
	.two-col.center {
		align-items: center;
	}
	@media (min-width: 900px) {
		.two-col {
			grid-template-columns: 1.1fr 1fr;
			gap: 4rem;
		}
	}

	h2,
	h3,
	h4,
	.display {
		font-family: 'Bricolage Grotesque', system-ui, sans-serif;
	}

	.display {
		font-size: clamp(2.6rem, 8vw, 6.5rem);
		line-height: 1;
		font-weight: 800;
		letter-spacing: -0.03em;
	}
	.mask {
		display: block;
		overflow: hidden;
		padding-bottom: 0.08em;
	}
	.hero-line,
	.close-word {
		display: inline-block;
		margin-right: 0.2em;
	}
	.saffron {
		color: var(--saffron);
	}

	.h2 {
		font-size: clamp(1.9rem, 4.6vw, 3.4rem);
		line-height: 1.05;
		font-weight: 800;
		letter-spacing: -0.02em;
		max-width: 18ch;
	}
	.lede {
		margin-top: 1.25rem;
		max-width: 52ch;
		font-size: 1.15rem;
		line-height: 1.6;
		color: var(--ink-soft);
	}
	.lede.centered {
		margin-inline: auto;
		text-align: center;
		margin-top: 2.5rem;
	}

	/* Hero + closing: dark ink */
	.hero,
	.closing {
		background: var(--ink);
		color: #f3faf7;
		position: relative;
	}
	.hero-brand {
		font-size: clamp(3rem, 7vw, 5rem);
		color: var(--saffron);
		line-height: 1.1;
		margin-bottom: 0.5rem;
	}
	.hero-inner {
		max-width: 1100px;
		margin-inline: auto;
		width: 100%;
	}
	.hero-sub {
		margin-top: 2rem;
		font-size: 1.2rem;
		max-width: 46ch;
		color: #c3dbd3;
	}
	.hero-sub.small {
		font-size: 0.95rem;
		margin-top: 0.75rem;
		opacity: 0.75;
	}
	.scroll-cue {
		position: absolute;
		bottom: 1.5rem;
		left: 50%;
		translate: -50% 0;
		font-size: 0.85rem;
		color: #c3dbd3;
		animation: bob 1.8s ease-in-out infinite;
	}
	@keyframes bob {
		50% {
			transform: translateY(8px);
		}
	}
	.centered-col {
		text-align: center;
	}
	.closing .display {
		margin-top: 0.5rem;
	}
	.closing .lede {
		color: #c3dbd3;
	}

	/* Problem */
	.chips {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}
	.chip {
		padding: 0.45rem 0.9rem;
		border: 1.5px solid var(--ink);
		border-radius: 999px;
		font-size: 0.9rem;
		background: var(--panel);
	}
	.stack {
		display: grid;
		gap: 1rem;
	}
	.pain {
		background: var(--panel);
		border-left: 6px solid var(--saffron);
		padding: 1.25rem 1.4rem;
		border-radius: 0.25rem 1rem 1rem 0.25rem;
	}
	.pain .who {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--emerald);
	}
	.pain h3 {
		font-size: 1.25rem;
		margin: 0.2rem 0 0.4rem;
		font-weight: 700;
	}
	.pain p {
		color: var(--ink-soft);
		line-height: 1.55;
	}

	/* Personas */
	.personas {
		background: #dcebe5;
	}
	.persona-grid {
		margin-top: 2.5rem;
		display: grid;
		gap: 1.5rem;
	}
	@media (min-width: 900px) {
		.persona-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	.persona {
		background: var(--panel);
		border-radius: 1.5rem;
		padding: 1.75rem;
		border: 1.5px solid var(--ink);
		box-shadow: 8px 8px 0 var(--ink);
	}
	.persona-top {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.avatar-mark {
		width: 3.4rem;
		height: 3.4rem;
		border-radius: 50%;
		background: var(--emerald);
		color: white;
		display: grid;
		place-items: center;
		font-family: 'Bricolage Grotesque', sans-serif;
		font-weight: 800;
		font-size: 1.1rem;
		flex-shrink: 0;
	}
	.persona h3 {
		font-size: 1.3rem;
		font-weight: 800;
	}
	.role {
		font-size: 0.9rem;
		color: var(--ink-soft);
	}
	.tag {
		margin-left: auto;
		font-size: 0.78rem;
		font-weight: 600;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		background: var(--saffron);
		white-space: nowrap;
	}
	blockquote {
		margin: 1.25rem 0;
		padding-left: 1rem;
		border-left: 3px solid var(--emerald);
		font-size: 1.05rem;
		line-height: 1.5;
		font-style: italic;
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	@media (max-width: 520px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
	.cols h4 {
		font-weight: 700;
		margin-bottom: 0.4rem;
	}
	.cols ul {
		list-style: disc;
		padding-left: 1.1rem;
		font-size: 0.92rem;
		line-height: 1.5;
		color: var(--ink-soft);
	}

	/* MVP */
	.mvp-list {
		margin-top: 1.75rem;
		display: grid;
		gap: 1rem;
		font-size: 1.05rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}
	.mvp-list li {
		padding-left: 1rem;
		border-left: 4px solid var(--emerald);
	}
	.mvp-list strong {
		color: var(--ink);
	}
	.phone-wrap {
		display: grid;
		place-items: center;
	}
	.phone {
		width: min(270px, 80vw);
		aspect-ratio: 9 / 17;
		background: var(--paper);
		border: 10px solid var(--ink);
		border-radius: 2.2rem;
		padding: 1.1rem 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		box-shadow: 14px 14px 0 var(--saffron);
	}
	.phone-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.brand-s {
		font-size: 1.7rem;
		color: var(--emerald);
	}
	.mini-badge {
		font-size: 0.7rem;
		border: 1px solid var(--saffron);
		padding: 0.1rem 0.5rem;
		border-radius: 999px;
	}
	.phone-card {
		background: var(--emerald);
		color: white;
		border-radius: 1rem;
		padding: 0.9rem;
		display: grid;
		gap: 0.3rem;
	}
	.phone-card strong {
		font-size: 1.2rem;
		font-family: 'Bricolage Grotesque', sans-serif;
	}
	.bar {
		height: 6px;
		border-radius: 99px;
		background: rgba(255, 255, 255, 0.3);
		overflow: hidden;
	}
	.bar span {
		display: block;
		height: 100%;
		background: var(--saffron);
	}
	.phone-row {
		display: flex;
		justify-content: space-between;
		background: var(--panel);
		border-radius: 0.8rem;
		padding: 0.7rem 0.8rem;
		font-size: 0.85rem;
	}

	/* Journey */
	.journey {
		background: #dcebe5;
	}
	.journey-list {
		position: relative;
		margin-top: 3rem;
		display: grid;
		gap: 3.5rem;
		padding-left: 3.5rem;
	}
	.journey-line {
		position: absolute;
		left: 1.15rem;
		top: 0;
		bottom: 0;
		width: 3px;
		background: var(--line);
		border-radius: 2px;
	}
	.journey-line-fill {
		position: absolute;
		inset: 0;
		background: var(--emerald);
		transform: scaleY(0);
		transform-origin: top;
		border-radius: 2px;
	}
	.step {
		position: relative;
		background: var(--panel);
		padding: 1.25rem 1.4rem;
		border-radius: 1rem;
		border: 1.5px solid var(--ink);
	}
	.journey-dot {
		position: absolute;
		left: -3.5rem;
		top: 1rem;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		border: 2px solid var(--ink);
		background: var(--paper);
		display: grid;
		place-items: center;
		font-weight: 700;
		font-family: 'Bricolage Grotesque', sans-serif;
	}
	.actor {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--emerald);
	}
	.step h3 {
		font-size: 1.3rem;
		font-weight: 700;
		margin: 0.15rem 0 0.35rem;
	}
	.step p {
		color: var(--ink-soft);
		line-height: 1.55;
	}

	/* Value */
	.value-grid {
		margin-top: 2.5rem;
		display: grid;
		gap: 1.25rem;
	}
	@media (min-width: 800px) {
		.value-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	.panel {
		padding: 1.75rem;
		border-radius: 1.5rem;
		border: 1.5px solid var(--ink);
		background: var(--panel);
	}
	.panel h3 {
		font-size: 1.5rem;
		font-weight: 800;
		margin-bottom: 0.9rem;
	}
	.panel ul {
		display: grid;
		gap: 0.7rem;
		line-height: 1.45;
	}
	.panel li::before {
		content: '\2715';
		margin-right: 0.6rem;
		color: #b3402a;
	}
	.after {
		background: var(--ink);
		color: #f3faf7;
	}
	.after li::before {
		content: '\2713';
		color: var(--saffron);
	}

	/* Later */
	.later-grid {
		margin-top: 2.5rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
	}
	.feature {
		background: var(--panel);
		border: 1.5px dashed var(--ink);
		border-radius: 1rem;
		padding: 1.25rem;
	}
	.feature .icon {
		font-size: 1.9rem;
		color: var(--emerald);
	}
	.feature h3 {
		margin: 0.5rem 0 0.3rem;
		font-size: 1.1rem;
		font-weight: 700;
	}
	.feature p {
		font-size: 0.92rem;
		color: var(--ink-soft);
		line-height: 1.5;
	}

	:global(.deck :focus-visible) {
		outline: 3px solid #f0a92b;
		outline-offset: 3px;
	}

	@media print {
		.progress-track,
		.scroll-cue {
			display: none;
		}
		.slide {
			break-after: page;
		}
	}
</style>
