import React from 'react';
import './App.css';
import './MapContainer.js';
import MapContainer from './MapContainer.js';
import Burger from './Burger.js'


function App() {
  return (
    <div className="App">
    <div className="mountain">
    <div className="hideOnDesktop">
      <Burger/>
    </div>
    <div className="nav hideOnMobile">
        <ul className="navList paddingRightAndLeft wrapper">
        <li>
          <img style={{ width: '160px', paddingRight:'100px'}} alt="arktyka-logo" src="arktyka-logo.png" /></li>
        <li><a href="#1">O firmie</a></li>
        <li>•</li>
        <li><a href="#2" className="">Nasza oferta</a></li>
        <li>•</li>
        {/* <li><a href="#3">Realizacje</a></li>
        <li>•</li> */}
        <li><a href="#4">Certyfikaty</a></li>
        <li>•</li>
        <li><a href="#5">Kontakt</a></li>
        </ul>
        </div>
        <div className="about paddingRightAndLeft">
<h1 id="1">O firmie</h1>
<p className="textCenterFlex">Firma arktyka działa w branży chłodnictwa, klimatyzacji i wentylacji.</p>
<p className="boldText textCenterFlex">Podstawą naszej pracy są najnowsze technologie, profesjonalna obsługa oraz zadowolenie klientów.</p>
    <p>Wieloletnie doświadczenie zdobyte w kraju i za granicą pozwala firmie<span style={{fontFamily:'Exo Black'}}> ARKTYKA </span>na świadczenie kompleksowych usług w zakresie: projektowania, doboru urządzeń, montażu i konserwacji instalacji oraz urządzeń chłodniczych, klimatyzacyjnych i wentylacyjnych.</p>
    <p className="boldText hideOnMobile textCenterFlex" >Atutami firmy Arktyka są:</p>
    <ul className="aboutList hideOnMobile">
      <li>wieloletnie doświadczenie na rynku</li>
      <li>najwyższa jakość rozwiązań</li>
      <li>świadczenie kompleksowych usług</li>
      <li>ekologiczne technologie</li>
      <li>indywidualne podejście do klineta</li>
      <li>szybkość, staranność i dokładność w realizacji</li>
      <li>innowacyjność</li>
    </ul>
    </div>
    </div>
    <div className="offer paddingClass" id="2">
<h1>Oferta</h1>
<p className="textCenterFlex" >Przygotowujemy projekty wykonawcze i powykonawcze oraz zajmujemy się ich pełną realizacje zarówno w obiektach gastronomicznych, biurowych, przemysłowych jak i dla klientów indywidualnych.</p>
<p className="boldText textCenterFlex">Zapraszamy do współpracy</p>

<div className="offerBigBox">
  <div className="offerBox box foo">
    <img style={{}} className="" src="icons8-air-conditioner-blue.png" alt="klimatyzacja"></img>
    <p>Klimatyzacja mieszkań, obiektów biurowych i handlowych</p></div>
  <div className="offerBox box foo">
    <img style={{}} className="" src="icons8-central-air-conditioning-blue.png" alt="klimatyzacjaSystemowa"></img>
    <p>Systemy klimatyzacji kanałowej</p></div>
</div>
<div className="offerBigBox">
  <div className="offerBox box foo">
  {/* <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg> */}
    <img style={{}} className="" src="icons8-fan-blue.png" alt="wentylacja"></img>
    <p>Systemy wentylacji obiektów przemysłowych</p></div>
  <div className="offerBox box foo">
    <img style={{}} className="" src="icons8-cooling-blue.png" alt="chłodninctwo"></img>
    <p>Montaż lad i szaf chłodniczych</p></div>
</div>
<div className="offerBigBox">
  <div className="offerBox box foo">
    <img style={{}} className="" src="icons8-service-blue.png" alt=""></img>
    <p>Przeglądy gwarancyjne i pogwarancyjne</p></div>
  <div className="offerBox box foo">
    <img style={{}} className="" src="icons8-support-blue.png" alt=""></img>
    <p>Naprawa urządzeń</p></div>
</div>
    </div>

    <div className="certificate paddingClass" id="4">
      <h1>Certyfikaty</h1>
      <ul className="aboutList">
        <li>Szkolenie z zakresu odzysku czynników ziębniczych-chłodniczych - 1998r.</li>
        <li>Prawa i obowiązki dostawców sprzętu elektrycznego na rynku europejskim - 2000r.</li>
        <li>Zmiany w polskim systemie badań i certyfikacji oraz zasad nadzoru rynku - 2000r.</li>
        <li>Prawne aspekty obsługi reklamacji - 2003r.</li>
        <li>Sprzedaż profesjonalna - 2004r.</li>
        <li>Dochodzenie i załatwianie reklamacji przez firmy na rynku europejskim - 2005r.</li>
        <li>Kurs spawania gazowego - 2006r.</li>
        <li>Uprawnienina elektryczne SEP do 1KW wraz z pomiarami - 2009r.</li>
        <li>Zarządzanie małą firmą - 2010r.</li>
      </ul>
    </div>

    <div className="contact paddingClass" id="5">
    <h1 style={{color:'white'}}>Kontakt</h1>
    <div className="contactLeft">
    <h3 className="boldText">ARKTYKA Chłodnictwo, Klimatyzacja i Wentylacja </h3>
    <h3 className="boldText">Jacek Rębilas </h3>
    <h3 className="boldText">__________</h3>
    <h3 className="contactFlex"><img style={{alignItems:'center'}} className="contactIcon" src="domek.png" alt="adres"></img>32-700 Bochnia, ul. Łychów 100 </h3>
    <h3 className="contactFlex"><img style={{alignItems:'center'}} className="contactIcon" src="nipRegon.png" alt="nipRegon"></img>NIP: 868-116-45-79, REGON: 121378970</h3>
    <h3 className="contactFlex"><img style={{alignItems:'center'}} className="contactIcon" src="telefon.png" alt="telefon"></img><a style={{color:'white', textDecoration:'none'}} href="tel:+48 510 311 682">+48 510 311 682</a></h3>
    <h3 className="contactFlex"><img style={{alignItems:'center'}} className="contactIcon" src="mail.png" alt="mail"></img><a style={{color:'white', textDecoration:'none'}}
                                        href="mailto:arktyka.bochnia@gmail.com">arktyka.bochnia@gmail.com</a></h3>

    </div>
    <div className="contactRight">
    <form action="https://formspree.io/arktyka.bochnia@gmail.com"
              method="POST">
              <input type="text" name="name" placeholder="Imię i nazwisko" />
              <input type="email" name="_replyto" placeholder="Adres e-mail" />
              <textarea type="text" name="name" placeholder="Treść wiadomości" />
            <button type="submit" value="Send" className="login-form-button box foo">
              WYŚLIJ
          </button>
          </form>
    </div>
    </div>
    <div className="map">
      <MapContainer className="mapContainer"/>
    </div>
    
    <div className="footer">
      <p className="paddingRightAndLeft">Projekt graficzny: <a href="https://dslowik.pl/" className="boldText">Danuta Słowik</a>, Wykonanie: <a href="" className="boldText">Natalia Nowak</a></p>
    </div>
    </div>
  );
}

export default App;



