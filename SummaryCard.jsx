const SummaryCard = ({ title, data, bg }) => {
  const netSTCG = data.stcg.profits - data.stcg.losses
  const netLTCG = data.ltcg.profits - data.ltcg.losses
  const realised = netSTCG + netLTCG

  return (
    <div className={`${bg} rounded-2xl p-6 text-white shadow-lg`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg">Short Term</h3>
          <p>Profits: ₹{data.stcg.profits}</p>
          <p>Losses: ₹{data.stcg.losses}</p>
          <p>Net: ₹{netSTCG}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Long Term</h3>
          <p>Profits: ₹{data.ltcg.profits}</p>
          <p>Losses: ₹{data.ltcg.losses}</p>
          <p>Net: ₹{netLTCG}</p>
        </div>

        <div className="pt-3 border-t border-white/20">
          <h3 className="text-xl font-bold">
            Realised Capital Gains: ₹{realised}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard