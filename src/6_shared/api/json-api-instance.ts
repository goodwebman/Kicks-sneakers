const BASE_URL = 'http://localhost:4000';

class ApiError extends Error {
  constructor(public response: Response) {
    super('ApiError: ' + response.status);
  }
}

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & { json?: unknown },
): Promise<T> => {
  let headers = init?.headers ?? {};
  if (init?.json) {
    headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
    init.body = JSON.stringify(init.json);
  }

  const result = await fetch(`${BASE_URL}${url}`, {
    ...init,
    headers,
  });

  if (!result.ok) {
    throw new ApiError(result);
  }

  return (await result.json()) as T;
};
