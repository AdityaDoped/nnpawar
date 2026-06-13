export function SkeletonBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent ${className}`}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white border border-gray-100">
      <SkeletonBox className="aspect-[4/3] w-full" />
      <div className="p-5 space-y-3">
        <SkeletonBox className="h-5 w-3/4 rounded" />
        <SkeletonBox className="h-3 w-1/2 rounded" />
        <SkeletonBox className="h-3 w-full rounded" />
        <SkeletonBox className="h-3 w-4/5 rounded" />
        <SkeletonBox className="h-3 w-24 rounded mt-4" />
      </div>
    </div>
  );
}

export function ProjectsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
