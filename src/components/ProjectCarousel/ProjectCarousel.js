import consortiumImage from 'assets/consortium.png';
import davidseculImage from 'assets/davidsecul.png';
import sachcodeImage from 'assets/sachcode.png';
import xsisecImage from 'assets/xsisec.png';
import Card from 'components/Card/Card';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import styles from './ProjectCarousel.module.css';
const ProjectCarousel = ({ sectionRef, visible, id }) => {
    const titleId = `${id}-title`;
    const [focused, setFocused] = useState(false);
    const otherProjects = [
        { name: "Consortium X", description: "UK based Company Website", image: consortiumImage, link: "https://consortiumx.co.uk/" },
        { name: "David Secul", description: "Portfolio Website", image: davidseculImage, link: "https://consortiumx.co.uk/" },
        { name: "Sachin Jha", description: "Blog Website", image: sachcodeImage, link: "https://consortiumx.co.uk/" },
        { name: "Xsisec", description: "Portfolio Website", image: xsisecImage, link: "https://consortiumx.co.uk/" }
    ];
    return (

        <Section
            className={styles.otherProjects}
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
                        {otherProjects.map((each) => {
                            return <Card key={each.name} name={each.name} description={each.description} image={each.image} link={each.link} visible={visible} />;
                        })}
                    </div>
                )}
            </Transition>
        </Section>
    );
};

export default ProjectCarousel;