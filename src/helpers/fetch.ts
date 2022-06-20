export function formatParams(params: any): string {
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (!value) return acc;
    return `${acc}${!acc ? '?' : '&'}${
      Array.isArray(value)
        ? value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&')
        : `${key}=${encodeURIComponent(value)}`
    }`;
  }, '');
}

export function fetchJSON<T>(url: string): Promise<T> {
  return window
    .fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch JSON content from: ${url}`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}
