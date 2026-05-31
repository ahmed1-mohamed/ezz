
export const mockTeachers = [
  {
    id: 't1',
    name: 'الشيخ أحمد منصور',
    nameEn: 'Sheikh Ahmed Mansour',
    subject: 'القرآن الكريم',
    subjectEn: 'Holy Quran',
    rating: 4.8,
    reviewsCount: 45,
    avatar: 'أ',
    color: 'bg-[#0f7a6c]'
  },
  {
    id: 't2',
    name: 'الأستاذة فاطمة علي',
    nameEn: 'Ms. Fatima Ali',
    subject: 'التجويد',
    subjectEn: 'Tajweed',
    rating: 4.9,
    reviewsCount: 38,
    avatar: 'ف',
    color: 'bg-[#0f7a6c]'
  }
];

export const mockPastRatings = [
  {
    id: 'r1',
    teacherId: 't1',
    teacherName: 'الشيخ أحمد منصور',
    teacherNameEn: 'Sheikh Ahmed Mansour',
    date: '2024-04-15',
    rating: 5,
    comment: 'معلم متميز ومتعاون',
    commentEn: 'Outstanding and cooperative teacher'
  }
];

export const mockDashboardStats = {
  childrenCount: 2,
  attendanceRate: 95,
  pendingAssignments: 3,
  upcomingExams: 1,
};

export const mockChildren = [
  {
    id: 'c1',
    name: 'عمر مصطفى',
    nameEn: 'Omar Mostafa',
    level: 'المستوى الثالث',
    levelEn: 'Level 3',
    attendance: 98,
  },
  {
    id: 'c2',
    name: 'سارة مصطفى',
    nameEn: 'Sara Mostafa',
    level: 'المستوى الأول',
    levelEn: 'Level 1',
    attendance: 92,
  }
];
