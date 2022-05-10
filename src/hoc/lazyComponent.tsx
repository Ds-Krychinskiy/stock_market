import { Suspense } from "react";
import Curcular from "../component/atoms/circular";

interface LazyComponentProps {
  Component: JSX.Element;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ Component }) => {
  return <Suspense fallback={<Curcular />}>{Component}</Suspense>;
};

export default LazyComponent;
