import React from 'react';
import './Card.css';

function PromotionCard({promotion}) {
  return (
    <div className="promotion-card">
      <img src={promotion.imageUrl} alt="Mochila LapTop" className="promotion-card__image"/>
      <div>
        <h2 className="promotion-card__title">{promotion.title}</h2>
        <span className="promotion-card__price"an>{promotion.price}</span>
        <footer className="promotion-card__footer">
            {promotion.comments.length > 0 && (<div className="promotion-card__comment">
              {promotion.comments[0].comment}
            </div>)}
            <div className="promotion-card__comments-count">{promotion.comments.length}{" "}{promotion.comments.length > 1 ?'Comentários':'Comentario'}</div>
          <a href={promotion.url} target="_blank" className="promotion-card__link">IR PARA O SITE</a>
        </footer>
      </div>
    </div>
  )
}

export default PromotionCard;