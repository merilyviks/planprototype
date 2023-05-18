export default function CriticalControlPointPage(/* {
  planId,
}: {
  planId: number;
} */) {
  const hasCcp = false;

  

  return (
    <div>
      <p>KKP - kriitiline kontrollpunkt</p>
      <p>KP - kontrollpunkt</p>

      <table className="basic-chapter-table analyze-table">
        <thead>
          <tr>
            <td>KP, KKP, nr</td>
            <td>Kirjeldus</td>
            <td>Seiremeetod</td>
            <td>Seire läbiviija</td>
            <td>Täidetav seireleht</td>
            <td>Kriitiline piir</td>
            <td>Korrigeeriv tegevus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {hasCcp ?? <p>Ettevõttes KKP puuduvad</p>}
    </div>
  );
}
