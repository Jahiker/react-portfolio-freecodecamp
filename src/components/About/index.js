import React,{ useState, useEffect } from 'react'
import "./index.scss"

import AnimatedLetters from "../AnimatedLetters"
import Loader from 'react-loaders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
  }, [])

  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum officia natus. Quam, mollitia fugiat facere doloribus unde delectus voluptates tempora quae ea reprehenderit eveniet quis inventore sapiente obcaecati ad?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia, sed error ad esse magnam quae maiores perspiciatis. Qui reprehenderit officia dolorem nobis quia alias nihil eveniet debitis fugit inventore.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptates, quidem dolorum voluptatum dolores dolore incidunt optio, illum quis laborum doloremque assumenda. Recusandae quaerat perspiciatis, culpa nam molestias illum rerum.</p>
        </div>
        <div className="satge-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About