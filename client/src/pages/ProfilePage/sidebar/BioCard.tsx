import Card from "./../../../components/ui/Card";
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export default function BioCard() {
  return (
    <Card>
      <div className="rounded font-bold">
        <p>Bio: </p>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded flex items-center">
          Frontend <ArrowRightIcon className="w-4 h-4 ml-0.5" />
        </div>
        <div className="rounded">Junior-Dev</div>
        <div className="rounded">at Tech</div>
      </div>
    </Card>
  );
}
