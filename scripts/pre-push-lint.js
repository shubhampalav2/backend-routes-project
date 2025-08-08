import { execSync } from "child_process";

try {
  // Get current branch
  const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

  // Get changed JS/TS files since last push
  const changedFiles = execSync(
    `git diff --name-only origin/${branch} HEAD -- '*.{js,ts,jsx,tsx}'`
  )
    .toString()
    .trim()
    .split("\n")
    .filter(Boolean);

  if (changedFiles.length === 0) {
    console.log("✅ No JS/TS files changed since last push.");
    process.exit(0);
  }

  console.log("🔍 Linting changed files before push...");
  const eslintCmd = `npx eslint --quiet ${changedFiles.join(" ")}`;
  execSync(eslintCmd, { stdio: "inherit" });

  console.log("✅ Lint passed (warnings allowed). Proceeding with push...");
} catch (err) {
  console.error("❌ Lint errors detected. Push blocked.");
  process.exit(1);
}