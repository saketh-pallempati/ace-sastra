import Image from 'next/image';
import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoContainer {...rest}>
      <Image src={'/ACE-bgless.png'} width={50} height={50} alt="Logo" />
      <LogoText>ACE</LogoText>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 24px;
  margin-left: 10px;

  --s: 0.1em;
  --c: rgb(var(--primary));

  padding-bottom: var(--s);
  background: linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.5s;

  &:hover {
    --_p: 100%;
  }
`;
