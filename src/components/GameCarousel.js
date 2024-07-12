import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GameCarousel.css';

const GameCarousel = () => {
  const items = [
    {
      title: 'Dota 2',
      image: 'data:image/jpeg;base64,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',
      description: 'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    },
    {
      title: 'The Witcher 3',
      image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg',
      description: 'The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    },
    {
      title: 'RDR 2',
      image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg',
      description: 'RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    },
    {
      title: 'PUBG Mobile',
      image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg',
      description: 'PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    },
    {
      title: 'Fortnite',
      image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg',
      description: 'Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    },
    {
      title: 'Far Cry 5',
      image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg',
      description: 'Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  const handleItemClick = (index) => {
    const items = document.querySelectorAll('.slick-slide');
    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.toggle('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  return (
    <section className="game-section">
      <h2 className="line-title" >THEME</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => handleItemClick(index)}>
            <div
              className="item-background"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="item-desc">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GameCarousel;
