import {
    useImageStore
} from '@/store/useImageStore'
import {
    useEffect
} from 'react'
import Waterfall from '@/components/Waterfall'
const Collection = () => {
    const { loading, images, fetchMore } = useImageStore();
    useEffect(() => {
        fetchMore()
    }, [])
    return (
        <>
            <Waterfall images={images} fetchMore={fetchMore} loading={loading}/>
        </>
    )
}

export default Collection