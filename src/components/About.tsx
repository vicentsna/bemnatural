import type { SyntheticEvent } from 'react';
import { img } from '../data/config';
import Reveal from './Reveal';
import { IconCheck } from '../lib/icons';

const points = [
  'Cardápio que acompanha o dia — entradinhas, sanduíches, panelinhas e almoço fit',
  'Você monta o prato: até três acompanhamentos, montado na hora',
  'Presencial, retirada, iFood ou WhatsApp — você escolhe',
  'Ingredientes frescos, preparo artesanal, sem conservantes',
];

const hideBroken = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.opacity = '0';
};

export default function About() {
  return (
    <section className="section about" id="a-casa" aria-label="A casa">
      <div className="wrap about-grid">
        <Reveal className="about-collage">
          <figure className="ph about-img a">
            <img src={img.salaoLogo} alt="Salão do Bem Natural Candeias com a logo na parede" loading="lazy" onError={hideBroken} />
          </figure>
          <figure className="ph about-img b">
            <img src={img.salaoBalcao} alt="Balcão verde e plantas no salão" loading="lazy" onError={hideBroken} />
          </figure>
        </Reveal>

        <div className="about-body">
          <Reveal>
            <span className="eyebrow">a casa</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-lg">Um cantinho verde em Candeias</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="about-lede">
              Salão claro, plantas por todo canto e comida saudável que não é castigo — crepe
              recheado na hora, salada que enche o prato, almoço fit montado do seu jeito. Bom pra
              comer ali mesmo ou levar pra viagem.
            </p>
          </Reveal>
          <ul className="about-points">
            {points.map((p, i) => (
              <Reveal as="li" className="about-point" key={p} delay={140 + i * 60}>
                <IconCheck />
                <span>{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
