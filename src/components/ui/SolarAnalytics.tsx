import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          Análises Solares
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Relatórios detalhados para otimizar seu retorno sobre o investimento.
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiNavigationFill}
          title="Relatórios detalhados"
          description="Informações completas para avaliar o desempenho do seu investimento."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Alerta de manutenção"
          description="Receba notificações para manutenções preventivas e evite imprevistos."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Desempenho do sistema"
          description="Energia produzida, economia gerada e redução de CO₂/mês"
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Otimização do consumo"
          description="Dados que ajudam a ajustar o uso e maximizar sua economia."
        />
      </div>
    </section>
  )
}
