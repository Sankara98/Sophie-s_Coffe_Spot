import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Global/BackgroundSection';
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Sophie's Coffee Spot"
    styleClass="default-background"
    />
  </Layout>
);


export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
			}
		}
	}
}
`;
export default IndexPage
