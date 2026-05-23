import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
      <div className="space-y-8 py-12">
        {/* Hero Skeleton */}
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Skeleton className="h-6 w-48 rounded-full" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-12 w-3/4 max-w-2xl" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-6 w-1/2 max-w-xl" />
          </div>
        </div>

        {/* Content Section Skeleton */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 rounded-3xl border border-slate-100 p-8 shadow-sm">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-6 w-1/2" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
