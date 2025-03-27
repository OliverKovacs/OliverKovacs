#!/usr/bin/env node
// generates README-light.md from README.md
const fs = require("fs");

let readme = fs.readFileSync("./README.md", "utf-8");
readme = readme.replace(/-dark.svg/g, ".svg");
readme = readme.replace(/&theme=github_dark&hide_border=true/g, "");
readme = readme.replace(
    "[Light theme version](https://github.com/OliverKovacs/OliverKovacs/blob/main/README-light.md)",
    "[Dark theme version](https://github.com/OliverKovacs/OliverKovacs/blob/main/README.md)"
);

fs.writeFileSync("README-light.md", readme, "utf-8");
