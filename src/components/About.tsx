import { img } from '../data/config';
import Reveal from './Reveal';
import { IconCheck } from '../lib/icons';

const points = [
  'Cardápio que acompanha o dia — entradinhas, sanduíches, panelinhas e almoço fit',
  'Você monta o prato: até três acompanhamentos, montado na hora',
  'Presencial, retirada, iFood ou WhatsApp — você escolhe',
  'Ingredientes frescos, preparo artesanal, sem conservantes',
];

export default function About() {
  return (
    <section className="section about" id="a-casa" aria-label="A casa">
      <div className="wrap about-grid">
        <Reveal className="about-collage">
          <div className="about-img a">
            <img src={img.ambianceA} alt="Salão do Bem Natural Candeias" loading="lazy" />
          </div>
          <div className="about-img b">
            <img src={img.ambianceB} alt="Ingredientes frescos sendo preparados" loading="lazy" />
          </div>
        </Reveal>

        <div className="about-body">
          <Reveal>
            <span className="eyebrow">a casa</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="h-lg">Equilíbrio que cabe no seu dia — e tem sabor</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="about-lede">
              Na Bem Natural Candeias a comida saudável não é castigo. É crepe recheado na hora,
              salada que enche o prato, almoço fit montado do seu jeito. Feito para quem quer comer
              melhor sem abrir mão do prazer da refeição.
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
