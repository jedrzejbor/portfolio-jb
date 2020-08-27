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
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperTitle = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  padding-top: 50px;
  @media ${device.laptop} {
    width: 35vw;
    margin: 0;
    /* background-color: red; */
  }
`;

const WrapperTextCenter = styled.div`
  @media ${device.laptopL} {
    /* background-color: blue; */
    width: 70%;
    margin: 0 auto;
  }
`;

const WrapperProject = styled.div`
  height: 50vh;
  width: 75vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    width: 35vw;
    margin: 0;
  }
`;

const ProjectImage = styled.img`
  height: 30vh;
  width: 30vh;
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
  @media ${device.laptop} {
    width: 35vw;
    justify-content: start;
    align-items: center;
  }
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
  return (
    <Wrapper>
      <WrapperTitle>
        {/* <WrapperTextCenter> */}
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
        {/* </WrapperTextCenter> */}
        <WrapperButtonProject>
          <ButtonProject>
            <ButtonArrow arrow={LeftArrow} />
          </ButtonProject>
          <ButtonProject>
            <ButtonArrow arrow={RightArrow} />
          </ButtonProject>
          <LinkDemo href="https://github.com/jedrzejbor"> Open Demo </LinkDemo>
        </WrapperButtonProject>
        {/* <ButtonContact> Contact </ButtonContact> */}
      </WrapperTitle>
      <WrapperProject>
        <ProjectImage src={projectView} />
      </WrapperProject>
    </Wrapper>
  );
};

export default Project;
