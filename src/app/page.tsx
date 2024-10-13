import { Counter } from '@/app/components/counter'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
        <div className="gap-y-2">
          <h1 className="text-center text-4xl font-thin text-slate-700">
            Welcome to Tohru
          </h1>
          <p className="text-center text-sm text-slate-500">
            Made with &#x1F49B; and JavaScript
          </p>
        </div>
        <Counter />
      </div>
    </main>
  )
}
