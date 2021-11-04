import { DivideIcon, EqualityIcon, MinusIcon, MultiplyIcon, PlusIcon } from "../configs/ICONS";
import { Button } from "./Button";

export const Calculator = () => {
  return (
    <div className="container">
      <div className="h-18 w-full bg-black px-1 py-2 space-y-1 rounded text-right font-semibold font-mono bg-opacity-50">
        <div className="calculator-formula text-gradient-turqoise tracking-wider">
          1+2x3/4-5=10
        </div>
        <div className="calculator-label text-4xl">
          10
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-1">
        <Button className="col-span-2 bg-red-700 hover:bg-red-600 focus:bg-red-600">
          AC
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600">
          {DivideIcon}
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600">
          {MultiplyIcon}
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          7
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          8
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          9
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600">
          {MinusIcon}
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          4
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          5
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          6
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600">
          {PlusIcon}
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          1
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          2
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          3
        </Button>
        <Button className="row-span-2 bg-purple-700 hover:bg-purple-600 focus:bg-purple-600">
          {EqualityIcon}
        </Button>
        <Button className="col-span-2 bg-black hover:bg-gray-900 focus:bg-gray-900">
          0
        </Button>
        <Button className="bg-black hover:bg-gray-900 focus:bg-gray-900">
          .
        </Button>
      </div>
    </div>
  )
};
