import React from 'react';
import './style.css';
import { ErrorBoundary } from '../../../ErrorBoundary';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCurrentSlideIndex, getFlags } from '../../../../store';

const Border = styled.div`
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  overflow: hidden;
  box-sizing: border-box;
`;

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 180px;
  transform: rotateY(20deg) skew(5deg);
  transform-style: preserve-3d;
  background-image: ${props => `url(${props.background})`};
  background-size: 0;
  background-position: -200% -200%;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 7.5px;
    height: 360px;
    background: transparent;
    left: 7px;
  }
`;

const Section = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  left: 14px;
  width: 15px;
  height: 100%;
  transform-origin: 0 0;
  background-repeat: no-repeat;
  background-size: 360px 100%;
  transform: translateZ(0.0001px) rotateY(14.1176470588deg);
  background-image: inherit;
  animation-name: wave;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

/**
 * Flag with animation
 * @returns {JSX.Element}
 * @constructor
 */
const Flag = () => {
  const flagArr = new Array(24);
  const index = useSelector(getCurrentSlideIndex);
  const flags = useSelector(getFlags);
  /*

  flagArr.map((nothing, number) => {
    console.log(`index`, number);
  });
*/

  return (
    <ErrorBoundary>
      {flags && (
        <Border>
          <FlagContainer>
            <Wrapper background={flags && flags[index - 1].flag}>
              <div className="s s0">
                <div className="s s1">
                  <div className="s s2">
                    <div className="s s3">
                      <div className="s s4">
                        <div className="s s5">
                          <div className="s s6">
                            <div className="s s7">
                              <div className="s s8">
                                <div className="s s9">
                                  <div className="s s10">
                                    <div className="s s11">
                                      <div className="s s12">
                                        <div className="s s13">
                                          <div className="s s14">
                                            <div className="s s15">
                                              <div className="s s16">
                                                <div className="s s17">
                                                  <div className="s s18">
                                                    <div className="s s19">
                                                      <div className="s s20">
                                                        <div className="s s21">
                                                          <div className="s s22">
                                                            <div className="s s23">
                                                              <div className="s s24" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </FlagContainer>
        </Border>
      )}
    </ErrorBoundary>
  );
};

export default Flag;
