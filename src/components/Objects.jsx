import React, { useEffect } from "react";
import { getObject } from "../apis/object";

export default function Objects() {
  const [objects, setObjects] = React.useState();
  React.useEffect(() => {
    getObject().then((res) => {
      console.log(res);
      setObjects(res);
    });
  });
  return (
    <div className="objectWrapper">
      
    </div>
  );
}
