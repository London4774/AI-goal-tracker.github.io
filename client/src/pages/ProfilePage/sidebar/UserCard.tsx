import Card from "./../../../components/ui/Card";

export default function UserCard() {
  return (
    <Card>
      {/* avatar */}
      <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-gray-200 mx-auto" />
      {/* avatar */}

      <div className="mt-3 rounded">
        <h1 className="font-bold">UserName: </h1>
      </div>
      <div className="mt-2 rounded mb-2">
        <p className="text-yellow-400">@username</p>
      </div>
    </Card>
  );
}
