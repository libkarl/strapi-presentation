import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "components/Link";
import ProTip from "components/ProTip";
import Copyright from "components/Copyright";
import useStrapiRequest from "lib/useStrapiRequest";
import { Root } from "models/acrticle";

const Homepage = () => {
  const { data, error } = useStrapiRequest<Root>({
    url: "/api/articles",
  });

  console.log(data, error);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Homepage;
