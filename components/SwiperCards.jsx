import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperCards = () => {
  const [clusters, setClusters] = useState([
    { name: 'Lead_Name', cluster: 'President' },
    { name: 'Lead_Name', cluster: 'General secretary' },
    { name: 'Lead_Name', cluster: 'Organizing secretary' },
    { name: 'Lead_Name', cluster: 'Technical head' },
    { name: 'Lead_Name', cluster: 'Non tech head' },
    { name: 'Lead_Name', cluster: 'Public relations' },
    { name: 'Lead_Name', cluster: 'Event coordinator' }
  ]);

  return (
    <Container>
      <Lead>Meet Our Club Bearers</Lead>
      <Collection>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            400: {
            slidesPerView: 2,
              spaceBetween: 10,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation, EffectCoverflow]}
        >
          {clusters.map((cluster, index) => (
            <SwiperSlide key={index}>
              <Content>
                <Image
                  width="200"
                  height="200"
                  src="/Leads/author-photo-3.jpeg"
                  alt={cluster.name}
                />
                <TextContent>
                  <h3>{cluster.name}</h3>
                  <p>{cluster.cluster}</p>
                </TextContent>
              </Content>
            </SwiperSlide>
          ))}

        </Swiper>
      </Collection>
    </Container>
  );
};

export default SwiperCards;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,500&display=swap");
`;

const Lead = styled.h1`
  text-align: center;
  margin: 2rem;
`;

const Collection = styled.section`
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  .swiper {
    width: 100%;
  }

  .swiper-wrapper {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 34rem;
  width: 25rem;
  background-color: rgb(var(--secondBackground));
  border: 0.2rem solid rgba(255, 255, 255, 0.1);
  border-radius: 0.7rem;
  border-bottom: 0.4rem solid #0099ff;
  border-top: 0.4rem solid #0099ff;
  overflow: hidden;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 1.7rem;
    font-weight: 500;
  }

  p {
    max-width: 22rem;
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
  }
`;