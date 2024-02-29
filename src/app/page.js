const PROFILES = ['BackEnd', 'FrontEnd', 'FullStack']
const BackEnd = ['Node.js']
const FrontEnd = ['Nextjs', 'Nuxtjs', 'React', 'Vue.js']

const TECNOLOGIES = {
  BackEnd,
  FrontEnd,
  FullStack: [...BackEnd, ...FrontEnd]
}

export default function Home () {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-6">
      <header>
        <h1
          className="text-5xl font-bold text-center"
        >
          Entrevistas técnicas
        </h1>
      </header>

      <seccion className="flex gap-3 items-center">
        <label
          htmlFor="profile"
          className="text-lg"
        >
          Perfil a entrenar
        </label>
        <select className="p-2 rounded-md border border-gray-300 text-gray-800 min-w-[200px]">
          <option value="">Selecione un perfil</option>
          {PROFILES.map((profile) => (
            <option key={profile} value={profile}>
              {profile}
            </option>
          ))}
        </select>
      </seccion>

      <seccion className="flex gap-3 items-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nextjs
                </h5>
            </a>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Entrenar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
      </seccion>
    </main>
  )
}
