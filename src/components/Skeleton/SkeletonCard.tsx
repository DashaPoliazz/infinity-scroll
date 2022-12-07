import ContentLoader from "react-content-loader";

export const SkeletonCard = () => (
  <ContentLoader
    speed={1}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="60" y="39" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="20" ry="20" width="200" height="200" />
  </ContentLoader>
);
