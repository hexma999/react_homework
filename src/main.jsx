import { StrictMode, createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MemoEditPage from "./MemoEditPage.jsx";

// Context를 여기서 바로 정의
export const MemoContext = createContext();

function MemoProvider({ children }) {
  const [memoList, setMemoList] = useState([
    { id: 1, title: "첫 번째 메모", content: "리액트 공부하기" },
    { id: 2, title: "두 번째 메모", content: "점심 메뉴 고민하기" },
    { id: 3, title: "세 번째 메모", content: "운동하기" },
  ]);

  return (
    <MemoContext.Provider value={{ memoList, setMemoList }}>
      {children}
    </MemoContext.Provider>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/new", element: <MemoEditPage /> }, // 신규 입력 페이지
  { path: "/:id", element: <MemoEditPage /> }, //// 수정 페이지
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoProvider>
      <RouterProvider router={router} />
    </MemoProvider>
  </StrictMode>
);
