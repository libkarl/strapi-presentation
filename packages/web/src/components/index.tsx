import dynamic from "next/dynamic";
import React from "react";

export let ImportObject: { [key: string]: React.ComponentType<any> } = {
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
  "contact.banner": dynamic(() => import("components/Contact/ContactBanner"), {
    suspense: true,
  }),

  "contact.locations": dynamic(() => import("components/Generics/Locations"), {
    suspense: true,
  }),
  "services.companies": dynamic(() => import("components/Service/Companies"), {
    suspense: true,
  }),
  "services.listofservices": dynamic(
    () => import("components/Service/ListOfServices"),
    {
      suspense: true,
    }
  ),
  "services.offers": dynamic(() => import("components/Service/Offers"), {
    suspense: true,
  }),
  "services.servicebanner": dynamic(
    () => import("components/Service/ServiceBanner"),
    {
      suspense: true,
    }
  ),
  "blog-archive.latestarticles": dynamic(
    () => import("components/Blog/LatestArticles"),
    {
      suspense: true,
    }
  ),
  "blog-archive.archive": dynamic(() => import("components/Blog/Archive"), {
    suspense: true,
  }),
};
