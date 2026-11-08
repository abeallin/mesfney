import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { financialRecords } from '@/data/financials';
import { getTranslations } from '@/lib/get-translations';

interface FinancialSummaryProps {
  locale: string;
}

export function FinancialSummary({ locale }: FinancialSummaryProps) {
  const t = getTranslations(locale);
  const isTi = locale === 'ti';
  const totalRecord = financialRecords.find((r) => r.id === 'total');
  const lineItems = financialRecords.filter((r) => r.id !== 'total');
  const totalAmount = totalRecord?.amountSpent || 24694.61;

  return (
    <Card className="border-t-4 border-t-trust-600 lg:sticky lg:top-24">
      <CardHeader>
        <CardTitle>{t.achievements.financialSummary}</CardTitle>
      </CardHeader>
      <CardContent>
        {totalRecord && (
          <div className="mb-4 rounded-xl border border-trust-200 bg-gradient-to-br from-trust-50 to-brand-50/40 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-trust-800">
              {t.achievements.totalRaisedSpent}
            </p>
            <p className="mt-1 text-3xl font-extrabold text-trust-700">
              £{totalRecord.amountSpent.toLocaleString('en-GB')}
            </p>
          </div>
        )}

        <Separator className="my-4" />

        <div className="space-y-4">
          {lineItems.map((record, idx) => {
            const pct = Math.min(100, Math.round((record.amountSpent / totalAmount) * 100));
            const isTeal = idx % 2 === 1;
            return (
              <div key={record.id} className="space-y-1.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {(isTi && record.periodTi) || record.period}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(isTi && record.notesTi) || record.notes}
                    </p>
                  </div>
                  <p className="shrink-0 font-bold text-foreground">
                    £{record.amountSpent.toLocaleString('en-GB')}
                  </p>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={
                      isTeal
                        ? 'h-full rounded-full bg-trust-600'
                        : 'h-full rounded-full bg-brand-500'
                    }
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
