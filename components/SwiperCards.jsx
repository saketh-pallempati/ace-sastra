import Image from 'next/image';
import styled from 'styled-components';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from 'components/SectionTitle';

const SwiperCards = () => {

  const clusters = [
    { name: 'Tulip Raaj K', cluster: 'President', imageURL: '/Leads/Tulip raaj.jpg' },
    { name: 'Ananya C', cluster: 'Secretary', imageURL: '/Leads/Ananya C.jpg' },
    { name: 'Srinivasa Rengasayee', cluster: 'Treasurer', imageURL: '/Leads/Rengasayee.jpeg' },
    { name: 'Tharun S K', cluster: 'Organizing secretary', imageURL: '/Leads/Tharun S K.jpg' },
    { name: 'Shiny Grace F', cluster: 'Creative head', imageURL: '/Leads/ShinyGrace.jpg' },
    { name: 'Sherlin Preethi J', cluster: 'Technical head', imageURL: '/Leads/SherlinPreethiJ.jpg' },
    { name: 'Naveen Kumar S', cluster: 'Public relations officer', imageURL: '/Leads/Naveen Kumar.jpg' }
  ];

  return (
    <Container>
      <SectionTitle>Meet Our Club Bearers</SectionTitle>
      <Collection>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
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
              slidesPerView: 3,
              spaceBetween: 20,
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
                  src={cluster.imageURL}
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

const Collection = styled.section`
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    width: 90%;
  }

  .swiper-wrapper {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 34rem;
  width: 25rem;
  background-color: rgb(var(--secondBackground));
  border: 0.2rem solid rgba(255, 255, 255, 0.1);
  border-radius: 0.7rem;
  border-bottom: 0.4rem solid #0099ff;
  border-top: 0.4rem solid #0099ff;
  overflow: hidden;
  padding: 1rem;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    height: 28rem;
    width: 20rem;

    img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    height: 24rem;
    width: 18rem;

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    max-width: 22rem;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }

    @media (max-width: 480px) {
      font-size: 0.6rem;
    }
  }
`;