import { Copyright, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid hsla(214.3, 31.8%, 91.4%, 0.4);

  .info {
    display: flex;
    flex-direction: column;

    .copy {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 1rem;
      color: hsla(210, 40%, 98%, 0.8);

      svg {
        height: 16px;
        width: 16px;
      }
    }
    .design {
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: hsla(210, 40%, 98%, 0.8);
      .link {
        font-weight: 500;
        color: hsla(217.2, 91.2%, 59.8% );
      }
    }
  }
  .social {
    display: flex;
    height: fit-content;
    gap: 0.5rem;
    padding: 0 1rem;
    a {
      display: grid;
      place-content: center;
      height: 24px;
      width: 24px;
      padding: 4px;
      border-radius: 12px;
      border: 1px solid hsla(217.2, 32.6%, 17.5%);
      transition: all 0.4s;

      svg {
        color: hsla(210, 40%, 98%, 0.8);
        height: 18px;
        width: 18px;
      }
    }

    a:hover {
      border: 1px solid hsla(217.2, 91.2%, 59.8%, 0.6);
      background-color: hsla(217.2, 91.2%, 59.8%, 0.1);
      transition: all 0.4s;
      border-radius: 20px;

      svg {
        color: hsla(217.2, 91.2%, 59.8%);
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;

    .info {
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="info">
                <p className="copy">
                    Copyright
                    <span><Copyright /></span>
                    2024 ACE, Sastra.
                </p>
                <span className="design">
                    Designed by &nbsp;
                    <a
                        href="https://github.com/saketh-pallempati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        ACE Web Team
                    </a>
                </span>
            </div>
            <div className="social">
                <a
                    href="https://github.com/saketh-pallempati"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Exampl"
                >
                    <Github />
                </a>
                <a href="#contact" aria-label="Find us on Twitter">
                    <Twitter />
                </a>
                <a href="#contact" aria-label="Find us on Instagram">
                    <Instagram />
                </a>
                <a href="#contact" aria-label="Find us on Facebook">
                    <Facebook />
                </a>
                <a href="#contact" aria-label="Find us on LinkedIn">
                    <Linkedin />
                </a>
            </div>
        </FooterContainer>
    );
};

export default Footer;