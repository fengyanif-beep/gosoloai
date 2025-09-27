import React from 'react';
import type { Language } from './context/LanguageContext';

export interface LocalizedString {
  en: string;
  fr: string;
  zh: string;
  ja: string;
}

export type Localized<T> = {
  [K in keyof T]: T[K] extends string ? LocalizedString : T[K];
}

// FIX: Added missing AITool interface to resolve an import error in ToolCard.tsx.
export interface AITool {
  name: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  icon: React.ReactNode;
}

export interface Prompt {
  id: number;
  title: LocalizedString;
  category: LocalizedString;
  prompt: LocalizedString;
}

export interface CofounderProfile {
  id: number;
  name: string;
  avatarUrl: string;
  skills: LocalizedString[];
  bio: LocalizedString;
}

export interface HelperListing {
  id: number;
  title: LocalizedString;
  companyName: LocalizedString;
  companyLogoUrl: string;
  postedAgo: LocalizedString;
  tags: LocalizedString[];
  salary: LocalizedString;
  quickApply: boolean;
  isRemote: boolean;
  location: LocalizedString;
  jobType: LocalizedString;
}