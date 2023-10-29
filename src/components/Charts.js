import React from 'react'

export default function Charts() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:"#2a3d92"}}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: "10px" }} width="20" height="20" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
              </svg><h1>Charts</h1>
              <p>View your TechnoTrade information in the form of charts :)</p>
    </div>
    <div>
        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
    </div>
    </>
  )
}
