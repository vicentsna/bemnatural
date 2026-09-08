interface TickerProps {
  items: string[];
}

/** Marquee horizontal infinito. Pausa no hover; estático com movimento reduzido. */
export default function Ticker({ items }: TickerProps) {
  const seq = [...items, ...items];
  return (
    <div className="ticker" aria-label="Destaques do restaurante">
      <div className="ticker-track">
        {seq.map((item, i) => (
          <span className="ticker-item" key={i} aria-hidden={i >= items.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
