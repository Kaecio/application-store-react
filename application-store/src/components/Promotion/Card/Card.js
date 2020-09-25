import React from 'react';
import './Card.css';

function PromotionCard({promotion}) {
  return (
    <div>
      <img src={promotion.imageUrl} alt="Mochila LapTop" />
    </div>
  )
}

export default PromotionCard;