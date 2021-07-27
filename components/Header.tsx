import Button from './Button';

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between bg-tumbleweed border-b border-black">
      <div className="flex p-2">
        <h2 className="text-4xl font-fontSans text-blue">Ruuvifrontend</h2>
      </div>
      <div className="flex p-2 w-48">
        <Button text="Logout" />
        <Button text="Settings" />
      </div>
    </div>
  );
};

export default Header;
