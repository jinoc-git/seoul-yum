import * as St from './style';
import { CourseItem } from '../../@types/course/courseType';
import Like from '../like/Like';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const DetailInfo = ({ state }: { state: CourseItem }) => {
  const propsData = state;

  const hour = Math.floor(Number(propsData.item.crsTotlRqrmHour) / 60);
  const min = Number(propsData.item.crsTotlRqrmHour) % 60;

  const fixedCrsContents = propsData.item.crsContents.replace(/\-/g, '');

  const fixedCrsTourInfoArr: string[] = propsData.item.crsTourInfo
    .replace(/[<br>]/g, '')
    .split('-')
    .map((item) => item.trim());
  const a = fixedCrsTourInfoArr.shift();

  return (
    <div>
      <Like crsName={propsData.item.crsKorNm} crsId={propsData.item.crsIdx} />
      <Typography>
        <Title level={3}>{propsData.item.crsKorNm}</Title>
      </Typography>

      <Paragraph>
        <blockquote>
          <ul>
            <li>
              <span>{fixedCrsContents}</span>
            </li>
            <li>
              <span>{propsData.item.sigun}</span>
            </li>
            <li>
              <span>난이도 : {'⭐️'.repeat(Number(propsData.item.crsLevel))}</span>
            </li>
            <li>
              <span>
                관광포인트
                <br />
                {fixedCrsTourInfoArr.map((item, index) => {
                  return (
                    <div key={index}>
                      {item}
                      <br />
                    </div>
                  );
                })}
              </span>
            </li>
            <li>
              <span>코스길이: {propsData.item.crsDstnc}km</span>
            </li>
            <li>
              <span>총 소요시간: {min > 0 ? `${hour}시간 ${min}분` : `${hour}시간`}</span>
            </li>
            <li>
              <span>
                걷기 / 자전거 구분: {propsData.item.brdDiv == 'DNWW' ? '걷기길' : '자전거길'}
              </span>
            </li>
          </ul>
        </blockquote>
      </Paragraph>
    </div>
  );
};
export default DetailInfo;
