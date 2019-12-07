import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Global/BackgroundSection';
import Info from '../components/Home/info';
import Menu from '../components/Home/menu'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Sophie's Coffee Spot"
    styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
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
  menu:allContentfulCoffeItem{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
					}
				}
      }
		}
  }
}
`;
export default IndexPage
