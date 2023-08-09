import { useCallback } from 'react';
import { southRoad, westRoad, eastRoad } from '../../assets';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/layout/Layout';
import * as St from './style';

const RoadList = () => {
  const navigate = useNavigate();
  const goToSearchRouteList = useCallback((road: string) => {
    navigate('/result', { state: { roadName: road } });
  }, []);

  return (
    <St.RoadListContainer>
      <Layout>
        <St.RoadItem src={westRoad} onClick={() => goToSearchRouteList('서해랑길')} />
        <St.RoadItem src={southRoad} onClick={() => goToSearchRouteList('남파랑길')} />
        <St.RoadItem src={eastRoad} onClick={() => goToSearchRouteList('해파랑길')} />
      </Layout>
    </St.RoadListContainer>
  );
};

export default RoadList;
