export const navItems = [
  {
    label: 'HOME',
    path: '/',
    dropdown: null
  },
  {
    label: 'ABOUT',
    path: '/about',
    dropdown: [
      { label: 'About CTF', href: '#overview' },
      { label: 'Founder & Leadership', href: '#leadership' },
      { label: 'Our Mission & Values', href: '#mission' },
      { label: 'Where We Operate', href: '#locations' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  {
    label: 'PROGRAMS',
    path: '/programs',
    dropdown: [
      { label: 'Life on Campus (LOC)', href: '#loc' },
      { label: 'Course of Study Finder (COS)', href: '#cos' },
      { label: 'CTF Scholarship Program', href: '#scholarship' },
      { label: 'Teacher of the Year (TOY)', href: '#toy' },
      { label: 'Rebuilders Academy', href: '#rebuilders' },
      { label: 'Monthly Conferences', href: '#conferences' }
    ]
  },
  {
    label: 'GOVERNANCE',
    path: '/governance',
    dropdown: [
      { label: 'Governance & Compliance', href: '#compliance' },
      { label: 'Organizational Structure', href: '#structure' },
      { label: 'Financial Transparency', href: '#financial' },
      { label: 'Safeguarding Commitment', href: '#safeguarding' }
    ]
  },
  {
    label: 'IMPACT',
    path: '/impact',
    dropdown: [
      { label: 'Our Impact Overview', href: '#overview' },
      { label: 'Annual Reports', href: '#reports' },
      { label: 'Scholarship Recipients', href: '#recipients' },
      { label: 'University Expansion', href: '#expansion' },
      { label: 'Media & Gallery', href: '#gallery' }
    ]
  }
];
