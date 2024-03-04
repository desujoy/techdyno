import { ClubData } from "@/components/definitions/club";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(ClubItems);
}

export const ClubItems: ClubData[] = [
    {
        id: 1,
        name: "techdyno",
        fullname: "TechDyno",
        image: "http://dummyimage.com/100x100.png/dddddd/000000",
        description: "TechDyno is a club of tech enthusiasts. We are a group of students who are passionate about technology and its applications. We are a group of students who are passionate about technology and its applications.",
        team: [
            {
                id: 1,
                name: "Web Team",
                members: [
                    {
                        reg_no: "20BCE1234",
                        name: "John Doe",
                        email: "test@example.com",
                        phone: 77896541230
                    },
                    {
                        reg_no: "20BCE1235",
                        name: "Jane Doe",
                        email: "test@example.com",
                        phone: 77896541230

                    },
                ],
            },
            {
                id: 2,
                name: "App Team",
                members: [
                    {
                        reg_no: "20BCE1236",
                        name: "John Doe",
                        email: "test@example.com",
                        phone: 77896541230
                    },
                    {
                        reg_no: "20BCE1237",
                        name: "Jane Doe",
                        email: "test@example.com",
                        phone: 77896541230
                    },
                ],
            },
        ],
    }]