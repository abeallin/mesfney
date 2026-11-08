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
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xs lg:sticky lg:top-24">
      {totalRecord && (
        <div className="bg-trust-950 p-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            {t.achievements.financialSummary}
          </p>
          <p className="mt-1 text-xs text-trust-200">
            {t.achievements.totalRaisedSpent}
          </p>
          <p className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white">
            £{totalRecord.amountSpent.toLocaleString('en-GB')}
          </p>
        </div>
      )}

      <div className="space-y-5 p-6 sm:p-7">
        {lineItems.map((record, idx) => {
          const pct = Math.min(
            100,
            Math.round((record.amountSpent / totalAmount) * 100)
          );
          const isTeal = idx % 2 === 1;
          return (
            <div key={record.id} className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {(isTi && record.periodTi) || record.period}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {(isTi && record.notesTi) || record.notes}
                  </p>
                </div>
                <p className="shrink-0 font-serif text-base font-semibold text-foreground">
                  £{record.amountSpent.toLocaleString('en-GB')}
                </p>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={
                    isTeal
                      ? 'h-full rounded-full bg-trust-600'
                      : 'h-full rounded-full bg-brand-600'
                  }
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
