'use client';

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { financialRecords } from '@/data/financials';

export function FinancialSummary() {
  const { t } = useTranslation();
  const totalRecord = financialRecords.find((r) => r.id === 'total');
  const lineItems = financialRecords.filter((r) => r.id !== 'total');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('achievements.financialSummary')}</CardTitle>
      </CardHeader>
      <CardContent>
        {totalRecord && (
          <div className="mb-4 rounded-lg bg-brand-50 p-4 text-center">
            <p className="text-sm font-medium text-brand-700">
              {t('achievements.totalRaisedSpent')}
            </p>
            <p className="text-3xl font-bold text-brand-600">
              £{totalRecord.amountSpent.toLocaleString('en-GB')}
            </p>
          </div>
        )}

        <Separator className="my-4" />

        <div className="space-y-3">
          {lineItems.map((record) => (
            <div
              key={record.id}
              className="flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <p className="font-medium text-foreground">{record.period}</p>
                <p className="text-sm text-muted-foreground">{record.notes}</p>
              </div>
              <p className="shrink-0 font-semibold text-foreground">
                £{record.amountSpent.toLocaleString('en-GB')}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
