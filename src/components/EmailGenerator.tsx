import React, { useState } from 'react';
import { JobDescriptionInput } from './JobDescriptionInput';
import { GeneratedEmail } from './GeneratedEmail';
import { extractKeywords } from '../utils/extractKeywords';
import { generateEmailContent } from '../utils/generateEmailContent';

export function EmailGenerator() {
  const [jobDescription, setJobDescription] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    try {
      setIsGenerating(true);
      if (!jobDescription.trim()) {
        alert('Please paste a job description first.');
        return;
      }
      
      const keywords = extractKeywords(jobDescription);
      const email = generateEmailContent(keywords);
      setGeneratedEmail(email);
    } catch (error) {
      console.error('Error generating email:', error);
      alert('There was an error generating the email. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Cold Email Generator</h1>
        <p className="text-gray-600">Generate personalized cold emails for job applications</p>
      </div>

      <JobDescriptionInput
        value={jobDescription}
        onChange={setJobDescription}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />

      {generatedEmail && <GeneratedEmail content={generatedEmail} />}
    </div>
  );
}