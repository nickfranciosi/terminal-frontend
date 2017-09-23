import React from "react"
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';
import HeaderTextBlock from '../components/headerTextBlock';
import TextAnimate from '../components/textAnimate';
import styles from './css/static.module.css';

export default () => (
  <div>
    <Header />
    <div className={styles.container}>
        <Container>
          <HeaderTextBlock
            description="Tristique Parturient"
            headline="How it works"
            body="Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis, nascetur ridiculus mus."
            largeBody
          />

         <div className={styles.contentBlock}>
            <TextAnimate triggerOnScroll startDelay={1000}>
              <p>
              Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. </p>
            </TextAnimate>
          </div>

          <div className={styles.contentBlock}>
            <TextAnimate triggerOnScroll startDelay={1000}>
              <p>
              Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. </p>
            </TextAnimate>
          </div>

          <div className={styles.contentBlock}>
            <TextAnimate triggerOnScroll startDelay={1000}>
              <p>
              Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. </p>
            </TextAnimate>
          </div>

          <div className={styles.contentBlock}>
            <TextAnimate triggerOnScroll startDelay={1000}>
              <p>
              Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. </p>
            </TextAnimate>
          </div>
         
        </Container>
    </div>
    <Footer />
  </div>
);
  
