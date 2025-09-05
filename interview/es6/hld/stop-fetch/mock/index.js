export default [
    {
      url: '/api/banners',
      method: 'get',
      timeout: 3000,
      response: (req, res) => {
        const banners = [
          {
            id: 1,
            pic: 'https://images4.c-ctrip.com/target/1mc3y12000bhw655k6679_D_280_280_R5.jpg',
            title: '美豪雅致酒店（杭州桐庐银泰城店)1晚'
          },
           {
            id: 2,
            pic: 'https://images4.c-ctrip.com/target/1mc6m12000balvt6q6461_D_280_280_R5.jpg',
            title: '宁波象山海景皇冠假日酒店2晚'
          },
          {
            id: 3,
            pic: 'https://images4.c-ctrip.com/target/1mc0512000bljvsbd5D53_D_280_280_R5.jpg',
            title: '千岛湖开元度假村2晚'
          }
        ]
        return {
          code: 0,
          msg: 'success',
          data: banners
        }
      },
    }
]