import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

export default function Breadcrumb({
  prodcutdetails = false,
  className,
  productName,
}) {
  const location = useLocation();
  const path = location.pathname.split("/");
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
