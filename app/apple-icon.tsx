import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -2,
          borderRadius: 40,
        }}
      >
        RK
      </div>
    ),
    size,
  );
}

