import {
    useRef
} from 'react';

const VirtualList = ({
    data,
    height,
    itemHeight,
    renderItem,
    overscan
}) => {
    const containerRef = useRef(null);
    const totalHeight = data.length * itemHeight;
    const onScroll = () => {

    }
    return (
        <div
            ref={containerRef}
            onScroll={onScroll}
            style={{
                height,
                overflowY: 'auto',
                position:'relative',
                // 性能优化点 新的图层
                willChange:'transform'
            }}
        >
            <div style={{height: totalHeight, position: 'relative'}}></div>
            <div style={{
                posiiton: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                transform: `translateY(${offset}px)`
            }}>

            </div>
        </div>
    )
}

export default VirtualList;