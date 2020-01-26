import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

import { APP_NAME } from '../constants'

const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

// be the change you want to see in your community: help those in need

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const About = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>How it works</SectionTitle>
        {/* <SubTitle>Lorem ipsum dolor sit amet</SubTitle> */}
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Food</BoxTitle>
              <Text>
                Use the app to give leftovers, fast food, or any other food items to those in need near you.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Shelter</BoxTitle>
              <Text>
                You can donate clothes/tents, and any other survival gear. Or help give rides to homeless shelters.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Community</BoxTitle>
              <Text>
                Seemless interactions that bring change to the people who need it most.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;




