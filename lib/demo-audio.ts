"use client";

let sharedCtx: AudioContext | null = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!sharedCtx) sharedCtx = new AudioContext();
  return sharedCtx;
}

export async function unlockDemoAudio() {
  const ctx = getCtx();
  if (!ctx) return null;
  if (ctx.state === "suspended") await ctx.resume();
  return ctx;
}

function tone(
  ctx: AudioContext,
  freqs: number[],
  start: number,
  duration: number,
  volume = 0.08
) {
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.02);
  gain.gain.setValueAtTime(volume, start + duration - 0.04);
  gain.gain.linearRampToValueAtTime(0, start + duration);
  gain.connect(ctx.destination);

  freqs.forEach((freq) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.connect(gain);
    osc.start(start);
    osc.stop(start + duration);
  });
}

export function playRingBurst(ctx: AudioContext) {
  const t = ctx.currentTime;
  tone(ctx, [440, 480], t, 0.38, 0.07);
  tone(ctx, [440, 480], t + 0.48, 0.38, 0.07);
}

export function playConnectBeep(ctx: AudioContext) {
  const t = ctx.currentTime;
  tone(ctx, [880], t, 0.12, 0.05);
  tone(ctx, [1175], t + 0.12, 0.16, 0.045);
}
