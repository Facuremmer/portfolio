import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export default function ProjectFigure({ src, alt, caption, width = 1280, height = 720 }: Props) {
  return (
    <figure className="card overflow-hidden mb-6">
      <div className="relative w-full h-auto">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain bg-neutral-50 dark:bg-neutral-900"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}