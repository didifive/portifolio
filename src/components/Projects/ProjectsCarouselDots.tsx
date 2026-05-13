type ProjectsCarouselDotsProps = {
  pageCount: number;
  currentPage: number;
  onSelect: (page: number) => void;
  ariaLabelPrefix: string;
};

export function ProjectsCarouselDots({ pageCount, currentPage, onSelect, ariaLabelPrefix }: ProjectsCarouselDotsProps) {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {Array.from({ length: pageCount }).map((_, pageIndex) => (
        <button
          key={`${ariaLabelPrefix}-dot-${pageIndex}`}
          type="button"
          aria-label={`Ir para a página ${pageIndex + 1} de ${ariaLabelPrefix}`}
          aria-current={currentPage === pageIndex}
          onClick={() => onSelect(pageIndex)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            currentPage === pageIndex ? "w-8 bg-primary" : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
          }`}
        />
      ))}
    </div>
  );
}
