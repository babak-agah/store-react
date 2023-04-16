interface Props {
  pathname: string;
  href: string;
  exact: boolean;
}

export const isActiveLink = ({ pathname, href, exact }: Props) =>
  exact ? pathname === href : pathname.startsWith(href);
