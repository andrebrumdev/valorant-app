// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import { useMatches } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const matches = useMatches();
  console.log(matches)
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const breadcrumbElements = crumbs.map((crumb, index) => {
    const notLast = index < crumbs.length - 1;
    if (notLast) {
      return (
        <>
          <span className="name">{crumb}</span>
          <span className="arrow">{">"}</span>
        </>
      );
    } else {
      return <span className="name">{crumb}</span>;
    }
  });

  return <div>{breadcrumbElements}</div>;
};

export default Breadcrumbs;
