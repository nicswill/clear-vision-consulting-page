export interface Question {
  id: string;
  text: string;
  section: string;
  options: { value: number; label: string }[];
}

export interface AssessmentSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  questions: Question[];
}

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'pause',
    title: 'PAUSE',
    subtitle: 'Section 1 of 6',
    description: 'How well do you create space to gain awareness and rest?',
    questions: [
      {
        id: 'q1',
        text: 'When I feel overwhelmed, I:',
        section: 'pause',
        options: [
          { value: 1, label: 'A. Push through without stopping' },
          { value: 2, label: 'B. Pause briefly but keep moving quickly' },
          { value: 3, label: 'C. Step back and assess before acting' },
        ],
      },
      {
        id: 'q2',
        text: 'My body gives me signals (fatigue, tension), and I:',
        section: 'pause',
        options: [
          { value: 1, label: 'A. Ignore them' },
          { value: 2, label: 'B. Notice but delay responding' },
          { value: 3, label: 'C. Respond and adjust my pace' },
        ],
      },
      {
        id: 'q3',
        text: 'I create intentional moments of stillness in my day:',
        section: 'pause',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
    ],
  },
  {
    id: 'plan',
    title: 'PLAN',
    subtitle: 'Section 2 of 6',
    description: 'How intentional and aligned are your decisions?',
    questions: [
      {
        id: 'q4',
        text: 'Before making decisions, I:',
        section: 'plan',
        options: [
          { value: 1, label: 'A. React quickly' },
          { value: 2, label: 'B. Think briefly' },
          { value: 3, label: 'C. Reflect deeply and align' },
        ],
      },
      {
        id: 'q5',
        text: 'When emotions are high, I:',
        section: 'plan',
        options: [
          { value: 1, label: 'A. Speak immediately' },
          { value: 2, label: 'B. Try to manage it' },
          { value: 3, label: 'C. Pause and process first' },
        ],
      },
      {
        id: 'q6',
        text: 'I regularly evaluate my priorities and direction:',
        section: 'plan',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Occasionally' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
    ],
  },
  {
    id: 'proceed',
    title: 'PROCEED',
    subtitle: 'Section 3 of 6',
    description: 'How deliberate and energized is your execution?',
    questions: [
      {
        id: 'q7',
        text: 'My actions are typically:',
        section: 'proceed',
        options: [
          { value: 1, label: 'A. Reactive' },
          { value: 2, label: 'B. Somewhat intentional' },
          { value: 3, label: 'C. Fully aligned and deliberate' },
        ],
      },
      {
        id: 'q8',
        text: 'I feel confident in my decisions because I:',
        section: 'proceed',
        options: [
          { value: 1, label: 'A. Act quickly' },
          { value: 2, label: 'B. Think things through sometimes' },
          { value: 3, label: 'C. Move with clarity and intention' },
        ],
      },
      {
        id: 'q9',
        text: 'When I move forward, I feel:',
        section: 'proceed',
        options: [
          { value: 1, label: 'A. Drained' },
          { value: 2, label: 'B. Unsure' },
          { value: 3, label: 'C. Focused and aligned' },
        ],
      },
    ],
  },
  {
    id: 'emotional',
    title: 'EMOTIONAL & RELATIONAL',
    subtitle: 'Section 4 of 6',
    description: 'How do you manage relationships and conflicts?',
    questions: [
      {
        id: 'q10',
        text: 'When in conflict, I:',
        section: 'emotional',
        options: [
          { value: 1, label: 'A. React immediately' },
          { value: 2, label: 'B. Try to stay calm' },
          { value: 3, label: 'C. Pause and choose my response' },
        ],
      },
      {
        id: 'q11',
        text: 'I listen to understand before responding:',
        section: 'emotional',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
      {
        id: 'q12',
        text: 'I create space before responding in important conversations:',
        section: 'emotional',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
    ],
  },
  {
    id: 'spiritual',
    title: 'SPIRITUAL & PURPOSE',
    subtitle: 'Section 5 of 6',
    description: 'How connected are you to your deeper purpose?',
    questions: [
      {
        id: 'q13',
        text: 'I seek guidance (prayer, reflection) before major decisions:',
        section: 'spiritual',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
      {
        id: 'q14',
        text: 'I feel aligned with my purpose when making decisions:',
        section: 'spiritual',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
      {
        id: 'q15',
        text: 'I intentionally pause to reconnect with God and my calling:',
        section: 'spiritual',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
    ],
  },
  {
    id: 'health',
    title: 'WHOLE HEALTH',
    subtitle: 'Section 6 of 6',
    description: 'How well do you protect your overall wellbeing?',
    questions: [
      {
        id: 'q16',
        text: 'I recognize when I need rest before burnout happens:',
        section: 'health',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
      {
        id: 'q17',
        text: 'I give myself permission to pause without guilt:',
        section: 'health',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
      {
        id: 'q18',
        text: 'My leadership reflects balance (clarity, wellness, purpose):',
        section: 'health',
        options: [
          { value: 1, label: 'A. Rarely' },
          { value: 2, label: 'B. Sometimes' },
          { value: 3, label: 'C. Consistently' },
        ],
      },
    ],
  },
];

export const responseOptions = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
];

export interface P3Results {
  totalScore: number;
  profileTitle: string;
  profileDescription: string;
  pauseInsight: string;
  planInsight: string;
  proceedInsight: string;
  prescription: string;
  pauseScore: number;
  planScore: number;
  proceedScore: number;
}

export function calculateResults(responses: { [key: string]: number }): P3Results {
  let totalScore = 0;
  let pauseTotal = 0;
  let planTotal = 0;
  let proceedTotal = 0;

  Object.keys(responses).forEach((key) => {
    const score = responses[key];
    totalScore += score;

    if (['q1', 'q2', 'q3'].includes(key)) {
      pauseTotal += score;
    } else if (['q4', 'q5', 'q6'].includes(key)) {
      planTotal += score;
    } else if (['q7', 'q8', 'q9'].includes(key)) {
      proceedTotal += score;
    }
  });

  const pauseScore = Math.round((pauseTotal / 9) * 100);
  const planScore = Math.round((planTotal / 9) * 100);
  const proceedScore = Math.round((proceedTotal / 9) * 100);

  let profileTitle = '';
  let profileDescription = '';
  let pauseInsight = '';
  let planInsight = '';
  let proceedInsight = '';
  let prescription = '';

  if (totalScore >= 18 && totalScore <= 27) {
    profileTitle = 'The Pusher';
    profileDescription = 'You lead from momentum, moving quickly and reacting to what comes next. While this keeps things going, it may also lead to burnout, fatigue, and reactive decision-making.';
    pauseInsight = 'You rarely pause before acting. This pattern can lead to exhaustion and decisions made under pressure rather than from clarity.';
    planInsight = 'Your planning may be limited. Without clear priorities and strategic direction, leadership becomes about survival rather than sustainability.';
    proceedInsight = 'Your execution is reactive. You move quickly, but without pause or plan, your actions may lack alignment or long-term clarity.';
    prescription = 'Start practicing intentional pauses. Before making major decisions, before responding in conflict, and before moving forward — stop and assess. Even a five-minute pause can shift leadership from reactive to intentional.';
  } else if (totalScore >= 28 && totalScore <= 36) {
    profileTitle = 'The Planner';
    profileDescription = 'You recognize the value of pausing and planning, but implementation is inconsistent. You want to lead with intention, but urgency and pressure often override your strategic approach.';
    pauseInsight = 'You pause sometimes, but not consistently. Stress, urgency, or external pressure often cause you to skip this critical step.';
    planInsight = 'You think about planning but may not follow through. Your priorities exist but are not always honored under pressure.';
    proceedInsight = 'You want to proceed with clarity, but your execution often reflects urgency rather than alignment. Sustainable rhythms are still being developed.';
    prescription = 'Strengthen your commitment to the practices you already value. Protect your pause, plan, and proceed rhythms even when pressure increases. Sustainable leadership requires non-negotiable boundaries around these practices.';
  } else if (totalScore >= 37 && totalScore <= 42) {
    profileTitle = 'The Protector';
    profileDescription = 'You understand the importance of pause, plan, and proceed, and you practice them more often than not. You are building sustainable leadership habits, though consistency may still be a challenge during high-pressure seasons.';
    pauseInsight = 'You pause regularly and recognize its value. Continue protecting this practice, especially during stressful seasons.';
    planInsight = 'You plan with intention and clarity. Your priorities guide your decisions, though pressure can still disrupt your focus.';
    proceedInsight = 'You proceed with deliberate action. Your execution reflects clarity and purpose, though maintaining sustainable rhythms requires ongoing attention.';
    prescription = 'Continue refining your leadership practices. Build stronger systems and protocols that support your pause, plan, and proceed rhythms even when external pressure increases. Leadership sustainability comes from structure, not just willpower.';
  } else if (totalScore >= 43 && totalScore <= 48) {
    profileTitle = 'The Practitioner';
    profileDescription = 'You consistently practice pause, plan, and proceed. Your leadership reflects intentionality, clarity, and sustainable execution. You understand that healthy leadership requires rhythm, structure, and ongoing reflection.';
    pauseInsight = 'You pause consistently. This practice protects your clarity, decision-making, and overall leadership capacity.';
    planInsight = 'You plan strategically. Your priorities guide your decisions, and you make adjustments based on reflection, not just reaction.';
    proceedInsight = 'You proceed with alignment. Your execution reflects clarity, purpose, and sustainable rhythms that energize rather than drain you.';
    prescription = 'Continue leading from this place of strength. Share your practices with other leaders, mentor emerging leaders, and remain vigilant against complacency. Sustainable leadership is a lifelong practice, not a destination.';
  } else {
    profileTitle = 'The Whole Health Leader';
    profileDescription = 'You embody the P3 Method® across all areas of leadership. You pause consistently, plan strategically, and proceed with sustainable clarity. Your leadership reflects balance, purpose, and wholeness. You lead from a place of alignment and integrity.';
    pauseInsight = 'You pause intentionally and consistently. This practice protects your clarity, your relationships, and your overall wellbeing.';
    planInsight = 'You plan with strategic clarity. Your priorities are aligned with your values and calling, and you make decisions from this foundation.';
    proceedInsight = 'You proceed with sustainable execution. Your leadership reflects balance, purpose, and energy that comes from alignment rather than adrenaline.';
    prescription = 'You are leading from wholeness. Continue to protect your practices, invest in other leaders, and remain committed to ongoing growth. Leadership from this place is a gift to those you serve and a model for others to follow.';
  }

  return {
    totalScore,
    profileTitle,
    profileDescription,
    pauseInsight,
    planInsight,
    proceedInsight,
    prescription,
    pauseScore,
    planScore,
    proceedScore,
  };
}
