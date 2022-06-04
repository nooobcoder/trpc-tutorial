import { MyContextType } from './context';
import { router } from '@trpc/server';

export function createRouter() {
  return router<MyContextType>();
}
