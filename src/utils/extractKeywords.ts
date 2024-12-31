export interface Keywords {
  company: string;
  role: string;
  skills: string[];
  requirements: string[];
}

export function extractKeywords(jobDescription: string): Keywords {
  const text = jobDescription.toLowerCase();
  
  // Improved company name extraction
  const companyPatterns = [
    /(?:at|with|for)\s+([A-Za-z0-9\s&.-]+?)(?:\.|,|\s+is|\s+are|\s+we|\s+in)/i,
    /([A-Za-z0-9\s&.-]+?)\s+is\s+(?:looking|seeking|hiring)/i
  ];
  
  let company = '[Company Name]';
  for (const pattern of companyPatterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      company = match[1].trim();
      break;
    }
  }

  // Improved role extraction
  const rolePatterns = [
    /(?:seeking|hiring|looking for(?: a)?)\s+([A-Za-z\s]+?)(?:\.|,|\s+to|\s+who|\s+with)/i,
    /(?:position|role|opportunity)(?:\s+is)?(?:\s+for)?\s+(?:a\s+)?([A-Za-z\s]+?)(?:\.|,|\s+in|\s+at|\s+who)/i
  ];
  
  let role = '[Position]';
  for (const pattern of rolePatterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      role = match[1].trim();
      break;
    }
  }

  // Technical skills extraction
  const technicalSkills = [
    'javascript', 'typescript', 'python', 'java', 'c++', 'react', 'angular', 'vue',
    'node.js', 'express', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'sql',
    'mongodb', 'postgresql', 'redis', 'graphql', 'rest api', 'ci/cd'
  ];

  // Soft skills extraction
  const softSkills = [
    'communication', 'leadership', 'problem-solving', 'teamwork', 'collaboration',
    'analytical', 'time management', 'adaptability', 'creativity', 'attention to detail'
  ];

  const foundTechnicalSkills = technicalSkills
    .filter(skill => text.includes(skill))
    .map(skill => skill.charAt(0).toUpperCase() + skill.slice(1));

  const foundSoftSkills = softSkills
    .filter(skill => text.includes(skill))
    .map(skill => skill.charAt(0).toUpperCase() + skill.slice(1));

  // Extract key requirements
  const requirementPatterns = [
    /(\d+\+?\s+years?\s+(?:of\s+)?experience)/gi,
    /(?:bachelor'?s?|master'?s?|phd|degree)\s+(?:in\s+)?([^,.]+)/gi,
    /(?:must|should)\s+have\s+([^,.]+)/gi
  ];

  const requirements: string[] = [];
  for (const pattern of requirementPatterns) {
    const matches = [...text.matchAll(pattern)];
    matches.forEach(match => {
      if (match[1]) {
        requirements.push(match[1].trim());
      }
    });
  }

  return {
    company,
    role,
    skills: [...new Set([...foundTechnicalSkills, ...foundSoftSkills])],
    requirements: [...new Set(requirements)]
  };
}