import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    name: 'CodeRush ‘24 Coding Contest',
    content: `CodeRush ‘24, a coding contest organized in partnership with AZAC, engaged students in rigorous coding challenges across multiple rounds. With 450 registrations for the online round and 65 participants in the final offline round, CodeRush ‘24 provided a platform for students to showcase their coding skills and problem-solving abilities, fostering a spirit of competition and camaraderie within the student community.`,
    author: {
      date: '24 March, 2024 (Round - 1), 28 March, 2024 (Final Round)',
      venue: 'Hackerank (Round – 1), LTC 204 and LTC 206 (Final Round)',
    },
    imageURL: '/Events/coderush.jpg',
  },
  {
    name: 'LINUX Intern Launchpad',
    content: `In collaboration with Electromech Corporation, ACE organized the Linux Internship Qualifying Test to offer summer internship opportunities for 3rd-year students. The test, focusing on Computer Networks and Operating Systems, saw active participation from 128 students out of 168 registrations. This initiative aimed to bridge the gap between academia and industry by providing practical experience in a real-world setting.`,
    author: {
      date: '19 February, 2024',
      venue: 'TIFAC Core, SoC Lab',
    },
    imageURL: '/Events/Linux Intern Launchpad.jpg',
  },
  {
    name: 'Study Summit Workshop',
    content: `Ms. Victoria McEniery, Senior Regional Market Manager of University of Otago, conducted a workshop highlighting academic opportunities abroad. With a focus on the Semester Abroad Program, Ms. McEniery showcased the benefits of studying at a top-ranked university in New Zealand, fostering international collaboration and cultural exchange among students.`,
    author: {
      date: '22 February, 2024',
      venue: 'LTC 201',
    },
    imageURL: '/Events/NZ.jpg',
  },
  {
    name: 'Quality Control Using MiniTab',
    content: `Dr. B. Thamodharan and Dr. A.L. Sriram led a workshop on Quality Control using MiniTab tools, aimed at empowering MCA 2nd-year students with practical strategies for organizational effectiveness. With 116 enthusiastic participants, the workshop focused on real-world applications of quality management techniques, equipping students with essential skills for their professional journey.`,
    author: {
      date: '6 March, 2024',
      venue: 'LTC 201',
    },
    imageURL: '/Events/minitab.jpg',
  },
  {
    name: 'Know Your Professor',
    content: `The "Know Your Professor" event provided students with insights into the research domains of SoC faculty members. Through presentations by esteemed professors, students gained exposure to diverse research areas and potential collaboration opportunities. This interactive platform facilitated meaningful connections between students and faculty, fostering a culture of research and innovation within the department.`,
    author: {
      date: '6 March, 2024',
      venue: 'LTC 101',
    },
    imageURL: '/Events/kyp.jpg',
  },
  {
    name: 'Craft Your Career Talk',
    content: `    We had an insightful session with Shri. Venkatesh Bhupathi, an alumnus of SASTRA and Principal Manager at Microsoft Experiences + Devices, who provided exclusive career guidance to SOC final year students, encouraging them to take bold steps in their professional environment.`,
    author: {
      date: '24 August, 2024',
      venue: 'SoC Auditorium',
    },
    imageURL: '/Events/micro.jpg',
  },
];

export default function Testimonials() {
  return (
    <div>
      <TestimonialsWrapper>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          centeredSlides
          navigation
          loop
          touchRatio={1.5}
          touchReleaseOnEdges={true}
          resistanceRatio={0.85}
        >
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <Title>{singleTestimonial.name}</Title>
                <ImageContainer>
                  <StyledImage src={singleTestimonial.imageURL} alt="Testimonials" layout='fill' />
                  <Overlay className="overlay">
                    <Content>“{singleTestimonial.content}”</Content>
                  </Overlay>
                </ImageContainer>
                <AuthorContainer>
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.date}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.venue}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
    </div>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  aspect-ratio: 16 / 9; /* Maintain 4:3 aspect ratio */
  margin: 0 auto; /* Center the container */
  overflow: hidden;
  
  &:hover .overlay {
    opacity: 1;
  }

  &:hover img {
    filter: blur(5px);
  }
  ${media('<=desktop')} {
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow: scroll;

  ${media('<=desktop')} {
    padding: 1rem;
    font-size: 0.5rem;
  }
`;

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2rem;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
    font-size: 1rem;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;