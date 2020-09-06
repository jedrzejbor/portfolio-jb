import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import projectView from '../images/project.png';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import { device } from '../theme/deviceSize';
import LeftArrow from '../images/left_arrow.png';
import RightArrow from '../images/right_arrow.png';
import SquareTitle from '../components/atoms/SquareTitle/SquareTitle';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const WrapperProjectSection = styled.div`
  height: 100%;
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperTitle = styled.div`
  height: 50vh;
  width: 100%;
  padding-top: 50px;
  @media ${device.laptop} {
    height: 100vh;
    width: 50%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DesktopText = styled.div`
  @media ${device.laptop} {
    width: 80%;
  }
`;

const WrapperProject = styled.div`
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    width: 50%;
    margin: 0;
  }
`;

const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  @media ${device.tablet} {
    height: 45vh;
    width: 45vh;
  }
  @media ${device.laptop} {
    height: 35vh;
    width: 35vh;
  }
  @media ${device.laptopL} {
    height: 45vh;
    width: 50vh;
  }
`;
const ProjectName = styled.h3`
  font-size: 1.8rem;
  @media ${device.mobileM} {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
  @media ${device.laptopL} {
    font-size: 3rem;
  }
`;

const WrapperTechnologiesGithub = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 100px;
  }
`;

const TechnologiesWrapper = styled.div`
  display: inline-block;
  height: 60px;
  width: 50%;
`;

const GithubWrapper = styled.div`
  display: inline-block;
  height: 60px;
  width: 50%;
  padding-left: 20px;
`;

const TextBig = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 1.7rem;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;
const TextLow = styled.p`
  font-size: 1.1rem;
  @media ${device.mobileM} {
    font-size: 1.3rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.laptopL} {
    font-size: 1.3rem;
  }
`;
const Link = styled.a`
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  @media ${device.mobileM} {
    font-size: 1.3rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.laptopL} {
    font-size: 1.3rem;
  }
`;

const LinkDemo = styled(Link)`
  @media ${device.laptop} {
    padding-left: 20px;
  }
`;

const Line = styled.span`
  display: inline-block;
  height: 60px;
  width: 3px;
  background-color: #000;
  @media ${device.tablet} {
    height: 100px;
  }
  @media ${device.laptop} {
    height: 60px;
  }
`;

const WrapperButtonProject = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${device.laptop} {
    width: 35vw;
    justify-content: start;
    align-items: center;
  }
`;

const ButtonProject = styled.button`
  height: 20px;
  width: 50px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px 5px;
  overflow: hidden;
  background-color: #fff;

  @media ${device.mobileM} {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    height: 50px;
    width: 150px;
    border-radius: 30px;
  }
  @media ${device.laptop} {
    height: 30px;
    width: 100px;
  }
`;

const ButtonArrow = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  background: ${(props) => `url(${props.arrow})`};
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
`;

const Project = () => {
  const title = useRef(null);
  const project = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([title.current, project.current], { autoAlpha: 0 });
    gsap.fromTo(
      title.current,
      { x: 100 },
      {
        duration: 1,
        x: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 20%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
    gsap.fromTo(
      project.current,
      { x: -100 },
      {
        duration: 1,
        x: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 20%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
  });

  return (
    <Wrapper ref={wrapper}>
      <WrapperProjectSection>
        <WrapperTitle ref={title}>
          <DesktopText>
            <TopicTitle>
              <SquareTitle>Proj</SquareTitle>ects
            </TopicTitle>
            <ProjectName> 01. Weather App </ProjectName>
            <WrapperTechnologiesGithub>
              <TechnologiesWrapper>
                <TextBig> Technologies </TextBig> <TextLow> React, OpenWeatherApi </TextLow>
              </TechnologiesWrapper>
              <Line />
              <GithubWrapper>
                <TextBig> Github </TextBig> <Link href="https://github.com/jedrzejbor"> Link </Link>
              </GithubWrapper>
            </WrapperTechnologiesGithub>
            <WrapperButtonProject>
              <div>
                <ButtonProject>
                  <ButtonArrow arrow={LeftArrow} />
                </ButtonProject>
                <ButtonProject>
                  <ButtonArrow arrow={RightArrow} />
                </ButtonProject>
              </div>
              <LinkDemo href="https://github.com/jedrzejbor"> Open Demo </LinkDemo>
            </WrapperButtonProject>
          </DesktopText>
        </WrapperTitle>
        <WrapperProject ref={project}>
          <ProjectImage src={projectView} />
        </WrapperProject>
      </WrapperProjectSection>
    </Wrapper>
  );
};

export default Project;
