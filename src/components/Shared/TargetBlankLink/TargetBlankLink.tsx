interface TargetBlankLinkProps {
  href: string;
  children: any;
}
const TargetBlankLink: React.FC<TargetBlankLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
export default TargetBlankLink;
