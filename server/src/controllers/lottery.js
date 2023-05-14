// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Domain
import { findAllTickets } from '../domain/lottery.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllTickets = async (req, res) => {
  console.log('get all tickets');

  try {
    const foundTickets = await findAllTickets();
    console.log('found tickets:', foundTickets);

    if (!foundTickets) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.eventTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // foundTickets.forEach((event) => {
    //   const createdDate = event.createdAt.toLocaleString();
    //   const updatedDate = event.updatedAt.toLocaleString();
    //   event.createdAt = createdDate;
    //   event.updatedAt = updatedDate;
    // });
    // // myEmitterTickets.emit('get-all-tickets', req.user);
    return sendDataResponse(res, 200, { tickets: foundTickets });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all tickets`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};