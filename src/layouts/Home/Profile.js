import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { ImageComponent } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hey there!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am m Saraan, a web wizard on a mission to make your digital dreams come true, currently working
      as a Full Stack MERN Developer at <Link href="https://samsoft.dev/">Samsoft Technologies </Link>
      As you stroll through these virtual vibes, you will catch a glimpse of my skills in MERN stack magic,
      AWS CodePipelines mastery, and the art of Dockerization.
    </Text>
    <Text className={styles.heading} data-visible={visible} size="2" as="h2">
      🤝 For Software Houses, Clients, Recruiters, and Dev Buddies
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Whether you are a software house on the hunt for a tech sidekick, a client chasing digital stardom,
      a recruiter scouting the A-team, or a fellow dev looking for inspiration — you are in good hands.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <ImageComponent
                  reveal
                  delay={100}
                  placeholder={profileImg}
                  src={profileImg}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Saraan sitting on Kalam Bridge, posing for the camera, casually"
                />

              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
