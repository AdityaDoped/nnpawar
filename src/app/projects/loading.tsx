import { ProjectsGridSkeleton } from "@/components/Skeleton";

export default function ProjectsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-12 space-y-3">
        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
      </div>
      <ProjectsGridSkeleton count={6} />
    </div>
  );
}
