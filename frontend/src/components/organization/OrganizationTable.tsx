import type { OrganizationType, OrganizationUnit } from "@/types";
import { organizationTypeLabels } from "@/data/organization";
import EmptyState from "@/components/ui/EmptyState";

type Props = {
  type: OrganizationType;
  units: OrganizationUnit[];
};

export default function OrganizationTable({ type, units }: Props) {
  const filtered = units.filter((unit) => unit.type === type);

  return (
    <div>
      <h3 className="text-lg font-bold text-[var(--color-text)]">
        {organizationTypeLabels[type]}
      </h3>

      <div className="mt-4">
        {filtered.length === 0 ? (
          <EmptyState message="Cơ sở dữ liệu đang được cập nhật." />
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
            <table className="min-w-full text-sm">
              <thead className="bg-[var(--color-surface)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                <tr>
                  <th className="px-4 py-3">Tên đơn vị</th>
                  <th className="px-4 py-3">Lãnh đạo</th>
                  <th className="px-4 py-3">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((unit) => (
                  <tr
                    key={unit.id}
                    className="border-t border-[var(--color-border)]"
                  >
                    <td className="px-4 py-3 font-semibold">{unit.name}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">
                      {unit.leader ?? "Đang cập nhật"}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">
                      {unit.description ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}