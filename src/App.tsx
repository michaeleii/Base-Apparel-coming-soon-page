import EmailForm from "./components/EmailForm";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="relative mx-auto grid min-h-screen w-full  grid-cols-1 text-[hsl(0_36%_70%)] xl:max-w-7xl xl:grid-cols-[1fr_610px] xl:grid-rows-[auto_1fr]  xl:before:absolute xl:before:top-0 xl:before:h-screen xl:before:w-full xl:before:bg-bg-pattern xl:before:bg-no-repeat xl:before:object-cover">
      <div className="z-10 p-10 xl:pl-20 xl:pt-20">
        <Logo />
      </div>
      <picture className="z-10 xl:row-span-2">
        <source media="(min-width: 1280px)" srcSet="/hero-desktop.jpg" />
        <img
          src="/hero-mobile.jpg"
          alt=""
          className="w-full object-cover xl:h-full"
        />
      </picture>
      <div className="z-10 p-10 text-center xl:max-w-2xl xl:pl-20 xl:pt-20 xl:text-left">
        <h1 className="mb-3 mt-10 text-5xl font-light uppercase leading-tight tracking-[0.2em] xl:text-7xl">
          We're{" "}
          <span className="font-semibold text-[hsl(0_6%_24%)]">
            <br className="hidden xl:block" />
            coming <br className="hidden xl:block" /> soon
          </span>
        </h1>
        <p className="mb-10 text-lg leading-loose">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <EmailForm />
      </div>
    </div>
  );
}
export default App;
