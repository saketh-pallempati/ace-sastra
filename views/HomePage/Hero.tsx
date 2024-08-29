import styled from 'styled-components';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import HeroLogo from 'components/HeroLogo';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the official club of the School of Computing</CustomOverTitle>
        <Heading>Association of Computing Engineers</Heading>
        <Description>
          Established with the aim of promoting excellence in computing education and research, ACE organizes a wide range of events, hackathons, webinars, and workshops throughout the academic year.
        </Description>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
        <LogoContainer>
          <HeroLogo />
        </LogoContainer>
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    width: 100%; 
    height: auto; 
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  svg {
    border-radius: 3rem;
    max-height: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  pointer-events: auto;
  margin: 0 6%;
  z-index: 1;
  mix-blend-mode: screen;

  ${media('<=desktop')} {
    margin-top: 2rem;
    padding: 10%;
    justify-content: center;
    align-items: center;
  }

  svg {
    border-radius: 50%;
    transition: transform 0.5s ease-out; 
  }

  &:hover svg {
    transform: scale(1.03);
    animation: electric-border 1.5s infinite;
  }

  @keyframes electric-border {
    0% {
      box-shadow: 0 0 3px #00bfff, 0 0 6px #00bfff, 0 0 12px #00bfff, 0 0 24px #00bfff;
    }
    50% {
      box-shadow: 0 0 6px #1e90ff, 0 0 12px #1e90ff, 0 0 24px #1e90ff, 0 0 48px #1e90ff;
    }
    100% {
      box-shadow: 0 0 3px #00bfff, 0 0 6px #00bfff, 0 0 12px #00bfff, 0 0 24px #00bfff;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
