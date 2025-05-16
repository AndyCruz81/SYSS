import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p>
        Derechos Reservados{"Hola Mundo... "}
        <a className="font-bold hover:underline" rel="noreferrer">
          SYSS_DEV 0.1
        </a>
      </p>
      <ThemeSwitcher />
    </footer>
  );
}