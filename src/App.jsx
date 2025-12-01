import { Link } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { MemoContext } from "./main.jsx"; // main.jsx에서 바로 가져오기

function App() {
  const { memoList } = useContext(MemoContext);

  return (
    <>
      <h2>메모 리스트</h2>
      <button>
        <Link to="/new">입력하기</Link>
      </button>
      <ul>
        {memoList.map((memo) => (
          <li key={memo.id}>
            <Link to={`/${memo.id}`}>
              <h3>{memo.title}</h3>
            </Link>
            <p>{memo.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
