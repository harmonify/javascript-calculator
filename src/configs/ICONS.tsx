import { SiReact, SiTypescript } from 'react-icons/si';
import { BsCalculatorFill } from 'react-icons/bs';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';

export const CalculatorIcon=<BsCalculatorFill className="inline-block" />;
export const ReactIcon=<SiReact className="inline-block bg-black text-cyan-400" />;
export const TypeScriptIcon=<SiTypescript className="inline-block bg-white text-blue-500" />;

export const PlusIcon=<FaPlus className="inline-block"/>;
export const MinusIcon=<FaMinus className="inline-block"/>;
export const MultiplyIcon=<FaTimes className="inline-block"/>;
export const DivideIcon=<i className="inline-block not-italic font-extrabold">/</i>;
export const EqualIcon=<i className="inline-block not-italic text-3xl font-extrabold">{"="}</i>;

export * as ICONS from './ICONS';
