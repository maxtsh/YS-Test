import { lazy, Suspense } from "react";

const LazyLoading = (
  ImportComponent: any,
  { Fallback }: { Fallback: React.FC }
) => {
  const LazyComponent = lazy(ImportComponent);
  return (props: any) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
export default LazyLoading;
