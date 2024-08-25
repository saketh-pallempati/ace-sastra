import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/Clusters/WD.png',
    title: 'Web Development',
    description:
      'Dive into the world of web development by building dynamic and responsive websites. Enhance your skills in both front-end and back-end technologies while working on impactful projects that elevate ACE’s online presence.',
  },
  {
    imageUrl: '/Clusters/AD.png',
    title: 'App Development',
    description:
      'Join the app development sub-cluster to create innovative mobile applications. Gain hands-on experience in designing and developing apps that solve real-world problems and contribute to ACE’s digital ecosystem.',
  },
  {
    imageUrl: '/Clusters/AIML.png',
    title: 'Artificial Intelligence and Machine Learning',
    description:
      'Members will delve into the world of AI and ML, working on projects that involve data analysis, machine learning models, and AI applications. They will stay updated with the latest trends and advancements in the field.',
  },
  {
    imageUrl: '/Clusters/cyber.png',
    title: 'Cybersecurity',
    description:
      'This sub-cluster is dedicated to understanding and implementing security measures to protect information systems. Members will learn about various cybersecurity practices, ethical hacking, and how to safeguard against cyber threats.',
  },
  {
    imageUrl: '/Clusters/CP.png',
    title: 'Competitive Programming',
    description:
      'Members will engage in competitive programming, solving complex problems and participating in coding competitions. This sub-cluster aims to enhance problem-solving skills and algorithmic thinking.',
  },
  {
    imageUrl: '/Clusters/GD.png',
    title: 'Graphic Designing for posters and posts',
    description:
      'This sub-cluster focuses on creating visually appealing graphics for posters and social media posts. Members will use their design skills to create engaging and informative visual content.',
  },
  {
    imageUrl: '/Clusters/video.png',
    title: 'Video Editing',
    description:
      'Members will be responsible for editing videos for various ACE events and promotional materials. They will use their editing skills to create professional and engaging video content.',
  },
  {
    imageUrl: '/Clusters/CW.png',
    title: 'Content Writing',
    description:
      "This sub-cluster focuses on writing content for various media, including blogs, social media posts, and promotional materials. Members will use their writing skills to convey ACE's message clearly and professionally.",
  },
  {
    imageUrl: '/Clusters/Opcon.png',
    title: 'OpCon (Operations and Control)',
    description:
      'Members of this sub-cluster will ensure that all events and activities run smoothly. They will be responsible for the logistical aspects of events, ensuring that everything is well-organized and executed efficiently.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
