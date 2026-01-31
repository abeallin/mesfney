import type { FinancialRecord } from '@/types';

export const financialRecords: FinancialRecord[] = [
  {
    id: 'total',
    period: 'Total Raised & Spent',
    yearStart: 2008,
    yearEnd: 2025,
    amountSpent: 24694.61,
    notes: 'Headline figure - total funds raised and spent since founding.',
  },
  {
    id: '2010-orota',
    period: '2010',
    yearStart: 2010,
    amountSpent: 2338.25,
    amountRaised: 5836.69,
    notes: 'Account up to March 2011.',
    projectId: 'orota-playroom-2010',
  },
  {
    id: '2013-2024-era',
    period: '2013 - 2024',
    yearStart: 2013,
    yearEnd: 2024,
    amountSpent: 15148.36,
    notes: 'Spent in partnership with Era.',
    projectId: 'abraha-bahter-2017',
  },
  {
    id: '2021-wheelchair',
    period: '2021',
    yearStart: 2021,
    amountSpent: 1000,
    notes: 'Wheelchair for autism kids during COVID (tin collection).',
  },
  {
    id: '2025-laptops',
    period: '2025',
    yearStart: 2025,
    amountSpent: 6208,
    notes: 'Spent on 16 laptops.',
    projectId: 'laptops-2025',
  },
];
