import UserCard from "./sidebar/UserCard";
import BioCard from "./sidebar/BioCard";
import StatsCard from "./sidebar/StatsCard";
import BadgesCard from "./sidebar/BadgesCard";

export default function ProfileSidebar() {
  return (
    <aside className="space-y-4">
  {/* User info */}
      <UserCard/>

  {/* Bio */}
      <BioCard/>

  {/* Stats */}
      <StatsCard/>

  {/* Badges */}
      <BadgesCard/>
    </aside>
  );
}
