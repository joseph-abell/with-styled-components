import { join } from "path";
import matter from "gray-matter";
import marked from "marked";
import { format } from "date-fns";

import {
  removeGitKeep,
  removeMarkdownSuffixFromFilename,
  hideHidden,
  addSlugToParams,
  sortPortfolio,
  sortBlog,
} from "./utils";

const getCaseStudiesSlugAndData = (getPath) => async (filename) => {
  const slug = removeMarkdownSuffixFromFilename(filename);
  const path = getPath(slug);
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/case-studies/${path}`
  );
  const data = matter(await res.text()).data;
  return {
    slug: `/${slug}`,
    data,
  };
};

interface TransformProps {
  slug: string;
  [key: string]: any;
}

const transformCaseStudyData = async (data): Promise<TransformProps> => {
  const newData = await data;
  return {
    slug: newData.slug,
    ...newData.data,
  };
};

const transformBlogData = async (oldData) => {
  const data = await oldData;

  return {
    slug: join("/blog", data.slug),
    ...data.data,
  };
};

const transformServiceData = async (oldData) => {
  const data = await oldData;
  return {
    slug: join("/services", data.slug),
    ...data.data,
  };
};

const contentPath = join("content");
const caseStudiesPath = join(contentPath, "case-studies", "index.json");
const caseStudiesInnerPath = join("/");
const blogPath = join(contentPath, "blog", "index.json");
const blogInnerPath = join("blog");
const homePath = join(contentPath, "index.md");
const clientsPath = join(contentPath, "clients.md");
const contactPath = join(contentPath, "contact.md");
const aboutPath = join(contentPath, "about.md");
const servicesPath = join(contentPath, "services", "index.json");
const servicesInnerPath = join("services");

const getJson = async (path) => {
  const res = await fetch(`https://abelldesignadmin.netlify.app/${path}`);
  const data = await res.json();
  return data?.files;
};

const getData = async (path) => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/case-studies/${path}`
  );
  return matter(await res.text()).data;
};

export const getBlogPaths = async () => {
  const data = await getJson(blogPath);
  const result = data?.map((r) => `/blog${r}`.split(".md").join(""));
  return result;
};
export const getServicePaths = async () => {
  const data = await getJson(servicesPath);
  const result = data?.map((r) => `/services${r}`.split(".md").join(""));
  return result;
};

const getCaseStudyPath = (slug) => join(caseStudiesPath, `${slug}.md`);
const getCaseStudyInnerPath = (slug) =>
  join(caseStudiesInnerPath, `${slug}.md`);
const getBlogPath = (slug) => join(`${slug}.md`);
const getBlogInnerPath = (slug) => join(blogInnerPath, `${slug}.md`);
const getServicePath = (slug) => join(servicesPath, `${slug}.md`);
const getServiceInnerPath = (slug) => join(servicesInnerPath, `${slug}.md`);

const getDataFromSlug = (getPath, slug) => {
  const path = getPath(slug);
  return getData(path);
};

interface BlogType {
  publishedDate: string;
  [key: string]: any;
}

export const getCaseStudyFromSlug = async (slug) => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/case-studies/${slug}.md`
  );
  return matter(await res.text()).data;
};

export const getServiceFromSlug = async (slug) => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/services/${slug}.md`
  );
  return matter(await res.text()).data;
};

export const getBlogFromSlug = async (slug) => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/blog/${slug}.md`
  );
  const data = matter(await res.text()).data;

  return {
    ...data,
    publishedDate:
      data.publishedDate &&
      format(Date.parse(data.publishedDate), "dd/MM/yyyy"),
  };
};

export const getHomeData = async () => {
  const res = await fetch(`https://abelldesignadmin.netlify.app/${homePath}`);
  return matter(await res.text()).data;
};

export const getClientsData = async () => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/${clientsPath}`
  );
  return matter(await res.text()).data;
};

export const getContactData = async () => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/${contactPath}`
  );
  return matter(await res.text()).data;
};

export const getAboutData = async () => {
  const res = await fetch(`https://abelldesignadmin.netlify.app/${aboutPath}`);
  const data = matter(await res.text()).data;
  return { ...data, deck: marked(data.deck) };
};

export const getCaseStudyPaths = async () => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/${caseStudiesPath}`
  );
  const data = JSON.parse(matter(await res.text()).content).files.map((i) =>
    i.split(".md").join("")
  );
  return data;
};
export const getPortfolioData = async () => {
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/${caseStudiesPath}`
  );
  const data = JSON.parse(matter(await res.text()).content).files;
  const slugAndData = await data?.map(
    getCaseStudiesSlugAndData(getCaseStudyInnerPath)
  );
  const transformedData = await slugAndData?.map(transformCaseStudyData);
  return await transformedData?.filter(hideHidden)?.sort(sortPortfolio);
};

const getServicesSlugAndData = (getPath) => async (filename) => {
  const slug = removeMarkdownSuffixFromFilename(filename);
  const path = getPath(slug);

  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/${path}`
  );
  const data = matter(await res.text()).data;
  return {
    slug: `/${slug}`,
    data,
  };
};

export const getServicesData = async () => {
  const data = await getJson(servicesPath);
  return data
    ?.map(getServicesSlugAndData(getServiceInnerPath))
    ?.map(transformServiceData)
    ?.filter(hideHidden);
};

const getBlogSlugAndData = (getPath) => async (filename) => {
  const slug = removeMarkdownSuffixFromFilename(filename);
  const path = getPath(slug);
  const res = await fetch(
    `https://abelldesignadmin.netlify.app/content/${path}`
  );
  const data = matter(await res.text()).data;
  return {
    slug: `/${slug}`,
    data,
  };
};
export const getBlogData = async () => {
  const data = await getJson(blogPath);
  return data
    ?.map(getBlogSlugAndData(getBlogInnerPath))
    ?.map(transformBlogData)
    ?.filter(hideHidden)
    ?.sort(sortBlog)
    ?.map(async (oldI) => {
      const i = await oldI;
      const publishedDate = format(Date.parse(i.publishedDate), "dd/MM/yyyy");
      return {
        ...i,
        publishedDate,
      };
    });
};
