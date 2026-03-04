# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component>
```

## Architecture

**App Router** 기반 Next.js 프로젝트. 전체 레이아웃은 `src/app/layout.tsx`에서 구성되며, `ThemeProvider` → `Header` / `main` / `Footer` 구조로 이루어진다.

```
src/
├── app/
│   ├── layout.tsx        # 루트 레이아웃 (ThemeProvider, Header, Footer 통합)
│   ├── globals.css       # Tailwind v4 CSS 설정 + shadcn 디자인 토큰
│   └── page.tsx          # 홈 페이지
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트 (자동 생성, 직접 수정 가능)
│   ├── header.tsx        # 글로벌 헤더
│   ├── footer.tsx        # 글로벌 푸터
│   ├── theme-provider.tsx  # next-themes 래퍼 (클라이언트 컴포넌트)
│   └── theme-toggle.tsx    # 다크/라이트/시스템 테마 토글 드롭다운
└── lib/
    └── utils.ts          # cn() 유틸리티 (clsx + tailwind-merge)
```

**Tailwind CSS v4**: `tailwind.config` 파일 없음. CSS 기반 설정으로, `globals.css`에서 `@theme inline` 블록으로 디자인 토큰을 정의한다. 다크 모드는 `class` 전략 사용.

**shadcn/ui**: `components.json`의 설정 — style: `new-york`, baseColor: `neutral`, CSS variables 사용. 컴포넌트는 `src/components/ui/`에 복사된다.

**테마**: `next-themes`로 시스템/라이트/다크 지원. `layout.tsx`의 `<html>`에 `suppressHydrationWarning` 필수.

## Code Style

- Prettier: `semi: false`, `singleQuote: true`, `trailingComma: all`, `printWidth: 80`
- ESLint: Next.js Core Web Vitals + TypeScript + Prettier (flat config)
- 저장 시 자동 포맷 (`.vscode/settings.json` 설정됨)
- Path alias: `@/` → `src/`
