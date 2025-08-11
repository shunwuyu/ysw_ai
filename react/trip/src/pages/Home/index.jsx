import useTitle from '@/hooks/useTitle';
import {
    Button
} from 'react-vant';
import {
    showToast
} from '@/components/Toast/toastController'
const Home = () => {
    useTitle("奶龙首页");
    return (
        <>
            Home
            <Button 
                type="primary"
                onClick={() => showToast(3, 6, 9)}>
            showToast
            </Button>
        </>
    )
}

export default Home