import { useState, useRef, useEffect } from 'react'
import './App.css'
import { fetchRepos, Repo } from './api/github';

type Props = {
  title: string;
  count?: number;
};

const Hello: React.FC<Props> = ({ title, count = 0 }) => {
  return <h1>{title} - {count}</h1>;
};

function App() {


  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetchRepos();
      if (res.code === 0) {
        setRepos(res.data);
      } else {
        console.error(res.message);
      }
      setLoading(false);
    };

    load();
  }, []);

  return (
    <>
     <Hello title="Hello TS" count={count} />
     <form>
      <input ref={inputRef} type="text" value={value} onChange={handleChange}/>
     </form>
    </>
  )

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>shunwuyu 的 GitHub 仓库</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
