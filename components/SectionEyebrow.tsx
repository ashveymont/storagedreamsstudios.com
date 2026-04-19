type SectionEyebrowProps = {
  text: string;
};

export default function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <p className="text-[0.68rem] uppercase tracking-[0.25em] text-silver-dim">
      {text}
    </p>
  );
}
