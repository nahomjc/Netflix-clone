import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};
const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  return <div>Welcome to the search Page: {termToUse}</div>;
};

export default SearchPage;
