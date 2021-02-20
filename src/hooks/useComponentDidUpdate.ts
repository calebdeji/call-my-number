import { useRef, useEffect, DependencyList } from "react";

const useComponentDidUpdate = (callback: Function, dep: DependencyList) => {
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);
};

export default useComponentDidUpdate;
