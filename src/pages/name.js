import React from 'react';
import { trpc } from '../utils/trpc';

export default function Name() {
  const nameQuery = trpc.useQuery(['name.getName', { name: 'Brock' }]);
  return <>{nameQuery.data ? <h1>{nameQuery.data.greeting}</h1> : <span>Loading…</span>}</>;
}
