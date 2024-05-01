import awsLogo from 'assets/aws.png';
import dockerLogo from 'assets/docker.png';
import expressLogo from 'assets/express.png';
import gatsbyLogo from 'assets/gatsby.png';
import javascriptLogo from 'assets/javascript.png';
import mongoLogo from 'assets/mongo.png';
import sqlLogo from 'assets/mysql.png';
import nestLogo from 'assets/nest.png';
import nextLogo from 'assets/next.webp';
import nodeLogo from 'assets/node.png';
import reactLogo from 'assets/react.png';
import typescriptLogo from 'assets/typescript.png';
import { TechCard } from 'components/TechCard/TechCard';
import { useState } from 'react';

import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import styles from './TechStack.module.css';

const TechStack = ({ sectionRef, visible, id }) => {
    const titleId = `${id}-title`;
    const [focused, setFocused] = useState(false);
    const skills = [
        {
            text: "React js",
            image: reactLogo
        },
        {
            text: "Node js",
            image: nodeLogo
        },
        {
            text: "Mongo DB",
            image: mongoLogo
        }
        ,
        {
            text: "Express js",
            image: expressLogo
        }
        ,
        {
            text: "Nest js",
            image: nestLogo
        },
        {
            text: "Next js",
            image: nextLogo
        }
        ,
        {
            text: "AWS",
            image: awsLogo
        },
        {
            text: "Docker",
            image: dockerLogo
        },

        {
            text: "Gatsby js",
            image: gatsbyLogo
        },
        {
            text: "Javascript",
            image: javascriptLogo
        }
        ,
        {
            text: "Typescript",
            image: typescriptLogo
        }
        ,
        {
            text: "SQL",
            image: sqlLogo
        },


    ];
    return (
        <Section
            className={styles.techStack}
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
                    <div className={styles.mainDiv}>
                        {skills.map((each) => {
                            return <TechCard key={each.text} image={each.image} text={each.text} />;
                        })}
                    </div>
                )}
            </Transition>
        </Section>
    );
};

export default TechStack;