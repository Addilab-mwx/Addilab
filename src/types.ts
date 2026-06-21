/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TaskItem {
  name: string;
  category: "Automated" | "Augmented" | "Human-Only";
  description: string;
}

export interface Job {
  id: string;
  name: string;
  category: string;
  riskScore: number; // 0 to 100
  humanSynergyScore: number; // 0 to 100
  summary: string;
  tasks: TaskItem[];
  highRiskExamples: string[];
  humanSuperpowers: string[];
  guidanceToPivot: string[];
  keyStats: {
    label: string;
    value: string;
  }[];
  imageUrl?: string;
  skillsRadar?: {
    empathy: number; // 0 to 100
    creativity: number; // 0 to 100
    dexterity: number; // 0 to 100
    criticalThinking: number; // 0 to 100
    managementOrLeadership: number; // 0 to 100
  };
  salaryProjection?: {
    medianSalary: string;
    growthRate2030: string;
    remoteViability: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CustomJobAnalysis {
  name: string;
  riskScore: number;
  humanSynergyScore: number;
  summary: string;
  tasks: TaskItem[];
  highRiskExamples: string[];
  humanSuperpowers: string[];
  guidanceToPivot: string[];
  keyStats: {
    label: string;
    value: string;
  }[];
  imageUrl?: string;
  skillsRadar?: {
    empathy: number;
    creativity: number;
    dexterity: number;
    criticalThinking: number;
    managementOrLeadership: number;
  };
  salaryProjection?: {
    medianSalary: string;
    growthRate2030: string;
    remoteViability: string;
  };
}
