import CrossIcon from "./components/icons/CrossIcon";
import Luna from "./components/icons/Luna";

const App =() => {
  return (
    <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
<header className="container mx-auto px-4 pt-8">
<div className="flex justify-between">
<h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">ToD0</h1>
   <button>
    <Luna className="fill-red-400"/>
   </button>
</div>
   <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-7">
    <span className="rounded-full border-2 inline-block h-5 w-5"></span>
    <input type="text" placeholder="Create a new todo..." className="w-full text-gray-500 outline-none"/>
   </form>
</header>
<main className="container mx-auto px-4 mt-8">
  <div className="bg-white rounded-md">
  <article className="flex gap-4 py-4 border-b-gray-400 border-b-2 px-4">
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600 grow">Complete</p>
   <button className="flex-none">
    <CrossIcon />
   </button>
  </article>
  <article className="flex gap-4 py-4 border-b-gray-400 border-b-2 px-4">
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600 grow">Complete</p>
   <button className="flex-none">
    <CrossIcon />
   </button>
  </article>
  <article className="flex gap-4 py-4 border-b-gray-400 border-b-2 px-4">
   <button className="rounded-full border-2 inline-block h-5 w-5"></button>
   <p className="text-gray-600 grow">Complete</p>
   <button className="flex-none">
    <CrossIcon />
   </button>
  </article>
 
  <section className="py-4 px-4 flex justify-between">
    <span className="text-gray-400">5 Cosas por hacer</span>
    <button className="text-gray-400">Limpiar</button>
  </section>
  </div>
</main>

<section className="container mx-auto px-4 mt-8">
  <div className="bg-white flex justify-center rounded-md p-4 gap-4">
  <button className="text-blue-600">Todo</button>
  <button className="hover:text-blue-600">Activar</button>
  <button className="hover:text-blue-600">Completar</button>
  </div>
</section>

<section>
  <p className="text-center mt-8">Drag and Drop</p>
</section>

  </div>

  )
    
};


export default App;
/* Es un archivo para modificar mucho del VSC */ 

// ml- auto para empujar elementos hacia completamente a la esquina

// Con Control  y espacio al estar erscribiendo dentro de una clase se pueden invocar funcionalidades con tailwinds