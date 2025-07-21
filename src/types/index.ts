import React from 'react';

// Publication types
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi: string;
  pmid?: string;
  abstract?: string;
  keywords?: string[];
  impactFactor?: number;
  type: 'core' | 'related' | 'dataset';
  impact: 'high' | 'medium' | 'standard';
  tags: string[];
  pdfUrl?: string;
}
