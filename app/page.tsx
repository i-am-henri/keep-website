"use client"
export default function Home() {
  return (
    <main>
      <h2 className="fixed top-4 left-4 font-clashDisplay font-bold text-2xl cursor-pointer" onClick={() => {
        window.location.href = "/"
      }}>keep.henri.gg</h2>
      <a href="https://henri-me.notion.site/Documentation-keep-d72dd91fc6f447c7a576ae632614f582?pvs=4" target="_blank" className="underline font-bold font-clashDisplay fixed right-4 top-4 text-2xl">Documentation</a>
      <section className=" flex flex-col items-center justify-center hero pb-3 " style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", minHeight: "calc(100dvh + 12px)" }}>
        <h2 className="text-black text-6xl ">your links, managed local</h2>
        <p className="mt-4">Privacy first, with a very good <b className="p-2 bg-red-400 rounded-md border-2px border-solid border-red-500 border-2">feeling</b> and <b className="p-2 bg-blue-400 rounded-md  border-solid border-blue-500 border-2">design</b>.</p>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <a href="https://github.com/i-am-henri/" target="_blank" className="bg-blue-500 text-white rounded-md p-3 border-solid border-blue-600 border-2 ">Download from GitHub</a>
        <p>
          Made by <a href="https://henri.gg" className="underline ">@henri</a>
        </p>
      </section>
        <div className="h-14 bottom-5 flex w-full items-center justify-center">
          <a href="https://github.com/i-am-henri/keep" className="underline">GitHub</a>
          <a href="" className="underline  ml-3">Docs</a>
        </div>
    </main>
  )
}