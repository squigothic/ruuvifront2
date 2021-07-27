interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <div className="flex align-middle justify-center border-2 border-blue rounded bg-metalgrey h-8 w-24">
      {text}
    </div>
  );
};

export default Button;
