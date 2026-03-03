import { useState, useMemo } from "react";

export default function DataTable({
  columns,
  data,
  renderActions,
  pageSize = 5,
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // SEARCH FILTER
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.some((col) => {
        const value = col.render
          ? ""
          : String(row[col.key] ?? "");
        return value.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data, columns]);

  // PAGINATION
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="w-full">
      {/* SEARCH */}
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full sm:w-64"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <p className="text-sm text-gray-500 self-center">
          Total: {filteredData.length}
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="p-3 text-left whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
              {renderActions && (
                <th className="p-3 text-center whitespace-nowrap">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="p-3 whitespace-nowrap"
                    >
                      {col.render
                        ? col.render(row)
                        : row[col.key]}
                    </td>
                  ))}
                  {renderActions && (
                    <td className="p-3 text-center">
                      {renderActions(row)}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="p-4 text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION CONTROLS */}
      {totalPages > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded
                ${page === i + 1 ? "bg-blue-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
