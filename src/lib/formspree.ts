export const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE';

interface AssessmentSubmission {
  name: string;
  email: string;
  phone: string;
  pauseScore: number;
  planScore: number;
  proceedScore: number;
  totalScore: number;
  profileTitle: string;
  profileDescription: string;
  prescription: string;
  pauseInsight: string;
  planInsight: string;
  proceedInsight: string;
  responses: { [key: string]: number };
}

export async function submitAssessmentToFormspree(data: AssessmentSubmission): Promise<boolean> {
  if (FORMSPREE_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
    console.warn('Formspree endpoint not configured. Please update FORMSPREE_ENDPOINT in src/lib/formspree.ts');
    alert('Form submission is not configured. Please contact the administrator.');
    return false;
  }

  try {
    const formData = {
      _subject: `P3 Assessment Submission from ${data.name}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      totalScore: `${data.totalScore} / 54`,
      pauseScore: `${data.pauseScore}%`,
      planScore: `${data.planScore}%`,
      proceedScore: `${data.proceedScore}%`,
      profileTitle: data.profileTitle,
      profileDescription: data.profileDescription,
      pauseInsight: data.pauseInsight,
      planInsight: data.planInsight,
      proceedInsight: data.proceedInsight,
      prescription: data.prescription,
      detailedResponses: JSON.stringify(data.responses, null, 2),
    };

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Formspree:', error);
    return false;
  }
}
