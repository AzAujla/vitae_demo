<script lang="ts">
	type StudentProfile = {
		id: string;
		firstName: string;
		middleName?: string;
		lastName: string;
		dateOfBirth: string;
		gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
		email: string;
		phone: string;
		alternatePhone?: string;
		address: {
			line1: string;
			line2?: string;
			city: string;
			state: string;
			postalCode: string;
			country: string;
		};
		profileImage?: string;
		nationality?: string;
		bloodGroup?: string;
		emergencyContact?: {
			name: string;
			relationship: string;
			phone: string;
		};
		createdAt: string;
		updatedAt: string;
	};

	let student: StudentProfile = $state({
		id: 'STU-2026-001',
		firstName: 'Azeem',
		middleName: '',
		lastName: 'Aujla',
		dateOfBirth: '2004-10-14',
		gender: 'Male',
		email: 'azeem@example.com',
		phone: '+91 76962 51014',
		alternatePhone: '+91 96469 44000',
		address: {
			line1: "5/52 Boys' Hostel 2",
			line2: 'Panjab University',
			city: 'Chandigarh',
			state: 'Chandigarh',
			postalCode: '160014',
			country: 'India'
		},
		profileImage: '',
		nationality: 'Indian',
		bloodGroup: 'O+',
		emergencyContact: {
			name: 'Amanpreet Singh',
			relationship: 'Father',
			phone: '+91 98729 77878'
		},
		createdAt: '2025-07-15T10:30:00Z',
		updatedAt: '2026-10-02T14:20:00Z'
	});

	const fullName = [student.firstName, student.middleName, student.lastName]
		.filter(Boolean)
		.join(' ');

	const formattedDate = (date: string) =>
		new Intl.DateTimeFormat('en-IN', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(new Date(date));

	const initials = `${student.firstName[0]}${student.lastName[0]}`;
</script>

<svelte:head>
	<title>My Profile | Campus</title>
	<meta name="description" content="View your personal student profile." />
</svelte:head>

<main class="min-h-screen bg-base-200/50 px-4 py-5">
	<div class="mx-auto max-w-lg space-y-5">
		<!-- Page heading -->
		<header>
			<p class="text-xs font-medium uppercase tracking-wider text-base-content/50">Account</p>
			<h1 class="mt-1 text-2xl font-bold">My Profile</h1>
			<p class="mt-1 text-sm text-base-content/60">
				Your personal information and contact details.
			</p>
		</header>

		<!-- Profile header -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body items-center p-6 text-center">
				<div class="avatar placeholder">
					<div
						class="size-24 rounded-full bg-primary text-3xl font-bold text-primary-content ring-4 ring-primary/10 grid place-items-center"
					>
						{#if student.profileImage}
							<img src={student.profileImage} alt={fullName} />
						{:else}
							<span>{initials}</span>
						{/if}
					</div>
				</div>

				<div class="mt-2">
					<h2 class="text-xl font-bold">{fullName}</h2>
					<p class="mt-1 text-sm text-base-content/50">
						Student ID: {student.id}
					</p>
				</div>

				<div class="mt-2 flex flex-wrap justify-center gap-2">
					<span class="badge badge-primary badge-outline">
						{student.gender}
					</span>
					<span class="badge badge-secondary badge-outline">
						{student.nationality}
					</span>
				</div>
			</div>
		</section>

		<!-- Personal information -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body p-5">
				<div class="mb-2 flex items-center gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
					>
						<i class="icon text-3xl">id_card</i>
					</div>
					<div>
						<h2 class="font-bold">Personal Information</h2>
						<p class="text-xs text-base-content/50">Basic details</p>
					</div>
				</div>

				<div class="divide-y divide-base-200">
					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">First Name</span>
						<span class="text-right text-sm font-medium">{student.firstName}</span>
					</div>

					{#if student.middleName}
						<div class="flex justify-between gap-4 py-3">
							<span class="text-sm text-base-content/50">Middle Name</span>
							<span class="text-right text-sm font-medium">{student.middleName}</span>
						</div>
					{/if}

					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">Last Name</span>
						<span class="text-right text-sm font-medium">{student.lastName}</span>
					</div>

					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">Date of Birth</span>
						<span class="text-right text-sm font-medium">
							{formattedDate(student.dateOfBirth)}
						</span>
					</div>

					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">Gender</span>
						<span class="text-right text-sm font-medium">{student.gender}</span>
					</div>

					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">Nationality</span>
						<span class="text-right text-sm font-medium">{student.nationality}</span>
					</div>

					<div class="flex justify-between gap-4 py-3">
						<span class="text-sm text-base-content/50">Blood Group</span>
						<span class="text-right text-sm font-medium">{student.bloodGroup}</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact information -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body p-5">
				<div class="mb-2 flex items-center gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary"
					>
						<i class="icon text-3xl">contact_phone</i>
					</div>
					<div>
						<h2 class="font-bold">Contact Information</h2>
						<p class="text-xs text-base-content/50">How to reach you</p>
					</div>
				</div>

				<div class="divide-y divide-base-200">
					<div class="flex items-start gap-3 py-3">
						<i class="icon text-3xl">mail</i>
						<div class="min-w-0 flex-1">
							<p class="text-xs text-base-content/50">Email Address</p>
							<p class="mt-1 break-all text-sm font-medium">{student.email}</p>
						</div>
					</div>

					<div class="flex items-start gap-3 py-3">
						<i class="icon text-3xl">phone_enabled</i>
						<div class="min-w-0 flex-1">
							<p class="text-xs text-base-content/50">Primary Phone</p>
							<p class="mt-1 text-sm font-medium">{student.phone}</p>
						</div>
					</div>

					{#if student.alternatePhone}
						<div class="flex items-start gap-3 py-3">
							<i class="icon text-3xl">phone_enabled</i>
							<div class="min-w-0 flex-1">
								<p class="text-xs text-base-content/50">Alternate Phone</p>
								<p class="mt-1 text-sm font-medium">{student.alternatePhone}</p>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</section>

		<!-- Address -->
		<section class="card border border-base-300 bg-base-100 shadow-sm">
			<div class="card-body p-5">
				<div class="mb-2 flex items-center gap-3">
					<div class="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
						<i class="icon text-3xl">home_pin</i>
					</div>
					<div>
						<h2 class="font-bold">Residential Address</h2>
						<p class="text-xs text-base-content/50">Your registered address</p>
					</div>
				</div>

				<div class="rounded-xl bg-base-200/60 p-4">
					<p class="text-sm font-semibold">{student.address.line1}</p>

					{#if student.address.line2}
						<p class="mt-1 text-sm text-base-content/70">
							{student.address.line2}
						</p>
					{/if}

					<p class="mt-1 text-sm text-base-content/70">
						{student.address.city}, {student.address.state}
					</p>

					<p class="mt-1 text-sm text-base-content/70">
						{student.address.postalCode}, {student.address.country}
					</p>
				</div>
			</div>
		</section>

		<!-- Emergency contact -->
		{#if student.emergencyContact}
			<section class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-5">
					<div class="mb-2 flex items-center gap-3">
						<div class="flex size-10 items-center justify-center rounded-xl bg-error/10 text-error">
							<i class="icon text-3xl">contact_emergency</i>
						</div>
						<div>
							<h2 class="font-bold">Emergency Contact</h2>
							<p class="text-xs text-base-content/50">Person to contact in an emergency</p>
						</div>
					</div>

					<div class="space-y-3 rounded-xl bg-base-200/60 p-4">
						<div>
							<p class="text-xs text-base-content/50">Full Name</p>
							<p class="mt-1 text-sm font-semibold">
								{student.emergencyContact.name}
							</p>
						</div>

						<div>
							<p class="text-xs text-base-content/50">Relationship</p>
							<p class="mt-1 text-sm font-medium">
								{student.emergencyContact.relationship}
							</p>
						</div>

						<div>
							<p class="text-xs text-base-content/50">Phone Number</p>
							<p class="mt-1 text-sm font-medium">
								{student.emergencyContact.phone}
							</p>
						</div>
					</div>
				</div>
			</section>
		{/if}

		<!-- Metadata -->
		<section class="pb-4 text-center">
			<p class="text-xs text-base-content/40">Profile last updated</p>
			<p class="mt-1 text-xs font-medium text-base-content/60">
				{formattedDate(student.updatedAt)}
			</p>
		</section>
	</div>
</main>
