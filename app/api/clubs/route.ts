import { ClubData } from "@/components/definitions/club";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(ClubItems);
}

export const ClubItems: ClubData[] = [
    {
        id: 1,
        name: "linux-club",
        fullname: "Linux Club",
        image: "https://media.licdn.com/dms/image/D5622AQE60SD9JuKQxA/feedshare-shrink_800/0/1707754610085?e=2147483647&v=beta&t=dcoS1H8_pjqPod38hpXBFOAaVofPaxs0qCvVU5Ydzq8",
        description: "A club dedicated to promoting the use of Linux operating systems, open-source software, and providing support and resources for students interested in learning about Linux.",
        team: [
            {
                id: 1,
                name: "Club Cooridinators",
                members: [
                    {
                        reg_no: "20BCE1234",
                        name: "John Doe",
                        email: "test@example.com",
                        phone: 77896541230
                    },
                    {
                        reg_no: "20BCE1235",
                        name: "Jane Smith",
                        email: "test@example.com",
                        phone: 77896541230

                    },
                ],
            },
        ],
    }]