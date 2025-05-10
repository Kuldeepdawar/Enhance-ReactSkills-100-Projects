import { useMemo } from "react";

{
  /*useMemo = useMemo is a React hook that memoizes computed value so its not recalculating unless its dependencied changes*/
}

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// prevent unneccessary recalculation

{
  /*React.memo - It is higher order function that prevent rerendering a component if props havent't changed */
}

const Button = React.memo(({ onClick, children }) => {
  console.log("Rendered");
  return <button onClick={onClick}>{children}</button>;
});

{
  /* 
  ChromeDev Tool - Performance Tab - it shows 
  - Lighthouse - show Performance Score, Accessiblity, SEO
  - React performer = component render times
  */
}
