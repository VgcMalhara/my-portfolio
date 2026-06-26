interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <p className="text-sky-400 uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}