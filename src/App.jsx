import NavBar from './components/NavBar';
import player from './img/player.svg';
import PHOTO1 from './img/photo1.png';
import appStore from './img/app-store.png';
import googleStore from './img/google-play.png'
import PHOTO2 from './img/photo2.png'
import PHOTO3 from './img/photo3.png'
import booking from './img/booking.svg'
import aliexpress from './img/aliexpress.svg'
import allegro from './img/allergo.svg'
import lounge from  './img/lounge.svg'
import lidl from './img/lidl.svg'
import media from './img/media.svg'
import rtv from './img/rtv.svg'
import groupon from './img/groupon.svg'
import PHOTO4 from "./img/photo4.png"
import iphone from "./img/pay_iphone.png" 
import google from "./img/pay_google.png"
import PHOTO5 from "./img/photo5.png"
import PHOTO6 from './img/photo6.png'
import PHOTO7 from "./img/photo7.png"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">

        <div className='section1'>
          <div className="section1_left">
            <p className='player_txt'><img src={player} alt="" />In every beginning, there is chaos.</p>
            <h5 className='section1_title'>Peaceful shopping.</h5>
            <h6 className='section1_subtitle'>Mindful money.</h6>
            <p className='section1_txt'>See how we can help with making your shopping experience and money management more ZEN.</p>
            <div className="section1_images">

            <img src={appStore} alt="" />
            <img src={googleStore} alt="" />
            </div>
          </div>
          <div className="section1_right">
            <img src={PHOTO1} alt="" />
          </div>
        </div>

      <div className="section2">
        <div className="section2_left">
          <img src={PHOTO2} alt="" />
        </div>
        <div className="section2_rigt">
          <h4 className='section2_title'>1-year warranty boost</h4>
          <p className='section2_txt'>ZEN cards have a very neat feature that will help you whenever
          your electronic devices start failing after the standard warranty ends, which is pretty common.</p>
          <p className='section2_txt'>When you buy any electronics with your ZEN shopping Mastercard®, 
            their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
        </div>
      </div>


      <div className="section3">
        <div className="section3_left">
          <h5 className="section3_title">ZEN Care</h5>
          <p className="section3_txt1">Shopping online is usually a delightful experience. Until it's not.</p>
          <p className="section3_txt2">Until something you buy, proves to be faulty, missing or a totally wrong item,
          you’re in for long product return procedures.</p>
          <p className="section3_txt1">
          But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured we’ll handle all 
          of the transaction-related problems faster and with higher success rates. Where lone consumers can be 
          ignored or dumped by dishonest merchants, ZEN doesn't get discouraged. ZEN persists.
          </p>
        </div>
        <div className="section3_right">
          <img src={PHOTO3} alt="" />
        </div>
      </div>     
      

      <div className="section4">
        <div className="section4_about">
        <h4 className="section4_title">and cashback!</h4>
        <p className="section4_txt">
        It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it. 
        We gave it a thought and made cashback way more friendly. Up to 14% of what you spend using ZEN Mastercard ® will 
        materialize on your account right after the purchase. 
        It's like you haggled some cash, despite you didn't have to. Just don't forget to use in-app cashback link.
        </p>
        <button className="section4_btn">Show more partners</button>
        </div>
      </div>


      <div className="section5">
        <div className="section5_part1">
          <img className='booking' src={booking} alt="" />
          <img className='lidl' src={lidl} alt="" />
        </div>
        <div className="section5_part2">
          <img src={aliexpress} alt="" />
          <img src={media} alt="" />
        </div>

        <div className="section5_part3">
          <img src={allegro} alt="" />
          <img src={rtv} alt="" />
        </div>

        <div className="section5_part4">
          <img src={lounge} alt="" />
          <img src={groupon} alt="" />
        </div>
      </div>


      <div className="section6">
        <div className="section6_left">
          <div className="section6_header">
          <h4 className="section6_title">ZEN shopping Mastercard  </h4>
          <span>®</span>
          </div>
          <p className="section6_txt">You shouldn’t be bound to use one card at a time, especially when it has 
          so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. 
          It’s convenient, streamlined, and works like a charm. 
          You can have a shopping card, a subscription card, and whatever other cards that make sense to you.</p>
          <div className="section6_images">
            <img src={iphone} alt="" />
            <img className='section6_google' src={google} alt="" />
          </div>
        </div>
        <div className="section6_right">
          <img src={ PHOTO4}alt="" />
        </div>
      </div>


      <div className="section7">
        <div className="section7_left">
          <img src={PHOTO5} alt="" />
        </div> 
        <div className="section7_right">
          <h4 className="section7_title">
          Shopping with no fees
          </h4>
          <p className="section7_txt1">
          Online shopping is flawed with all kind of fees. Currency exchange fees, 
          processing fees and even fees for having multiple fees.
          Getting rid of them became our hobby. Same goes for ATM withdrawal fees.
          </p>

          <p className="section7_txt2">
          Enjoy your money globally. Every uncut part of it. Keep reading. 
          ZEN goes beyond shopping with a fully functional account.
          </p>
        </div>
        </div>


      <div className="section8">
        <div className="section8_left">
          <h4 className="section8_title">One app, one account, many currencies</h4>
          <p className="section8_txt1">ZEN Mastercard® was made for spending money. 
          ZEN account is here to store and manage it peacefully, from the inside of your pocket.</p>
          <p className="section8_txt2">You can use it just like a regular account, as it has its own IBAN and 
          works just the way any bank account would — but better. Store up to 30 currencies and transfer
          them easily in many ways.</p>
        </div>
        <div className="section8_right">
          <img src={PHOTO6} alt="" />
        </div>
      </div>


      <div className="section9">
        <div className="section9_left">
          <img src={PHOTO7} alt="" />
        </div>
        <div className="section9_right">
          <h4 className="section9_title">Quick and easy account creation</h4>
          <p className="section9_txt1">Now, you might be thinking that it’s just like any other account creation… 
          Long, tiresome and full of endless blanks to fill in. Well, it’s not.</p>
          <p className="section9_txt2">
          We have designed the whole process to make it the simplest and the 
          shortest one ever conceived for a personal account. Download the app and see for yourself!
          </p>

          <div className="section9_images">
          <img src={appStore} alt="" />
          <img className='section9_googlestore' src={googleStore} alt="" />
        </div>
        </div>
      </div>

      <Footer/>

      </div>
    </div>
  )
}

export default App;
