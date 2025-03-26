import Link from "next/link";

export default function NovaViagem() {
  return (
    <>
      <div className="w-full max-w-4xl">
        <Link
          href="/"
          className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 mb-4 md:mb-6 flex items-center gap-2 text-primary hover:text-blue-600 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-left h-4 w-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Voltar
        </Link>
      </div>
      <div className="text-center mb-6 md:mb-8">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-secondary-200/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative inline-block p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mb-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plane h-6 w-6 md:h-8 md:w-8 text-primary"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Nova Viagem
        </h1>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div
          className="rounded-lg border bg-card text-card-foreground card-minimal shadow-sm mx-auto"
          data-v0-t="card"
        >
          <form>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-lg md:text-xl text-gray-700">
                Detalhes da Viagem
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                Preencha as informações básicas para começar a planejar sua
                viagem.
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4 md:space-y-6">
              <div className="space-y-1.5 md:space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
                  htmlFor="nome"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plane h-3.5 w-3.5 md:h-4 md:w-4 text-primary"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                  Nome da Viagem
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-200 focus-visible:ring-primary"
                  id="nome"
                  placeholder="Ex: Férias de Verão 2023"
                  required
                  value=""
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
                  htmlFor="destino"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin h-3.5 w-3.5 md:h-4 md:w-4 text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Destino
                </label>
                <div className="space-y-1.5 md:space-y-2">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-map-pin absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-blue-500"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input
                      className="flex w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 md:pl-10 pr-8 md:pr-10 border-blue-100 focus-visible:ring-blue-500 h-9 md:h-10 text-xs md:text-sm"
                      placeholder="Digite um destino (cidade ou país)"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="mobile-date-picker pt-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar h-5 w-5 text-blue-500"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="font-medium text-base text-gray-800">
                        Período da viagem
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pointer-events-none border bg-background hover:text-accent-foreground py-2 w-full justify-start text-left font-normal border-gray-200 hover:bg-gray-50 h-12 px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar mr-3 h-5 w-5 text-blue-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      Selecione as datas
                    </span>
                  </button>
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
                  htmlFor="participantes"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users h-3.5 w-3.5 md:h-4 md:w-4 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Número de Participantes
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-200 focus-visible:ring-primary"
                  id="participantes"
                  min="1"
                  required
                  type="number"
                  value="1"
                />
              </div>
            </div>
            <div className="items-center p-6 pt-0 flex justify-between bg-gray-50">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pointer-events-none border bg-background hover:text-accent-foreground px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100 text-xs md:text-sm h-8 md:h-10"
                type="button"
              >
                Cancelar
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pointer-events-none px-4 py-2 btn-modern bg-primary hover:bg-blue-600 text-white text-xs md:text-sm h-8 md:h-10"
                type="submit"
                disabled
              >
                Criar Viagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
