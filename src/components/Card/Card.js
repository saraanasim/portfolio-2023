import React from 'react'
import styles from './Card.module.css';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { Image } from 'components/Image';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
import { media } from 'utils/style';
const Card = ({ name, description, image, buttonText = "Visit", link, visible }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.topRow}>

        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={name}
        >
          {name}
        </Heading>
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={link} iconEnd="arrowRight">
            {buttonText}
          </Button>
        </div>
      </div>
      <Text className={styles.description} data-visible={visible} as="p">
        {description}
      </Text>
      <Image
        srcSet={[image, image]}
        placeholder={sliceSlidesPlaceholder}
        alt="The new My Slides tab in slice, showing annotated and favorited slides."
        sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
      />

    </div>
  )
}

export default Card