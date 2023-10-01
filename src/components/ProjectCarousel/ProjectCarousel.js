import React, { useState } from 'react'
import consortiumImage from 'assets/consortium.png';
import xsisecImage from 'assets/xsisec.png';
import sachcodeImage from 'assets/sachcode.png';
import davidseculImage from 'assets/davidsecul.png';
import styles from './ProjectCarousel.module.css';
import Card from 'components/Card/Card';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
const ProjectCarousel = ({ sectionRef, visible, id }) => {
    const titleId = `${id}-title`;
    const [focused, setFocused] = useState(false);
    const otherProjects = [
        { name: "Consortium X", description: "UK based Company Website", image: consortiumImage, link: "https://consortiumx.co.uk/" },
        { name: "David Secul", description: "Portfolio Website", image: davidseculImage, link: "https://consortiumx.co.uk/" },
        { name: "Sachin Jha", description: "Blog Website", image: sachcodeImage, link: "https://consortiumx.co.uk/" },
        { name: "Xsisec", description: "Portfolio Website", image: xsisecImage, link: "https://consortiumx.co.uk/" }
    ]
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
                            return <Card name={each.name} description={each.description} image={each.image} link={each.link} visible={visible} />
                        })}
                    </div>
                )}
            </Transition>
        </Section>
    )
}

export default ProjectCarousel