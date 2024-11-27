import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { 
  Opportunity, 
  BidAnalysis, 
  Template, 
  PricingCalculation,
  Milestone,
  Subcontractor,
  Proposal
} from '../types';

// Initial templates with professional content
const initialTemplates: Template[] = [
  {
    id: '1',
    name: 'Technical Approach Template',
    category: 'technical',
    content: `# Technical Approach

## 1. Understanding of Requirements
[Company Name] thoroughly understands the requirements outlined in the Statement of Work...

## 2. Technical Solution
Our approach incorporates industry best practices and proven methodologies...

## 3. Management Approach
Our management approach ensures efficient delivery through:
- Dedicated Project Manager
- Regular status meetings
- Quality control procedures
- Risk management strategies

## 4. Implementation Plan
The implementation will be executed in phases:
1. Planning and Setup
2. Development/Execution
3. Testing and Quality Assurance
4. Deployment
5. Ongoing Support`,
    tags: ['technical', 'approach', 'methodology']
  },
  {
    id: '2',
    name: 'Past Performance Template',
    category: 'past_performance',
    content: `# Past Performance Reference

## Contract Information
- Contract Number: [Contract #]
- Client: [Agency Name]
- Period of Performance: [Dates]
- Contract Value: [Amount]
- Point of Contact: [Name, Title, Contact Info]

## Project Description
[Detailed description of the work performed...]

## Relevance to Current Opportunity
[Explanation of how this past performance relates...]

## Performance Details
- Technical Achievement
- Schedule Performance
- Cost Control
- Management Effectiveness
- Customer Satisfaction`,
    tags: ['past performance', 'references', 'experience']
  },
  {
    id: '3',
    name: 'Professional Cover Letter',
    category: 'cover_letter',
    content: `[Company Letterhead]
[Date]

[Contracting Officer Name]
[Agency Name]
[Address]

RE: [Solicitation Number] - [Project Title]

Dear [Contracting Officer Name],

We are pleased to submit our proposal for [Project Title] under solicitation [Number].

[Company Name] is uniquely qualified to perform this work because:
- [Key Qualification 1]
- [Key Qualification 2]
- [Key Qualification 3]

We have carefully reviewed all requirements and confirm our ability to deliver exceptional results.

Sincerely,
[Name]
[Title]
[Company Name]`,
    tags: ['cover letter', 'introduction', 'executive']
  },
  {
    id: '4',
    name: 'Capability Statement',
    category: 'capability_statement',
    content: `# Capability Statement

## Core Competencies
- [Core Competency 1]
- [Core Competency 2]
- [Core Competency 3]

## Past Performance
Brief overview of relevant past performance...

## Differentiators
What sets us apart from competitors...

## Company Data
- DUNS: [Number]
- CAGE Code: [Code]
- NAICS Codes: [Codes]
- Certifications: [List]

## Contact Information
[Company Name]
[Address]
[Phone]
[Email]
[Website]`,
    tags: ['capabilities', 'qualifications', 'company profile']
  }
];

interface Store {
  opportunities: Opportunity[];
  bidAnalyses: BidAnalysis[];
  templates: Template[];
  pricingCalculations: PricingCalculation[];
  milestones: Milestone[];
  subcontractors: Subcontractor[];
  proposals: Proposal[];
  
  // Opportunities
  addOpportunity: (opportunity: Opportunity) => void;
  updateOpportunity: (id: string, opportunity: Partial<Opportunity>) => void;
  removeOpportunity: (id: string) => void;
  
  // Bid Analysis
  addBidAnalysis: (analysis: BidAnalysis) => void;
  updateBidAnalysis: (id: string, analysis: Partial<BidAnalysis>) => void;
  
  // Templates
  addTemplate: (template: Template) => void;
  updateTemplate: (id: string, template: Partial<Template>) => void;
  removeTemplate: (id: string) => void;
  
  // Pricing
  addPricingCalculation: (calculation: PricingCalculation) => void;
  updatePricingCalculation: (id: string, calculation: Partial<PricingCalculation>) => void;
  
  // Milestones
  addMilestone: (milestone: Milestone) => void;
  updateMilestone: (id: string, milestone: Partial<Milestone>) => void;
  removeMilestone: (id: string) => void;

  // Subcontractors
  addSubcontractor: (subcontractor: Subcontractor) => void;
  updateSubcontractor: (id: string, subcontractor: Partial<Subcontractor>) => void;
  removeSubcontractor: (id: string) => void;

  // Proposals
  addProposal: (proposal: Proposal) => void;
  updateProposal: (id: string, proposal: Partial<Proposal>) => void;
  removeProposal: (id: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      opportunities: [],
      bidAnalyses: [],
      templates: initialTemplates,
      pricingCalculations: [],
      milestones: [],
      subcontractors: [],
      proposals: [],

      // Opportunities
      addOpportunity: (opportunity) =>
        set((state) => ({
          opportunities: [...state.opportunities, opportunity],
        })),
      updateOpportunity: (id, opportunity) =>
        set((state) => ({
          opportunities: state.opportunities.map((o) =>
            o.id === id ? { ...o, ...opportunity } : o
          ),
        })),
      removeOpportunity: (id) =>
        set((state) => ({
          opportunities: state.opportunities.filter((o) => o.id !== id),
        })),

      // Bid Analysis
      addBidAnalysis: (analysis) =>
        set((state) => ({
          bidAnalyses: [...state.bidAnalyses, analysis],
        })),
      updateBidAnalysis: (id, analysis) =>
        set((state) => ({
          bidAnalyses: state.bidAnalyses.map((a) =>
            a.id === id ? { ...a, ...analysis } : a
          ),
        })),

      // Templates
      addTemplate: (template) =>
        set((state) => ({
          templates: [...state.templates, template],
        })),
      updateTemplate: (id, template) =>
        set((state) => ({
          templates: state.templates.map((t) =>
            t.id === id ? { ...t, ...template } : t
          ),
        })),
      removeTemplate: (id) =>
        set((state) => ({
          templates: state.templates.filter((t) => t.id !== id),
        })),

      // Pricing
      addPricingCalculation: (calculation) =>
        set((state) => ({
          pricingCalculations: [...state.pricingCalculations, calculation],
        })),
      updatePricingCalculation: (id, calculation) =>
        set((state) => ({
          pricingCalculations: state.pricingCalculations.map((c) =>
            c.id === id ? { ...c, ...calculation } : c
          ),
        })),

      // Milestones
      addMilestone: (milestone) =>
        set((state) => ({
          milestones: [...state.milestones, milestone],
        })),
      updateMilestone: (id, milestone) =>
        set((state) => ({
          milestones: state.milestones.map((m) =>
            m.id === id ? { ...m, ...milestone } : m
          ),
        })),
      removeMilestone: (id) =>
        set((state) => ({
          milestones: state.milestones.filter((m) => m.id !== id),
        })),

      // Subcontractors
      addSubcontractor: (subcontractor) =>
        set((state) => ({
          subcontractors: [...state.subcontractors, subcontractor],
        })),
      updateSubcontractor: (id, subcontractor) =>
        set((state) => ({
          subcontractors: state.subcontractors.map((s) =>
            s.id === id ? { ...s, ...subcontractor } : s
          ),
        })),
      removeSubcontractor: (id) =>
        set((state) => ({
          subcontractors: state.subcontractors.filter((s) => s.id !== id),
        })),

      // Proposals
      addProposal: (proposal) =>
        set((state) => ({
          proposals: [...state.proposals, proposal],
        })),
      updateProposal: (id, proposal) =>
        set((state) => ({
          proposals: state.proposals.map((p) =>
            p.id === id ? { ...p, ...proposal } : p
          ),
        })),
      removeProposal: (id) =>
        set((state) => ({
          proposals: state.proposals.filter((p) => p.id !== id),
        })),
    }),
    {
      name: 'gcms-storage',
      partialize: (state) => ({
        opportunities: state.opportunities,
        bidAnalyses: state.bidAnalyses,
        templates: state.templates,
        pricingCalculations: state.pricingCalculations,
        milestones: state.milestones,
        subcontractors: state.subcontractors,
        proposals: state.proposals,
      }),
    }
  )
);