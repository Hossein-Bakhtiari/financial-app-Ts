export interface ButtonLinkPrps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  logo?: string;
  UpperText?: string;
  LowerText?: string;
}

function ButtonLink({ href, children, className, target }: ButtonLinkPrps) {
  return (
    <a
      href={href}
      children={children}
      className={className}
      target={target}
    ></a>
  );
}

export default ButtonLink;
