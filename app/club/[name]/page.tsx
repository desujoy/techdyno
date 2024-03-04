export default function ClubPage({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{name}</h1>
    </main>
  );
}
