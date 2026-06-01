import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const POST_FILES = collectMarkdownFiles('docs/blog/posts');
const AUTHOR_FILES = collectMarkdownFiles('docs/blog/authors');
const ESSAY_FILES = collectMarkdownFiles('docs/casualEssay');

const CATEGORY_VALUES = new Set(['article', 'tutorial', 'document']);

function getFrontmatterBlock(content, filePath) {
  const lines = content.split('\n');

  if (lines[0] !== '---') {
    throw new Error(`${filePath}: missing opening frontmatter fence`);
  }

  const endIndex = lines.indexOf('---', 1);

  if (endIndex === -1) {
    throw new Error(`${filePath}: missing closing frontmatter fence`);
  }

  return lines.slice(1, endIndex);
}

function parseFrontmatter(lines) {
  const data = {};
  let currentKey = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      continue;
    }

    if (line.startsWith('  - ')) {
      if (!currentKey || !Array.isArray(data[currentKey])) {
        throw new Error(`invalid list item: ${rawLine}`);
      }

      data[currentKey].push(normalizeScalar(line.slice(4)));
      continue;
    }

    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      throw new Error(`invalid frontmatter line: ${rawLine}`);
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    currentKey = key;

    if (!value) {
      data[key] = [];
      continue;
    }

    data[key] = normalizeScalar(value);
  }

  return data;
}

function normalizeScalar(value) {
  if (
    (value.startsWith('\'') && value.endsWith('\'')) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function collectMarkdownFiles(directory) {
  const absoluteDirectory = path.join(process.cwd(), directory);
  return walkDirectory(absoluteDirectory).map((file) => path.relative(process.cwd(), file));
}

function walkDirectory(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkDirectory(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(entryPath);
    }
  }

  return files;
}

function validatePost(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const frontmatter = parseFrontmatter(getFrontmatterBlock(content, filePath));
  const issues = [];

  if (!frontmatter.title || typeof frontmatter.title !== 'string') {
    issues.push('missing title');
  }

  if (!frontmatter.date || typeof frontmatter.date !== 'string') {
    issues.push('missing date');
  }

  if (!frontmatter.category || typeof frontmatter.category !== 'string') {
    issues.push('missing category');
  } else if (!CATEGORY_VALUES.has(frontmatter.category)) {
    issues.push(`category must be one of: ${Array.from(CATEGORY_VALUES).join(', ')}`);
  }

  if (!Array.isArray(frontmatter.tags)) {
    issues.push('tags must be a YAML list');
  }

  if (!frontmatter.commentId || typeof frontmatter.commentId !== 'string') {
    issues.push('missing commentId');
  }

  return {
    issues: issues.map((issue) => `${filePath}: ${issue}`),
    commentId: typeof frontmatter.commentId === 'string' ? frontmatter.commentId : null,
  };
}

function validateAuthor(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const issues = [];

  if (content.includes('\u00cf')) {
    issues.push(`${filePath}: contains suspicious stray character "Ï"`);
  }

  return issues;
}

const filesToCheck = [
  ...POST_FILES.map((file) => path.join(process.cwd(), file)),
  ...AUTHOR_FILES.map((file) => path.join(process.cwd(), file)),
  ...ESSAY_FILES.map((file) => path.join(process.cwd(), file)),
];

const postValidationResults = filesToCheck
  .filter((file) => file.includes(`${path.sep}docs${path.sep}blog${path.sep}posts${path.sep}`))
  .map(validatePost);

const commentIdOwners = new Map();
const issues = [
  ...postValidationResults.flatMap((result) => result.issues),
  ...AUTHOR_FILES
    .map((file) => path.join(process.cwd(), file))
    .flatMap(validateAuthor),
];

for (const file of filesToCheck.filter((target) =>
  target.includes(`${path.sep}docs${path.sep}blog${path.sep}posts${path.sep}`),
)) {
  const { commentId } = validatePost(file);

  if (!commentId) {
    continue;
  }

  if (commentIdOwners.has(commentId)) {
    issues.push(`${file}: duplicate commentId "${commentId}" also used by ${commentIdOwners.get(commentId)}`);
    continue;
  }

  commentIdOwners.set(commentId, file);
}

if (issues.length > 0) {
  console.error('Content checks failed:\n');
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Content checks passed for ${filesToCheck.length} markdown files.`);
}
