/* ================================================
 * Common Types
 * ================================================ */

export type EntityId = string;

export type DateString = string; // ISO 8601 date or year/month

export type DateRange = {
	startDate: DateString;
	endDate?: DateString;
	isOngoing?: boolean;
};

export type Link = {
	label: string;
	url: string;
};

export type Location = {
	address?: string;
	city?: string;
	state?: string;
	country?: string;
	postalCode?: string;
};

/* ================================================
 * Personal Information
 * ================================================ */

export type ContactInfo = {
	email: string;
	phone?: string;
	alternatePhone?: string;
	linkedin?: string;
	portfolio?: string;
	website?: string;
};

export type PersonalInfo = {
	firstName: string;
	middleName?: string;
	lastName: string;

	headline?: string;
	summary?: string;

	dateOfBirth?: DateString;
	nationality?: string;

	profileImage?: string;

	contact: ContactInfo;
	address?: Location;
};

/* ================================================
 * Education
 * ================================================ */

export type EducationStatus = 'Completed' | 'Pursuing' | 'Discontinued';

export type AcademicScoreType = 'Percentage' | 'CGPA' | 'GPA' | 'Grade';

export type AcademicScore = {
	value: number;
	scale?: number;
	type: AcademicScoreType;
};

export type Education = {
	id: EntityId;

	institution: string;
	degree: string;
	fieldOfStudy?: string;

	location?: Location;

	duration: DateRange;

	score?: AcademicScore;
	status: EducationStatus;

	description?: string;
	achievements?: string[];
};

/* ================================================
 * Experience
 * ================================================ */

export type EmploymentType =
	'Internship' | 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Apprenticeship' | 'Other';

export type Experience = {
	id: EntityId;

	company: string;
	designation: string;

	employmentType?: EmploymentType;

	location?: Location;
	duration: DateRange;

	description?: string;

	responsibilities: string[];
	achievements?: string[];

	technologies?: string[];
	links?: Link[];
};

/* ================================================
 * Projects
 * ================================================ */

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Discontinued';

export type Project = {
	id: EntityId;

	title: string;
	description?: string;

	role?: string;

	duration?: DateRange;
	status?: ProjectStatus;

	organization?: string;

	highlights: string[];

	technologies?: string[];

	links?: Link[];

	collaborators?: string[];
};

/* ================================================
 * Certifications & Training
 * ================================================ */

export type Certification = {
	id: EntityId;

	name: string;
	issuer: string;

	issueDate?: DateString;
	expiryDate?: DateString;

	credentialId?: string;
	credentialUrl?: string;

	description?: string;

	skills?: string[];
};

/* ================================================
 * Achievements
 * ================================================ */

export type AchievementCategory =
	'Academic' | 'Competition' | 'Leadership' | 'Recognition' | 'Professional' | 'Other';

export type Achievement = {
	id: EntityId;

	title: string;
	description?: string;

	organization?: string;

	date?: DateString;

	category: AchievementCategory;

	position?: string;
	links?: Link[];
};

/* ================================================
 * Positions of Responsibility
 * ================================================ */

export type PositionOfResponsibility = {
	id: EntityId;

	title: string;
	organization: string;

	duration: DateRange;

	location?: Location;

	description?: string;

	responsibilities?: string[];
	achievements?: string[];
};

/* ================================================
 * Skills
 * ================================================ */

export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type Skill = {
	name: string;

	proficiency?: SkillProficiency;

	description?: string;

	yearsOfExperience?: number;
};

export type SkillCategory = {
	id: EntityId;

	name: string;
	description?: string;

	skills: Skill[];
};

/* ================================================
 * Extracurricular Activities
 * ================================================ */

export type ActivityCategory =
	'Cultural' | 'Sports' | 'Volunteering' | 'Clubs & Organizations' | 'Social Service' | 'Other';

export type Activity = {
	id: EntityId;

	title: string;

	organization?: string;

	category: ActivityCategory;

	duration?: DateRange;

	description?: string;

	role?: string;

	achievements?: string[];

	links?: Link[];
};

/* ================================================
 * Interests
 * ================================================ */

export type Interest = {
	id: EntityId;

	name: string;
	description?: string;
};

/* ================================================
 * CV Metadata
 * ================================================ */

export type CVStatus = 'Draft' | 'Published' | 'Archived';

export type CVVisibility = 'Private' | 'College' | 'Public';

export type CVMetadata = {
	status: CVStatus;
	visibility: CVVisibility;

	createdAt: string;
	updatedAt: string;

	publishedAt?: string;

	version: number;
};

/* ================================================
 * Complete Student CV
 * ================================================ */

export type StudentCV = {
	id: EntityId;

	studentId: EntityId;

	personalInfo: PersonalInfo;

	education: Education[];

	experience: Experience[];

	projects: Project[];

	certifications: Certification[];

	achievements: Achievement[];

	positionsOfResponsibility: PositionOfResponsibility[];

	skills: SkillCategory[];

	extracurricularActivities: Activity[];

	interests: Interest[];

	metadata: CVMetadata;
};
