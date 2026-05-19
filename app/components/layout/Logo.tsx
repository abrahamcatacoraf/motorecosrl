import Image from "next/image";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <Image
        src="/images/logo.png"
        alt="Logo MOTORECO"
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}