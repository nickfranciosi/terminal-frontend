import React from 'react';
import cn from 'classnames';
import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';
import HeaderTextBlock from '../components/headerTextBlock';
import LocationGrid from '../components/locationGrid';



import styles from "./css/locations.module.css";
import { locations } from "../data";

export default () => (
  <div>
    <Header darkMenu/>
    <div 
      style={{
        paddingTop: "20%",
      }}
    >
      <Container>
        <HeaderTextBlock
          description="Our offices span the globe"
          headline="Our locations"
          body="All the benefits of adding a new location with none of the hassle. We help you scale your team."
        />
      </Container>
      <LocationGrid animateIn locations={locations} className={styles.locationGridSection}/>
    </div>
    <Footer />
  </div>
);