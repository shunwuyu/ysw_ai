import {
    create
} from 'zustand'
import {
    getImages
} from '../api/home'

export const useImageStore = create((set, get) => ({
    images: [],
    page: 1,
    loading: false,
    fetchMore: async () => {
        // 如果还在请求中，不再发起新的请求
        if (get().loading) return;
        set({loading: true}); // 请求中
        const res = await getImages(get().page)
        console.log(res);
        const newImages = res.data
        // 之前的状态
        set((state) => ({
            images: [...state.images, ...newImages],
            page: state.page + 1,
            loading: false
        }))
    }
}))