import { GoalCritique, ProjectFormData } from '@/types/project';

// Evaluation functions
export const evaluateObjective = (objective: string): number => {
  if (!objective.trim()) return 1;
  if (objective.length < 10) return 3;
  if (objective.length < 25) return 5;
  if (objective.includes('?') || objective.includes('how') || objective.includes('what')) return 7;
  if (objective.includes('create') || objective.includes('design') || objective.includes('develop')) return 8;
  if (objective.includes('solve') || objective.includes('improve') || objective.includes('achieve')) return 9;
  return 6;
};

export const evaluateSuccessMetrics = (metrics: string[]): number => {
  if (metrics.length === 0) return 1;
  if (metrics.length === 1) return 4;
  if (metrics.length === 2) return 6;
  if (metrics.length >= 3) return 8;
  return 5;
};

export const evaluateConstraints = (constraints: string[]): number => {
  if (constraints.length === 0) return 3;
  if (constraints.length === 1) return 6;
  if (constraints.length >= 2) return 8;
  return 5;
};

// Feedback generation functions
export const generateObjectiveFeedback = (objective: string): string => {
  if (!objective.trim()) return "You haven't defined an objective yet. What do you want to achieve?";
  if (objective.length < 10) return "Your objective is quite brief. Try to be more specific about what you want to accomplish.";
  if (objective.includes('?')) return "Great! You're asking a clear question. Consider adding what success looks like.";
  return "Your objective is well-defined and action-oriented. This will help guide your workflow effectively.";
};

export const generateObjectiveStrengths = (objective: string): string[] => {
  const strengths: string[] = [];
  if (objective.length > 20) strengths.push("Detailed and specific");
  if (objective.includes('create') || objective.includes('design')) strengths.push("Action-oriented");
  if (objective.includes('?')) strengths.push("Question-driven approach");
  if (objective.length > 0) strengths.push("Clear direction");
  return strengths;
};

export const generateObjectiveAreas = (objective: string): string[] => {
  const areas: string[] = [];
  if (objective.length < 15) areas.push("Could be more specific");
  if (!objective.includes('how') && !objective.includes('what')) areas.push("Consider adding measurable outcomes");
  if (objective.length === 0) areas.push("Need to define an objective");
  return areas;
};

export const generateMetricsFeedback = (metrics: string[]): string => {
  if (metrics.length === 0) return "No success metrics defined. How will you know if your project is successful?";
  if (metrics.length === 1) return "Good start! Consider adding more specific metrics to measure different aspects of success.";
  if (metrics.length >= 3) return "Excellent! You have comprehensive success criteria that will help track progress.";
  return "Your success metrics provide good guidance for measuring project outcomes.";
};

export const generateMetricsStrengths = (metrics: string[]): string[] => {
  const strengths: string[] = [];
  if (metrics.length >= 2) strengths.push("Multiple success criteria");
  if (metrics.some(m => m.includes('%') || m.includes('number'))) strengths.push("Quantifiable metrics");
  if (metrics.length > 0) strengths.push("Clear success indicators");
  return strengths;
};

export const generateMetricsAreas = (metrics: string[]): string[] => {
  const areas: string[] = [];
  if (metrics.length === 0) areas.push("Need to define success metrics");
  if (metrics.length === 1) areas.push("Could add more metrics");
  if (!metrics.some(m => m.includes('%') || m.includes('number'))) areas.push("Consider adding measurable targets");
  return areas;
};

export const generateConstraintsFeedback = (constraints: string[]): string => {
  if (constraints.length === 0) return "No constraints defined. Consider what limitations might affect your project.";
  if (constraints.length === 1) return "Good awareness of constraints. Consider if there are other factors to consider.";
  if (constraints.length >= 2) return "Excellent! You've identified multiple constraints that will help guide realistic planning.";
  return "Your constraints provide good boundaries for project planning.";
};

export const generateConstraintsStrengths = (constraints: string[]): string[] => {
  const strengths: string[] = [];
  if (constraints.length >= 2) strengths.push("Multiple constraints identified");
  if (constraints.some(c => c.includes('time') || c.includes('budget'))) strengths.push("Practical limitations considered");
  if (constraints.length > 0) strengths.push("Realistic boundaries set");
  return strengths;
};

export const generateConstraintsAreas = (constraints: string[]): string[] => {
  const areas: string[] = [];
  if (constraints.length === 0) areas.push("Need to identify constraints");
  if (constraints.length === 1) areas.push("Could consider more constraints");
  if (!constraints.some(c => c.includes('time') || c.includes('budget'))) areas.push("Consider practical limitations");
  return areas;
};

export const generateOverallSummary = (score: number): string => {
  if (score >= 8) return "Excellent project planning! Your goals are clear, measurable, and well-constrained.";
  if (score >= 6) return "Good project structure. A few refinements will make this even stronger.";
  if (score >= 4) return "Solid foundation. Consider adding more specific details to strengthen your project.";
  return "This project needs more definition. Focus on clarifying your objective and success criteria.";
};

export const generateNextSteps = (data: ProjectFormData, score: number): string[] => {
  const steps: string[] = [];
  
  if (!data.objective.trim()) {
    steps.push("Define a clear, specific objective for your project");
  } else if (data.objective.length < 20) {
    steps.push("Expand your objective with more specific details");
  }
  
  if (data.successMetrics.length === 0) {
    steps.push("Add 2-3 specific success metrics to measure progress");
  } else if (data.successMetrics.length < 2) {
    steps.push("Add more success metrics to cover different aspects");
  }
  
  if (data.constraints.length === 0) {
    steps.push("Identify realistic constraints like time, resources, or scope");
  }
  
  if (score < 6) {
    steps.push("Review the feedback above and make improvements");
  }
  
  return steps;
};

// Main critique generation function
export const generateCritique = async (data: ProjectFormData): Promise<GoalCritique> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const objectiveScore = evaluateObjective(data.objective);
  const metricsScore = evaluateSuccessMetrics(data.successMetrics);
  const constraintsScore = evaluateConstraints(data.constraints);
  
  const overallScore = Math.round((objectiveScore + metricsScore + constraintsScore) / 3);
  
  return {
    objective: {
      score: objectiveScore,
      feedback: generateObjectiveFeedback(data.objective),
      strengths: generateObjectiveStrengths(data.objective),
      areas: generateObjectiveAreas(data.objective)
    },
    successMetrics: {
      score: metricsScore,
      feedback: generateMetricsFeedback(data.successMetrics),
      strengths: generateMetricsStrengths(data.successMetrics),
      areas: generateMetricsAreas(data.successMetrics)
    },
    constraints: {
      score: constraintsScore,
      feedback: generateConstraintsFeedback(data.constraints),
      strengths: generateConstraintsStrengths(data.constraints),
      areas: generateConstraintsAreas(data.constraints)
    },
    overall: {
      score: overallScore,
      summary: generateOverallSummary(overallScore),
      nextSteps: generateNextSteps(data, overallScore)
    }
  };
}; 