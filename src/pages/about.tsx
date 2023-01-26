import React from "react";
import Headfc from "../components/Headfc";
import { HeadFC, PageProps,graphql, Slice } from "gatsby";
import AsideInfo from "../components/AsideInfo";
import "../style/main.css"

const meta = {
  title: "about me",// replace title between "" with your title
  description:"Some text are vital for SEO",// replace description between "" with your description for seo
  keyword:"ahmed,profolio",// replace keyword between "" with your keyword for seo
  generator:"Some text are vital for SEO",// replace text in "" with your keyword for seo
};
const navItems = [
    {link:"/",name:"home"},
    {link:"/works",name:"my works"},
    {link:"/contact",name:"contact me"}];

export default ({}:PageProps) => {
  
  return(
  <div className="container-fluid position-relative">
      <div className="row">
          <div className="col-md-1 col-0">
            <Slice alias="aside"/>
          </div>
        <div className="col-md-11 col-12 py-3">
          <Slice alias="Navbar" navbar={navItems}/>
          <main className="py-3 contact-me">
            <div className='container'>
            <div className="row">
              <div className="col-12 col-lg-6">
                <AsideInfo/>
              </div>
            </div>
            </div>
          </main>
        </div>
    </div>
  </div>
)};

export const Head: HeadFC = ({ data }: any) =><Headfc meta={meta} data={data.site.siteMetadata} dir="ltr" lang="en"/>


export const query = graphql`
  query en {
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
