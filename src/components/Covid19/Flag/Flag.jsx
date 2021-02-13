import React from 'react';
import './style.css';
import { ErrorBoundary } from '../../ErrorBoundary';
import styled from 'styled-components';

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

/**
 * Flag with animation
 * @returns {JSX.Element}
 * @constructor
 */
const Flag = () => {
  const flagArr = new Array(24);

  return (
    <ErrorBoundary>
      <Border>
        <div className="flag-container">
          <div
            className="wrapper"
            // style='--url: url("https://flags.fmcdn.net/data/flags/w580/ag.png")'
          >
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
          </div>
        </div>
      </Border>
    </ErrorBoundary>
  );
};

export default Flag;
