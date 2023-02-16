module.exports = {
  role: {
    name: [
      'SUPER_ADMIN',
      'ADMIN_COURSE',
      'MEMBER',
      'STAFF_HRD',
      'TREASURER',
      'DIRECTOR',
      'VICE_DIRECTOR',
    ],
    SUPER_ADMIN: {
      VALUE: 'SUPER_ADMIN',
      ID: 1,
    },
    ADMIN_COURSE: {
      VALUE: 'ADMIN_COURSE',
      ID: 2,
    },
    MEMBER: {
      VALUE: 'MEMBER',
      ID: 3,
    },
    STAFF_HRD: {
      VALUE: 'STAFF_HRD',
      ID: 4,
    },
    TREASURER: {
      VALUE: 'TREASURER',
      ID: 5,
    },
    DIRECTOR: {
      VALUE: 'DIRECTOR',
      ID: 6,
    },
    VICE_DIRECTOR: {
      VALUE: 'VICE_DIRECTOR',
      ID: 7,
    },
  },
  course: {
    type: ['FREE', 'PAID'],
    level: ['BEGINNER', 'INTERMEDIATE', 'ADVANCE'],
  },
  promotion: {
    type: ['BROADCAST', 'SPESIFIC_USER'],
  },
  module: {
    type: ['MODULE', 'CURRICULUM'],
  },
};
