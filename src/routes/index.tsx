import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

export default function Portfolio() {
  return (
    <div className="text-gray-900 scroll-smooth" id="top">
      {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-sm text-white transition-all duration-500 bg-[#3E3F29]/100">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <h1 className="text-lg md:text-xl font-bol">LJS's Portfolio</h1>
          <ul className="flex space-x-6 text-sm font-semibold">
            {["About me", "Skills", "Archiving", "Projects", "Career"].map((section) => (
              <li key={section}>
                <a href={`#${section.toLowerCase().replace(/\s/g, "")}`} className="hover:text-indigo-300 transition-colors duration-200">
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
        <motion.div
          className="relative z-10 text-center p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-amber-300 text-4xl md:text-6xl font-extrabold">LJS's Portfolio</h1>
          <div className="flex justify-center my-11">
             <div className="w-10 h-1 bg-white mb-4 rounded-full" />
          </div>
          <p className="font-normal mt-4 text-lg md:text-2xl">안녕하세요.</p>
          <p className="font-normal mt-4 text-lg md:text-2xl">작고 단단한 성취를 쌓아가는</p>
          <p className="font-normal mt-4 text-lg md:text-2xl">프론트엔드 개발자 이준성입니다.</p>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="aboutme" className="py-24 bg-[#F1F0E4] px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        > 
           <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-12 border-b-4 border-black pb-2 inline-block px-4 text-center">About Me</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-700 mx-auto max-w-[1200px] ">
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../user.svg" />
              <div>
                <p className="font-bold">이름</p>
                <p>이준성</p>
              </div>
            </div>
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../cake.svg" />
              <div>
                <p className="font-bold">생년월일</p>
                <p>02.08.29</p>
              </div>
            </div>
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../envelope.svg" />
              <div>
                <p className="font-bold">이메일</p>
                <p>junseong@gm.gist.ac.kr</p>
              </div>
            </div>
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../earth.svg" />
              <div>
                <p className="font-bold">어학</p>
                <p>TOEIC 795</p>
              </div>
            </div>
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../house-line.svg" />
              <div>
                <p className="font-bold">위치</p>
                <p>광주광역시 북구</p>
              </div>
            </div>      
            <div className="min-w-[200px] max-w-[260px] flex items-start space-x-3 mx-auto">
              <img src="../pencil.svg" />
              <div>
                <p className="font-bold">학력</p>
                <p>GIST 재학 (2021.03~)<br />(전기전자컴퓨터공학과)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-[#BCA88D] px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-12 border-b-4 border-black pb-2 inline-block px-4 text-center">Skills</h2>
          </div>
        <div className="flex justify-center">
          <div className="bg-[#fff6dd] rounded-3xl p-8 shadow-2xl w-full max-w-5xl space-y-6">
            {/* 각 섹션 */}
            {[
              {
                label: "Language",
                src: "../languages.png",
                skills: [
                  { name: "TypeScript", color: "bg-blue-500" },
                  { name: "JavaScript", color: "bg-yellow-400 text-black" },
                  { name: "Python", color: "bg-blue-700" },
                ],
              },
              {
                label: "Frontend",
                src: "../frontend.png",
                skills: [
                  { name: "HTML5", color: "bg-[#E34F26]" },
                  { name: "CSS", color: "bg-[#663399]" },
                  { name: "React", color: "bg-[#61DAFB]" },
                  { name: "Vite", color: "bg-[#646CFF]" },
                  { name: "Tailwind CSS", color: "bg-sky-400" },
                ],
              },
              {
                label: "Tools",
                src: "../tools.png",
                skills: [
                  { name: "Git", color: "bg-[#F05032]" },
                  { name: "GitHub", color: "bg-[#181717]" },
                  { name: "Notion", color: "bg-[#000000]" },
                  { name: "Slack", color: "bg-[#4A154B]" },
                  { name: "Figma", color: "bg-[#F24E1E]" },
                ],
              },
             
            ].map((section) => (
              <div key={section.label} className="flex items-center gap-4">
                {/* 아이콘 + 카테고리 이름 */}
                <div className="w-40 flex items-center text-xl font-bold text-slate-800">
                  <div className="flex">
                    <img src={section.src} className="w-10"/>
                  </div>
                  <div className="flex justify-evenly flex-1">
                    {section.label}
                  </div>
                </div>

                {/* 기술 스택들 */}
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-xl text-sm font-semibold text-white ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </section>

      {/* Archiving */}
      <section id="archiving" className="py-24 bg-[#7D8D86] px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-black pb-2 inline-block">Archiving</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-10 justify-center items-center">
          {/* GitHub 카드 */}
          <a
            href="https://github.com/Junseong0829"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-lg p-8 w-[400px] flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center w-full gap-1">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-20"
              />
              <h2 className="text-4xl font-extrabold text-black">GitHub</h2>
            </div>
            <p className="text-blue-500 text-lg underline">github.com/Junseong0829</p>
            <p className="text-gray-600">프로젝트의 시작과 성장의 기록</p>
          </a>

          {/* 블로그 카드 */}
          <a
            href="https://check-pattern.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-lg p-8 w-[400px] flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 w-full">
              <img
                src="../tistory.png"
                alt="블로그"
                className="w-20"
              />
              <h2 className="text-3xl font-extrabold text-black">체크무늬 공대생</h2>
            </div>
            <p className="text-blue-500 text-lg underline">
              check-pattern.tistory.com
            </p>
            <p className="text-gray-600">공부의 흔적을 기록하다</p>
          </a>
        </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-[#F1F0E4] px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-black pb-2 inline-block">Projects</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 mt-10 mx-auto max-w-[1000px]">
            {/* Project Block 1*/}
              <motion.div
                className="bg-white border hover:shadow-lg transition-all duration-300 shadow rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">꼬르륵</h3>
                  <p className="mt-2 text-gray-600 text-base">
                    GIST 구성원들을 위한 AI 기반 학식 식단/혼잡 종합정보 서비스
                  </p>
                  <div className="mt-4 flex justify-between text-sm">
                    <a href="https://github.com/School-meal-lover/frontend" className="text-pink-600 hover:underline">GitHub →</a>
                    <a href="https://grrrr-5tw.pages.dev/" className="text-pink-600 hover:underline">Live Demo →</a>
                  </div>
                </div>
              </motion.div>
              {/* Project Block 2*/}
              <motion.div
                className="bg-white border hover:shadow-lg transition-all duration-300 shadow rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Cooking Recipe Management Service</h3>
                  <p className="mt-2 text-gray-600 text-base">
                    다양한 요리법과 영양 성분, 하룻동안의 총 영양 성분을 성인 평균량과 비교해 볼 수 있는 사이트
                  </p>
                  <div className="mt-4 flex justify-between text-sm">
                    <a href="https://github.com/Junseong0829/Cooking_Recipe_Management_Service" className="text-pink-600 hover:underline">GitHub →</a>
                  </div>
                </div>
              </motion.div>
           
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-[#F1F0E4] border-t-1 border-gray-500">
        <p>© 2025 Lee Junseong. All rights reserved.</p>
        <small>Icons by <a href="https://kr.freepik.com/author/surang" target="_blank">surang - Freepik</a></small>
        <p className="mt-2">
          <a href="#top" className="text-indigo-400 hover:underline">Back to top ↑</a>
        </p>
        
      </footer>
    </div>
  );
}
