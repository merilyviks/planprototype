export default function TextRow({ elements }: { elements: string[] }) {
  return (
    <div className="text-row">
      {elements.map((obj, index) => {
        return (
          <p key={index} className="text-row-element">
            {obj}
          </p>
        );
      })}
    </div>
  );
}
