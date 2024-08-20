import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import SwiperCards from 'components/SwiperCards.jsx';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Testimonials from 'views/HomePage/Testimonials';
import FaqSection from 'views/PricingPage/FaqSection';
export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="The Association of Computing Engineers (ACE) is the official club of the School of Computing at SASTRA Deemed University. Established with the aim of promoting excellence in computing education and research, ACE organizes a wide range of events, hackathons, webinars, and workshops throughout the academic year"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Code - Build - Progress" overTitle="About Us">
            <p>
              Driven by the principles of innovation, excellence, collaboration, education, and community, ACE provides students with
              opportunities to enhance their technical skills, explore emerging technologies, and connect with industry professionals. ACE
              welcomes all students with a passion for computing to join us in our journey of learning, innovation, and growth. Come be a
              part of our vibrant community and unleash your potential in the exciting world of computing!
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Mission of ACE " overTitle=" Here's what we're all about" reversed>
            <p>
              At ACE, our mission is to create an exciting and collaborative environment within the School of Computing. We want to help
              students thrive in the world of computing through <strong> events, hackathons, webinars, and more... </strong>
            </p>
            <ul>
              <li>Inspiring Innovation</li>
              <li>Supporting Collabration</li>
              <li>Encouraging Excellence</li>
              <li>Research Advancement</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <SwiperCards />
          <div id="clusters">
            <Features />
          </div>
          <div id="events">
            <Testimonials />
          </div>

          <div id="faq-section">
            <FaqSection />
          </div>

        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
  
  @media (max-width: 768px) {
    & > :last-child {
      margin-bottom: 5rem; // Adjusted for smaller screens
    }
  } `;

const DarkerBackgroundContainer = styled.div`
    background: rgb(var(--background));
  
    & > *:not(:first-child) {
      margin-top: 15rem;
    }
  
    @media (max-width: 768px) {
      & > *:not(:first-child) {
        margin-top: 5rem; // Adjusted for smaller screens
      }
    }
  `;

const WhiteBackgroundContainer = styled.div`
    background: rgb(var(--secondBackground));
  
    & > :last-child {
      padding-bottom: 15rem;
    }
  
    & > *:not(:first-child) {
      margin-top: 15rem;
    }
  
    @media (max-width: 768px) {
      & > :last-child {
        padding-bottom: 5rem; // Adjusted for smaller screens
      }
  
      & > *:not(:first-child) {
        margin-top: 5rem; // Adjusted for smaller screens
      }
    }
  `;