import { Heading } from '@/components/ui/heading'
import { Small } from '@/components/ui/small'
import { MyFirstComponent } from '@/app/components/my-first-component'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-y-10 px-4">
        <div className="flex flex-col items-center gap-y-2">
          <Heading className="text-center">Welcome to Aira</Heading>
          <Small className="text-center">
            Made with &#x1F49B; and JavaScript
          </Small>
        </div>
        <MyFirstComponent initialValue={0} incrementBy={10} />
      </div>
    </main>
  )
}
