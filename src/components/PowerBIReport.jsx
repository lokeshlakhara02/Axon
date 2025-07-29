import React from 'react'

const PowerBIReport = () => {
  return (
    <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        title="Power BI Report"
        width="1000"
        height="600"
        src="https://app.powerbi.com/view?r=YOUR_REPORT_ID"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

export default PowerBIReport 