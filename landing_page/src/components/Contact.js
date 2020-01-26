import React from "react";

import iphoneImg from '../assets/img/iphone.png'

const Contact = () => {
  return <section id="contact">
    <div style={{ fontSize: '1.75em', marginRight: '1em' }}>
      View homeless in need <br />near you. <br /> real time.
    </div>
    <img style={{ width: '50%', marginRight: '1em', maxWidth: '300px' }} src={iphoneImg} alt="..." />
  </section>;
};

export default Contact;