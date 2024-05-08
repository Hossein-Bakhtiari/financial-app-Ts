interface ButtonLinkPrps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
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
