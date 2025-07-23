import {
    useUserStore
} from '../../store/user'
import {
    useEffect
} from 'react'
import {
    useNavigate,
    useLocation
} from 'react-router-dom'

const RequireAuth = ({children}) => {
    const {isLogin} = useUserStore();
    const navigate = useNavigate();
    const { pathname } = useLocation()
    useEffect(() => {
        if (!isLogin) {
            navigate('/login', { from: pathname})
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
export default RequireAuth;