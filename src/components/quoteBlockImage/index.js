import React from 'react';
import cn from 'classnames';
import FullBackgroundImage from '../fullBackgroundImage';
import Container from '../container';
import CenterTextBlock from '../centerTextBlock';
import Author from '../author';
import styles from './style.module.css';

const QuoteBlockImage = ({animate, imgSrc, description, quote, author, className, style}) => (
  <div style={{
    position: "relative",
    height: "80vh",
    ...style,
  }}>
    <FullBackgroundImage imgSrc={imgSrc} className={cn(styles.quoteBlockContainer, className)} gradient>
        <Container className={styles.container}>
          <CenterTextBlock
            description={description}
            headline={quote + "&#8221;"}
            className={styles.quoteTextBlock}
            animate={animate}
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