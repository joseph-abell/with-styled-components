export const removeGitKeep = (filename) => filename !== ".gitkeep";
export const removeMarkdownSuffixFromFilename = (filename) =>
  filename.split(".md").join("").trim();
export const hideHidden = async (p) => {
  const newP = await !p.hidden;
  return newP;
};
export const addSlugToParams = (filename) => {
  const slug = removeMarkdownSuffixFromFilename(filename);
  return {
    params: {
      slug: `${slug}`,
    },
  };
};
export const sortPortfolio = async (a, b) => {
  const newA = await a;
  const newB = await b;
  const aOrder = (newA.order || 0) < 0 ? 0 : newA.order;
  const bOrder = (newB.order || 0) < 0 ? 0 : newB.order;

  if (!aOrder && !bOrder) return 0;
  if (!aOrder) return 1;
  if (!bOrder) return -1;

  return aOrder - bOrder;
};

export const sortBlog = (a, b) =>
  Date.parse(b.publishedDate) - Date.parse(a.publishedDate);
