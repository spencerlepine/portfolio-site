import React from 'react';
import { Emoji } from '@components';


const Welcome = () => (
  <section className="m-auto m-4 bg-white p-4 max-w-5xl">
    <span className="text-center p-1">
      <h1 className="text-3xl">Hello{' '}<Emoji symbol='👋' /></h1>
      <h3 className="text-4xl">
        I'm{' '}
        <span className="font-bold text-navy-medium">Spencer Lepine</span>,
        <br />a{' '}
        <span className="text-purple-900">Software Engineer</span>
        .
      </h3>
    </span>

    <hr className="max-w-sm m-auto w-64" />

    <p className="max-w-lg w-auto px-1 text-center m-auto mt-4 text-lg leading-relaxed text-blueGray-500">
      I believe in building the future today. My goal is to push boundaries and expolore new paths in technology.
      Currently, I'm attending the Software Enginnering Immersive at{' '}
      <a href="https://www.hackreactor.com/" target="_blank" rel="noreferrer">
        Hack Reactor
      </a>
      .
    </p>
  </section>
);

export default Welcome;
