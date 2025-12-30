"use client"

import type React from "react"
import { Building2, Lightbulb } from "lucide-react"

type Account = {
  name: string
  icon: React.ReactNode
  active: boolean
  color: string
}

const floors: Account[][] = [
  [
    { name: "Netflix", icon: "N", active: true, color: "from-red-500 to-red-600" },
    { name: "Google", icon: "G", active: true, color: "from-blue-500 to-blue-600" },
    { name: "Spotify", icon: "S", active: false, color: "from-green-500 to-green-600" },
  ],
  [
    { name: "Amazon", icon: "A", active: true, color: "from-orange-500 to-orange-600" },
    { name: "Adobe", icon: "Ae", active: false, color: "from-red-500 to-pink-600" },
    { name: "Meta", icon: "M", active: true, color: "from-blue-600 to-blue-700" },
  ],
  [
    { name: "Naver", icon: "N", active: true, color: "from-green-600 to-green-700" },
    { name: "Kakao", icon: "K", active: true, color: "from-yellow-400 to-yellow-500" },
    { name: "Apple", icon: "", active: false, color: "from-stone-700 to-stone-800" },
  ],
]

export default function APT() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
          <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-stone-700" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">계정 아파트</h1>
        <p className="text-xs sm:text-sm text-stone-600 font-medium">가입된 계정을 한눈에 확인하세요</p>
      </div>

      {/* Apartment Container */}
      <div className="relative w-full max-w-xl">
        {/* Sky Background */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-32 bg-gradient-to-b from-blue-100/50 to-transparent rounded-t-full blur-2xl" />

        <div className="relative bg-gradient-to-b from-stone-100 to-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
          {/* Roof */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="relative">
              <div className="w-0 h-0 border-l-[140px] sm:border-l-[180px] border-r-[140px] sm:border-r-[180px] border-b-[60px] sm:border-b-[80px] border-l-transparent border-r-transparent border-b-stone-700/90" />
              {/* Chimney */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-stone-600 rounded-sm -translate-y-3 sm:-translate-y-4" />
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] sm:border-l-[12px] border-r-[10px] sm:border-r-[12px] border-b-[10px] sm:border-b-[12px] border-l-transparent border-r-transparent border-b-stone-500/50" />
            </div>
          </div>

          {/* Building Sign */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-stone-800 px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg shadow-lg border-2 border-stone-600">
              <p className="text-stone-100 font-bold text-xs sm:text-sm tracking-wider">ACCOUNT APT</p>
            </div>
          </div>

          {/* Building Body */}
          <div className="bg-gradient-to-br from-stone-300 via-stone-200 to-stone-300 rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-stone-400/30 p-4 sm:p-8 space-y-4 sm:space-y-6 relative overflow-hidden">
            {/* Decorative building texture */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)",
                  color: "rgb(41, 37, 36)",
                }}
              />
            </div>

            {floors.map((floor, floorIndex) => (
              <div key={floorIndex} className="relative flex items-center gap-3 sm:gap-6 group">
                {/* Floor Number Badge */}
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-stone-700 to-stone-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border-2 border-stone-600 group-hover:scale-105 transition-transform">
                    <span className="text-stone-100 font-bold text-sm sm:text-lg">{floors.length - floorIndex}F</span>
                  </div>
                </div>

                {/* Rooms Container */}
                <div className="flex gap-2 sm:gap-4 flex-1">
                  {floor.map((account) => (
                    <div key={account.name} className="relative group/room flex-1">
                      {/* Room Frame */}
                      <div
                        className={`
                          relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden
                          border-2 sm:border-4 transition-all duration-300
                          ${
                            account.active
                              ? "border-amber-400/60 shadow-lg shadow-amber-300/30"
                              : "border-stone-400/50 shadow-md"
                          }
                          group-hover/room:scale-105 group-hover/room:shadow-xl
                          cursor-pointer
                        `}
                      >
                        {/* Window panes background */}
                        <div
                          className={`absolute inset-0 ${account.active ? "bg-gradient-to-br from-amber-50 to-amber-100" : "bg-stone-300/80"}`}
                        >
                          {/* Cross divider for window panes */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`absolute h-full w-1 ${account.active ? "bg-stone-300" : "bg-stone-400"}`}
                            />
                            <div
                              className={`absolute w-full h-1 ${account.active ? "bg-stone-300" : "bg-stone-400"}`}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-2 sm:p-4">
                          {/* Account Icon */}
                          <div
                            className={`
                              w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center
                              text-white font-bold text-sm sm:text-xl mb-1 sm:mb-2 shadow-lg
                              bg-gradient-to-br ${account.color}
                              transition-transform group-hover/room:scale-110
                            `}
                          >
                            {account.icon}
                          </div>

                          {/* Account Name */}
                          <span
                            className={`text-[10px] sm:text-xs font-bold ${account.active ? "text-stone-800" : "text-stone-600"}`}
                          >
                            {account.name}
                          </span>
                        </div>

                        {/* Light indicator */}
                        {account.active && (
                          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20">
                            <div className="relative">
                              <Lightbulb className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-500 fill-amber-400 animate-pulse" />
                              <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-60 animate-pulse" />
                            </div>
                          </div>
                        )}

                        {/* Inactive overlay */}
                        {!account.active && <div className="absolute inset-0 bg-stone-700/20 backdrop-blur-[1px]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Ground Floor - Entrance */}
            <div className="flex justify-center pt-3 sm:pt-4">
              <div className="relative">
                {/* Door */}
                <div className="w-24 h-32 sm:w-32 sm:h-40 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 rounded-t-xl sm:rounded-t-2xl shadow-xl border-2 sm:border-4 border-stone-600 relative overflow-hidden">
                  {/* Door panels */}
                  <div className="absolute inset-4 border-2 border-stone-600 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-stone-600" />

                  {/* Door handle */}
                  <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full shadow-lg" />

                  {/* Welcome mat */}
                  <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-2 sm:h-3 bg-stone-600 rounded-sm" />
                </div>

                {/* Door frame decoration */}
                <div className="absolute -left-1.5 sm:-left-2 top-0 w-1 sm:w-1.5 h-full bg-stone-600 rounded-full" />
                <div className="absolute -right-1.5 sm:-right-2 top-0 w-1 sm:w-1.5 h-full bg-stone-600 rounded-full" />
              </div>
            </div>
          </div>

          {/* Building Base */}
          <div className="mt-3 sm:mt-4 h-3 sm:h-4 bg-gradient-to-b from-stone-400 to-stone-500 rounded-b-xl sm:rounded-b-2xl shadow-inner" />
        </div>

        {/* Ground shadow */}
        <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-6 sm:h-8 bg-stone-900/10 rounded-full blur-xl" />
      </div>

      {/* Legend */}
      <div className="mt-8 sm:mt-16 flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg border border-stone-200">
        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-400 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-stone-700 font-medium">불이 켜진 세대는 현재 사용 중인 계정입니다</p>
      </div>

      {/* Stats */}
      <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
        <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow border border-stone-200">
          <p className="text-xs text-stone-500 mb-0.5">전체 계정</p>
          <p className="text-lg sm:text-xl font-bold text-stone-800">{floors.flat().length}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow border border-stone-200">
          <p className="text-xs text-stone-500 mb-0.5">활성 계정</p>
          <p className="text-lg sm:text-xl font-bold text-emerald-600">
            {floors.flat().filter((a) => a.active).length}
          </p>
        </div>
      </div>
    </div>
  )
}
