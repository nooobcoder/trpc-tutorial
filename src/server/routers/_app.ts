import { createRouter } from '../create-router';
import { nameRouter } from './nameRouter';

export const appRouter = createRouter().merge('names.', nameRouter);
export const AppRouter = typeof appRouter;
