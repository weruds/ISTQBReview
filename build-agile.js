
// Builds questions-agile.js with all 1000 questions
const fs = require('fs');

// Helper: make a question line
function q(id, chapter, topic, difficulty, question, opts, answer, explanation) {
  return `{id:${id},chapter:"${chapter}",topic:"${topic}",difficulty:"${difficulty}",question:"${question}",options:["${opts.join('","')}"],answer:${answer},explanation:"${explanation}"}`;
}

const ch1 = "Agile Software Development";
const ch2 = "Fundamental Aspects of Agile Testing";
const ch3 = "Agile Testing Methods Techniques and Tools";
const ch4 = "Communicating Test Status in Agile";
const ch5 = "Evaluating Exit Criteria and Reporting";
const ch6 = "Agile Test Planning and Risk Management";

// Read existing file if it has good content
const existing = fs.readFileSync('questions-agile.js', 'utf8');
const existingLines = existing.split('\n').filter(l => l.trim().startsWith('{id:') || l.trim().startsWith('{"id":'));
console.log('Existing valid lines:', existingLines.length);
console.log('Will rebuild complete file from scratch');
