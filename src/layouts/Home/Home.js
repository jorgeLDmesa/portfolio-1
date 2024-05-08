import sliceSaas from 'assets/SAAS.png';
import sliceTextureLarge from 'assets/slice-app-large.png';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.png';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Helmet } from 'react-helmet';

const disciplines = ["AI", "Backend", "Data Science"];


export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  
  
  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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
      <Helmet>
    </Helmet>
      <Meta
        title="Phycisist & Software Developer"
        description="Design portfolio of Jorge L.D Mesa"
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
        title="B-Tagging with Graph Neural Networks for CERN"
        description="This degree project explores the cutting-edge application of graph neural networks (GNNs) for b-tagging in particle physics experiments at CERN. Utilizing PyTorch alongside essential data science libraries (Numpy, Pandas, Matplotlib, and Scikit-learn), it demonstrates the development of sophisticated GNN models capable of identifying b-quarks in complex collision data. The training process leveraged Monte Carlo collision simulations processed with ROOT, CERN's C++ framework, showcasing an integration of machine learning with high-energy physics research."
        buttonText="View more"
        buttonLink="https://github.com/jorgeluisd14"
        model={{
          type: 'laptop',
          alt: 'Screenshot of the current UI',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
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
        title="SAAS Facial Recognition for Recording Work Hours"
        description="Creation of a SAAS system for recording work hours through facial recognition, implementing technologies such as JavaScript, FastAPI, OpenCV, Supabase (PostgreSQL) and Plotly Dash for data visualization."
        buttonText="View website"
        buttonLink="https://github.com/jorgeluisd14e"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sliceSaas,sliceSaas],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="OrderBot Pro: Python & Telegram API for Restaurant Automation, with Firebase & AWS"
        description="OrderBot Pro elevates restaurant service efficiency by combining a Python-developed Telegram chatbot with Google Firebase's real-time database and AWS cloud hosting. This project outlines how the Telegram API facilitates smooth order transactions while Firebase ensures live data synchronization for order tracking and analytics. The integration with a React dashboard developed in JavaScript provides a compelling user interface for real-time order and sales monitoring"
        buttonText="View website"
        buttonLink="https://github.com/jorgeluisd14"
        model={{
          type: 'laptop',
          alt: 'A screenshot of the current UI',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
