import css from "./ImageCard.module.css";

interface ImageCardProps {
  path: string;
  desc: string;
  onClick: () => void;
}

export default function ImageCard({ path, desc, onClick }: ImageCardProps) {
  return (
    <div>
      <img className={css.img} src={path} alt={desc} onClick={onClick} />
    </div>
  );
}
