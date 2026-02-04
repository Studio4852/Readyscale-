
import { UserRole, Course, TalentTrainee, Project, ClientCompany, User } from './types';

export const MOCK_ASSOCIATE: any = {
  id: 'a1',
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  role: UserRole.ASSOCIATE,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  readinessScore: 78,
  completedCourses: ['c1', 'c2'],
  badges: ['Quick Learner', 'Foundation Expert'],
  currentJourney: 'Cloud Engineering Path',
  readinessStamp: false,
  activeProjects: [],
  testResults: [
    { testId: 't1', testName: 'Core JavaScript', score: 85, date: '2023-10-15', passed: true },
    { testId: 't2', testName: 'System Architecture', score: 65, date: '2023-11-01', passed: false },
  ]
};

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alex Johnson', email: 'alex.j@example.com', role: UserRole.ASSOCIATE, status: 'Active' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@dev.com', role: UserRole.ASSOCIATE, status: 'Active' },
  { id: '3', name: 'Jordan Employer', email: 'jordan@tech-hire.com', role: UserRole.EMPLOYER, status: 'Active' },
  { id: '4', name: 'System Admin', email: 'admin@readyscale.ai', role: UserRole.MANAGEMENT, status: 'Active' },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Modern Frontend Architecture',
    description: 'Learn the fundamentals of scalable React architectures.',
    thumbnail: 'https://picsum.photos/seed/course1/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: 'Key concepts: State management, Hooks, and Render cycles. React 18 introduces concurrency.',
    prerequisites: [],
    progress: 100
  },
  {
    id: 'c2',
    title: 'Backend Scalability',
    description: 'Deep dive into microservices and database optimization.',
    thumbnail: 'https://picsum.photos/seed/course2/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: 'Focus on Redis, Kafka, and Postgres indexing. Horizontal scaling is critical.',
    prerequisites: ['c1'],
    progress: 60
  },
  {
    id: 'c3',
    title: 'Advanced DevOps',
    description: 'Automate deployments with CI/CD and Kubernetes.',
    thumbnail: 'https://picsum.photos/seed/course3/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    notes: 'CI/CD pipelines reduce lead time for changes. Infrastructure as Code (IaC) is key.',
    prerequisites: ['c1', 'c2'],
    unlockScore: 80,
    progress: 0
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Enterprise E-commerce Platform',
    description: 'Build a full-stack marketplace with real-time inventory management.',
    requiredScore: 85,
    isJoined: false
  },
  {
    id: 'p2',
    title: 'Distributed Analytics Engine',
    description: 'Process millions of events per second using stream processing.',
    requiredScore: 90,
    isJoined: false
  }
];

export const MOCK_TALENT: TalentTrainee[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    email: 'sarah.c@dev.com',
    role: UserRole.ASSOCIATE,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    readinessScore: 92,
    completedCourses: ['c1', 'c2', 'c3'],
    badges: ['Top Performer', 'Project Lead'],
    currentJourney: 'Cloud Engineering Path',
    readinessStamp: true,
    testResults: [],
    activeProjects: [],
    employerId: 'e1',
    featured: true,
    onboardingStatus: 'Completed',
    status: 'Active'
  },
  {
    id: 't2',
    name: 'Marcus Bell',
    email: 'marcus.b@it.com',
    role: UserRole.ASSOCIATE,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    readinessScore: 84,
    completedCourses: ['c1', 'c2'],
    badges: ['Consistent'],
    currentJourney: 'Cybersecurity Path',
    readinessStamp: false,
    testResults: [],
    activeProjects: [],
    employerId: 'e1',
    featured: false,
    onboardingStatus: 'In Progress',
    status: 'Active'
  }
];

export const MOCK_CLIENTS: ClientCompany[] = [
  { id: 'cli1', name: 'Global Tech Corp', logo: 'https://picsum.photos/seed/gtc/100', talentCount: 45, readinessAvg: 88, status: 'Active' },
  { id: 'cli2', name: 'Innovate Soft', logo: 'https://picsum.photos/seed/innov/100', talentCount: 12, readinessAvg: 72, status: 'Active' },
  { id: 'cli3', name: 'Secure Systems', logo: 'https://picsum.photos/seed/sec/100', talentCount: 8, readinessAvg: 95, status: 'Pending' },
];
