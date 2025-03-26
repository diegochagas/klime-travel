import Link from "next/link";
import Icons from "../components/icons";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto px-4 relative z-10">
        <div className="relative mb-6 md:mb-8">
          <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
          <div className="relative inline-block p-3 md:p-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-4 md:mb-6 shadow-sm">
            <Icons name="plane" className="h-8 w-8 md:h-12 md:w-12" />
          </div>
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 mb-2 tracking-tight drop-shadow-sm">
          Klime Travel
        </h1>

        <h2 className="text-base md:text-lg text-gray-800 mb-3 font-medium">
          Viajar bem começa com um bom planejamento
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-6 md:mb-8 px-4">
          Organize seu orçamento, evite imprevistos e curta cada destino com
          tranquilidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Link
            href="/nova-viagem"
            className="justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 h-10 px-4 py-2 bg-blue-400 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm md:text-base rounded-md"
          >
            <Icons
              name="plus"
              color="white"
              className="h-3.5 w-3.5 md:h-4 md:w-4"
            />
            <span>Nova Viagem</span>
          </Link>
          <button className="justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 border h-10 px-4 py-2 border-secondary text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-sm md:text-base rounded-md">
            <Icons
              name="stars"
              className="h-3.5 w-3.5 md:h-4 md:w-4"
              color="oklch(0.795 0.184 86.047)"
            />
            <span>Sugestões de viagem</span>
          </button>
        </div>
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 border px-4 bg-white hover:bg-blue-50 border-blue-100 text-blue-600 hover:text-blue-700 hover:border-blue-200 h-auto py-4 md:py-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all">
            <Icons
              name="plane"
              className="h-6 w-6 md:h-8 md:w-8"
              color="oklch(.546 .245 262.881)"
            />
            <div className="flex flex-col">
              <span className="font-medium text-base">Buscar Voos</span>
              <span className="text-xs text-muted-foreground">
                Preços e disponibilidade
              </span>
            </div>
          </button>
          <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 border px-4 bg-white hover:bg-yellow-50 border-yellow-100 text-yellow-600 hover:text-yellow-700 hover:border-yellow-200 h-auto py-4 md:py-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all">
            <Icons
              name="building"
              className="h-6 w-6 md:h-8 md:w-8"
              color="oklch(.681 .162 75.834)"
            />
            <div className="flex flex-col">
              <span className="font-medium text-base">Comparar Hotéis</span>
              <span className="text-xs text-muted-foreground">
                Melhores preços
              </span>
            </div>
          </button>
          <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 border px-4 bg-white hover:bg-green-50 border-green-100 text-green-600 hover:text-green-700 hover:border-green-200 h-auto py-4 md:py-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all">
            <Icons
              name="car"
              className="h-6 w-6 md:h-8 md:w-8"
              color="oklch(.627 .194 149.214)"
            />
            <div className="flex flex-col">
              <span className="font-medium text-base">Alugar Carros</span>
              <span className="text-xs text-muted-foreground">
                Em diversos destinos
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="mb-8 md:mb-12 glass-card rounded-xl md:rounded-2xl p-4 md:p-8 max-w-6xl mx-auto relative z-10 bg-gradient-to-br from-white to-primary-50/30">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
          <Icons name="plane" className="h-5 w-5 md:h-6 md:w-6 mr-2" />

          <span>Suas Viagens</span>
        </h2>
        <div className="text-center py-10 md:py-16 glass-card rounded-xl max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 mb-4">
            <Icons name="plane" className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h2 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-gray-800">
            Nenhuma viagem planejada
          </h2>
          <p className="text-gray-600 mb-5 md:mb-6 px-4 md:px-6 text-sm md:text-base">
            Comece criando sua primeira viagem para organizar seus planos e
            despesas.
          </p>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 btn-modern bg-blue-400 hover:bg-blue-600 text-white"
            href="/nova-viagem"
          >
            Criar Primeira Viagem
          </Link>
        </div>
      </div>
    </main>
  );
}
