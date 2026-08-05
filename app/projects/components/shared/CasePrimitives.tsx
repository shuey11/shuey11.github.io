import { ProjectMedia } from "../../project-data";

export type OpenImage = (item: ProjectMedia) => void;

export function ProjectFigure({
  item,
  label,
  note,
  className = "",
  onOpen,
}: {
  item: ProjectMedia;
  label?: string;
  note?: string;
  className?: string;
  onOpen: OpenImage;
}) {
  return (
    <figure className={`project-media ${className}`}>
      <button type="button" onClick={() => onOpen(item)} aria-label={`查看大图：${item.title ?? item.alt}`}>
        <img src={item.src} alt={item.alt} loading="lazy" />
      </button>
      <figcaption>
        {label ? <span>{label}</span> : null}
        {item.title ? <strong>{item.title}</strong> : null}
        {note ?? item.caption ? <p>{note ?? item.caption}</p> : null}
      </figcaption>
    </figure>
  );
}

export function EqualHeightMediaRow({
  items,
  className = "",
  onOpen,
}: {
  items: Array<{ media: ProjectMedia; label?: string; note?: string; className?: string }>;
  className?: string;
  onOpen: OpenImage;
}) {
  return (
    <div className={`media-equal-row ${className}`}>
      {items.map((item) => (
        <ProjectFigure
          key={item.media.src}
          item={item.media}
          label={item.label}
          note={item.note}
          className={item.className}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

export function CaseSectionTitle({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={`case-specific-title ${className}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <span>{body}</span> : null}
    </div>
  );
}

export function FourCardOverview({
  className,
  cards,
}: {
  className: string;
  cards: Array<{ eyebrow: string; title: string; body: string }>;
}) {
  return (
    <section className={`case-overview-redesign ${className}`}>
      {cards.map((card) => (
        <article key={card.eyebrow}>
          <span>{card.eyebrow}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </article>
      ))}
    </section>
  );
}
