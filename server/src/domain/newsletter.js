import dbClient from '../utils/dbClient.js';

export const findAllNewsletterMembers = () =>
  dbClient.newsletterMember.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
