import dbClient from '../utils/dbClient.js';

export const findAllTickets = () =>
  dbClient.lotteryTicket.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
