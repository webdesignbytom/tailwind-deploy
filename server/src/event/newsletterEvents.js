import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllNewsletterEvent,
  createCreateReviewEvent,
  createDeleteReviewEvent,
  createGetReviewByIdEvent,
} from './utils/reviewUtils.js';

export const myEmitterNewsletter = myEmitter;

myEmitterNewsletter.on('get-all-newsletter-members', async (user) =>
  createGetAllNewsletterEvent(user)
);

myEmitterNewsletter.on('create-newsletter-member', async (user) =>
  createCreateReviewEvent(user)
);

myEmitterNewsletter.on('remove-newsletter-member', async (user) =>
  createDeleteReviewEvent(user)
);

myEmitterNewsletter.on('get-newsletter-by-id', async (user) =>
  createGetReviewByIdEvent(user)
);
