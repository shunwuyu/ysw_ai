import {
    create
} from 'zustand';
import { getDetail } from '@/api/detail'

const useDetailStore = create((set) => ({
    detail: {
        title: '',
        desc: '',
        images: [
            {
                alt: '',
                url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp'
            }
        ],
        price: ''
    },
    loading: false,
    setDetail: async () => {
        set({loading: true})
        const res = await getDetail();
        set({
            loading: false,
            detail: res.data
        });
    }
}))

export default useDetailStore