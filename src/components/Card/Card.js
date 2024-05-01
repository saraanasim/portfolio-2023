import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import Image from 'next/image';
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
          loading='lazy'
          src={image}
          alt={description}
        />
      </div>

    </div>
  );
};

export default Card;