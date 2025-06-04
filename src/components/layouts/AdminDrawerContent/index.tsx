import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { isActiveLink } from "@src/utils/is-active-link";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineHome } from "react-icons/hi2";

const CList = styled(List)(() => ({
  "& a": {
    width: "100%",
  },
}));

const LINKS = [
  { href: "/admin", title: "Home", icon: <HiOutlineHome />, exact: true },
  {
    href: "/admin/products",
    title: "Products",
    icon: <HiOutlineHome />,
    exact: false,
  },
  {
    origin: "/admin/product-categories",
    href: "/admin/product-categories/root",
    title: "Product Categories",
    icon: <HiOutlineHome />,
    exact: false,
  },
  {
    href: "/admin/units",
    title: "Units",
    icon: <HiOutlineHome />,
    exact: false,
  },
  {
    href: "/admin/users",
    title: "Users",
    icon: <HiOutlineHome />,
    exact: false,
  },
];

const AdminDrawerContent = () => {
  const { pathname } = useRouter();
  return (
    <Box>
      <CList>
        {LINKS.map(({ origin, href, icon, title, exact }, index) => (
          <ListItem key={index} disablePadding>
            <Link href={href}>
              <ListItemButton
                sx={{
                  borderRadius: "8px",
                  color: isActiveLink({ pathname, href: origin || href, exact })
                    ? "darkCyan"
                    : "#000",
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </CList>
    </Box>
  );
};

export default AdminDrawerContent;
