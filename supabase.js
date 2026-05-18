export default function MacroRing({ totals, goal }) {
  const macros = [
    { label: 'Protein', value: totals.protein, color: '#60a5fa', unit: 'g', daily: 50 },
    { label: 'Carbs', value: totals.carbs, color: '#fbbf24', unit: 'g', daily: 275 },
    { label: 'Fat', value: totals.fat, color: '#a78bfa', unit: 'g', daily: 78 },
  ]

  const calPct = Math.min(Math.round((totals.cal / goal) * 100), 100)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, marginBottom: '1rem' }}>
      {macros.map(m => {
        const pct = Math.min(Math.round((m.value / m.daily) * 100), 100)
        return (
          <div key={m.label} style={ringCard}>
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>{m.label}</div>
            <div style={{ position: 'relative', width: 64, height: 64, margin: '0 auto 8px' }}>
              <svg viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)', width: 64, height: 64 }}>
                <circle cx="32" cy="32" r="26" fill="none" stroke="#1e293b" strokeWidth="8" />
                <circle cx="32" cy="32" r="26" fill="none" stroke={m.color} strokeWidth="8"
                  strokeDasharray={`${pct * 1.634} 163.4`} strokeLinecap="round" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500, color: '#f1f5f9' }}>
                {pct}%
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 500, color: '#f1f5f9' }}>{m.value}g</div>
            <div style={{ textAlign: 'center', fontSize: 11, color: '#475569' }}>of ~{m.daily}g</div>
          </div>
        )
      })}

      <div style={ringCard}>
        <div style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>Calories</div>
        <div style={{ position: 'relative', width: 64, height: 64, margin: '0 auto 8px' }}>
          <svg viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)', width: 64, height: 64 }}>
            <circle cx="32" cy="32" r="26" fill="none" stroke="#1e293b" strokeWidth="8" />
            <circle cx="32" cy="32" r="26" fill="none"
              stroke={totals.cal > goal ? '#f87171' : totals.cal >= goal * 0.85 ? '#fbbf24' : '#4ade80'}
              strokeWidth="8" strokeDasharray={`${calPct * 1.634} 163.4`} strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500, color: '#f1f5f9' }}>
            {calPct}%
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 500, color: '#f1f5f9' }}>{totals.cal}</div>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#475569' }}>of {goal} kcal</div>
      </div>
    </div>
  )
}

const ringCard = {
  background: '#1e293b',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 12,
  padding: '12px 8px',
}
