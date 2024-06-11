import ReposCard from "../components/ReposCard";

export default function Repos() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-left pt-3">Repositories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
        <ReposCard
          name={"BulkyBeastSite"}
          link={"https://github.com/yaibrahim/BulkyBeastSIte"}
        >
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
            HTML
          </span>
        </ReposCard>

        <ReposCard
          name={"eCommercioProject"}
          link={"https://github.com/yaibrahim/eCommercioProject"}
        >
          <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
            Ruby
          </span>
          <div className="mt-2">
            <span className="text-gray-600 text-xs">⭐ 1</span>
          </div>
        </ReposCard>

        <ReposCard
          name={"at_your_doorstep-Ya_Ibrahim"}
          link={"https://github.com/atyourdoorstep/at_your_doorstep-Ya_Ibrahim"}
        >
          <p className="text-gray-700 mb-2 text-xs">
            Its an Flutter App Named At your Doorstep
          </p>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Dart
          </span>
          <div className="mt-2 flex items-center">
            <span className="text-gray-600 text-xs mr-4">⭐ 2</span>
          </div>
        </ReposCard>

        <ReposCard
          name={"work-shift-planning"}
          link="https://github.com/yaibrahim/work-shift-planning"
        >
          <p className="text-gray-700 mb-2 text-xs">
            Build a REST application from scratch that could serve as a work
            planning service. Business requirements: A worker has shifts A shift
            is 8 hours long A worker never has two shifts on the same day It is
            a 24 hour timetable 0-8, 8-16, 16-24.
          </p>
          <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
            Ruby
          </span>
          <div className="mt-2">
            <span className="text-gray-600 text-xs">⭐ 1</span>
          </div>
        </ReposCard>

        <ReposCard
          name={"yaibrahim"}
          link={"https://github.com/yaibrahim/yaibrahim"}
        >
          <p className="text-gray-700 mb-2 text-xs">
            Config files for my GitHub profile.
          </p>
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            JavaScript
          </span>
        </ReposCard>

        <ReposCard
          name={"github-clone-react"}
          link={"https://github.com/yaibrahim/github-clone-react"}
        >
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            JavaScript
          </span>
        </ReposCard>
      </div>
    </>
  );
}
