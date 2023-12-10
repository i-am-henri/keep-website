export default function Home() {
  return (
    <main>
      <section className=" flex flex-col items-center justify-center hero pb-3 " style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", minHeight: "calc(100dvh + 12px)"}}>
        <h2 className="text-black text-6xl ">your links, managed local</h2>
        <p className="mt-4">Privacy first, with a very good <b className="p-2 bg-red-400 rounded-md border-2px border-solid border-red-500 border-2">feeling</b> and <b className="p-2 bg-blue-400 rounded-md  border-solid border-blue-500 border-2">design</b>.</p>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <a href="https://github.com/i-am-henri/" target="_blank" className="bg-blue-500 text-white rounded-md p-3 border-solid border-blue-600 border-2 ">Download from GitHub</a>
      </section>
    </main>
  )
}