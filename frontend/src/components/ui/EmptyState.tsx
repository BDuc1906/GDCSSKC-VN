type EmptyStateProps = {
  message?: string;
};

export default function EmptyState({
  message = "Nội dung đang được cập nhật.",
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center text-sm text-[var(--color-text-muted)]">
      {message}
    </div>
  );
}