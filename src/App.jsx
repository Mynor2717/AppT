const App =() => {
  return (
    <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">
<header className="container mx-auto px-4 pt-8">
<div className="flex justify-between">
<h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">ToD0</h1>
   <button>Luna</button>
</div>
   <form className="bg-white rounded-md overflow-hidden py-4">
    <span className="rounded-full border-2 inline-block h-3 w-3"></span>
    <input type="text" placeholder="Create a new todo..."/>
   </form>
</header>
<main className="container mx-auto px-4">
  <article>
   <button>Circulo</button>
   <p>Complete</p>
   <button>X</button>
  </article>
  <article>
   <button>Circulo</button>
   <p>Complete</p>
   <button>X</button>
  </article>
  <article>
   <button>Circulo</button>
   <p>Complete</p>
   <button>X</button>
  </article>

  <section>
    <span>5 Cosas por hacer</span>
    <button>Limpiar</button>
  </section>
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


// Con Control  y espacio al estar erscribiendo dentro de una clase se pueden invocar funcionalidades con tailwinds