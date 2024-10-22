import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation,Location } from "react-router-dom";

interface BreadcrumbProps {
  prodcutdetails?: boolean
  className?: string
  productName?: string
}

export default function Breadcrumb({
  prodcutdetails = false,
  className,
  productName,
}: BreadcrumbProps) {
  const location: Location = useLocation();
  const path: string[] = location.pathname.split("/");
  return (
    <div role="presentation" className={className}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          fontFamily={"Poppins, sans-serif"}
          fontSize={"1.167rem"}
        >
          Home
        </Link>
        {prodcutdetails && (
          <Link
            underline="hover"
            color="inherit"
            href="/"
            fontFamily={"Poppins, sans-serif"}
            fontSize={"1.167rem"}
          >
            Products
          </Link>
        )}

        <Typography
          color="text.primary"
          fontFamily={"Poppins, sans-serif"}
          fontSize={"1.167rem"}
        >
          {productName ? productName : path}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
