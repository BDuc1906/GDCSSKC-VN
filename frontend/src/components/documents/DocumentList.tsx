import type { DocumentGroup } from "@/types";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";

export default function DocumentList({ group }: { group: DocumentGroup }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[var(--color-text)]">
        {group.title}
      </h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        {group.description}
      </p>

      <div className="mt-4">
        {group.items.length === 0 ? (
          <EmptyState message="Danh mục văn bản đang được cập nhật." />
        ) : (
          <ul className="space-y-3">
            {group.items.map((doc) => (
              <li key={doc.id}>
                <Card className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <a
                      href={doc.href}
                      className="text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    >
                      {doc.title}
                    </a>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      Số hiệu: {doc.code} · Ngày ban hành: {doc.issuedDate}
                    </p>
                  </div>
                  <a
                    href={doc.href}
                    className="self-start rounded border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                  >
                    Tải về
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}