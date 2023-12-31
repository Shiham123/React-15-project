import React, { Fragment, useContext } from 'react';
import phoneImg from './img/phone.svg';
import { AppContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <Fragment>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              5ØØs—use Stripe's software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className="btn">Start now</button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-img" alt="phone" />
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
