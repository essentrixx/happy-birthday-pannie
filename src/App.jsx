import React, { useState } from 'react';
import firstmeet from './assets/firstmeet.jpg';
import favsmile from './assets/favsmile.jpg';
import happiesttime from './assets/happiesttime.jpg';
import perfectenergy from './assets/perfectenergy.jpg';
import firstdate from './assets/firstddate.jpg';
import fight from './assets/fight.jpg';
import hbd from './assets/hbd.jpg'

const memories = [
  {
    title: 'Sweet Birthday wish for my Pannie 🎂',
    events: [
      {
        date: 'Bae...ur the prettiest girl I\'ve ever seen.',
        text: `Happy 22 Birthday Pannie, ko pan ko tate chit tl naw. May you always stay the sweet, thoughtful daughter who makes your parents proud. From this day forward, I wish your life is filled with true happiness, calm and beautiful days, and dreams that come true—just like you’ve always hoped for. Hee tate chit tl, A sasa ayryr ga yu site par my bae. Love ya. 🎂✨`,
        image: hbd,
        alt: 'hbd',
      },
    ]
  },
  {
    title: 'The Beginning of our journey',
    events: [
      {
        date: 'The day we met',
        text: `It was the Global Game Jam — and there you were. Confident, radiant, full of energy. I saw you standing with your team and felt something shift. I couldn’t take my eyes off you. That day, something began inside me — and I haven’t been the same since.`,
        image: firstmeet,
        alt: 'When we first met',
      },
      {
        date: 'Our first date',
        text: `We haven’t had our first date yet, but I know exactly what it’ll look like. It’ll be at the airport, the moment we finally meet. I’ll run into your arms, bury my face in your chest, and cry like a kid — not because I’m sad, but because I’ll know we did it. We made it.`,
        image: firstdate,
      }
    ]
  },
  {
    title: 'Falling in Love',
    events: [
      {
        date: 'The little moments',
        text: `Falling in love with you didn’t happen all at once. It was in the way we stayed up late coding, the way we watched movies side by side, laughed and played games, and even when we argued — we always found our way back. Those little things made our bond deeper every day.`,
        image: favsmile,
      },
      {
        date: 'When I knew',
        text: `I knew it was love when I started noticing everything — your smile, your voice, the way you cared for me, even your thighs and the way you moved. But most of all, it was your heart. The way you looked after me, comforted me, supported me — like mom, like family. I just melted.`,
        image: perfectenergy,
        alt: 'Special moment'
      }
    ]
  },
  {
    title: 'Our Journey',
    events: [
      {
        date: 'Through challenges',
        text: `It hasn’t always been easy. I’ve made mistakes — many times. But you’ve always been there. You never gave up on me. You helped me grow. I’m not perfect, but I’m better because of you. And I’ll never stop trying to be the man you deserve.`,
        image: fight,
      },
      {
        date: 'Our happiest times',
        text: `My happiest moments are all with you. Not in big trips or fancy places — just in being near you. Watching you laugh, hearing you talk, holding your hand. That’s all I need. You are everything to me.`,
        image: happiesttime,
        alt: 'Happy times'
      }
    ]
  }
];

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);

  const showFinalMessage = () => {
    setShowMessage(true);
    const heartArray = Array.from({ length: 30 }, (_, i) => i);
    setHearts(heartArray);

    setTimeout(() => {
      setHearts([]);
    }, 5000);
  };

  return (
    <div className="container">
      <header>
        <h1>Happy Birthday Pannie</h1>
        <p>The journey of Ampie and Pannie</p>
      </header>

      {memories.map((chapter, idx) => (
        <div key={idx} className="chapter">
          <h2 className="chapter-title">{chapter.title}</h2>
          {chapter.events.map((event, j) => (
            <div key={j} className="event">
              <div className="event-date">{event.date}</div>
              <p>{event.text}</p>
              {event.image && <img src={event.image} className='first-meet' alt={event.alt} />}
              <div className="heart-icon">❤</div>
            </div>
          ))}
        </div>
      ))}

      <button className="love-button" onClick={showFinalMessage}>🎂</button>

      {showMessage && (
        <div className="final-message">
          <h2>To My Forever Love</h2>
          <p>This is just one chapter of our story. I can't wait to write the rest of my life with you.</p>
          <p className="mt-2">Happy birthday, my love. Here's to forever.</p>
        </div>
      )}

      {hearts.map((i) => (
        <div
          key={i}
          className="falling-heart"
          style={{
            fontSize: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}vw`,
            top: `-30px`,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        >❤</div>
      ))}

      <footer className="footer">
        Made with love by Ampie for Pannie ❤️
      </footer>
    </div>
  );
}
