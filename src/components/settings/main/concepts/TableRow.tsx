import ChangeText from "../../ChangeText";
import DeleteUserAdded from "../../DeleteUserAdded";
import ButtonUpdateUsage from "../ButtonUpdateUsage";

export default function TableRow({
  name,
  description,
  id,
  update,
  tableRowId,
}: {
  name: string;
  description: string;
  id: number;
  update: boolean;
  tableRowId?: number;
}) {
  return (
    <tr>
      {tableRowId ? (
        <>
          <td>
            <ChangeText
              name={name}
              id={id}
              tableName={"concepts_added"}
              rowName={"concept_name"}
            />
          </td>
          <td>
            <ChangeText
              name={description}
              id={id}
              tableName={"concepts_added"}
              rowName={"concept_description"}
            />
          </td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{description}</td>
        </>
      )}

      <td>
        {tableRowId && (
          <DeleteUserAdded id={tableRowId} tableName={"concepts_added"} />
        )}
        <ButtonUpdateUsage
          id={id}
          dbTable={"concepts_selected"}
          updateTo={update}
        />
      </td>
    </tr>
  );
}
