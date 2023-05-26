import { /* React, */ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Quantity_Btn from "./Quantity_Btn";

export default function ProductList() {
  const [productList /* , setProductList */] = useState([
    {
      id: 1,
      name: "蘋果",
      price: 20,
      image:
        "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
      description: "蘋果是一種非常健康的水果，富含維生素和纖維素。",
    },
    {
      id: 2,
      name: "香蕉",
      price: 30,
      image:
        "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=2000",
      description: "香蕉是一種富含鉀和維生素C的水果，有助於維持身體健康。",
    },
    {
      id: 3,
      name: "葡萄",
      price: 40,
      image:
        "https://static.libertyprim.com/files/varietes/red-globe-large.jpg?1588355080",
      description:
        "葡萄是一種富含抗氧化劑和維生素K的水果，有助於保持心臟健康。",
    },
    {
      id: 4,
      name: "橙子",
      price: 25,
      image:
        "https://media.istockphoto.com/id/185284489/zh/%E7%85%A7%E7%89%87/orange.jpg?s=612x612&w=0&k=20&c=yZ2_bt8CSof0HfIYcdTnm6yPw_pKwRsZdBIIIQu_rd4=",
      description:
        "橙子是一種富含維生素C和葉酸的水果，有助於提高免疫力和促進細胞生長。",
    },
    {
      id: 5,
      name: "西瓜",
      price: 50,
      image: "https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg",
      description:
        "西瓜是一種富含水分和維生素A的水果，有助於維持身體水分平衡。",
    },
    {
      id: 6,
      name: "芒果",
      price: 35,
      image:
        "https://traicayvietflorida.com/wp-content/uploads/2021/09/mango-traicayvietflorida-scaled.jpeg",
      description:
        "芒果是一種富含維生素C和維生素A的水果，有助於促進消化和保持皮膚健康。",
    },
  ]);
  const [CountryInfo, setCountryInfo] = useState([]);
  const [input, setInput] = useState("");

  console.log(CountryInfo);
  /*   console.log(productList); */
  /* 
  fetch("https://raw.githubusercontent.com/oldtangz/testing/main/APItest")
    .then((response) => response.json())
    .then((data) => setProductList(data)); */
  /*   useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []); */

  useEffect(() => {
    /*  if (input.length > 4) console.log("字串夠長了");
    else console.log("字串太短"); */
    input.length > 4 ? console.log("字串夠長了") : console.log("字串太短");
  }, [input]);

  /* 
  //useEffect
  useEffect(() => {
    //1: 冇第二個參數 : COMPONENT每次render
    //2: 加左空array, 只會在第一次網頁render時會觸發
    //3: array有變數: 第一次網頁RENDER時+指定的變數改變, 會觸發
    console.log(CountryInfo);
  }, []); //dependency array */

  const [showProduct, setShowProduct] = useState(true);

  return (
    <div>
      {showProduct && (
        <button
          onClick={() => {
            setShowProduct(false);
          }}
        >
          隱藏產品
        </button>
      )}
      {!showProduct && (
        <button
          onClick={() => {
            setShowProduct(true);
          }}
        >
          顯示產品
        </button>
      )}
      {/*       <button onClick={() => setCountryInfo("change")}>改變值</button> */}
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <Title mT="請選擇要買的水果" sT="今日有九折" />
      {/*   <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "orange",
          borderBottom: "5px solid red",
          padding: "10px",
        }}
      >
        <button>首頁</button>
        <h1>請選擇要買的水果</h1>
        <button>購物車</button>
      </div> */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {showProduct &&
          productList.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#F5F5F5",
                  margin: "10px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Link to={"/product/" + product.id}>
                  <img
                    src={/* process.env.PUBLIC_URL + "/img/" + */ product.image}
                    alt={product.name}
                    style={{ width: "200px", marginBottom: "10px" }}
                  />
                </Link>
                <p>{product.description}</p>
                <Quantity_Btn productInfo={product} />
                {/* <button>加入購物車</button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
