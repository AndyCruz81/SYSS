import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4">
      <p>
        Derechos Reservados{" "}
        <a className="font-bold hover:underline" rel="noreferrer">
          SYSS v0.1
        </a>
      </p>
      <ThemeSwitcher />
    </footer>
  );
}