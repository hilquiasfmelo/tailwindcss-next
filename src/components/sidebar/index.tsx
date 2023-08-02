import { Cog, LifeBuoy, Search } from 'lucide-react'

import { UsedSpaceWidget } from './used-space-widget'
import { NavItem } from './main-navigation/nav-item'
import { MainNavigation } from './main-navigation'
import { Profile } from './profile'
import * as Input from '../input'

import { Logo } from './logo'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="w5 h-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
