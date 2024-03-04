import { ClubData } from "../definitions/club";
import Image from "next/image";

export default function ClubDetails({ club }: { club: ClubData }) {
  return (
    <div className="flex flex-col clubs-center justify-center">
      <h1 className="text-3xl font-bold">{club.fullname}</h1>
      <Image src={club.image} alt={club.name} height={400} width={400} />
      <p>{club.description}</p>
      <div className="flex flex-row">
        {club.team.map((team) => (
          <div key={team.id} className="flex flex-col">
            <h2>{team.name}</h2>
            {team.members.map((member) => (
              <p key={member.reg_no}>{member.name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
