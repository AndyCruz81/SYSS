'use client';
// Permite crear un componente de logo con un tamaño y color opcionales.
// Este componente es útil para mostrar el logo de la aplicación en diferentes tamaños y colores según sea necesario.
interface LogoProps {
  size?: number; // opcional: tamaño fijo (px)
  color?: string; // opcional: clases de color
  className?: string; // opcional: clases tailwind para manejar ancho responsivo
}

export default function Logo({
  size,
  color = "text-foreground",
  className = "w-1/4 max-w-[180px] min-w-[80px]",
}: LogoProps) {
  return (
    <div className={`font-bold tracking-wide ${color}`}>
      <img
        src="https://svgsilh.com/svg/304160.svg"
        alt="SYSS"
        className={`mx-auto ${className}`}
        style={size ? { width: size, height: size } : undefined}
      />
    </div>
  );
}
