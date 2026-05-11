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
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Our Story', href: '/about#story' },
      { label: 'Report Highlights', href: '/about#highlights' }
    ]
  },
  {
    label: 'PROGRAMS',
    path: '/programs',
    dropdown: [
      { label: 'Life on Campus (LOC)', href: '/programs#loc' },
      { label: 'Course of Study Finder (COS)', href: '/programs#cos' },
      { label: 'Digital Detergent', href: '/programs#detergent' },
      { label: 'Scholarship Program', href: '/programs#scholarship' },
      { label: 'Teacher of the Year', href: '/programs#toy' },
      { label: 'Rebuilders Academy', href: '/programs#rebuilders' }
    ]
  },
  {
    label: 'IMPACT',
    path: '/impact',
    dropdown: null
  },
  {
    label: 'GET INVOLVED',
    path: '/get-involved',
    dropdown: [
      { label: 'Become a Member', href: '/get-involved#member' },
      { label: 'Become a Partner.', href: '/get-involved#partner' },
      { label: 'Become a Volunteer.', href: '/get-involved#volunteer' },
      { label: 'Request a Mentor.', href: '/get-involved#mentor' }
    ]
  },
  {
    label: 'GOVERNANCE',
    path: '/governance',
    dropdown: null
  },
  {
    label: 'FAQ',
    path: '/faq',
    dropdown: null
  }
];
