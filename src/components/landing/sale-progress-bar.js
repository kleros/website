import { Progress, Row, Col } from "antd";
import React, { useMemo, useState, useEffect } from "react";
import tokenSaleAbi from "../../../static/assets/contracts/token-sale.json";
import styled from "styled-components";
import Web3 from "web3";
import { toBN, fromWei, toWei } from "web3-utils";

const saleTotal = toWei("150000000");

const StyledProgress = styled(Progress)`
  padding: 20px;
  background: rgba(144, 19, 254, 0.7);
  box-shadow: 0px 12px 90px #9013fe;
  border-radius: 300px;

  .ant-progress-inner {
    background: #4d00b4;
  }

  .ant-progress-bg {
    height: 50px !important;
    background: linear-gradient(90deg, #009aff 0%, #7bcbff 97.61%);
  }
`;
const AmountRaisedText = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 15px;
  color: #d8b6ff;

  @media (max-width: 575px) {
    text-align: center;
    margin-right: 0;
    margin-left: 0;
  }
`;
const PNKSoldText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-left: 20px;
  margin-top: 15px;
  color: #d8b6ff;
  text-align: left;

  @media (max-width: 575px) {
    text-align: center;
    margin-right: 0;
    margin-left: 0;
  }
`;
const RemainingText = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-right: 20px;
  margin-top: 15px;
  color: #d8b6ff;
  text-align: right;

  @media (max-width: 575px) {
    text-align: center;
    margin-right: 0;
    margin-left: 0;
  }
`;

export default ({}) => {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/4e4cf0a867c84ff382e22709aadc1e50"
  );
  const [events, setEvents] = useState([]);
  const [mounted, setMount] = useState(false);
  const [ethPrice, setEthPrice] = useState("165");
  const contract = new web3.eth.Contract(
    tokenSaleAbi.abi,
    "0x5edf42ce9da28d0b1790c6093103526e3bb88ef3"
  );

  useEffect(() => {
    setMount(true);
    if (!mounted) {
      contract
        .getPastEvents("TokenPurchase", { fromBlock: 0 })
        .then(pastEvents => {
          setEvents(pastEvents);
        });
      fetch("https://api.etherscan.io/api?module=stats&action=ethprice")
        .then(res => res.json())
        .then(r => {
          setEthPrice(r.result.ethusd);
        });
    }
  });

  let purchaseAmount = toBN(0);
  events.forEach(e => {
    purchaseAmount = purchaseAmount.add(toBN(e.returnValues._amount));
  });

  return (
    <>
      <Row>
        <AmountRaisedText>
          $
          {toBN("7790")
            .mul(toBN(String(Number(ethPrice).toFixed(0))))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          Raised
        </AmountRaisedText>
      </Row>
      <Row>
        <StyledProgress
          percent={
            (Number(fromWei(purchaseAmount)) / Number(fromWei(saleTotal))) * 100
          }
          status="active"
          showInfo={false}
        />
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <PNKSoldText>
            {String(Number(fromWei(purchaseAmount)).toFixed(0)).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}{" "}
            Sold
          </PNKSoldText>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <RemainingText>
            {String(
              Number(fromWei(toBN(saleTotal).sub(purchaseAmount))).toFixed(0)
            ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            Remaining
          </RemainingText>
        </Col>
      </Row>
    </>
  );
};
