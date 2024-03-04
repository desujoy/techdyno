import { EventItem } from "@/components/definitions/event-items";
import Image from "next/image";

export default function eventDetails({ event }: { event: EventItem }) {
  return (
    <div className=" isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        {/* <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div> */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {event.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {event.description}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">
              Upcoming Events<span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#">
              Past Events<span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {/* {members.map((member) => (
          <div key={member}>
          <div  className="flex flex-col-reverse">
            <dt className="text-base leading-7 text-gray-300">event</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{member.name}</dd>
            </div>
          <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Coordinators</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{member.name}</dd>
          </div>
          </div>
        ))} */}
          </dl>
        </div>
      </div>
      <Image
        src={event.image}
        alt={event.name}
        className="absolute w-full object-cover object-right md:object-center"
        height={500}
        width={500}
      />
    </div>
  );
}
