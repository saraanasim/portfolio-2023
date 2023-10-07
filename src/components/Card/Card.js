import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Text } from 'components/Text';
import { media } from 'utils/style';
import styles from './Card.module.css';
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
      <div className={styles.image}>

        <Image

          srcSet={[image, image]}
          placeholder={image}
          alt="The new My Slides tab in slice, showing annotated and favorited slides."
          sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
        />
      </div>

    </div>
  );
};

export default Card;