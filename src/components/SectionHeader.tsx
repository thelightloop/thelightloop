type SectionHeaderProps = {
  hash: string;
  title: string;
  gold?: boolean;
};

export default function SectionHeader({
  hash,
  title,
  gold = false,
}: SectionHeaderProps) {
  return (
    <div className="commit-head">
      <span
        className={`commit-node${gold ? " gold" : ""}`}
        aria-hidden="true"
      />
      <span className="commit-hash">{hash}</span>
      <h2>{title}</h2>
    </div>
  );
}
