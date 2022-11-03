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
  "about.banner": dynamic(() => import("components/About/Banner"), {
    suspense: true,
  }),
  "about.processflow": dynamic(() => import("components/About/Processflow"), {
    suspense: true,
  }),
  "about.workingfocus": dynamic(() => import("components/About/Workingfocus"), {
    suspense: true,
  }),
  "about.team": dynamic(() => import("components/About/Team"), {
    suspense: true,
  }),
};
