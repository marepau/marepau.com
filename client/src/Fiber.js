import React from 'react'
import styled from 'styled-components'
import albers from './assets/albers.jpg'
import chairOne from './assets/chair_rock.png'
import chairTwo from './assets/chair_snow.png'
import longshot from './assets/longshotchair.jpg'
import insitu from './assets/insituchair.png'
import prog from './assets/midprochair.jpg'
import before from './assets/beforechair.jpg'
import detail from './assets/detail.jpg'


const IndvProject = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-between;
  position:relative;
  align-items: center;
  z-index: -1;
  `;

const ProjImages = styled.div`
  top: 0px;
  display: flex;
  justify-content: flex-end;
`;

const LeftLayout = styled.div`
  width: 47%;
  height: auto;
  position: fixed;
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
  width: 47%;
  display: flex;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
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
  align-self: center;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
`;

const ProjectDescription = styled.div`
  align-self: center;
  font-family: 'Open Sans',sans-serif;
  font-weight: 400;
  font-size: 15px;
`;


function Fiber(){
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
            Pine Hill Chair
          </ProjectTitle>
          <ProjectDescription>
            Wood, Nylon.
            2020
          </ProjectDescription>
        </LeftLayout>
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

export default Fiber
