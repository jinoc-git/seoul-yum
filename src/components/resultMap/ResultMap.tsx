import React from 'react';
import * as St from './style';
import Layout from '../common/layout/Layout';
import { Map } from 'react-kakao-maps-sdk';
import axios from 'axios';

const ResultMap = () => {
  const GPX_URL = `https://www.durunubi.kr/editImgUp.do?filePath=/data/koreamobility/file/2021/09/46e0055b28ac46ea9420106c8939fa61.gpx`;
  console.log(GPX_URL);

  const fetchGPX = async () => {
    const res = await axios.get(`http://localhost:5000/gpx?data=${GPX_URL}`);

    // const parser: GpxParser = new GpxParser();
    // const gpxJson: GpxJson = await parser.parse(GPX_URL);
    // const response = await axios.get(GPX_URL);
    // console.log(response);
    // return response;

    // console.log(gpxJson);

    fetch(GPX_URL)
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      });
  };
  fetchGPX();

  return (
    <Layout>
      <St.ResultMapContainer>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '400px',
          }}
          level={13} // 지도의 확대 레벨
        />
      </St.ResultMapContainer>
    </Layout>
  );
};

export default ResultMap;
