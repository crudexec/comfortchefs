export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  postedDate: string;
  closingDate?: string;
  isActive: boolean;
}

export const jobs: Job[] = [
  {
    id: '1',
    slug: 'operations-manager',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Lagos, Nigeria',
    type: 'full-time',
    description: 'We are seeking an experienced Operations Manager to oversee our catering operations across multiple client sites. You will be responsible for ensuring seamless service delivery, managing teams, and maintaining our high standards of excellence.',
    responsibilities: [
      'Oversee daily operations across multiple catering sites',
      'Manage and develop a team of 50+ catering staff',
      'Ensure compliance with HSE standards and food safety regulations',
      'Coordinate with clients to meet their specific requirements',
      'Monitor and optimize operational costs and efficiency',
      'Implement quality control measures',
      'Handle vendor relationships and procurement',
    ],
    requirements: [
      'Minimum 5 years experience in catering/hospitality operations',
      'Proven leadership and team management skills',
      'Strong understanding of food safety and HSE compliance',
      'Excellent communication and client relationship skills',
      "Bachelor's degree in Hospitality Management or related field",
      'Proficiency in Microsoft Office and operations management software',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Professional development opportunities',
      'Meals during work hours',
    ],
    postedDate: '2026-01-15',
    isActive: true,
  },
];

export function getActiveJobs(): Job[] {
  return jobs.filter((job) => job.isActive);
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
