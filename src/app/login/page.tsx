"use client";

//import { useState } from "react"

export default function Login() {
  //const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-100 flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center mt-4 sm:mt-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          계정 아파트
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-light tracking-wide">
          흩어진 계정들이 사는 곳
        </p>
      </div>

      {/* Apartment Illustration */}
      <div className="flex flex-col items-center mt-8 sm:mt-12 mb-6 sm:mb-8 scale-90 sm:scale-100">
        {/* Roof */}
        <div className="relative">
          <div
            className="w-0 h-0
            border-l-[120px] sm:border-l-[150px] border-r-[120px] sm:border-r-[150px] border-b-[75px] sm:border-b-[95px]
            border-l-transparent border-r-transparent border-b-slate-700
            drop-shadow-lg"
          />
          {/* Chimney */}
          <div className="absolute -top-6 left-1/2 -translate-x-6 w-8 h-12 bg-slate-600 rounded-t-sm shadow-md" />
        </div>

        {/* Building */}
        <div className="bg-gradient-to-b from-slate-200 to-slate-300 w-[240px] sm:w-[280px] rounded-b-[32px] shadow-2xl pt-6 sm:pt-8 pb-4 sm:pb-6 px-3 sm:px-4 border border-slate-300/50">
          {/* Floors */}
          <div className="space-y-4 sm:space-y-5">
            {[5, 4, 3, 2, 1].map((floor) => (
              <div key={floor} className="flex justify-center gap-4 sm:gap-5">
                {[1, 2, 3].map((room) => {
                  const isLit = floor >= 3;
                  return (
                    <div
                      key={room}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg transition-all duration-300 ${
                        isLit
                          ? "bg-amber-100 shadow-[inset_0_2px_8px_rgba(251,191,36,0.4)] border border-amber-200"
                          : "bg-slate-400/60 shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] border border-slate-500/30"
                      }`}
                    >
                      {/* Window frame details */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-0.5 h-full ${
                            isLit ? "bg-amber-200/40" : "bg-slate-500/40"
                          }`}
                        />
                        <div
                          className={`h-0.5 w-full absolute ${
                            isLit ? "bg-amber-200/40" : "bg-slate-500/40"
                          }`}
                        />
                      </div>
                      {/* Light glow effect */}
                      {isLit && (
                        <div className="absolute inset-0 bg-amber-300/20 rounded-lg blur-sm" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Entrance */}
          <div className="flex justify-center mt-5 sm:mt-6">
            <div className="relative w-16 sm:w-20 h-20 sm:h-24 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-2xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] border border-slate-800/30">
              {/* Door knob */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-sm" />
              {/* Door panels */}
              <div className="absolute inset-2 flex flex-col gap-2">
                <div className="flex-1 border border-slate-800/20 rounded" />
                <div className="flex-1 border border-slate-800/20 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Ground */}
        <div className="w-[280px] sm:w-[320px] h-3 bg-gradient-to-b from-stone-300 to-stone-400 rounded-b-full shadow-inner" />
      </div>

      {/* Login Buttons */}
      <div className="w-full max-w-sm space-y-3 mb-6 sm:mb-8 px-2 sm:px-0">
        <button
          onMouseEnter={() => setHoveredButton("google")}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-full flex items-center justify-center gap-3 bg-white py-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium text-slate-700">Google로 시작하기</span>
        </button>

        <button
          onMouseEnter={() => setHoveredButton("kakao")}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-full flex items-center justify-center gap-3 bg-[#FEE500] hover:bg-[#FDD800] py-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
            <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.794 1.877 5.246 4.675 6.606-.194.714-.629 2.36-.717 2.74-.105.456.167.45.352.327.154-.103 2.455-1.635 3.381-2.256.754.104 1.53.158 2.309.158 5.523 0 10-3.477 10-7.8S17.523 3 12 3z" />
          </svg>
          <span className="font-medium text-slate-900">카카오로 시작하기</span>
        </button>

        <button
          onMouseEnter={() => setHoveredButton("naver")}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-full flex items-center justify-center gap-3 bg-[#03C75A] hover:bg-[#02B350] text-white py-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
          </svg>
          <span className="font-medium">네이버로 시작하기</span>
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-xs text-slate-500 text-center max-w-md leading-relaxed px-4">
        로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
      </p>
    </div>
  );
}
