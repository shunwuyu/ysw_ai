import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef 
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef();
//   console.log(boxRef.current, boxRef);

//   useEffect(()=> {
//     console.log('useEffect height', boxRef.current.offsetHeight);
//   }, [])

//   useLayoutEffect(()=> {
//     console.log('useLayoutEffect height', boxRef.current.offsetHeight);
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{height: 100}}></div>
//     </>
//   )
// }

// function App() {
//   const [content, setContent] = useState('물론입니다! 아래는 영화 《엽기적인 그녀》(My Sassy Girl)의 클래식한 대사 중 하나입니다. 이 장면은 여자주인공(전지현 분)과 남자주인공(차태현 분)이 기차에서 나누는 유쾌하고도 감동적인 대화 중 일부입니다:');
//   const ref = useRef();
//   // useEffect(() => {
//   //   setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。')
//   //   ref.current.style.height='200px';
//   // }, [])
//   useLayoutEffect(() => {
//     // 阻塞渲染 同步的感觉
//     setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。')
//     ref.current.style.height='200px';
//   }, [])
//   return (
//     <div ref={ref} style={{height: '50px', background: 'lightblue'}}>{content}</div>
//   )
// }
// 弹窗
function Modal() {
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px `
  }, []);

  return <div ref={ref} style={{background:'red', position: 'absolute',height:'200px', width: '200px'}}>我是弹窗</div>
}

function App() {
  return (
    <>
      <Modal />
    </>
  )
}
export default App
