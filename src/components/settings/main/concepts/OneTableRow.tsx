export default function OneTableRow({
  name,
  colCount = 3,
}: {
  name: string;
  colCount?: number;
}) {
  return (
    <tr>
      <th colSpan={colCount}>{name}</th>
    </tr>
  );
}
