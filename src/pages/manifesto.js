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
         

{/*           
          <p className={styles.contentBlock}><TextAnimate>Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. </TextAnimate>
          </p>    
         

          <p className={styles.contentBlock}><TextAnimate triggerOnScroll>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</TextAnimate></p>

          <p className={styles.contentBlock}><TextAnimate triggerOnScroll>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.</TextAnimate></p> */}
        </Container>
    </div>
    <Footer />
  </div>
);
  
