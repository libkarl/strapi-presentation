import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    "fallbackData"
  > {
  fallbackData?: Data;
}

const useStrapiRequest = <Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> => {
  if (!request) {
    request = {};
  }

  request.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    () => axios.request<Data>(request!),
    {
      ...config,
      fallbackData: fallbackData && {
        status: 200,
        statusText: "InitialData",
        config: request!,
        headers: {},
        data: fallbackData,
      },
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
};

export default useStrapiRequest;

export async function fetchPageData(name: string) {
  if (!name) {
    throw new Error("missing page name");
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api${name}?populate=deep`
  );
  const json = await response.json();
  return json;
}

export async function fetchPageData2(name: string) {
  const options = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${name}?populate=deep`,
  };
  const response = await axios(options).then((res) => {
    return res.data;
  });
  return response;
}

export function usePageData2(name: string) {
  return useSWR([name], async (name) => {
    return fetchPageData2(name);
  });
}

export function usePageData(name: string) {
  const { data, error } = useSWR([name], async (name) => {
    return fetchPageData(name);
  });

  return { data, error };
}
