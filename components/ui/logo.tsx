'use client';

interface LogoProps {
    size?: number; // tamaño en px
    color?: string; // color por defecto o desde Tailwind
}

export default function Logo({ size = 80, color = "text-foreground" }: LogoProps) {
    return (
        <div className={`font-bold tracking-wide ${color}`}>
            <img
                src="https://svgsilh.com/svg/304160.svg"
                alt="SYSS"
                className="mx-auto"
                style={{ width: size, height: size }}
            />
        </div>

    );
}
