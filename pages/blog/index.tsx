import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

import Image from "../../components/Image";
import { getBlogData } from "../../data";

const BlogImage = styled.div`
  @media (min-width: 768px) {
    float: left;
    min-height: 215px;
    width: 300px;
    margin-right: 20px;
  }
`;

const BlogText = styled.div`
  @media (min-width: 768px) {
    float: left;
    width: calc(100% - 320px);
  }
`;

const BlogItem = styled.li`
  border-bottom: 1px solid RGBA(20, 128, 143, 0.2);
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export async function getStaticProps() {
  const blog = await getBlogData();
  const blogItems = await Promise.all(blog);
  return {
    props: {
      blog: blogItems,
    },
  };
}

const Blog = ({ blog, initialTitle }) => (
  <>
    <Head>
      <title>Blog - {initialTitle}</title>
    </Head>
    <h1>Blog</h1>
    <ul>
      {blog.map(
        ({
          title,
          publishedDate,
          deck,
          featuredImage,
          featuredImageWidth,
          featuredImageHeight,
          slug,
        }) => {
          return (
            <BlogItem key={title}>
              <Link href={slug}>
                <a>
                  <BlogImage>
                    <Image
                      src={featuredImage}
                      width={featuredImageWidth}
                      height={featuredImageHeight}
                    />
                  </BlogImage>
                  <BlogText>
                    <div>
                      <small>{publishedDate}</small>
                    </div>
                    <div>
                      <h2
                        style={{
                          fontSize: "20px",
                          lineHeight: "1.6em",
                          marginBottom: "20px",
                        }}
                      >
                        {title}
                      </h2>
                    </div>

                    <div style={{ lineHeight: "1.6rem" }}>{deck}</div>
                  </BlogText>

                  <div style={{ clear: "both" }} />
                </a>
              </Link>
            </BlogItem>
          );
        }
      )}
    </ul>
  </>
);

export default Blog;
