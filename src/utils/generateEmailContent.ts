import { Keywords } from './extractKeywords';

function formatSkills(skills: string[]): string {
  if (skills.length === 0) return 'the required technical and soft skills';
  if (skills.length === 1) return skills[0];
  if (skills.length === 2) return `${skills[0]} and ${skills[1]}`;
  
  const lastSkill = skills[skills.length - 1];
  const otherSkills = skills.slice(0, -1);
  return `${otherSkills.join(', ')}, and ${lastSkill}`;
}

function formatRequirements(requirements: string[]): string {
  if (requirements.length === 0) return '';
  return `\n\nI meet your key requirements, including ${requirements.join(', ')}.`;
}

export function generateEmailContent(keywords: Keywords): string {
  const skillsList = formatSkills(keywords.skills);
  const requirementsList = formatRequirements(keywords.requirements);

  const paragraphs = [
    'Dear Hiring Manager,',
    '',
    `I hope this email finds you well. I am writing to express my strong interest in the ${keywords.role} position at ${keywords.company}. I was excited to come across this opportunity as it aligns perfectly with my career aspirations and skill set.`,
    '',
    `I noticed you're looking for someone with expertise in ${skillsList}. Throughout my career, I have developed strong proficiency in these areas through hands-on experience and continuous learning.${requirementsList}`,
    '',
    'I am particularly drawn to this role because it offers an opportunity to leverage my technical expertise while contributing to meaningful projects. I am confident that my background and enthusiasm would make me a valuable addition to your team.',
    '',
    'I have attached my resume for your review. I would welcome the opportunity to discuss how my skills and experience align with your needs in more detail.',
    '',
    'Thank you for considering my application. I look forward to the possibility of connecting to discuss this opportunity further.',
    '',
    'Best regards,',
    '[Your Name]'
  ];

  return paragraphs.join('\n');
}