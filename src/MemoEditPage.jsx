import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MemoContext } from "./main.jsx";
import "./MemoEditPage.css"; // CSS 불러오기

function MemoEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { memoList, setMemoList } = useContext(MemoContext);

  const memo = memoList.find((m) => m.id === Number(id));
  const [title, setTitle] = useState(memo?.title || "");
  const [content, setContent] = useState(memo?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updatedList = memoList.map((m) =>
        m.id === Number(id) ? { ...m, title, content } : m
      );
      setMemoList(updatedList);
      alert("메모가 수정되었습니다!");
    } else {
      const newMemo = {
        id: memoList.length > 0 ? memoList[memoList.length - 1].id + 1 : 1,
        title,
        content,
      };
      setMemoList([...memoList, newMemo]);
      alert("새 메모가 추가되었습니다!");
    }
    navigate("/");
  };

  const handleDelete = () => {
    const updatedList = memoList.filter((m) => m.id !== Number(id));
    setMemoList(updatedList);
    alert("메모가 삭제되었습니다!");
    navigate("/");
  };

  return (
    <div className="memo-edit">
      <h2>{id ? "메모 수정 페이지" : "새 메모 입력 페이지"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit">{id ? "수정하기" : "추가하기"}</button>

        {id && (
          <button type="button" onClick={handleDelete} className="delete">
            삭제하기
          </button>
        )}
      </form>
    </div>
  );
}

export default MemoEditPage;
