import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

export default function Portfolio() {
  return (
    <div className="text-gray-900 scroll-smooth bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" id="top">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md text-white transition-all duration-500 bg-gradient-to-r from-slate-800/95 via-blue-800/95 to-indigo-800/95 border-b border-white/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <motion.h1 
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            LJS's Portfolio
          </motion.h1>
          <ul className="flex space-x-6 text-sm font-semibold">
            {["About me", "Skills", "Archiving", "Projects", "Career"].map((section) => (
              <motion.li key={section} whileHover={{ y: -2 }}>
                <a 
                  href={`#${section.toLowerCase().replace(/\s/g, "")}`} 
                  className="hover:text-blue-300 transition-all duration-300 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <motion.div
          className="relative z-10 text-center p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-white text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LJS's Portfolio
          </motion.h1>
          
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-white/90 font-light text-xl md:text-2xl">안녕하세요.</p>
            <p className="text-white/90 font-light text-xl md:text-2xl">작고 단단한 성취를 쌓아가는</p>
            <p className="text-white/90 font-light text-xl md:text-2xl">프론트엔드 개발자 <span className="font-semibold text-blue-300">이준성</span>입니다.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <motion.button
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 보기
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="aboutme" className="py-24 bg-white/80 backdrop-blur-sm px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        > 
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">About Me</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "../user.svg", label: "이름", value: "이준성" },
              { icon: "../cake.svg", label: "생년월일", value: "02.08.29" },
              { icon: "../envelope.svg", label: "이메일", value: "junseong@gm.gist.ac.kr" },
              { icon: "../earth.svg", label: "어학", value: "TOEIC 795" },
              { icon: "../house-line.svg", label: "위치", value: "광주광역시 북구" },
              { icon: "../pencil.svg", label: "학력", value: "GIST 재학 (2021.03~)\n(전기전자컴퓨터공학과)" }
            ].map((item, index) => (
              <motion.div
                                  key={item.label}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center p-2">
                    <img src={item.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 mb-1">{item.label}</p>
                    <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {[
                {
                  label: "Language",
                  src: "../languages.png",
                  skills: [
                    { name: "TypeScript", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                    { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black" },
                    { name: "Python", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
                  ],
                },
                {
                  label: "Frontend",
                  src: "../frontend.png",
                  skills: [
                    { name: "HTML5", color: "bg-gradient-to-r from-orange-500 to-red-500" },
                    { name: "CSS", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                    { name: "React", color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
                    { name: "Vite", color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
                    { name: "Tailwind CSS", color: "bg-gradient-to-r from-sky-400 to-blue-500" },
                  ],
                },
                {
                  label: "Tools",
                  src: "../tools.png",
                  skills: [
                    { name: "Git", color: "bg-gradient-to-r from-orange-500 to-red-500" },
                    { name: "GitHub", color: "bg-gradient-to-r from-gray-700 to-gray-800" },
                    { name: "Notion", color: "bg-gradient-to-r from-gray-800 to-black" },
                    { name: "Slack", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                    { name: "Figma", color: "bg-gradient-to-r from-orange-500 to-red-500" },
                  ],
                },
                {
                  label: "DevOps",
                  src: "../devops.png",
                  skills: [
                    { name: "Vercel", color: "bg-gradient-to-r from-gray-800 to-black" },
                  ]
                }
              ].map((section, sectionIndex) => (
                <motion.div
                  key={section.label}
                  className="flex items-center gap-6 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-40 flex items-center text-xl font-bold text-slate-800">
                    <div className="flex">
                      <img src={section.src} className="w-10" />
                    </div>
                    <div className="flex justify-evenly flex-1">
                      {section.label}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${skill.color}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: sectionIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Archiving */}
      <section id="archiving" className="py-24 bg-white/80 backdrop-blur-sm px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Archiving</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            {/* GitHub 카드 */}
            <motion.div
              className="w-full md:w-[400px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.a
                href="https://github.com/Junseong0829"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-blue-200/50 group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center w-full gap-3 h-20 mb-6">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="w-20 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-4xl font-extrabold text-gray-800">GitHub</h3>
                </div>
                <p className="text-blue-600 text-lg font-medium mb-3 group-hover:text-blue-700 transition-colors duration-300">github.com/Junseong0829</p>
                <p className="text-gray-600 text-lg">프로젝트의 시작과 성장의 기록</p>
              </motion.a>
            </motion.div>

            {/* 블로그 카드 */}
                          <motion.div
                className="w-full md:w-[400px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
              <motion.a
                href="https://check-pattern.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-blue-200/50 group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 w-full h-20 mb-6">
                  <img
                    src="../tistory.png"
                    alt="블로그"
                    className="w-20 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-3xl font-extrabold text-gray-800">체크무늬 공대생</h3>
                </div>
                <p className="text-blue-600 text-lg font-medium mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  check-pattern.tistory.com
                </p>
                <p className="text-gray-600 text-lg">공부의 흔적을 기록하다</p>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects - 특별히 디자인된 섹션 */}
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {[
              {
                title: "꼬르륵",
                period: "2025.04 ~",
                team: "6인",
                description: "GIST 구성원들을 위한 AI 기반 학식 식단/혼잡 종합정보 서비스",
                details: [
                  "학식 메뉴를 보는 과정의 불편함에서 착안된 프로젝트",
                  "메뉴 조회 기능을 탑재한 1차 배포 완료",
                  "추후 식당 혼잡도 및 예상 대기 시간 정보 제공 예정"
                ],
                tech: "React, TypeScript, Tailwind CSS, Axios, Tanstack-router",
                github: "https://github.com/School-meal-lover/frontend",
                demo: "https://grrrr-5tw.pages.dev/",
                isMain: true
              },
              {
                title: "Sermo",
                period: "2025.08",
                team: "4인",
                description: "부담없이 나만의 AI와 카카오톡처럼 대화하는 회화 학습 앱",
                details: [
                  "AI의 성격, 성별, 이름을 직접 설정하여 개인 맞춤형 대화 파트너 생성",
                  "카카오톡과 유사한 채팅 인터페이스로 자연스러운 영어 대화 연습 환경 제공",
                  "단어 및 문장 퀴즈를 통한 체계적인 영어 학습 시스템",
                ],
                tech: "React, TypeScript, Tailwind CSS, Tanstack-router",
                github: "https://github.com/sermones/sermo-fe",
                demo: "https://demo-page-nu.vercel.app",
                isMain: false
              },
              {
                title: "Agora",
                period: "2025.04",
                team: "4인",
                description: "에코 체임버 현상을 해결하기 위해 고안된 AI 기반 뉴스 기사 사이트",
                details: [
                  "Gemini API 사용",
                  "진보, 중립, 보수 총 3가지 영역의 기사 제공",
                  "AI 챗봇과 대화 기능을 통한 유연한 사고 유도"
                ],
                tech: "React, TypeScript, ReactRouter",
                github: "https://github.com/Junseong0829/ImpactAI_Hackathon",
                isMain: false
              },
              {
                title: "CookFolio",
                period: "2025.02 ~ 2025.03",
                team: "1인",
                description: "다양한 요리법과 영양 성분, 하룻동안의 총 영양 성분을 성인 평균량과 비교해 볼 수 있는 사이트",
                details: [
                  "식품의약품안전처의 Open API 사용",
                  "다양한 음식의 칼로리, 영양 성분, 식재료, 조리 방법 제공",
                  "본격적인 웹 개발의 길을 걷게 된 프로젝트"
                ],
                tech: "React, JavaScript, ReactRouter",
                github: "https://github.com/Junseong0829/Cooking_Recipe_Management_Service",
                isMain: false
              },
             
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className={`group relative backdrop-blur-sm rounded-3xl transition-all duration-500 border overflow-hidden ${
                  project.isMain 
                    ? 'bg-white/90 shadow-2xl hover:shadow-3xl border-blue-300/50 hover:border-blue-400/50' 
                    : 'bg-white/80 shadow-xl hover:shadow-2xl border-white/20 hover:border-blue-200/50'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* 상단 그라데이션 바 - 메인 프로젝트는 연분홍~빨강 계열 */}
                <div className={`h-2 ${
                  project.isMain 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}></div>
                
                <div className="p-8 flex flex-col h-full">
                  {/* 프로젝트 헤더 - 세로 정렬 맞춤 */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold bg-clip-text text-transparent ${
                          project.isMain 
                            ? 'bg-gradient-to-r from-pink-600 to-rose-600' 
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                        }`}>
                          {project.title}
                        </h3>
                        {project.isMain && <span className="text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs">Main</span>}
                      </div>
                      <span className="text-gray-500 font-medium">{project.period}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      project.isMain 
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                    }`}>
                      {project.team}
                    </span>
                  </div>
                  
                  {/* 프로젝트 설명 */}
                  <p className="text-gray-700 font-semibold text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* 프로젝트 상세사항 */}
                  <div className="space-y-3 mb-6">
                    {project.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          project.isMain 
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500' 
                            : 'bg-blue-400'
                        }`}></div>
                        <p className="text-gray-600 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* 기술 스택 */}
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 px-4 py-3 rounded-xl mb-6">
                    <p className="text-slate-700 font-medium text-center">{project.tech}</p>
                  </div>
                  
                  {/* 세련된 링크 버튼들 - 하단 고정 */}
                  <div className="flex gap-3 mt-auto relative z-10">
                    <a 
                      href={project.github} 
                      className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-medium py-3 px-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className={`flex-1 font-medium py-3 px-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 cursor-pointer ${
                          project.isMain 
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white' 
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L19 8l-9 9z"/>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* 호버 시 배경 효과 */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0 ${
                  project.isMain 
                    ? 'bg-blue-500/5' 
                    : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Career - 새로 추가된 섹션 */}
      <section id="career" className="py-24 bg-white/80 backdrop-blur-sm px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Career</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 타임라인 라인 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-200 to-orange-200"></div>
              
              {/* 경력 항목들 */}
              {[
                {
                  year: "2025",
                  title: "Impact AI Hackathon",
                  company: "GIST 인공지능연구소장상 (2위)",
                  description: "AI 기반 뉴스 기사 사이트 'Agora' 프로젝트로 에코 체임버 현상 해결에 기여",
                  skills: ["React", "TypeScript", "Gemini API", "AI 챗봇", "뉴스 분석"]
                },
              ].map((career, index) => (
                                 <motion.div
                   key={index}
                   className="relative flex items-start gap-6 mb-12 last:mb-0"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.8, delay: index * 0.1 }}
                   viewport={{ once: true, amount: 0.3 }}
                 >
                  {/* 타임라인 점 - 해커톤 수상은 특별한 색상 */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg">
                    <span className="text-lg leading-none">2025.</span>
                    <span className="text-lg leading-none">04</span>
                  </div>
                  
                  {/* 경력 내용 */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200/50 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{career.title}</h3>
                      
                    </div>
                    <p className="text-orange-600 font-semibold mb-3 text-lg">{career.company}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{career.description}</p>
                    
                    {/* 사용 기술 */}
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
                  <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">이준성</h3>
            <p className="text-gray-300 mb-6">프론트엔드 개발자로서 사용자 경험을 향상시키는 것에 열정을 가지고 있습니다.</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Junseong0829" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                GitHub
              </a>
              <a href="https://check-pattern.tistory.com" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Blog
              </a>
              <a href="mailto:junseong@gm.gist.ac.kr" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                Email
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 mb-2">© 2025 Lee Junseong. All rights reserved.</p>
              <small className="text-gray-500">Icons by <a href="https://kr.freepik.com/author/surang" target="_blank" className="hover:text-blue-300 transition-colors duration-300">surang - Freepik</a></small>
            </div>
            
            <motion.a 
              href="#top" 
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top ↑
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
