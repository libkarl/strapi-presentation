import useSWR from "swr";
import axios from "axios";

export function usePageData(name: string) {
  return useSWR([name], async (name) => {
    const options = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${name}?populate=deep`,
    };
    const response = await axios(options).then((res) => {
      return res.data;
    });
    return response;
  });
}

export function useArticlesCollectionData(id: string) {
  return useSWR([id], async (id) => {
    const options = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${id}?populate=deep`,
    };
    const response = await axios(options).then((res) => {
      return res.data;
    });
    return response;
  });
}
