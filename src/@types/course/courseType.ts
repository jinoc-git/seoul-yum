export type CourseDataResult = {
crsLevel: string;
  crsCycle: string;
  crsContents: string;
  crsKorNm: string;
  createdtime: string;
  travelerinfo: string;
  crsTournfo: string;
  crsSummary: string;
  routeIdx: string;
  crsIdx: string;
  crsKorm: string;
  crsDstnc: string;
  crsTotlqrmHour: string;
  modifiedtime: string;
  sigun: string;
  brdDiv: string;
  gpxpath: string;
}

export type Course = {
  items: {
    item: CourseDataResult[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
};

export type ResponseCourseList = {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: Course
  };
};



// type RoadItem = {
//   routeIdx: string;
//   themeNm: string;
//   linemsg: string;
//   themedescs: string;
//   brdDiv: string;
//   createdtime: string;
//   modifiedtime: string;
// };
// export type RoadAll = {
//   response: {
//     header: {
//       resultCode: string;
//       resultMsg: string;
//     };
//     body: {
//       items: {
//         item: RoadItem[];
//       };
//       numOfRows: number;
//       pageNo: number;
//       totalCount: number;
//     };
//   };
// };