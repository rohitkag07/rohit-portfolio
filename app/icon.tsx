import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#d4a853",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: -0.5,
        }}
      >
        RK
      </div>
    ),
    size,
  );
}

