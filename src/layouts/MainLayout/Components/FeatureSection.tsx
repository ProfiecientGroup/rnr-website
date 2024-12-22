import React from "react";
import Link from "next/link";
import { Grid, Typography, Box, Stack } from "@mui/material";

const FeatureSection = ({ featureSections }: { featureSections: any }) => {
  return (
    <Grid container spacing={6} py={4}>
      {featureSections.map((items: any, index: number) => (
        <Grid key={index} item xs={3} mb={2}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px !important" }}
            color="#969EAA"
          >
            {items.title}
          </Typography>
          <Box sx={{ borderBottom: "1px solid #969EAA" }} width="50%" />
          <Grid container spacing={2} mt={1}>
            {items.items.map((feature: any) => (
              <Grid key={feature.title} item xs={12}>
                <Link passHref href={feature.path} legacyBehavior>
                  <a href={feature.path}>
                    <Stack direction="row" spacing={2}>
                      <Box
                        sx={{
                          boxShadow: "0px 4px 20px rgba(23, 15, 73, 0.08)",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <img
                          src={feature.icon}
                          width="25px"
                          height="25px"
                          alt={feature.title}
                          loading="lazy"
                        />
                      </Box>
                      <Stack direction="column" spacing={0.5}>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "14px", cursor: "pointer" }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "12px" }}>
                          {feature.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureSection;
