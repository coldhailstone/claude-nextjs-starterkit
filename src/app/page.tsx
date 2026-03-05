import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FeatureCard } from '@/components/feature-card'
import { Layers, Palette, Shield, Zap, Code2, ArrowRight } from 'lucide-react'

const techStack = [
  {
    icon: Zap,
    name: 'Next.js 16',
    description: 'App Router + Turbopack 기반 풀스택 프레임워크',
  },
  {
    icon: Shield,
    name: 'TypeScript',
    description: '타입 안전성으로 더 견고한 코드 작성',
  },
  {
    icon: Palette,
    name: 'Tailwind CSS v4',
    description: 'CSS-based config, 더 빠른 빌드',
  },
  {
    icon: Layers,
    name: 'shadcn/ui',
    description: '접근성 높은 Radix UI 기반 컴포넌트',
  },
  {
    icon: Code2,
    name: 'ESLint + Prettier',
    description: '일관된 코드 스타일 자동 유지',
  },
]

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <Badge variant="outline" className="mb-4">
          Next.js Starter Kit
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          빠른 시작을 위한
          <br />
          <span className="text-primary">Next.js 보일러플레이트</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS v4, shadcn/ui가 미리 구성된 스타터
          킷입니다. 바로 개발을 시작하세요.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg">
            시작하기
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            문서 보기
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center text-2xl font-semibold">기술 스택</h2>
          <p className="mb-10 text-center text-muted-foreground">
            프로덕션 준비가 된 최신 기술로 구성됩니다
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => (
              <FeatureCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <Card className="mx-auto max-w-xl p-8">
          <CardContent className="p-0">
            <h2 className="mb-2 text-xl font-semibold">바로 시작하세요</h2>
            <p className="mb-6 text-muted-foreground">
              이 스타터 킷을 기반으로 빠르게 개발을 시작할 수 있습니다
            </p>
            <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
              git clone &lt;repo-url&gt; &amp;&amp; npm install
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
