import dynamic from "next/dynamic";

export default dynamic({
  ssr: false,
  suspense: false,
  loader: () => import("./Thread"),
});
