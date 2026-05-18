export default function HistoryChart({ history, goal }) {
  if (history.length === 0) return null

  const max = Math.max(...history.map(d => d.total_calories), goal) * 1.15

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap', fontSize: 12, color: '#64748b' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#4ade80', display: 'inline-block' }}></span>Under goal</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#fbbf24', display: 'inline-block' }}></span>Near goal</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#f87171', display: 'inline-block' }}></span>Over goal</span>
      </div>

      <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 180, padding: '0 4px' }}>
        {history.map((d, i) => {
          const pct = (d.total_calories / max) * 100
          const color = d.total_calories > goal ? '#f87171' : d.total_calories >= goal * 0.85 ? '#fbbf24' : '#4ade80'
          const label = d.date.slice(5)
          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 11, color: '#64748b' }}>{d.total_calories}</span>
              <div style={{ width: '100%', height: pct + '%', background: color, borderRadius: '4px 4px 0 0', minHeight: 4, transition: 'height 0.4s' }} title={`${d.date}: ${d.total_calories} kcal`} />
              <span style={{ fontSize: 10, color: '#475569', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          )
        })}
      </div>

      <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', margin: '8px 4px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>Goal: {goal} kcal</span>
      </div>
    </div>
  )
}
