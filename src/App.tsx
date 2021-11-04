import { ReactElement } from "react";
import Card from "./components/Card";
import CreditBox from "./components/CreditBox";
import { AUTHOR } from "./configs/CONSTANTS";
import { CalculatorIcon, ReactIcon, TypeScriptIcon } from "./configs/ICONS";
import { Calculator } from "./components/Calculator";

const App = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-3 bg-gradient-to-tl from-indigo-300 to-purple-400 text-white">
      <div className="flex items-center space-x-2 text-4xl font-mono font-semibold">
        <span>Javascript Calculator</span>
        {CalculatorIcon}
      </div>
      <Card className="w-96">
        <Calculator />
      </Card>
      <CreditBox
        icons={[ ReactIcon, TypeScriptIcon ]}
        link={AUTHOR.githubLink}
        linkText={AUTHOR.name}
      />
    </div>
  );
};

export default App;
