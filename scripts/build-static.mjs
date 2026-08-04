import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const vinextCli = resolve("node_modules", "vinext", "dist", "cli.js");

const outputDir = resolve("dist", "client");
const indexHtml = resolve(outputDir, "index.html");

function hasStaticExport() {
  return (
    existsSync(outputDir) &&
    statSync(outputDir).isDirectory() &&
    existsSync(indexHtml) &&
    statSync(indexHtml).isFile()
  );
}

const command = process.execPath;
const args = [vinextCli, "build"];

const child = spawn(command, args, {
  cwd: process.cwd(),
  stdio: ["inherit", "pipe", "pipe"],
  shell: false,
});

let output = "";

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  output += text;
  process.stdout.write(chunk);
});

child.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  output += text;
  process.stderr.write(chunk);
});

child.on("close", (code, signal) => {
  if (code === 0) {
    if (!hasStaticExport()) {
      console.error(`Static export did not generate index.html at: ${indexHtml}`);
      process.exit(1);
    }
    console.log(`Static export verified: ${indexHtml}`);
    return;
  }

  const isWindowsTeardownAssertion =
    process.platform === "win32" &&
    output.includes("Build complete") &&
    output.includes("Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)");

  if (isWindowsTeardownAssertion && hasStaticExport()) {
    console.warn(
      "Vinext completed the static export but hit a Windows-only process teardown assertion. Static output was verified.",
    );
    console.log(`Static export verified: ${indexHtml}`);
    return;
  }

  if (signal) {
    console.error(`vinext build was terminated by signal ${signal}`);
  } else {
    console.error(`vinext build failed with exit code ${code}`);
  }
  process.exit(code ?? 1);
});
