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
    },

    {
        id: 2,
        name: "coding-vizards-club",
        fullname: "Coding Vizard Club",
        image: "/images/coding-club.jpg",
        description: "Dive into the world of programming with fellow enthusiasts. Whether you're a beginner or an experienced coder, join us to learn new languages, work on projects, and solve coding challenges together.        ",
        team: [
            {
                id: 2,
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
    },

    {
        id: 3,
        name: "adventures-seekers-club",
        fullname: "Adventures Seekers Club",
        image: "/images/Adventure-Club.jpg",
        description: "This club is for adrenaline junkies who love outdoor activities like hiking, rock climbing, and camping. We organize regular trips to nearby nature spots for thrilling adventures.",
        team: [
            {
                id: 3,
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
    },

    {
        id: 4,
        name: "bookworms-society",
        fullname: "Bookworms Society",
        image: "/images/bookclub.jpg",
        description: "If you're passionate about literature and love discussing books, this club is for you. We meet monthly to explore different genres and authors, sharing our favorite reads and insights.",
        team: [
            {
                id: 4,
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
    },

    
    {
        id: 5,
        name: "advitya",
        fullname: "Advitya",
        image: "/images/advitya.jpg",
        description: "Mohit Chauhan in VIT",
        team: [
            {
                id: 5,
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
    },
    
    {
        id: 6,
        name: "photography-club",
        fullname: "Photography Club",
        image: "/images/bookclub.jpg",
        description: "If you're passionate about literature and love discussing books, this club is for you. We meet monthly to explore different genres and authors, sharing our favorite reads and insights.",
        team: [
            {
                id: 6,
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
    },

   
   
]