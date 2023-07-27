import useSWR, { SWRConfiguration } from "swr";
import { fetchData } from "@app/utils/fetch-data";

type SuccessResult<T> = {
  data?: T;
  status?: number;
};

type FailureResult<T> = {
  error?: T;
  status: number;
};

const defaultOptions = {
  errorRetryCount: 0,
  revalidateOnFocus: false,
};

function fetcher<Data, Error>(url: string) {
  return fetchData<Data, Error>(url).then(({ data, error, status }) => {
    const successResult: SuccessResult<Data> = {
      data,
      status,
    };
    const failureResult: FailureResult<Error> = {
      error,
      status,
    };
    if (error) throw failureResult;
    return successResult;
  });
}

export default function useFetch<Data, Error = unknown>(
  url: string | undefined | null,
  swrOptions?: SWRConfiguration,
) {
  {
    const { data, error, isLoading, isValidating, mutate } = useSWR<
      SuccessResult<Data>,
      FailureResult<Error>
    >(url, fetcher, {
      ...defaultOptions,
      ...swrOptions,
    });
    return {
      data: data?.data,
      error: error?.error,
      status: data?.status || error?.status,
      isFetching: isLoading || isValidating,
      isLoading,
      isValidating,
      mutate,
    };
  }
}
