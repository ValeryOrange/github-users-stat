const ENDPOINT = 'https://api.github.com/graphql';
type queryVariablesType = {
  [key: string]: any,
};

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
        .then((res) => res.json())
        .catch(e => console.error(`Failed while requesting to the endpoint: ${e.message}`, e));
}
