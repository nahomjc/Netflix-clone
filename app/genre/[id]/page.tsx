import React from 'react';

type Props={
    params:{
        id:string
    }
    searchParams:{
        genre:string
    }
}
const Genrepage = ({params:{id},searchParams:{genre}}:Props) => {

  return (
    <div>
      <h1>welcome to gener id{id}: searchParams {genre}</h1>
    </div>
  );
}

export default Genrepage;
