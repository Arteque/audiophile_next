export async function shopwareFetch(endpoint: string, method:string, options?: RequestInit) {
  const ACCESS_KEY = process.env.SHOPWARE_ACCESS_KEY;
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "sw-access-key": ACCESS_KEY || '',
  };

  try {
    const response = await fetch(
      `https://shop.artecke.de/store-api/${endpoint}`,
      {
        method: method,
        headers: {
          ...defaultHeaders,
          ...(options?.headers || {}),
        },
        ...options,
      }
    );
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error: any) {
    console.log(`[Shop Fetch Error]: ${error.message}`);
  }
}
