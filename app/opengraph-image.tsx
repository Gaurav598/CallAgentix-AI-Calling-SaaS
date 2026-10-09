import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CallAgentix — AI voice agents for sales and support calls";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(16,185,129,0.22), transparent 30%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.08), transparent 28%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#a1a1aa" }}>
          CALLAGENTIX
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 68, fontWeight: 700, letterSpacing: -2 }}>
          Explore AI calling workflows.
        </div>
        <div style={{ display: "flex", marginTop: 8, fontSize: 68, fontWeight: 700, letterSpacing: -2, color: "#d4d4d8" }}>
          Watch a scripted call.
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 28, color: "#a1a1aa" }}>
          AI voice agents for outbound sales and inbound support calls.
        </div>
      </div>
    ),
    size,
  );
}
