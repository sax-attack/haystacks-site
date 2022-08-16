import React, { useEffect, useRef } from 'react';

import { ScrollStage } from './components/scroll-stage'

import './styles.css'

export const Animation = () =>    
  {
    const stageRef = useRef(new ScrollStage())

    useEffect(() => {
      const stage = stageRef.current;

      stage.mount()

      return () => {
        stage.unmount()
      }
    }, []);
    

    return (
      <div className="content">
        <div className="scroll__stage">
          <div className="scroll__content">
            <section className="section">
              <div className="section__title">
                <h1 className="section__title-number">01</h1>
                <h2 className="section__title-text">Logma</h2>
                <p className="section__title-arrow">
                  <span>➤</span>
                  <span>➤</span>
                </p>
              </div>
              <p className="section__paragraph">
                The fireball that we rode was moving – But now we've got a new machine – They got music in the solar
                system
                <a href="https://dimorph.ch/" className="section__button">
                  Discover
                </a>
              </p>
            </section>
            <section className="section">
              <div className="section__title">
                <h1 className="section__title-number">02</h1>
                <h2 className="section__title-text">Naos</h2>
              </div>
              <p className="section__paragraph">
                Let me take you on a little trip – We're gonna travel faster than light – And you'll go anywhere you want
                to decide
                <a href="https://dimorph.ch/" className="section__button">
                  Discover
                </a>
              </p>
            </section>
            <section className="section">
              <div className="section__title">
                <h1 className="section__title-number">03</h1>
                <h2 className="section__title-text">Chara</h2>
              </div>
              <p className="section__paragraph">
                Close your eyes now – And give in to the night – Soar above the stars – Forget what's behind
                <a href="https://dimorph.ch/" className="section__button">
                  Discover
                </a>
              </p>
            </section>
          </div>
        </div>
        <div className="layout__line" />
      </div>
    )
  }
