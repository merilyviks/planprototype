import Image from "next/image";
export default function SchemaPage({
  params: { planId },
}: {
  params: { planId: number };
}) {
  return (
    <div>
      <h2>Toidu valmistamine kuumtöötlusega</h2>
      <Image
        src="/assets/hot.png"
        width={700}
        height={500}
        alt="Picture of the author"
        loading="eager"
        style={{ objectFit: "contain", margin: "3rem, auto" }}
      />
      <h2>Toidu valmistamine külmtöötlusega</h2>
      <Image
        src="/assets/cold.jpg"
        width={700}
        height={300}
        alt="Picture of the"
        loading="eager"
        style={{ objectFit: "contain", margin: "3rem, auto" }}
      />
      <h2>Magustoidud</h2>
      <Image
        src="/assets/desserts.jpg"
        width={700}
        height={500}
        alt="Picture of"
        loading="eager"
        style={{ objectFit: "contain", margin: "3rem, auto" }}
      />
      <h2>Grillimine</h2>
      <Image
        loading="eager"
        src="/assets/grill.png"
        width={700}
        height={300}
        alt="Picture "
        style={{ objectFit: "contain", margin: "3rem, auto" }}
      />
    </div>
  );
}
