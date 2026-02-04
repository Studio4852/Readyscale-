
export enum UserRole {
  ASSOCIATE = 'ASSOCIATE',
  EMPLOYER = 'EMPLOYER',
  MANAGEMENT = 'MANAGEMENT' // The platform vendor (ReadyScale)
}

export enum EmployerInternalRole {
  ADMIN = 'ADMIN', // View talent/progress only
  CREATOR = 'CREATOR' // Can upload/manage courses
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  employerInternalRole?: EmployerInternalRole;
  avatar?: string;
  status: 'Active' | 'Inactive';
}

export interface SupportTicket {
  id: string;
  subject: string;
  user: string;
  company: string;
  status: 'Open' | 'Resolved';
  priority: 'Low' | 'High';
}

export interface AssociateProfile extends User {
  readinessScore: number;
  completedCourses: string[];
  badges: string[];
  currentJourney: string;
  readinessStamp: boolean;
  testResults: TestResult[];
  activeProjects: string[];
}

/** 
 * Added TalentTrainee interface to fix the error in constants.tsx 
 * where it was being imported but not exported from types.ts.
 * It extends AssociateProfile to include employer-specific metadata.
 */
export interface TalentTrainee extends AssociateProfile {
  employerId: string;
  featured: boolean;
  onboardingStatus: string;
}

export interface TestResult {
  testId: string;
  testName: string;
  score: number;
  date: string;
  passed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  notes: string;
  prerequisites: string[];
  unlockScore?: number;
  progress?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  requiredScore: number;
  isJoined: boolean;
}

export interface ClientCompany {
  id: string;
  name: string;
  logo: string;
  talentCount: number;
  readinessAvg: number;
  status: 'Active' | 'Pending' | 'Inactive';
}
