
export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/salman-hanif/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Salman Hanif
          </a>
          .
        </p>
      </div>
    </div>
  );
}
