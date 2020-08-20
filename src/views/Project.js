import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import projectView from '../images/project.png';
import TopicTitle from '../components/atoms/TopicTitle/TopicTitle';
import { device } from '../theme/deviceSize';
import LeftArrow from '../images/left_arrow.png';
import RightArrow from '../images/right_arrow.png';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const WrapperTitle = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  padding-top: 50px;
`;

const WrapperProject = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImage = styled.img`
  height: 30vh;
  width: 30vh;
  @media ${device.tablet} {
    height: 45vh;
    width: 45vh;
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
  width: 37vw;
`;

const GithubWrapper = styled.div`
  display: inline-block;
  height: 60px;
  width: 37vw;
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
`;
const TextLow = styled.p`
  font-size: 1.1rem;
  @media ${device.mobileM} {
    font-size: 1.3rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
const Link = styled.a`
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  @media ${device.mobileM} {
    font-size: 1.3rem;
  }
  @media ${device.mobileM} {
    font-size: 1.9rem;
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
`;

const ButtonContact = styled(Button)`
  display: block;
  margin: 0 auto;
  @media ${device.mobileM} {
    margin-top: 20px;
  }
`;

const WrapperButtonProject = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
`;

const ButtonProject = styled.button`
  height: 30px;
  width: 40px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 10px 10px;
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
  return (
    <Wrapper>
      <WrapperTitle>
        <TopicTitle> Projects </TopicTitle> <ProjectName> 01. Weather App </ProjectName>
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
          <ButtonProject>
            <ButtonArrow arrow={LeftArrow} />
          </ButtonProject>
          <ButtonProject>
            <ButtonArrow arrow={RightArrow} />
          </ButtonProject>
        </WrapperButtonProject>
        <ButtonContact> Contact </ButtonContact>
      </WrapperTitle>
      <WrapperProject>
        <ProjectImage src={projectView} />
      </WrapperProject>
    </Wrapper>
  );
};

export default Project;
