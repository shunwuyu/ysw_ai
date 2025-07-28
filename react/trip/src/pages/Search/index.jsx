import SearchBox from "@/components/SearchBox";

const Search = () => {
    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = () => {
        // api 请求
    }
    return (
        <>
            <SearchBox handleQuery={handleQuery} />
        </>
    )
}

export default Search