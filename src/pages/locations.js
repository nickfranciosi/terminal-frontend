import React from 'react';
import cn from 'classnames';
import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';
import HeaderTextBlock from '../components/headerTextBlock';
import LocationGrid from '../components/locationGrid';



import styles from "./css/locations.module.css";
import { locations } from "../data";

export default ({ data }) => {
  const content = data.wordpressPage.acf;
  return (
    <div>
      <Header darkMenu/>
        <div 
          style={{
            paddingTop: "27%",
            minHeight: 400,
            maxHeight: "80vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Container className={styles.headerContainer}>
            <HeaderTextBlock
              description={content.description}
              headline={content.headline}
              body={content.body}
              className={styles.header}
            />
          </Container>
        </div>
        <LocationGrid animateIn locations={locations} className={styles.locationGridSection}/>
      <Footer />
    </div>
  )
};


export const query = graphql`
query LocationPageQuery {
  wordpressPage(id: { eq: "fd71e5c8-d318-5d50-ac09-dfd6f6b61532" }) {
    id
    title
    acf{
      description
      headline
      body
    }
  }
}
`