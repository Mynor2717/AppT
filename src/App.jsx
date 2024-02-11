import CrossIcon from "./components/icons/CrossIcon";

const App =() => {
  return (
    <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
<header className="container mx-auto px-4 pt-8">
<div className="flex justify-between">
<h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">ToD0</h1>
   <button>Luna</button>
</div>
   <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-7">
    <span className="rounded-full border-2 inline-block h-5 w-5"></span>
    <input type="text" placeholder="Create a new todo..." className="w-full text-gray-500 outline-none"/>
   </form>
</header>
<main className="container mx-auto px-4 mt-8">
  <div className="bg-white rounded-md px-4">
  <article className="flex gap-4 py-4">
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600 grow">Complete</p>
   <button className="flex-none">
    <CrossIcon />
   </button>
  </article>
  <article>
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600">Complete</p>
   <button>
    <CrossIcon />
   </button>
  </article>
  <article>
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600">Complete</p>
   <button>
    <CrossIcon />
   </button>
  </article>
  

  <section>
    <span>5 Cosas por hacer</span>
    <button>Limpiar</button>
  </section>
  </div>
</main>
<section>
  <button className="container mx-auto px-4">Todo</button>
  <button>Activar</button>
  <button>Completar</button>

</section>

<section>
  <p className="text-center">Drag and Drop</p>
</section>

  </div>

  )
    
};


export default App;
/* Es un archivo para modificar mucho del VSC */ 

// ml- auto para empujar elementos hacia completamente a la esquina

// Con Control  y espacio al estar erscribiendo dentro de una clase se pueden invocar funcionalidades con tailwinds