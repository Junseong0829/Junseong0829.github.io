import { createFileRoute } from "@tanstack/react-router";
import Home from "../Home";

// 페이지 본문은 src/Home.tsx 에 있습니다. 라우터 플러그인의 자동 코드 분할이
// 이 파일 안에 정의된 훅 호출을 지워 버려서, 컴포넌트를 별도 파일로 분리했습니다.
export const Route = createFileRoute("/")({
  component: Home,
});
