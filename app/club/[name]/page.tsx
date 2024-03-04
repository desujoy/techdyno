import { ClubData } from "@/components/definitions/club";
import ClubDetails from "@/components/ui/ClubDetails";

const ClubInfo = import("@/app/api/clubs/route").then(
  (module) => module.ClubItems
);

export default async function ClubPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const clubs: ClubData[] = await ClubInfo;
  const club = clubs.find((club) => club.name === String(name));
  return (
    <main>
      <ClubDetails club={club!} />
    </main>
  );
}
