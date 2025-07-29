import './App.css'
import {
  Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/pages/Home'));
const Discount = lazy(() => import('@/pages/Discount'));
const Collection = lazy(() => import('@/pages/Collection'));
const Trip = lazy(() => import('@/pages/Trip'));
const Account = lazy(() => import('@/pages/Account'));
const Search = lazy(() => import('@/pages/Search'));
const Detail = lazy(() => import('@/pages/Detail'));


function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* 带有tabbar的Layout */}
        <Routes >
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/discount" element={<Discount/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/trip" element={<Trip/>}/>
            <Route path="/account" element={<Account/>}/>
          </Route>
          {/* 空的Layout */}
          <Route element={<BlankLayout />}>
            <Route path="/search" element={<Search />}/>
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
