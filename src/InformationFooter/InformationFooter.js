import React, { useState } from 'react';
import './InformationFooter.css';
import './InformationFooterResponsive.css'
import BelgiqueIcon from './InformationFooterImg/belgique.svg';
import NerderlandIcon from './InformationFooterImg/Nederland.svg';
import EspanaIcon from './InformationFooterImg/Espagne.svg';
import DeutschlandIcon from './InformationFooterImg/Allemagne.svg';
import FranceIcon from './InformationFooterImg/France.svg';

const InformationFooter = () => {

  const [language, setLanguage] = useState('be');

  const images = {
    nl: NerderlandIcon,
    fr: FranceIcon,
    be: BelgiqueIcon,
    es: EspanaIcon,
    de: DeutschlandIcon
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className='InformationFooter'>
      <div className="language-footer">
        <div className="country">
          <img src={images[language]} alt="" />
        </div>
        <select value={language} onChange={handleLanguageChange} name="language-footer" id="language">
          <option value="nl">Basic-Fit Nederland</option>
          <option value="be">Basic-Fit België/Belgique</option>
          <option value="fr">Basic-Fit France</option>
          <option value="es">Basic-Fit Espana</option>
          <option value="de">Basic-Fit Deutschlands</option>
        </select>
      </div>
      <div className="information-footer">
        <ul>
          <li>
            <a href="#">
              Information cookie
            </a>
          </li>
          <li>
          <a href="#">Politique de confidentialité</a>
          </li>
          <li>
            <a href="#">Surveillence pas camera</a>
          </li>
          <li>
            <a href="#">14 jours de droi de rétractation</a>
          </li>
          <li>
            <a href="#">Conditions générales</a>
          </li>
          <li>
            <a href="#"> Code de conduite du secteur du fitness</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InformationFooter;
