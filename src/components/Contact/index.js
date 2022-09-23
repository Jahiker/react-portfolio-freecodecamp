import React, { useState, useEffect, useRef } from 'react'
import './index.scss'

import emailjs from '@emailjs/browser'

import AnimatedLetter from '../AnimatedLetters'

import Loader from 'react-loaders'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ojg62m4',
        'template_xvfxe1l',
        refForm.current,
        'dhcXlXi0W3e5ldG3S'
      )
      .then(
        (result) => {
          alert('Message sucessfully sent!')
          console.log(result.text)
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again!')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus eius ullam eveniet laborum similique, qui pariatur
            saepe aperiam veritatis, rerum doloremque? Iusto harum voluptatum
            mollitia ea animi aperiam assumenda magnam.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jahiker Rojas
          <br />
          Venezuela,
          <br />
          Los Guayos - Carabobo <br />
          <span>rojasjahiker@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[10.171725, -67.906207]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[10.171725, -67.906207]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
