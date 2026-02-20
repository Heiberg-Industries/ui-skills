#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─── Constants ───────────────────────────────────────────────────

const PKG_ROOT = path.resolve(__dirname, '..');
const VERSION = require(path.join(PKG_ROOT, 'package.json')).version;

const TOOLS = [
  { id: 'claude',   name: 'Claude Code',      detect: detectDir('.claude'),    flag: 'claude' },
  { id: 'copilot',  name: 'GitHub Copilot',    detect: detectCopilot,           flag: 'copilot' },
  { id: 'codex',    name: 'OpenAI Codex',      detect: detectDir('.agents'),    flag: 'codex' },
  { id: 'cursor',   name: 'Cursor',            detect: detectDir('.cursor'),    flag: 'cursor' },
  { id: 'windsurf', name: 'Windsurf',          detect: detectDir('.windsurf'),  flag: 'windsurf' },
];

const STYLES = [
  ['anti-design',       'Chaotic, punk, confrontational'],
  ['art-deco',          'Luxurious, geometric, ornamental'],
  ['aurora',            'Vibrant, ethereal, dynamic'],
  ['bauhaus',           'Rational, structured, geometric'],
  ['bento-grid',        'Modular, information-dense, organized'],
  ['claymorphism',      'Friendly, 3D, soft, playful'],
  ['corporate-modern',  'Professional, trustworthy, clean'],
  ['dark-mode-premium', 'Sophisticated, cinematic, exclusive'],
  ['flat-design',       'Clean, bold, iconic'],
  ['freeform',          'Personal, eclectic, expressive, unbound'],
  ['glassmorphism',     'Futuristic, elegant, premium'],
  ['japandi',           'Calm, minimal, warm, natural'],
  ['material-design',   'Systematic, accessible, reliable'],
  ['minimalism',        'Reduced, silent, essential'],
  ['neubrutalism',      'Bold, playful, rebellious'],
  ['neumorphism',       'Subtle, embedded, soft'],
  ['organic',           'Natural, flowing, warm'],
  ['retro-futurism',    'Nostalgic, neon, sci-fi'],
  ['skeuomorphism',     'Familiar, tangible, crafted'],
  ['swiss',             'Precise, mathematical, objective'],
  ['y2k-revival',       'Metallic, bubbly, glossy, pop'],
];

// ─── ANSI Colors ─────────────────────────────────────────────────

const useColor = !process.env.NO_COLOR && process.stdout.isTTY;

const c = {
  reset:  useColor ? '\x1b[0m'  : '',
  bold:   useColor ? '\x1b[1m'  : '',
  dim:    useColor ? '\x1b[2m'  : '',
  green:  useColor ? '\x1b[32m' : '',
  yellow: useColor ? '\x1b[33m' : '',
  cyan:   useColor ? '\x1b[36m' : '',
  red:    useColor ? '\x1b[31m' : '',
};

// ─── Detection ───────────────────────────────────────────────────

function detectDir(name) {
  return function (cwd) {
    return fs.existsSync(path.join(cwd, name));
  };
}

function detectCopilot(cwd) {
  // .github/ alone is too common (Actions, templates, etc.)
  // Only detect Copilot if there are Copilot-specific files
  return fs.existsSync(path.join(cwd, '.github', 'copilot-instructions.md'))
      || fs.existsSync(path.join(cwd, '.github', 'skills'));
}

function detectTools(cwd) {
  return TOOLS.filter(function (tool) {
    return tool.detect(cwd);
  });
}

function resolveToolFlags(flags) {
  const resolved = [];
  for (const flag of flags) {
    const tool = TOOLS.find(function (t) { return t.flag === flag; });
    if (!tool) {
      console.error(c.red + 'Unknown tool: ' + flag + c.reset);
      console.error('Available tools: ' + TOOLS.map(function (t) { return t.flag; }).join(', '));
      process.exit(1);
    }
    resolved.push(tool);
  }
  return resolved;
}

// ─── Prompt ──────────────────────────────────────────────────────

function prompt(question) {
  return new Promise(function (resolve) {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.on('SIGINT', function () {
      rl.close();
      console.log('');
      process.exit(0);
    });
    rl.question(question, function (answer) {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function promptToolSelection(tools, message) {
  console.log('  ' + message);
  for (var i = 0; i < tools.length; i++) {
    console.log('    ' + c.bold + (i + 1) + c.reset + '. ' + tools[i].name);
  }
  if (tools.length > 1) {
    console.log('    ' + c.bold + 'a' + c.reset + '. All of the above');
  }
  console.log('');

  while (true) {
    var answer = await prompt('  > ');
    if (answer.toLowerCase() === 'a' || answer.toLowerCase() === 'all') {
      return tools;
    }
    var num = parseInt(answer, 10);
    if (num >= 1 && num <= tools.length) {
      return [tools[num - 1]];
    }
    console.log('  ' + c.yellow + 'Please enter a number (1-' + tools.length + ')' + (tools.length > 1 ? ' or "a" for all' : '') + c.reset);
  }
}

// ─── Installation ────────────────────────────────────────────────

function installAgentSkills(cwd, toolDir, toolName) {
  var destDir = path.join(cwd, toolDir, 'skills', 'designbrief');
  fs.mkdirSync(destDir, { recursive: true });

  // Copy SKILL.md
  fs.copyFileSync(
    path.join(PKG_ROOT, 'SKILL.md'),
    path.join(destDir, 'SKILL.md')
  );
  console.log('    ' + c.green + '\u2713' + c.reset + ' Copied SKILL.md');

  // Copy styles/
  var stylesDir = path.join(destDir, 'styles');
  fs.cpSync(
    path.join(PKG_ROOT, 'styles'),
    stylesDir,
    { recursive: true }
  );
  console.log('    ' + c.green + '\u2713' + c.reset + ' Copied styles/ (20 styles + index)');
}

function installAdapter(cwd, adapterSrc, adapterDest, toolName) {
  // Copy adapter file
  var destDir = path.dirname(path.join(cwd, adapterDest));
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(
    path.join(PKG_ROOT, adapterSrc),
    path.join(cwd, adapterDest)
  );
  console.log('    ' + c.green + '\u2713' + c.reset + ' Copied ' + adapterDest);

  // Copy styles/ to project root
  var stylesDir = path.join(cwd, 'styles');
  fs.cpSync(
    path.join(PKG_ROOT, 'styles'),
    stylesDir,
    { recursive: true }
  );
  console.log('    ' + c.green + '\u2713' + c.reset + ' Copied styles/ (20 styles + index)');
}

function install(cwd, tool) {
  console.log('');
  console.log('  Installing for ' + c.bold + tool.name + c.reset + '...');

  try {
    switch (tool.id) {
      case 'claude':
        installAgentSkills(cwd, '.claude', tool.name);
        break;
      case 'copilot':
        installAgentSkills(cwd, '.github', tool.name);
        break;
      case 'codex':
        installAgentSkills(cwd, '.agents', tool.name);
        break;
      case 'cursor':
        installAdapter(cwd, path.join('.cursor', 'rules', 'designbrief.mdc'), path.join('.cursor', 'rules', 'designbrief.mdc'), tool.name);
        break;
      case 'windsurf':
        installAdapter(cwd, path.join('.windsurf', 'rules', 'designbrief.md'), path.join('.windsurf', 'rules', 'designbrief.md'), tool.name);
        break;
    }
  } catch (err) {
    console.error('');
    console.error('  ' + c.red + 'Error installing for ' + tool.name + ':' + c.reset);
    console.error('  ' + err.message);
    process.exit(1);
  }
}

// ─── Output ──────────────────────────────────────────────────────

function printHeader() {
  console.log('');
  console.log('  ' + c.bold + 'designbrief' + c.reset + c.dim + ' \u2014 Design direction for AI-generated UI' + c.reset);
  console.log('');
}

function printSuccess() {
  console.log('');
  console.log('  ' + c.green + 'Done!' + c.reset + ' Ask your AI to build UI with any style:');
  console.log('');
  console.log('    ' + c.dim + '"Build a landing page using the Glassmorphism style"' + c.reset);
  console.log('    ' + c.dim + '"I need a dashboard \u2014 what style would work for fintech?"' + c.reset);
  console.log('');
}

function showHelp() {
  console.log('');
  console.log('  ' + c.bold + 'designbrief' + c.reset + ' \u2014 Design direction for AI-generated UI');
  console.log('');
  console.log('  ' + c.bold + 'Usage:' + c.reset);
  console.log('    npx designbrief [options]');
  console.log('');
  console.log('  ' + c.bold + 'Options:' + c.reset);
  console.log('    --tool, -t <tools>   Target tool(s): claude, cursor, windsurf, copilot, codex');
  console.log('                         Comma-separated for multiple: --tool claude,cursor');
  console.log('    --list, -l           List all available styles');
  console.log('    --help, -h           Show this help message');
  console.log('    --version, -v        Show version');
  console.log('');
  console.log('  ' + c.bold + 'Examples:' + c.reset);
  console.log('    npx designbrief                    Auto-detect your tool and install');
  console.log('    npx designbrief --tool claude      Install for Claude Code');
  console.log('    npx designbrief --tool cursor      Install for Cursor');
  console.log('    npx designbrief --list             Show all 21 available styles');
  console.log('');
  console.log('  ' + c.dim + 'Docs: https://github.com/Heiberg-Industries/designbrief' + c.reset);
  console.log('');
}

function showVersion() {
  console.log(VERSION);
}

function showStyles() {
  console.log('');
  console.log('  ' + c.bold + 'designbrief' + c.reset + ' \u2014 21 design styles available:');
  console.log('');
  for (var i = 0; i < STYLES.length; i++) {
    var name = STYLES[i][0];
    var desc = STYLES[i][1];
    var padding = '                    '.slice(0, 20 - name.length);
    console.log('    ' + c.bold + name + c.reset + padding + c.dim + desc + c.reset);
  }
  console.log('');
  console.log('  ' + c.dim + 'Full style guides: https://github.com/Heiberg-Industries/designbrief/tree/main/styles' + c.reset);
  console.log('');
}

// ─── Argument Parsing ────────────────────────────────────────────

function parseArgs() {
  var args = process.argv.slice(2);
  var flags = {};

  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--help':
      case '-h':
        flags.help = true;
        break;
      case '--list':
      case '-l':
        flags.list = true;
        break;
      case '--version':
      case '-v':
        flags.version = true;
        break;
      case '--tool':
      case '-t':
        var val = args[++i];
        if (!val) {
          console.error(c.red + 'Error: --tool requires a value' + c.reset);
          process.exit(1);
        }
        flags.tool = val.split(',').map(function (s) { return s.trim().toLowerCase(); });
        break;
      default:
        console.error(c.red + 'Unknown option: ' + args[i] + c.reset);
        console.error('Run with --help for usage information');
        process.exit(1);
    }
  }

  return flags;
}

// ─── Main ────────────────────────────────────────────────────────

async function main() {
  var flags = parseArgs();

  if (flags.help) return showHelp();
  if (flags.version) return showVersion();
  if (flags.list) return showStyles();

  printHeader();

  var cwd = process.cwd();
  var tools;

  if (flags.tool) {
    tools = resolveToolFlags(flags.tool);
  } else {
    var detected = detectTools(cwd);

    if (detected.length === 1) {
      console.log('  Detected: ' + c.bold + detected[0].name + c.reset + c.dim + ' (' + detected[0].flag + ')' + c.reset);
      tools = detected;
    } else if (detected.length > 1) {
      tools = await promptToolSelection(detected, 'Multiple tools detected:');
    } else {
      tools = await promptToolSelection(TOOLS, 'No tools detected. Which tool are you using?');
    }
  }

  for (var i = 0; i < tools.length; i++) {
    install(cwd, tools[i]);
  }

  printSuccess();
}

main().catch(function (err) {
  console.error(c.red + 'Error: ' + err.message + c.reset);
  process.exit(1);
});
