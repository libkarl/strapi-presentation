import dynamic from "next/dynamic";

export let homePageImportObject = {
  "homepage.testimonials": dynamic(
    () => import("components/Homepage/Testimonials"),
    {
      suspense: true,
    }
  ),
  "homepage.contact": dynamic(() => import("components/Homepage/Contact"), {
    suspense: true,
  }),
  "homepage.introduction": dynamic(
    () => import("components/Homepage/Introduction"),
    {
      suspense: true,
    }
  ),
  "homepage.latestnews": dynamic(
    () => import("components/Homepage/Latestnews"),
    {
      suspense: true,
    }
  ),
};

export let aboutPageImportObject = {
  "homepage.testimonials": dynamic(
    () => import("components/Homepage/Testimonials"),
    {
      suspense: true,
    }
  ),
  "homepage.contact": dynamic(() => import("components/Homepage/Contact"), {
    suspense: true,
  }),
  "homepage.introduction": dynamic(
    () => import("components/Homepage/Introduction"),
    {
      suspense: true,
    }
  ),
  "homepage.latestnews": dynamic(
    () => import("components/Homepage/Latestnews"),
    {
      suspense: true,
    }
  ),
};
