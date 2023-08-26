export const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`${className} hover:scale-105 transition ease-in-out delay-170 p-3 rounded-md  linear-gradient-button`}
    >
      {children}
    </button>
  );
};
