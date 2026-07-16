// Generator script — run with: node gen-questions.js
const fs = require('fs');

// Read existing questions to find last ID
const existing = fs.readFileSync('questions-agile.js', 'utf8');
const lastIdMatch = [...existing.matchAll(/\{id:(\d+),/g)];
const lastId = lastIdMatch.length ? Math.max(...lastIdMatch.map(m => parseInt(m[1]))) : 1060;
console.log('Last ID in file:', lastId);

// Count existing questions
const count = (existing.match(/\{id:/g) || []).length;
console.log('Existing questions:', count);
console.log('Need to add:', 1000 - count);
