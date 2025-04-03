"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { SolarLogo } from "../../../public/SolarLogo"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full lg:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Esid Energia Solar Logo</span>
            <SolarLogo className="w-22" />
          </Link>
          <nav className="hidden lg:absolute lg:top-1/2 lg:left-1/2 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="#solutions">
                Soluções
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#instalation">
                Instalação
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#monitoration">
                Monitoramento
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#contact">
                Contato
              </Link>
            </div>
          </nav>
          <Button
            variant="secondary"
            className="hidden h-10 font-semibold lg:block"
          >
            Solicite orçamento
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 lg:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform lg:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#solutions">Soluções</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#instalation">Instalação</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#monitoration">Monitoramento</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#contact">Contato</Link>
            </li>
          </ul>
          <Button variant="secondary" className="text-lg">
            Solicite orçamento
          </Button>
        </nav>
      </div>
    </header>
  )
}
