import React from 'react'
import styled, {keyframes} from 'styled-components'
import chairOne from './assets/chair_rock.png'
import chairTwo from './assets/chair_snow.png'
import longshot from './assets/longshotchair.jpg'
import insitu from './assets/insituchair.png'
import prog from './assets/midprochair.jpg'
import before from './assets/beforechair.jpg'
import detail from './assets/detail.jpg'
import Flash from 'react-animations/lib/flash'
import { IoIosArrowDown } from 'react-icons/io'

const arrowAnimation = keyframes`${Flash}`

const ArrowDiv = styled.div`
  opacity: 1;
  width: 100%;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 20px;
  flex-direction: column;
  animation: infinite 10s ${arrowAnimation}
  `;

const IndvProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-flow: column-wrap;
  position: absolute;
  align-items: center;
  z-index: -1;
  `;

const ProjImages = styled.div`
  top: 0px;
  display: flex;
  justify-content: flex-end;
`;

const LeftLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: auto;
  display:flex;
  align-content: flex-start;
  padding: 3px;
`;

const Image = styled.img`
  max-width: 100%;
  border: 1px solid grey;
`;

const RightLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SimpleHSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SimpleVSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  align-self: flex-end;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding-right: 10px;
  padding-top:
`;

const ProjectDescription = styled.div`
  align-self: flex-end;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding-right: 10px;
`;

const More = styled.div`
  align-self: center;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding-top: 150px;
  padding-bottom: 15px;
`;


function FiberMobile(){
  return(
  
      <IndvProject>
        <LeftLayout>
          <ProjImages>
          <ImageWrapper>
            <Image src={chairTwo}/>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={chairOne}/>
          </ImageWrapper>
          </ProjImages>
          <ProjectTitle>
            PINE HILL CHAIR
          </ProjectTitle>
          <ProjectDescription>
            Wood, Nylon.
            2020
          </ProjectDescription>
        </LeftLayout>
        <ArrowDiv>
          M O R E
          <IoIosArrowDown />
        </ArrowDiv>
        <RightLayout>
          <ImageWrapper>
            <Image src={longshot}/>
          </ImageWrapper>
          <SimpleHSection>
            <SimpleVSection>
              <ImageWrapper>
               <Image src={before} width="225px"/>
              </ImageWrapper>
              <ImageWrapper>
                <Image src={prog} width="300px"/>
              </ImageWrapper>
              <ImageWrapper>
                <Image src={detail} width="300px"/>
              </ImageWrapper>
            </SimpleVSection>
            <ImageWrapper>
              <Image src={insitu} width="100%"/>
            </ImageWrapper>
          </SimpleHSection>
        </RightLayout>
      </IndvProject>

  )
}

export default FiberMobile
