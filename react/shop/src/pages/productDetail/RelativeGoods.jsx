import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const DUMMY_GOODS = [
  { id: 0, name: "친환경 대추방울 토마토", price: 5000 },
  { id: 1, name: "소고기 안심 300g", price: 19000 },
  { id: 2, name: "목란 짬뽕 2봉", price: 1200 },
  { id: 3, name: "그릭 요거트 2종", price: 5400 },
  { id: 4, name: "친환경 안심란 10구", price: 7000 },
];

const RelativeGoods = () => {
  return (
    <Wrap>
      <ul className="relative-goods">
        {DUMMY_GOODS.map((good) => {
          return (
            <li className="relative-card">
              <div className="goods-img">
                <a>
                  <img src="#" alt={good.name} />
                </a>
              </div>
              <div className="goods-info">
                <p>{good.name}</p>
                <p>{good.price} 원</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrap>
  );
};

export default RelativeGoods;

const Wrap = styled.div`
  width: 100%;

  .relative-goods {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  .relative-card {
    width: 178px;
    height: 320px;
    margin: 0 10px;
    padding: 0;
    border: 1px solid ${colors.gray3};
  }

  .goods-img {
    width: 178px;
    height: 220px;
  }

  .goods-info {
    overflow: hidden;  
    padding: 0;
  }
`;
