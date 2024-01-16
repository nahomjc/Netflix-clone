import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: Props) => {
  console.log(id, "id view");
  return (
    <div className="flex flex-col space-y-2 xl:mt-48">
      {id} page {id}{" "}
    </div>
  );
};

export default page;
