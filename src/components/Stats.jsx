export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemsCount = items.length;
  let itemsPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((itemsPacked / itemsCount) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${itemsCount} items on your list, and you are already packed
        ${itemsPacked} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
