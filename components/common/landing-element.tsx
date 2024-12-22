"use client"

interface LandingElementProps {
  id: string;
  text: string;
}

const LandingElement = ({ id, text }: LandingElementProps) => {
  return (
    <li>
      <a href={id} className="group flex flex-col" onClick={(e) => {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }}>
        <span>{text}</span>
        <span className="w-0 group-hover:w-full border-b border-brand transition ease-linear"></span>
      </a>
    </li>
  );
};

export default LandingElement;
