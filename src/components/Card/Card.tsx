import { useInView } from "react-intersection-observer";
import { SkeletonCard } from "../Skeleton/SkeletonCard";

interface Props {
  imageUrl: string;
}

export const Card: React.FC<Props> = ({ imageUrl }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="card">
      {inView ? (
        <img src={imageUrl} className="card__image" alt="Random image" />
      ) : (
        <SkeletonCard />
      )}

      <p className="description">Random description</p>
    </div>
  );
};
