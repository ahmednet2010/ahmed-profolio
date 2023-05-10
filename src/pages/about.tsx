import React from "react";
import { HeadFC, PageProps,graphql, Slice } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Headfc from "../components/Headfc";
import AsideInfo from "../components/AsideInfo";
import "../style/main.css"

const meta = {
  title: "عني",// replace title between "" with your title
  description:"Some text are vital for SEO",// replace description between "" with your description for seo
  keyword:"ahmed,profolio",// replace keyword between "" with your keyword for seo
  generator:"Some text are vital for SEO",// replace text in "" with your keyword for seo
};
const navItems = [
    {link:"/",name:"الرئيسيه"},
    {link:"/works",name:"اعمالي"},
    {link:"/contact",name:"تواصل معي"}];

export default ({}:PageProps) => {
  
  return(
  <div className="container-fluid position-relative">
      <div className="row">
          <div className="col-md-1 col-0">
            <Slice alias="aside"/>
          </div>
        <div className="col-md-8 col-12 py-3 ps-4">
          <Slice alias="Navbar" navbar={navItems}/>
          <div className="row ps-4">
            <div className="col-12 col-md-10">
              <AsideInfo/>
            </div>
          </div>
        </div>
        <div className="col-0 d-none d-md-block col-md-3">
            <StaticImage src="https://cdn.discordapp.com/attachments/1054095896352133284/1079160102310924360/Screenshot_------_com.supercell.brawlstars.jpg" alt="احمد سمير " title="احمد سمير" layout="fullWidth" placeholder="blurred"/>
          </div>
    </div>
  </div>
)};

export const Head: HeadFC = ({ data }: any) =><Headfc meta={meta} data={data.site.siteMetadata} dir="rtl" lang="ar"/>


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
