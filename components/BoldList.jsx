import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

const BoldList = () => {
  const [selectedItem, setSelectedItem] = useState('Innovation');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Gallery>
      <StyledParagraph data-item="Principles">Principles</StyledParagraph>
      <StyledNav>
        <MenuContainer>
          {['Innovation', 'Excellence', 'Collaboration', 'Education', 'Community'].map((item) => (
            <MenuItem
              key={item}
              data-item={item}
              onClick={() => handleItemClick(item)}
              isSelected={selectedItem === item}
            >
              {item}
            </MenuItem>
          ))}
        </MenuContainer>
      </StyledNav>
      <TextSection isVisible={!!selectedItem}>
        {selectedItem === 'Innovation' && <StyledBlockquote>We believe in fostering a culture of innovation by encouraging creative thinking, problem-solving, and the exploration of new ideas in the field of computing.</StyledBlockquote>}
        {selectedItem === 'Excellence' && <StyledBlockquote>Our commitment to excellence drives us to strive for the highest standards of quality in all our endeavors, whether it&apos;s organizing events, hackathons, webinars, or any other activities.</StyledBlockquote>}
        {selectedItem === 'Collaboration' && <StyledBlockquote>We value collaboration and teamwork, recognizing that collective effort and diverse perspectives lead to greater success and innovation.</StyledBlockquote>}
        {selectedItem === 'Education' && <StyledBlockquote>ACE is dedicated to promoting continuous learning and skill development among its members, providing opportunities for growth and advancement in the ever-evolving field of computing.</StyledBlockquote>}
        {selectedItem === 'Community' && <StyledBlockquote>We are committed to building a strong and supportive community of computing enthusiasts, where members can connect, share knowledge, and inspire each other to achieve their goals.</StyledBlockquote>}
      </TextSection>
    </Gallery>
  );
};

const Gallery = styled.div`
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-size: 69px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;

  ${media('<tablet')} {
    font-size: 48px;
  }

  ${media('<phone')} {
    font-size: 32px;
  }
`;

const StyledNav = styled.nav`
  padding: 16px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;

  ${media('<tablet')} {
    div {
      margin: 15px;
    }
  }

  ${media('<phone')} {
    flex-direction: column;
    align-items: center;

    div {
      margin: 10px;
    }
  }
`;

const MenuItem = styled.div`
  text-decoration: none;
  color: ${({ isSelected }) => (isSelected ? 'rgb(var(--primary))' : '#8f8f8f')};
  font-size: 24px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  position: relative;
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  overflow: hidden;
  margin: 20px;

  &:hover {
    color: rgb(var(--primary));
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      z-index: -1;
    }
  `}
`;

const TextSection = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-top: 20px;
`;

const StyledBlockquote = styled.blockquote`
  padding: 60px 40px 40px;
  position: relative;
  font-family: "Utopia-italic";
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: rgb(100, 100, 100);
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInSlideDown 1s forwards;

  ${media('<tablet')} {
    font-size: 20px;
  }

  ${media('<phone')} {
    font-size: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="%23ffffff" d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>') no-repeat center;
    background-size: contain;
    opacity: 0.2;
  }

  &::after {
    content: "";
    top: 20px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    border-bottom: 3px solid rgb(var(--primary));
    height: 3px;
    width: 200px; 
  }

  @keyframes fadeInSlideDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default BoldList;