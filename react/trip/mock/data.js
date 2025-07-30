import Mock from 'mockjs';
// 每页10
const getImages = (page, pageSize=10) => {
    return Array.from({length:pageSize}, (_, i) => ({
        // 索引唯一
        id: `${page}-${i}`,
        height: Mock.Random.integer(300, 600),
        url: Mock.Random.image('300x400', Mock.Random.color(), '#fff', 'img')
    }))
}

export default [{
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response:(req, res) => {
        // ?keyword=释小龙
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10);
        let list = [];
        for (let i = 0; i < num; i++) {
            // 随机内容
            const randomData = Mock.mock({
                title: '@ctitle'
            })
            console.log(randomData)
            list.push(`${randomData.title}${keyword}`)
        }

        return {
            code: 0,
            data: list
        }
    }
},
{
    url: '/api/hotlist',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        return {
            code: 0,
            data:[{
                id: '101',
                city: "北京"
            },{
                id: '102',
                city: "上海"
            }, {
                id: '103',
                city: "福州"
            },]
        }
    }
},
{
    url: '/api/detail/:id',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        const randomData = Mock.mock({
            title: '@ctitle(5, 10)',
            price: '@integer(60, 100)',
            desc: '@cparagraph(10,30)',
            images: [
                {
                    url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                    alt: '@ctitle(5, 10)'
                },
            ]
        })

        return {
            code: 0,
            data: randomData
        }
    }
},
{
    // ?page=1 queryString
    url: '/api/images',
    method: 'get',
    response: ({query}) => {
        const page = Number(query.page) || 1;
        return {
            code: 0,
            data: getImages(page)
        }
    }
}
]