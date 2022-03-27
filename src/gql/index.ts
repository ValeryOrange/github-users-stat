import { queryVariablesType } from '@/types';
const ENDPOINT = 'https://api.github.com/graphql';

/**
 * in a real project I would rather use prepared tools like cross-fetch
 * to use it with the same interface on both server and client side for
 * SSR-projects
 */
export default function myFetch(token: string, fetchQuery: string, queryVariables?: queryVariablesType) {
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          query: fetchQuery,
          variables: queryVariables,
        }),
      })
        .then((res) => {
            if (res.status >= 200 && res.status < 400) {
                return res.json();
            }
            throw new Error(`Response status: ${res.status}`);
        })
        .catch(e => console.error(`Failed while requesting to the endpoint: ${e.message}`, e));
}
