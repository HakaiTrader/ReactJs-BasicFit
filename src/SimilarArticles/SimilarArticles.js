import React from 'react'
import './SimilarArticles.css'
import './SimilarArticlesResponsive.css'
import articleOne from './SimilarArticlesImg/corp1.jpg'
import articleTwoo from './SimilarArticlesImg/corp2.jpg'
import articleThree from './SimilarArticlesImg/corp3.jpg'
import moreInfo from '../Avantage/AvantageImg/MoreInformation.png'




export default function SimilarArticles() {
  return (
    <div className='SimilarArticles'>
      <div className="articles-title">
        <h1>articles <br /> <span>similaires</span></h1>
      </div>
      <div className='articles'>
        <div className="article1">
          <div className="article1-img">
            <img src={articleOne} alt="" />
          </div>
          <div className="article-txt">
            <span id='corpetesprit-1'>corps et esprit</span>
            <h2>servez-vous de ces équipements pour transformer
              votre maison en salle de sport</h2>
            <p>
              L'impossibilité de fréquenter une salle de sport n'est pas une
              excuse pour s'abstenir de faire du sport !
            </p>
            <div className='readmore'>
              <a className='lien-readmore' href="#"> Read more <img src={moreInfo} alt="" /></a>

            </div>
          </div>
        </div>
        <div className="article2">
          <div className="article2-img article-img">
            <img src={articleTwoo} alt="" />
          </div>
          <div className="article-txt">
            <span>corps et esprit</span>
            <h2>5 EXERCICES POUR RÉDUIRE LE STRESS</h2>
            <p>
              Voici 5 exercices d’étirement pour réduire le stress.
            </p>
            <div className='readmore'>
              <a className='lien-readmore lg' href="#"> Read more <img src={moreInfo} alt="" /></a>

            </div>
          </div>
        </div>
        <div className="article3">
          <div className="article3-img article-img">
            <img src={articleThree} alt="" />
          </div>
          <div className="article-txt">
            <span>corps et esprit</span>
            <h2>Faire du fitness un essentiel</h2>
            <p>
              Conseils et astuces pour faire du fitness un essentiel
            </p>
            <div className='readmore'>
              <a className='lien-readmore lg' href="#"> Read more <img src={moreInfo} alt="" /></a>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
