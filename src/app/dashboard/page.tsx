"use client"

import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Smartphone,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
} from "lucide-react"

type SecurityMail = {
  title: string
  date: string
  level: "safe" | "warning" | "danger"
}

const securityMails: SecurityMail[] = [
  {
    title: "새로운 기기에서 로그인 시도",
    date: "2024-11-02",
    level: "warning",
  },
  {
    title: "비밀번호 변경이 필요합니다",
    date: "2024-10-18",
    level: "danger",
  },
  {
    title: "2단계 인증이 활성화되었습니다",
    date: "2024-09-01",
    level: "safe",
  },
]

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 px-4 sm:px-6 py-6 sm:py-8 pb-20 sm:pb-24">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-6 sm:w-8 bg-stone-400 rounded-full" />
          <p className="text-xs font-medium text-stone-500 tracking-wide uppercase">8층 · 계정 보안</p>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2 sm:gap-3 mb-1">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </div>
          <span className="text-balance">Google 계정</span>
        </h1>
        <p className="text-sm text-stone-600">계정 보안 상태를 확인하세요</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {/* Security Status - Hero Card */}
        <div className="bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-sm border border-stone-200/60 p-5 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between mb-5 sm:mb-6 gap-2">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-stone-900 mb-1">보안 상태</h2>
                <p className="text-xs sm:text-sm text-stone-600">최근 활동 분석 결과</p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full flex-shrink-0">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                <span className="text-xs sm:text-sm font-medium text-amber-700">주의 필요</span>
              </div>
            </div>

            {/* Security Score */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="relative flex-shrink-0">
                <svg className="w-24 h-24 sm:w-28 sm:h-28 transform -rotate-90">
                  <circle
                    cx={window.innerWidth >= 640 ? "56" : "48"}
                    cy={window.innerWidth >= 640 ? "56" : "48"}
                    r={window.innerWidth >= 640 ? "48" : "40"}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-stone-200"
                  />
                  <circle
                    cx={window.innerWidth >= 640 ? "56" : "48"}
                    cy={window.innerWidth >= 640 ? "56" : "48"}
                    r={window.innerWidth >= 640 ? "48" : "40"}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * (window.innerWidth >= 640 ? 48 : 40)}`}
                    strokeDashoffset={`${2 * Math.PI * (window.innerWidth >= 640 ? 48 : 40) * (1 - 0.62)}`}
                    className="text-amber-500 transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-stone-900">62</div>
                    <div className="text-xs text-stone-500">점</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                  최근 보안 이메일 분석 결과, 계정 보호 수준이 충분하지 않습니다. 아래 권장사항을 확인해주세요.
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors mx-auto sm:mx-0">
                  <TrendingUp className="w-4 h-4" />
                  <span>보안 점수 향상하기</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Mail Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/60 p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-semibold text-stone-900">최근 보안 알림</h2>
            <span className="text-xs text-stone-500">지난 3개월</span>
          </div>

          <div className="space-y-3">
            {securityMails.map((mail, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      mail.level === "safe"
                        ? "bg-emerald-100"
                        : mail.level === "warning"
                          ? "bg-amber-100"
                          : "bg-red-100"
                    }`}
                  >
                    {mail.level === "safe" ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    ) : mail.level === "warning" ? (
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                    ) : (
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-stone-900 mb-0.5 truncate">{mail.title}</p>
                    <p className="text-xs text-stone-500">{mail.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <span
                    className={`text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                      mail.level === "safe"
                        ? "bg-emerald-100 text-emerald-700"
                        : mail.level === "warning"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {mail.level === "safe" ? "안전" : mail.level === "warning" ? "주의" : "위험"}
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-600 transition-colors hidden sm:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/60 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-5">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
            <h2 className="text-base sm:text-lg font-semibold text-stone-900">보안 진단 결과</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2 sm:gap-3 p-3 rounded-lg bg-amber-50">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                여러 기기에서 로그인 시도가 감지되었습니다
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 p-3 rounded-lg bg-red-50">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                비밀번호 변경 요청 메일이 반복적으로 수신되었습니다
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3 p-3 rounded-lg bg-emerald-50">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">2단계 인증은 활성화되어 있습니다</p>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-5 sm:p-6 text-white">
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            <h2 className="text-base sm:text-lg font-semibold">이렇게 개선해보세요</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <button className="w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-left group border border-white/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:font-medium mb-1">비밀번호를 최근 3개월 이내 기준으로 변경하세요</p>
                <p className="text-xs text-blue-100">강력한 비밀번호로 보안을 강화하세요</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-2 hidden sm:block" />
            </button>

            <button className="w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-left group border border-white/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:font-medium mb-1">사용하지 않는 기기 로그인을 제거하세요</p>
                <p className="text-xs text-blue-100">알 수 없는 기기의 액세스를 차단하세요</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-2 hidden sm:block" />
            </button>

            <button className="w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-all text-left group border border-white/20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:font-medium mb-1">2단계 인증 수단을 추가로 등록하세요</p>
                <p className="text-xs text-blue-100">복구 옵션을 추가하여 계정을 더욱 안전하게</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors mt-2 hidden sm:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
