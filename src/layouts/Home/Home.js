import marketMakersTexture2Large from 'assets/market-makers/dashboard-mob.png';
import marketMakersTexture2Placeholder from 'assets/market-makers/dashboard-mob.png';
import marketMakersTexture2 from 'assets/market-makers/dashboard-mob.png';
import marketMakersTextureLarge from 'assets/market-makers/dashboard-mob-2.png';
import marketMakersTexturePlaceholder from 'assets/market-makers/dashboard-mob-2.png';
import marketMakersTexture from 'assets/market-makers/dashboard-mob-2.png';
import dogwoodTextureLarge from 'assets/dogwood/home.png';
import dogwoodTexturePlaceholder from 'assets/dogwood/home.png';
import dogwoodTexture from 'assets/dogwood/home.png';
import deeplawnTextureLarge from 'assets/deeplawn/dashboard.png';
import deeplawnTexturePlaceholder from 'assets/deeplawn/dashboard.png';
import deeplawnTexture from 'assets/deeplawn/dashboard.png';
import kghypeTexture2Large from 'assets/kghype/home-mob.png';
import kghypeTexture2Placeholder from 'assets/kghype/home-mob.png';
import kghypeTexture2 from 'assets/kghype/home-mob.png';
import kghypeTextureLarge from 'assets/kghype/home-mob-2.png';
import kghypeTexturePlaceholder from 'assets/kghype/home-mob-2.png';
import kghypeTexture from 'assets/kghype/home-mob-2.png';
import servicecartTextureLarge from 'assets/servicecart/home.png';
import servicecartTexturePlaceholder from 'assets/servicecart/home.png';
import servicecartTexture from 'assets/servicecart/home.png';
import rtmTexture2Large from 'assets/rtm/home-mob.png';
import rtmTexture2Placeholder from 'assets/rtm/home-mob.png';
import rtmTexture2 from 'assets/rtm/home-mob.png';
import rtmTextureLarge from 'assets/rtm/home-mob-2.png';
import rtmTexturePlaceholder from 'assets/rtm/home-mob-2.png';
import rtmTexture from 'assets/rtm/home-mob-2.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import ProjectCarousel from 'components/ProjectCarousel/ProjectCarousel';
import { Heading } from 'components/Heading';
import TechStack from 'components/techstack/TechStack';

const disciplines = ['Software Engineer', 'Algorithm Designer', 'DevOps Enthusiast', 'Tech Writer', 'Traveller'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const otherProjects = useRef();
  const techStack = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, otherProjects, techStack, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Full Stack Developer"
        description="Design portfolio of Saraan Asim — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility having expertise in MERN Stack, Next and Nest js"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Deep Lawn - AI Based Lawn Measurement"
        description="The Ultimate sales tool for Lawn Care & Pest Control Companies"
        buttonText="View website"
        buttonLink="https://deeplawn.com/"
        model={{
          type: 'laptop',
          alt: 'Deep Lawn - AI Based Lawn Measurement',
          textures: [
            {
              srcSet: [deeplawnTexture, deeplawnTextureLarge],
              placeholder: deeplawnTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Market Makers - Market Analytics & AI Research Tool"
        description="AI-driven world-class research tools, real time financial information, algorithmic investment insights & analytics to stay ahead in the global trading game"
        buttonText="View website"
        buttonLink="https://marketmakers.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [marketMakersTexture, marketMakersTextureLarge],
              placeholder: marketMakersTexturePlaceholder,
            },
            {
              srcSet: [marketMakersTexture2, marketMakersTexture2Large],
              placeholder: marketMakersTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Dogwood Analytics - Hybrid business intelligence tool"
        description="A tailored hybrid software program that performs as a business intelligence tool combining all aspects of your business on a straightforward yet effective system"
        buttonText="View website"
        buttonLink="https://www.dogwoodsuite.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [dogwoodTexture, dogwoodTextureLarge],
              placeholder: dogwoodTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="KGHYPE - Taobao Agent"
        description="Affordables and Efficient Shipping and Logisitics."
        buttonText="View website"
        buttonLink="https://www.kghype.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [kghypeTexture, kghypeTextureLarge],
              placeholder: kghypeTexturePlaceholder,
            },
            {
              srcSet: [kghypeTexture2, kghypeTexture2Large],
              placeholder: kghypeTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Service Cart - Sales tool for Cleaning Companies"
        description="Service Cart enables Cleaning companies to sell their services online in seconds by combining machine learning, geospatial data, and payment processing into an all-in-one e-commerce tool."
        buttonText="View website"
        buttonLink="https://servicecart.io/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [servicecartTexture, servicecartTextureLarge],
              placeholder: servicecartTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Ready To Munch - Online Food Ordering App"
        description="Ready to Munch offers a long and detailed list of the best restaurants nearby with menu items at the same restaurants' price, with no extra fee available to order food Online with home delivery and takeaway options."
        buttonText="View website"
        buttonLink="https://readytomunch.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [rtmTexture, rtmTextureLarge],
              placeholder: rtmTexturePlaceholder,
            },
            {
              srcSet: [rtmTexture2, rtmTexture2Large],
              placeholder: rtmTexture2Placeholder,
            },
          ],
        }}
      />
      <Heading
        level={3}
        as="h2"
        className={styles.heading}
        data-visible={visibleSections.includes(otherProjects.current)}
        id={null}
      >
        Other Projects
      </Heading>
      <ProjectCarousel
        sectionRef={otherProjects}
        visible={visibleSections.includes(otherProjects.current)}
        id="other-projects" />
      <Heading
        level={3}
        as="h2"
        className={styles.heading}
        data-visible={visibleSections.includes(otherProjects.current)}
        id={null}
      >
        My Tech Stack
      </Heading>
      <TechStack id="tech-stack" sectionRef={techStack}
        visible={visibleSections.includes(techStack.current)} />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
