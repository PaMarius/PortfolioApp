type HelloComponentProps = {
  showHello: boolean;
  greetings: string[];
  currentGreetingIndex: number;
};

export const GreetingComponent = ({
  showHello,
  greetings,
  currentGreetingIndex,
}: HelloComponentProps) => {
  return (
    <div
      className={`text-7xl font-bold h-screen w-full ${
        !showHello ? "animate-slide-up" : ""
      } flex items-center justify-center text-white`}
    >
      {greetings[currentGreetingIndex]}
    </div>
  );
};
