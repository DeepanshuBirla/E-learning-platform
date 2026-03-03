export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}
