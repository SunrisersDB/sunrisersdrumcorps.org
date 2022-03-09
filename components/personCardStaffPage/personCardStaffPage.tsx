import EmailIcon from "./mail.svg";

export default function PersonCardStaffPage(person) {
  return (
    <li key={person.name}>
      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div className="flex flex-col space-y-3">
          <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
            <img
              className={`object-cover shadow-lg rounded-lg ${
                person.imageUrl.includes("defaults") ? "opacity-30" : ""
              }`}
              src={person.imageUrl}
              alt=""
            />
          </div>

          <div
            className={`flex text-gray-700 ${
              person.email ? "text-gray-600" : "text-gray-200"
            }`}
          >
            <EmailIcon className="w-5 mr-2" />
            {person.email ?? "No email"}
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="space-y-4">
            <div className="text-xl leading-6 font-medium space-y-1">
              <h2 className="font-bold">{person.name}</h2>
              <p className="text-blue">{person.role}</p>
            </div>
            <div className="text-lg">
              <p className="text-gray-500">{person.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
