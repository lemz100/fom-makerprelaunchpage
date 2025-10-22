import './App.less';
import Input from './assets/components/Input/Input'
import logo from './assets/images/logo.svg'
import { useState } from 'react';
import ctaImg from './assets/images/bg-footer-squiggle.svg';
import heroMobile from './assets/images/illustration-hero-mobile.png';
import heroLeft from './assets/images/illustration-hero-left.svg';
import heroRight from './assets/images/illustration-hero-right.svg';
import freedomImg from './assets/images/illustration-financial-freedom.svg';
import lifestyleImg from './assets/images/illustration-lifestyle.svg';
import passionsImg from './assets/images/illustration-passions.svg';
import remoteWorkImg from './assets/images/illustration-work-anywhere.svg';
import mouseIcon from './assets/images/icon-scroll.svg';
import freeIcon from './assets/images/icon-free.svg';
import paidIcon from './assets/images/icon-paid.svg';
import freeTick from './assets/images/icon-check-free.svg';
import paidTick from './assets/images/icon-check-paid.svg';
import Button from './assets/components/Button/Button';

/**
 * Future challenge: try and implement the mouse scrolling anim
 * 
 */

function App() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  function handleChange(e) {
    const email = e.target.value;
    setEmail(email);
  }

  const validateEmail = (value) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    if(isValid) {
      console.log(email);
      setEmail('');
      setError('');
    }
  }

  function validateForm() {
    let errorMsg = '';
    const emptyErrorMsg = 'Oops! Please add your email'

    if(email === ''){
      errorMsg = emptyErrorMsg;
    } else if((validateEmail(email)) === false) {
      errorMsg = "Oops! That doesn't look like an email address";
    }

    setError(errorMsg);
    // Returns true if error message is empty (no errors - can be submitted.)
    return errorMsg.length === 0;
  }

  return (
    <>
    <header>
      <nav>
        <img src={logo} alt="Main Logo" />
      </nav>
      <img src={heroMobile} alt="hero mobile image" className='mobile'/>
      <article className="content">
          <figure className="images">
            <img src={heroLeft} className='left' />
            <img src={heroRight} className='right' />
          </figure>
          <span className='text'>
            <p className="title">Get paid for the work you <span>love</span> to do.</p>
            <p className="desc">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
          </span>
          <img src={mouseIcon} alt="Mouse Icon" />
      </article>
    </header>
    <section className="cont1">
      <article>
        <figure>
          <img src={passionsImg} alt="passions" />
        </figure>
        <span className="text">
          <p className="title">Indulge your passions</p>
          <p className="desc">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</p>
        </span>
      </article>
      <article>
        <figure>
          <img src={freedomImg} alt="financial freedom" />
        </figure>
        <span className="text">
          <p className="title">Gain financial freedom</p>
          <p className="desc">Start making money work for you. There’s nothing quite like earning while you sleep.</p>
        </span>
      </article>
      <article>
        <figure>
          <img src={lifestyleImg} alt="lifestyle" />
        </figure>
        <span className="text">
          <p className="title">Choose your lifestyle</p>
          <p className="desc">Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
        </span>
      </article>
      <article>
        <figure>
          <img src={remoteWorkImg} alt="work from anywhere" />
        </figure>
        <span className="text">
          <p className="title">Work from anywhere</p>
          <p className="desc">Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
        </span>
      </article>
    </section>
    <section className="cont2">
      <span className="header">
        <p className="title">Our pricing plans</p>
        <p className="desc">We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
      </span>
      <article className="content">
        <article className='free'>
          <img src={freeIcon} className='icon'/>
          <span className="description">
            <p className="title">Dip your toe</p>
            <p className="desc">Just getting started? No problem at all! Our free plan will take you a long way.</p>
          </span>
          <p className="pricing">Free</p>
          <span className="features">
            <span>
              <img src={freeTick} />
              <p>Custom domain</p>
            </span>
            <span>
              <img src={freeTick} />
              <p>Advancd analytics and reports</p>
            </span>
            <span>
              <img src={freeTick} />
              <p>High marketplace visibilit</p>
            </span>
            <span>
              <img src={freeTick} />
              <p>10% fee per transaction</p>
            </span>
          </span>
        </article>
        <article className='paid'>
          <img src={paidIcon} className='icon'/>
          <span className="description">
            <p className="title">Dive right in</p>
            <p className="desc">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
          </span>
          <span className="pricing">
            <p className="price">$25.00</p>
            <p className="plan">/ monthly</p>
          </span>
          <span className="features">
            <span>
              <img src={paidTick} />
              <p>Custom domain</p>
            </span>
            <span>
              <img src={paidTick} />
              <p>Advancd analytics and reports</p>
            </span>
            <span>
              <img src={paidTick} />
              <p>High marketplace visibilit</p>
            </span>
            <span>
              <img src={paidTick} />
              <p>5% fee per transaction</p>
            </span>
          </span>
        </article>
      </article>
    </section>
    <section className="cta">
      <img src={ctaImg}  />
      <p className="header">Get notified when we launch</p>
      <form
        noValidate
        action='#'
        onSubmit={e => handleSubmit(e)}>
        <span className="input">
          <Input id='emailAddr' name={'email'} errorText={error} onChange={e => handleChange(e)} value={email} placeholder={'Email address'}/>
        </span>
        <Button text={'Get notified'} />
      </form>
    </section>
    </>
  );
}

export default App
