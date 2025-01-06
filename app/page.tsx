export default function Home() {
  return (
    <main id="main-backdrop" className="relative">
      <div className="part-body-main relative p-4">
        <div className="body-main-frame absolute w-full top-0 left-0  h-lvh pointer-events-none " />
        <div className="w-[95%] mx-auto p-10 text-center">
          <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
            Danjon <span className="text-primary-foreground">Meshi</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
