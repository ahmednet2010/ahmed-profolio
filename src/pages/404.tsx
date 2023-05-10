import * as React from "react"
import { HeadFC, PageProps,graphql } from "gatsby"
import Headfc from "../components/Headfc";

export default ({}:PageProps) => {
  return (
    <main>
     404
    </main>
  )
}

export const Head: HeadFC = function ({ data }: any) {
  const meta = {
    title: "NotFound",// replace title between "" with your title
    description:"Some text are vital for SEO",// replace description between "" with your description for seo
    keyword:"ahmed,profolio",// replace keyword between "" with your keyword for seo
    generator:"Some text are vital for SEO",// replace text in "" with your keyword for seo
  };
  return <Headfc meta={meta} data={data.site.siteMetadata} dir="rtl" lang="ar"/>
};

export const query = graphql`
  query notfound {
    site {
      siteMetadata {
        author
        siteUrl
        color
        robots
      }
    }
  }
`;
