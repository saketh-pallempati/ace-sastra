import React, { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

export default function BasicCard({ title, description, imageUrl }: BasicCardProps) {
  const cardRef = useRef<TiltHTMLElement>(null);

  function mouseMoveEvent(e: MouseEvent) {
    if (cardRef.current) {
      const { x, y } = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty('--x', `${e.clientX - x}px`);
      cardRef.current.style.setProperty('--y', `${e.clientY - y}px`);
    }
  }

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 1000,
        glare: false,
      });
      cardRef.current.addEventListener('mousemove', mouseMoveEvent);
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.vanillaTilt.destroy();
        cardRef.current.removeEventListener('mousemove', mouseMoveEvent);
      }
    };
  }, []);

  return (
    <Card ref={cardRef}>
      <NextImage src={imageUrl} width={128} height={128} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: var(--cardBackground);
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%);
    background: var(--cardShine); 
    pointer-events: none;
    transition: opacity 0.2s;
  }

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;