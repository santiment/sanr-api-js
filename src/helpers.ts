const fetch = require('node-fetch');

export function handleError(err: Error) {
  console.error(err.message);
}

export function api<T>(url: string, options: any = null): Promise<T> {
  return fetch(url, options ? options : undefined)
    .then((response: any) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response: T) => {
      return response;
    })
    .catch((error: Error) => {
      handleError(error);
      throw error;
    })
}
