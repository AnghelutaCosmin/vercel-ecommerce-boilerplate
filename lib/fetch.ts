export const BASE_URL = "https://vercel-swag-store-api.vercel.app/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const headers = {
    ...options.headers,
    "x-vercel-protection-bypass": process.env.VERCEL_BYPASS_CODE || "",
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new ApiError(
      `API request failed with status ${response.status}`,
      response.status,
    );
  }

  return response.json();
};
