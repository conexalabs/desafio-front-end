import React from "react";

import { CircularProgress } from "@material-ui/core";

interface Props {
  loading: boolean;
}
export default function ({ loading }: Props) {
  if (loading) {
    return (
      <section style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#fffaf566", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress style={{ fontSize: 60 }} />
      </section>
    );
  } else return <></>;
}