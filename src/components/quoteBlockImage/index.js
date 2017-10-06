import React from 'react';
import cn from 'classnames';
import FullBackgroundImage from '../fullBackgroundImage';
import Container from '../container';
import CenterTextBlock from '../centerTextBlock';
import Author from '../author';
import styles from './style.module.css';

const QuoteBlockImage = ({imgSrc, description, quote, author, className, style}) => (
  <div style={{
    position: "relative",
    height: "80vh",
    ...style,
  }} id="testimonials">
    <FullBackgroundImage imgSrc={imgSrc} className={cn(styles.quoteBlockContainer, className)}>
        <Container className={styles.container}>
          <CenterTextBlock
            description={description}
            headline={quote}
            className={styles.quoteTextBlock}
            animate={true}
          />
          {author &&
          <Author avatar={author.avatar} name={author.name} description={author.description}/>
          }
        </Container>
    </FullBackgroundImage>
  </div>
);

QuoteBlockImage.defaultProps = {
  description: "What our customers are saying",
}

export default QuoteBlockImage;