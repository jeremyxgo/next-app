export function fetchData<Data, Error = unknown>(
  ...args: Parameters<typeof fetch>
) {
  return fetch(...args).then(async (res) => {
    const { ok, status } = res;
    let data: Data | undefined;
    let error: Error | undefined;
    let result;

    try {
      result = await res.text();
      result = JSON.parse(result);
    } catch (e) {}

    if (ok) data = result;
    if (!ok) error = result;

    return {
      data,
      error,
      status,
    };
  });
}
