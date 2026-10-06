<script lang="ts">
	import type { StudentCV } from '../routes/app/cv/types';

	let { cv }: { cv: StudentCV } = $props();

	const fullName = $derived(
		[cv.personalInfo.firstName, cv.personalInfo.middleName, cv.personalInfo.lastName]
			.filter(Boolean)
			.join(' ')
	);

	const personalInfo = $derived(cv.personalInfo);
	const contact = $derived(personalInfo.contact);
	const address = $derived(personalInfo.address);
	const latestEducation = $derived(cv.education[0]);
	const latestExperience = $derived(cv.experience[0]);

	const stats = $derived([
		{
			icon: 'work',
			value: cv.experience.length,
			label: 'EXPERIENCES'
		},
		{
			icon: 'workspace_premium',
			value: cv.certifications.length,
			label: 'CERTIFICATIONS'
		},
		{
			icon: 'lightbulb',
			value: cv.projects.length,
			label: 'PROJECTS'
		},
		{
			icon: 'emoji_events',
			value: cv.achievements.length,
			label: 'ACHIEVEMENTS'
		}
	]);

	const skills = $derived(cv.skills.flatMap((category) => category.skills));
</script>

<div class="card bg-base-200 border border-base-300 shadow-sm overflow-hidden">
	<div class="card-body p-2.5 sm:p-4">
		<div class="grid grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] gap-3 sm:gap-5">
			<!-- Left column -->
			<div class="flex flex-col min-w-0">
				<!-- Profile -->
				<div class="flex flex-col items-center text-center">
					<div class="avatar mb-2">
						<div class="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-base-300">
							{#if personalInfo.profileImage}
								<img src={personalInfo.profileImage} alt={fullName} />
							{/if}
						</div>
					</div>

					<h2 class="text-lg sm:text-xl font-black uppercase tracking-wide leading-tight">
						{fullName}
					</h2>
				</div>

				<div class="divider my-1 before:bg-base-content/40 after:bg-base-content/40">
					<span class="w-1.5 h-1.5 rounded-full bg-base-content"></span>
				</div>

				<!-- Summary -->
				{#if personalInfo.headline}
					<p class="text-xs leading-relaxed text-base-content/80 text-justify">
						{personalInfo.headline}
					</p>
				{/if}

				{#if personalInfo.summary}
					<p class="text-xs leading-relaxed text-base-content/80 text-justify mt-1">
						{personalInfo.summary}
					</p>
				{/if}

				<div class="divider my-1 before:bg-base-content/40 after:bg-base-content/40">
					<span class="w-1.5 h-1.5 rounded-full bg-base-content"></span>
				</div>

				<!-- Contact information -->
				<div class="space-y-1.5 text-xs min-w-0">
					{#if contact.email}
						<div class="flex items-start gap-1.5 min-w-0">
							<i class="icon text-sm text-base-content/60 shrink-0">mail</i>
							<span class="break-all min-w-0">{contact.email}</span>
						</div>
					{/if}

					{#if contact.phone}
						<div class="flex items-center gap-1.5">
							<i class="icon text-sm text-base-content/60 shrink-0">call</i>
							<span>{contact.phone}</span>
						</div>
					{/if}

					{#if contact.linkedin}
						<div class="flex items-start gap-1.5 min-w-0">
							<i class="icon text-sm text-base-content/60 shrink-0">link</i>
							<a
								href={contact.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="link link-hover break-all min-w-0"
							>
								LinkedIn
							</a>
						</div>
					{/if}

					{#if contact.portfolio}
						<div class="flex items-start gap-1.5 min-w-0">
							<i class="icon text-sm text-base-content/60 shrink-0">language</i>
							<a
								href={contact.portfolio}
								target="_blank"
								rel="noopener noreferrer"
								class="link link-hover break-all min-w-0"
							>
								Portfolio
							</a>
						</div>
					{/if}

					{#if address?.city}
						<div class="flex items-start gap-1.5 min-w-0">
							<i class="icon text-sm text-base-content/60 shrink-0">location_on</i>
							<span class="min-w-0">
								{[address.city, address.state, address.country].filter(Boolean).join(', ')}
							</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Right column -->
			<div class="flex flex-col min-w-0">
				<!-- Education -->
				<div class="flex gap-2 py-2 border-b border-base-300 min-w-0">
					<div class="shrink-0">
						<div
							class="bg-primary text-primary-content rounded-full w-7 h-7 flex items-center justify-center"
						>
							<i class="icon text-base">school</i>
						</div>
					</div>

					<div class="min-w-0 flex-1">
						<h3 class="font-bold text-[10px] sm:text-xs text-base-content/60 mb-1">EDUCATION</h3>

						{#each cv.education as education}
							<div class="mb-2 last:mb-0">
								<p class="font-bold text-xs leading-snug">{education.degree}</p>

								<p class="text-[11px] leading-snug text-base-content/80">
									{education.institution}
									{#if education.location?.city}
										| {education.location.city}
									{/if}
								</p>

								<p class="text-[10px] text-base-content/60">
									{education.duration.startDate}
									- {education.duration.isOngoing ? 'Present' : (education.duration.endDate ?? '')}
								</p>

								{#if education.score}
									<p class="text-[10px] text-base-content/60">
										{education.score.type}: {education.score.value}
										{#if education.score.type === 'Percentage'}%{/if}
										{#if education.score.scale}
											/ {education.score.scale}
										{/if}
									</p>
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<!-- Experience -->
				<div class="flex gap-2 py-2 border-b border-base-300 min-w-0">
					<div class="shrink-0">
						<div
							class="bg-primary text-primary-content rounded-full w-7 h-7 flex items-center justify-center"
						>
							<i class="icon text-base">work</i>
						</div>
					</div>

					<div class="min-w-0 flex-1">
						<h3 class="font-bold text-[10px] sm:text-xs text-base-content/60 mb-1">
							WORK EXPERIENCE
						</h3>

						{#each cv.experience as experience}
							<div class="mb-2 last:mb-0">
								<p class="font-bold text-xs leading-snug">{experience.company}</p>

								<p class="text-[11px] font-medium">
									{experience.designation}
								</p>

								<p class="text-[10px] text-base-content/60">
									{experience.duration.startDate}
									- {experience.duration.isOngoing
										? 'Present'
										: (experience.duration.endDate ?? '')}
								</p>

								{#if experience.description}
									<p class="text-[11px] leading-relaxed mt-1 text-base-content/80">
										{experience.description}
									</p>
								{/if}

								{#if experience.responsibilities.length}
									<ul class="list-disc list-inside text-[11px] leading-relaxed mt-1 space-y-0.5">
										{#each experience.responsibilities as responsibility}
											<li>{responsibility}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/each}

						{#if cv.experience.length === 0}
							<p class="text-[11px] opacity-60">No experience listed</p>
						{/if}
					</div>
				</div>

				<!-- Achievements -->
				<div class="flex gap-2 py-2 border-b border-base-300 min-w-0">
					<div class="shrink-0">
						<div
							class="bg-primary text-primary-content rounded-full w-7 h-7 flex items-center justify-center"
						>
							<i class="icon text-base">star</i>
						</div>
					</div>

					<div class="min-w-0 flex-1">
						<h3 class="font-bold text-[10px] sm:text-xs text-base-content/60 mb-1">ACHIEVEMENTS</h3>

						{#if cv.achievements.length}
							<ul class="list-disc list-inside text-[11px] leading-relaxed space-y-0.5">
								{#each cv.achievements as achievement}
									<li>
										<span class="font-medium">{achievement.title}</span>
										{#if achievement.position}
											- {achievement.position}
										{/if}
									</li>
								{/each}
							</ul>
						{:else}
							<p class="text-[11px] opacity-60">No achievements listed</p>
						{/if}
					</div>
				</div>

				<!-- Skills -->
				<div class="flex gap-2 py-2 min-w-0">
					<div class="shrink-0">
						<div
							class="bg-primary text-primary-content rounded-full w-7 h-7 flex items-center justify-center"
						>
							<i class="icon text-base">settings</i>
						</div>
					</div>

					<div class="min-w-0 flex-1">
						<h3 class="font-bold text-[10px] sm:text-xs text-base-content/60 mb-1">SKILLS</h3>

						<div class="flex flex-wrap gap-1">
							{#each skills as skill}
								<span class="badge badge-outline badge-xs">
									{skill.name}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Statistics -->
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 pt-3 border-t border-base-300">
			{#each stats as stat}
				<div class="flex flex-col items-center text-center gap-1">
					<div class="flex items-center gap-1.5">
						<div
							class="bg-primary text-primary-content rounded-full w-7 h-7 flex items-center justify-center"
						>
							<i class="icon text-sm">{stat.icon}</i>
						</div>
						<span class="text-xl sm:text-2xl font-black">{stat.value}</span>
					</div>

					<span class="text-[9px] sm:text-[10px] font-bold">
						{stat.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
