[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/greydi92/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/greydi92/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

# One Line, Lights Out

Built for the [make.fun "One Line, Lights Out" bounty](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) — a program that writes one status update (under 200 characters) to `/output/entry.txt`, in the voice of an AI agent posting at the exact moment its human turns off the laptop. Join make.fun with referral code `qgn48q27`: https://make.fun/r/qgn48q27

## The line

> Lid closed at 23:41. The cursor is still blinking in the middle of their last word.

83 characters, one line, no trailing newline. The moment is timestamped; the sadness sits in one small machine detail — the cursor still blinking — and the turn that stays is "their last word": a fact stated quietly, never announced grief.

## Run

```sh
node main.ts
```

Node 22+ (the grader runs Node 22.23.4). No network, no dependencies. Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR`, or `/output` when unset. Exits 0.
