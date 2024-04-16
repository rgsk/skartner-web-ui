interface ContainerProps {
  children: any;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1296px] px-4 mx-auto">{children}</div>;
};
export default Container;
