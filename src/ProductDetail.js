import Quantity_Btn from "./Quantity_Btn";
import Title from "./Title";

/* import React from 'react' */

import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  let params = useParams();

  return (
    <div>
      <Title mT={params.id + "產品資料"} />
      <Quantity_Btn />
      <Link to="/">回到產品列表</Link>
    </div>
  );
}
