import React from 'react'
import './Style.css'
import { Button } from "@material-tailwind/react";
import { DashTable } from './DashTable';
import { Link } from 'react-router-dom';


export default function Dash() {
    return (
        <>
            <section className="dash">

                <div className="info-cards">

                    <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-4/12">

                        <div className="p-6">
                            <h5 className="dash-card-head">
                                Stocks
                            </h5>
                            <div className="pandsvg">
                                <p className="dash-card-text">
                                    58% <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className='dash-card-svg' data-name="Layer 1" width="762" height="689.78723" viewBox="0 0 762 689.78723" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M727.535,347.65423H472.69653a16.51867,16.51867,0,0,1-16.5-16.5V131.00043a12.10185,12.10185,0,0,1,12.08789-12.08838h263.4535A12.31111,12.31111,0,0,1,744.035,131.20941V331.15423A16.51866,16.51866,0,0,1,727.535,347.65423Z" transform="translate(-219 -105.10638)" fill="#f2f2f2" /><path d="M488.69653,331.15423H711.535a16,16,0,0,0,16-16V161.60638a16,16,0,0,0-16-16H488.69653a16,16,0,0,0-16,16V315.15423A16,16,0,0,0,488.69653,331.15423Z" transform="translate(-219 -105.10638)" fill="#fff" /><path d="M743.8053,130.05658H455.965v-8.40039a16.57376,16.57376,0,0,1,16.56-16.54981H727.24524a16.57369,16.57369,0,0,1,16.56006,16.54981Z" transform="translate(-219 -105.10638)" fill="#ccc" /><circle cx="267.06033" cy="12.5" r="4.28342" fill="#fff" /><circle cx="283.31913" cy="12.5" r="4.28342" fill="#fff" /><circle cx="299.57794" cy="12.5" r="4.28342" fill="#fff" /><path d="M505.09487,217.56238h-11.036a2.25988,2.25988,0,0,1-2.25737-2.25737V204.269a2.25987,2.25987,0,0,1,2.25737-2.25737h11.036a2.25988,2.25988,0,0,1,2.25737,2.25737v11.036A2.25989,2.25989,0,0,1,505.09487,217.56238Z" transform="translate(-219 -105.10638)" fill="#182014" /><path d="M505.09487,246.15568h-11.036a2.25987,2.25987,0,0,1-2.25737-2.25737v-11.036a2.25987,2.25987,0,0,1,2.25737-2.25736h11.036a2.25988,2.25988,0,0,1,2.25737,2.25736v11.036A2.25988,2.25988,0,0,1,505.09487,246.15568Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><path d="M505.09487,274.749h-11.036a2.25987,2.25987,0,0,1-2.25737-2.25737v-11.036a2.25987,2.25987,0,0,1,2.25737-2.25737h11.036a2.25988,2.25988,0,0,1,2.25737,2.25737v11.036A2.25988,2.25988,0,0,1,505.09487,274.749Z" transform="translate(-219 -105.10638)" fill="#ccc" /><path d="M577.33059,212.04437H524.15707a2.25737,2.25737,0,0,1,0-4.51473h53.17352a2.25737,2.25737,0,1,1,0,4.51473Z" transform="translate(-219 -105.10638)" fill="#ccc" /><path d="M577.33059,240.63767H524.15707a2.25737,2.25737,0,0,1,0-4.51473h53.17352a2.25736,2.25736,0,1,1,0,4.51473Z" transform="translate(-219 -105.10638)" fill="#ccc" /><path d="M577.33059,269.231H524.15707a2.25737,2.25737,0,0,1,0-4.51473h53.17352a2.25737,2.25737,0,1,1,0,4.51473Z" transform="translate(-219 -105.10638)" fill="#ccc" /><path d="M708.34116,239.09724c.05671-.949.08892-1.90451.08892-2.86774a47.31775,47.31775,0,0,0-47.3177-47.3177v50.18544Z" transform="translate(-219 -105.10638)" fill="#182014" /><path d="M657.5277,243.39885V193.21341a47.3177,47.3177,0,1,0,47.22879,50.18544Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><path d="M980,794.89362H220a1,1,0,0,1,0-2H980a1,1,0,0,1,0,2Z" transform="translate(-219 -105.10638)" fill="#ccc" /><path d="M723.69,518.032a10.70347,10.70347,0,0,1,.8898,1.43141l50.11327,5.63486,7.28838-9.84724,16.29888,9.05707L783.933,548.22754l-61.39551-16.11278A10.67269,10.67269,0,1,1,723.69,518.032Z" transform="translate(-219 -105.10638)" fill="#ffb8b8" /><path d="M467.98716,505.09418a10.05572,10.05572,0,0,1-14.52487-5.17531l-35.72708.745,9.8976-15.71214,32.40963,1.70135a10.11027,10.11027,0,0,1,7.94472,18.44106Z" transform="translate(-219 -105.10638)" fill="#ffb8b8" /><path d="M452.285,500.59644a4.509,4.509,0,0,1-4.42846,3.21337l-65.38677-1.66091-59.2065-17.52973a12.81886,12.81886,0,1,1,7.63274-24.47233l53.4904,17.53816,64.201,6.19566a4.52376,4.52376,0,0,1,4.06742,4.55554l-.18586,10.95078A4.52253,4.52253,0,0,1,452.285,500.59644Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><polygon points="138.461 676.601 150.72 676.6 156.553 629.312 138.459 629.313 138.461 676.601" fill="#ffb8b8" /><path d="M354.33347,777.70432l24.1438-.001h.001a15.38605,15.38605,0,0,1,15.38647,15.38623v.5l-39.53051.00146Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><polygon points="102.461 676.601 114.72 676.6 120.553 629.312 102.459 629.313 102.461 676.601" fill="#ffb8b8" /><path d="M318.33347,777.70432l24.1438-.001h.001a15.38605,15.38605,0,0,1,15.38647,15.38623v.5l-39.53051.00146Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><path d="M313.233,590.5992l2.92742,173.69393a4,4,0,0,0,4.36158,3.91617l14.34623-1.30421a4,4,0,0,0,3.62589-3.67442l8.39886-108.34524a1,1,0,0,1,1.99629.03943l4.19795,110.82575a4,4,0,0,0,3.99713,3.84859h15.38563a4,4,0,0,0,3.99255-3.756L387.233,589.5992l-64-16Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><circle cx="140.65422" cy="297.83534" r="24.56103" fill="#ffb8b8" /><path d="M386.29155,597.03866c-.02392,0-.04761-.001-.07153-.001l-57.43091-.88379a4.49951,4.49951,0,0,1-4.40845-4.05176l-.65014-6.50293a.50005.50005,0,0,0-.99512,0l-.67163,6.7168a4.49386,4.49386,0,0,1-4.13257,4.03809l-4.05859.3125a4.49944,4.49944,0,0,1-4.698-5.62793l3.49463-13.32422a181.54022,181.54022,0,0,0,1.69775-84.66016l-1.73657-7.89941a28.528,28.528,0,0,1,13.47021-30.81641l11.28028-6.6123,5.11792-7.67676a11.08482,11.08482,0,0,1,8.97754-4.92285c7.1394-.15625,19.38623,1.15137,21.68725,11.59082a28.50083,28.50083,0,0,1,19.282,27.44141l-1.65673,118.44238a4.50121,4.50121,0,0,1-4.49732,4.4375Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><path d="M357.733,417.0992c-.10071,3.472-2.51116,5.48066-5.47053,7.29925s-6.41876,2.60712-9.80794,3.36775a2.99863,2.99863,0,0,1-4.40516-2.62457l-3.1084-11.82324a74.84075,74.84075,0,0,1-2.39306-11.537c-.74861-7.50914,1.031-15.58706,6.27222-21.01633s14.33084-7.358,20.6116-3.17479c7.45361-9.51977,41.52344,11.513,33.11914,18.13282-1.49512,1.17767-3.78063-.31249-5.67841-.45693s-4.02454.18936-5.23,1.66218c-1.575,1.92421-.889,4.79052-1.538,7.1909a6.71433,6.71433,0,0,1-8.48369,4.34834,23.08891,23.08891,0,0,1-4.39987-2.82861c-1.45566-.96957-3.29506-1.686-4.93368-1.0745-2.15991.80607-2.92722,3.45041-3.12242,5.74756A53.23525,53.23525,0,0,1,357.733,417.0992Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><polygon points="144.469 377.819 148.469 426.819 169.469 477.819 138.469 427.819 144.469 377.819" opacity="0.2" /><path d="M621.8191,751.2528,402.64859,621.22607a16.51868,16.51868,0,0,1-5.77178-22.60944L499.00167,426.477a12.10185,12.10185,0,0,1,16.56391-4.22883L742.14529,556.67053a12.31111,12.31111,0,0,1,4.30147,16.85056L644.42854,745.481A16.51868,16.51868,0,0,1,621.8191,751.2528Z" transform="translate(-219 -105.10638)" fill="#f2f2f2" /><path d="M424.828,615.19917,616.47734,728.89848a16,16,0,0,0,21.9243-5.59688l78.345-132.05681a16,16,0,0,0-5.59688-21.9243L519.50044,455.62118a16,16,0,0,0-21.9243,5.59688l-78.345,132.05681A16,16,0,0,0,424.828,615.19917Z" transform="translate(-219 -105.10638)" fill="#fff" /><path d="M746.83739,572.4124,499.28409,425.54708l4.28615-7.22464a16.57377,16.57377,0,0,1,22.6865-5.784L745.32552,542.50484a16.57369,16.57369,0,0,1,5.798,22.68291Z" transform="translate(-219 -105.10638)" fill="#ccc" /><circle cx="312.5197" cy="325.08868" r="4.28342" fill="#fff" /><circle cx="326.50287" cy="333.38445" r="4.28342" fill="#fff" /><circle cx="340.48604" cy="341.68021" r="4.28342" fill="#fff" /><rect x="692.75326" y="596.91526" width="0.54603" height="3.27619" transform="translate(-394.35578 784.07411) rotate(-59.32072)" fill="#e6e6e6" /><path d="M685.786,594.57538l-5.69215-3.377.2786-.46961,5.69215,3.377Zm-11.38442-6.754-5.69216-3.377.2786-.46961,5.69216,3.377Zm-11.38443-6.754-5.69216-3.377.27861-.46961,5.69215,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.46961,5.69216,3.377Zm-11.38442-6.754-5.69216-3.377.27861-.46961,5.69215,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.46961,5.69216,3.377Zm-11.38442-6.754-5.69216-3.377.27861-.46961,5.69215,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.46961,5.69216,3.377Zm-11.38442-6.754-5.69216-3.377.2786-.46961,5.69216,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.4696,5.69215,3.377Zm-11.38442-6.754-5.69216-3.377.2786-.4696,5.69216,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.4696,5.69215,3.377Zm-11.38442-6.754-5.69216-3.377.2786-.46961,5.69216,3.377Zm-11.38443-6.754-5.69227-3.377.2786-.46961,5.69227,3.377Zm-11.38443-6.754-5.69215-3.377.2786-.46961,5.69216,3.377Zm-11.38442-6.754-5.69227-3.377.2786-.46961,5.69227,3.377Z" transform="translate(-219 -105.10638)" fill="#e6e6e6" /><rect x="502.09266" y="483.80252" width="0.54603" height="3.27619" transform="translate(-390.45414 564.69995) rotate(-59.32072)" fill="#e6e6e6" /><rect x="574.33054" y="585.704" width="0.54603" height="3.27619" transform="translate(-442.71335 676.73529) rotate(-59.32072)" fill="#e6e6e6" /><path d="M567.44766,583.41418,561.84,580.08734l.2786-.46961,5.60766,3.32684Zm-11.21531-6.65369-5.60766-3.32684.2786-.4696,5.60766,3.32684ZM545.017,570.10681,539.40937,566.78l.27861-.46961,5.60765,3.32684Zm-11.21531-6.65368-5.60766-3.32684.2786-.46961,5.60766,3.32684Zm-11.21532-6.65368-5.60777-3.32691.2786-.46961,5.60777,3.32691ZM511.371,550.1457l-5.60766-3.32684.2786-.46961,5.60766,3.32684ZM500.15565,543.492l-5.60766-3.32684.27861-.4696,5.60765,3.32684Zm-11.21532-6.65368-5.60765-3.32684.2786-.46961,5.60766,3.32684Z" transform="translate(-219 -105.10638)" fill="#e6e6e6" /><rect x="476.1826" y="527.47601" width="0.54603" height="3.27619" transform="translate(-440.70488 563.80623) rotate(-59.32072)" fill="#e6e6e6" /><rect x="507.12796" y="573.77019" width="0.54603" height="3.27619" transform="translate(-465.36353 613.09379) rotate(-59.32072)" fill="#e6e6e6" /><path d="M500.08342,571.38447l-5.76943-3.42282.2786-.4696,5.76943,3.42281Zm-11.539-6.8457L482.775,561.116l.27861-.46961,5.76943,3.42281Zm-11.53886-6.84563-5.76943-3.42281.27861-.46961,5.76943,3.42281Z" transform="translate(-219 -105.10638)" fill="#e6e6e6" /><rect x="463.92407" y="548.13874" width="0.54603" height="3.27619" transform="translate(-464.47942 563.38339) rotate(-59.32072)" fill="#e6e6e6" /><rect x="486.20845" y="609.03171" width="0.54603" height="3.27619" transform="translate(-505.93544 612.37221) rotate(-59.32072)" fill="#e6e6e6" /><path d="M479.16391,606.646l-5.76943-3.42281.2786-.46961,5.76943,3.42281Zm-11.539-6.8457-5.76943-3.42281.2786-.46961,5.76943,3.42282Zm-11.53886-6.84563-5.76943-3.42281.2786-.46961,5.76943,3.42282Z" transform="translate(-219 -105.10638)" fill="#e6e6e6" /><rect x="443.00457" y="583.40025" width="0.54603" height="3.27619" transform="translate(-505.05132 562.6618) rotate(-59.32072)" fill="#e6e6e6" /><path d="M457.40154,594.22223l162.40985,96.35248a17.26548,17.26548,0,0,0,23.63179-6.03277l47.45331-79.98636-.32653-.18123L582.90466,631.8558l-8.52852-33.39355a4.1237,4.1237,0,0,0-2.3875-2.787,4.39388,4.39388,0,0,0-2.81786-.15814l-56.42137,14.39926-6.23665-24.41473a4.13956,4.13956,0,0,0-5.03644-2.988C501.09523,582.61466,464.381,592.34258,457.40154,594.22223Z" transform="translate(-219 -105.10638)" fill="#182014" /><path d="M456.43081,594.28059l-.135-.529,45.14944-11.52584a4.646,4.646,0,0,1,5.64492,3.349l6.11019,23.935,56.10809-14.32339a4.646,4.646,0,0,1,5.64492,3.349l8.40225,32.91358,108.226-27.62815.135.529-108.755,27.76319-8.53729-33.44258a4.095,4.095,0,0,0-4.98086-2.955l-56.6371,14.45843-6.24524-24.46406a4.10019,4.10019,0,0,0-4.98086-2.955Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><circle cx="289.80979" cy="471.13771" r="3.82222" fill="#3f3d56" /><circle cx="357.01238" cy="483.07152" r="3.82222" fill="#3f3d56" /><circle cx="474.09156" cy="492.27639" r="3.82222" fill="#3f3d56" /><path d="M393.37946,601.9174a10.05579,10.05579,0,0,1-.31761-15.41606l-13.37856-33.136,18.20228,3.67571,9.9139,30.903a10.11027,10.11027,0,0,1-14.42,13.97336Z" transform="translate(-219 -105.10638)" fill="#ffb8b8" /><path d="M393.1576,587.56063a4.50906,4.50906,0,0,1-4.57608-2.99942L366.92391,522.843l-4.62838-61.57336a12.81886,12.81886,0,1,1,25.588-1.55128l2.59146,56.23251,16.99724,62.21933a4.52375,4.52375,0,0,1-2.81506,5.41961l-10.30361,3.71344A4.52237,4.52237,0,0,1,393.1576,587.56063Z" transform="translate(-219 -105.10638)" fill="#3f3d56" /><path d="M794.719,532.87451a4.58959,4.58959,0,0,1-1.11619-.69655l-20.14091-16.9666a4.57512,4.57512,0,0,1-.29423-6.72835l18.27677-18.35229a4.5519,4.5519,0,0,1,5.93049-.47235L811.19646,499.695a4.57786,4.57786,0,0,1,1.448,5.65826l-11.957,25.28131a4.57994,4.57994,0,0,1-5.96851,2.23991Z" transform="translate(-219 -105.10638)" fill="#182014" /><polygon points="654.276 667.73 642.247 671.003 623.898 626.162 641.652 621.332 654.276 667.73" fill="#ffb8b8" /><path d="M853.29972,773.57564H877.593a0,0,0,0,1,0,0v15.13777a0,0,0,0,1,0,0H838.41287a0,0,0,0,1,0,0v-.25092A14.88686,14.88686,0,0,1,853.29972,773.57564Z" transform="translate(-393.98241 147.55249) rotate(-15.22067)" fill="#2f2e41" /><polygon points="551.441 676.909 538.975 676.908 533.044 628.823 551.444 628.824 551.441 676.909" fill="#ffb8b8" /><path d="M529.81942,673.346h24.29327a0,0,0,0,1,0,0v15.13777a0,0,0,0,1,0,0H514.93256a0,0,0,0,1,0,0v-.25092A14.88686,14.88686,0,0,1,529.81942,673.346Z" fill="#2f2e41" /><circle cx="570.22114" cy="334.4528" r="24.97498" fill="#ffb8b8" /><path d="M769.67811,747.73077h-17.036a4.58914,4.58914,0,0,1-4.57138-4.29382c-5.07632-80.69888-2.10694-138.58608,9.34458-182.17277a4.75677,4.75677,0,0,1,.18545-.56105l.91234-2.281a4.55426,4.55426,0,0,1,4.24889-2.87679h35.03255a4.56841,4.56841,0,0,1,3.47434,1.59778l4.75831,5.552c.09284.10824.17973.21846.2634.33465,21.45671,29.92172,40.68557,88.41962,62.95582,167.04706a4.5605,4.5605,0,0,1-3.00836,5.60957l-18.30834,5.85883a4.60045,4.60045,0,0,1-5.51648-2.37133l-47.51012-98.5405a3.55918,3.55918,0,0,0-6.73194,1.06353l-13.9594,102.07763A4.59333,4.59333,0,0,1,769.67811,747.73077Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><path d="M804.10666,563.10127c-.04791,0-.09558-.001-.14374-.002l-42.5537-1.34356a4.561,4.561,0,0,1-4.40156-4.02074c-5.39434-43.66514,9.39994-55.36293,16.011-58.36484a3.51794,3.51794,0,0,0,2.04612-2.7894l.572-4.57683a4.55913,4.55913,0,0,1,.90414-2.22238c10.36541-13.42764,24.51919-17.72742,32.03363-19.09481a4.56882,4.56882,0,0,1,5.33973,3.91449l.857,6.57181a3.62041,3.62041,0,0,0,.7254,1.71992c21.61733,28.26039-2.46543,69.98715-7.51271,78.06439h0A4.58439,4.58439,0,0,1,804.10666,563.10127Z" transform="translate(-219 -105.10638)" fill="#182014" /><path d="M816.7,424.02666a103.57206,103.57206,0,0,1-4.09287-17.25254c-.273-3.41006.60057-7.07923,3.08395-9.43206,4.64755-4.40323,12.54378-2.306,17.40406,1.86121,7.02423,6.02258,10.52747,15.27806,11.85143,24.43548s.74144,18.46957,1.06013,27.71671,1.64124,18.75534,6.35559,26.71687,13.46275,14.07278,22.69054,13.39517a15.969,15.969,0,0,0,9.9964-4.23637,11.591,11.591,0,0,0,3.48119-10.06508c4.71642,8.44535,2.32556,19.89152-4.70938,26.53065s-17.856,8.51593-27.10448,5.68134-16.86021-9.94222-21.4068-18.4802-6.2127-18.40091-5.97125-28.071c.18542-7.42586,1.4477-14.91251.19284-22.23392s-5.837-14.75531-13.0623-16.4794Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><path d="M784.25282,433.65235c-1.23189,4.11515-5.94388,6.65267-10.18271,5.95671a11.94052,11.94052,0,0,1-9.01247-8.28474,17.05556,17.05556,0,0,1,1.3329-12.50345,19.47082,19.47082,0,0,1,11.14084-9.92334,15.98674,15.98674,0,0,1,14.53656,2.32276,5.3461,5.3461,0,0,1,3.736-3.907,10.21608,10.21608,0,0,1,5.60645.08275,23.10023,23.10023,0,0,1,12.857,9.35333A37.59027,37.59027,0,0,1,820.0944,431.77c1.43448,8.05189.90537,16.85038-3.61682,23.6651s-13.774,10.83861-21.27971,7.58968c-.468-2.39261.6407-4.80178,1.92341-6.875s2.80291-4.09289,3.29567-6.48052-.45191-5.30818-2.76144-6.089c-1.9703-.66614-4.071.4131-6.14677.54342a6.73548,6.73548,0,0,1-6.461-9.70517Z" transform="translate(-219 -105.10638)" fill="#2f2e41" /><path d="M720.95558,536.53977a10.7034,10.7034,0,0,1,1.14367,1.238l50.27705-3.9129,5.30143-11.04461,17.714,5.82223-9.58111,26.19523-63.33219-4.25038a10.67269,10.67269,0,1,1-1.52285-14.04759Z" transform="translate(-219 -105.10638)" fill="#ffb8b8" /><path d="M795.11921,546.09046a4.58982,4.58982,0,0,1-1.2007-.53793L771.65332,531.489a4.57513,4.57513,0,0,1-1.20841-6.62549l15.60522-20.6718a4.5519,4.5519,0,0,1,5.81079-1.27615l15.06041,8.05944a4.57784,4.57784,0,0,1,2.20564,5.40813l-8.40018,26.67494a4.57994,4.57994,0,0,1-5.60758,3.03239Z" transform="translate(-219 -105.10638)" fill="#182014" /></svg>
                            </div>

                        </div>
                        <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                            <h5 className="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
                                <Link to='/nifty'> <Button className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                    </svg>

                                    Take a look
                                </Button> </Link >
                            </h5>
                        </div>

                    </div>



                    <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-4/12">

                        <div className="p-6">
                            <h5 className="dash-card-head">
                                Sectors
                            </h5>
                            <div className="pandsvg">
                                <p className="dash-card-text">
                                    70% <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className='dash-card-svg' data-name="Layer 1" width="826.06346" height="335.01004" viewBox="0 0 826.06346 335.01004" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M266.56473,572.513l-1.30115-1.51825c11.00915-9.43521,24.7108-21.17709,29.83928-36.69659,5.0555-15.29892,1.25254-33.7688-9.92482-48.20211-9.51229-12.28383-24.20053-21.95671-42.47664-27.97352-3.60489-1.18686-7.34772-2.241-10.96747-3.26081-8.74923-2.46423-17.79646-5.01294-25.80868-9.67057-11.03532-6.41528-21.05875-19.01629-18.57493-32.706a23.85568,23.85568,0,0,1,17.15589-18.50774l.532,1.92821a21.8606,21.8606,0,0,0-15.72264,16.95071c-2.30809,12.72161,7.18337,24.54137,17.61492,30.606,7.7931,4.53013,16.71634,7.04369,25.34567,9.47438,3.64019,1.02537,7.40461,2.08584,11.0509,3.28624,18.65633,6.142,33.675,16.04819,43.43219,28.64827,11.57926,14.95243,15.50414,34.13231,10.24266,50.0547C291.69857,550.97374,277.76271,562.91709,266.56473,572.513Z" transform="translate(-186.96827 -282.49498)" fill="#f1f1f1" /><ellipse cx="217.32716" cy="393.29557" rx="17.5" ry="8.5" transform="translate(-265.12435 -227.72882) rotate(-12.19172)" fill="#f1f1f1" /><ellipse cx="242.83769" cy="445.076" rx="17.5" ry="8.5" transform="translate(-275.48417 -221.17357) rotate(-12.19172)" fill="#f1f1f1" /><ellipse cx="213.46006" cy="460.63089" rx="17.5" ry="8.5" transform="translate(-279.43168 -227.02683) rotate(-12.19172)" fill="#f1f1f1" /><rect x="272.22557" y="178.20395" width="2" height="6" fill="#e5e5e5" /><path d="M461.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5" /><rect x="272.22557" y="324.82798" width="2" height="6" fill="#e5e5e5" /><rect x="491.22557" y="178.20395" width="2" height="6" fill="#e5e5e5" /><path d="M680.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5" /><rect x="491.22557" y="324.82798" width="2" height="6" fill="#e5e5e5" /><rect x="601.69529" y="60.82798" width="2" height="6" fill="#e5e5e5" /><path d="M790.66356,595.03732h-2V582.75167h2Zm0-24.57129h-2V558.17989h2Zm0-24.57178h-2V533.6086h2Zm0-24.57129h-2V509.03732h2Zm0-24.57129h-2V484.46554h2Zm0-24.57178h-2V459.89425h2Zm0-24.57129h-2V435.323h2Zm0-24.57128h-2V410.75167h2Zm0-24.57178h-2V386.17989h2Zm0-24.57129h-2V361.6086h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5" /><rect x="601.69529" y="324.82798" width="2" height="6" fill="#e5e5e5" /><rect x="711.06346" y="12.82798" width="2" height="6" fill="#e5e5e5" /><path d="M900.03173,595.08321h-2V582.843h2Zm0-24.48h-2V558.363h2Zm0-24.48h-2V533.883h2Zm0-24.48h-2V509.403h2Zm0-24.48h-2V484.92306h2Zm0-24.48h-2V460.44308h2Zm0-24.48h-2V435.9631h2Zm0-24.48h-2V411.48312h2Zm0-24.48h-2V387.00314h2Zm0-24.48h-2V362.52316h2Zm0-24.48h-2V338.04317h2Zm0-24.48h-2V313.56319h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5" /><rect x="711.06346" y="324.82798" width="2" height="6" fill="#e5e5e5" /><rect x="382.22557" y="97.82798" width="2" height="6" fill="#e5e5e5" /><path d="M571.19384,595.69161h-2V584.06026h2Zm0-23.26318h-2V560.79708h2Zm0-23.26318h-2V537.5339h2Zm0-23.26319h-2V514.27071h2Zm0-23.26318h-2V491.00753h2Zm0-23.26319h-2V467.74435h2Zm0-23.26318h-2V444.48116h2Zm0-23.26318h-2V421.218h2Zm0-23.26319h-2V397.9548h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5" /><rect x="382.22557" y="324.82798" width="2" height="6" fill="#e5e5e5" /><path d="M1010.95959,616.10888H348.83879a2.07224,2.07224,0,0,1-2.07214-2.07214V296.68223a2.07214,2.07214,0,0,1,4.14427,0V611.96461h660.04867a2.07214,2.07214,0,1,1,0,4.14427Z" transform="translate(-186.96827 -282.49498)" fill="#3f3d56" /><polygon points="493.134 180.989 383.049 98.534 274.468 179.862 271.983 176.545 383.049 93.355 492.61 175.418 601.484 56.274 601.921 56.097 711.744 11.848 713.293 15.693 603.907 59.765 493.134 180.989" fill="#3f3d56" /><circle cx="273.22566" cy="178.2037" r="12.43282" fill="#182014" /><circle cx="383.04887" cy="97.39039" r="12.43282" fill="#182014" /><circle cx="492.87208" cy="178.2037" r="12.43282" fill="#e5e5e5" /><circle cx="489.87208" cy="222.2037" r="12.43282" fill="#182014" /><circle cx="602.69529" cy="58.01981" r="12.43282" fill="#182014" /><circle cx="712.51849" cy="12.43282" r="12.43282" fill="#182014" /><ellipse cx="339.07659" cy="523.38032" rx="21.53369" ry="6.76007" transform="translate(-457.83786 370.75274) rotate(-69.08217)" fill="#2f2e41" /><circle cx="112.30113" cy="273.40747" r="43.06735" fill="#2f2e41" /><rect x="92.67552" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41" /><rect x="118.84299" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41" /><ellipse cx="103.57867" cy="330.92135" rx="10.90314" ry="4.08868" fill="#2f2e41" /><ellipse cx="129.74615" cy="330.3762" rx="10.90314" ry="4.08868" fill="#2f2e41" /><circle cx="113.39147" cy="262.50425" r="14.71921" fill="#fff" /><circle cx="113.39146" cy="262.50425" r="4.90643" fill="#3f3d56" /><path d="M257.49267,515.85093c-3.47748-15.57379,7.63867-31.31042,24.82861-35.1488s33.94422,5.67511,37.4217,21.24884-7.91492,21.31763-25.10486,25.156S260.97015,531.42479,257.49267,515.85093Z" transform="translate(-186.96827 -282.49498)" fill="#e6e6e6" /><ellipse cx="250.76125" cy="535.91894" rx="6.76007" ry="21.53369" transform="translate(-527.88327 250.3368) rotate(-64.62574)" fill="#2f2e41" /><path d="M278.11489,571.43931c0,4.21515,10.85328,12.53858,22.89658,12.53858s23.33514-11.867,23.33514-16.08209-11.29193.81774-23.33514.81774S278.11489,567.22416,278.11489,571.43931Z" transform="translate(-186.96827 -282.49498)" fill="#fff" /><circle cx="437.43059" cy="266.55376" r="43.06733" fill="#2f2e41" /><rect x="417.80497" y="300.35345" width="13.08374" height="23.44171" fill="#2f2e41" /><rect x="443.97246" y="300.35345" width="13.08373" height="23.44171" fill="#2f2e41" /><ellipse cx="614.67632" cy="609.56272" rx="4.08868" ry="10.90314" transform="translate(-380.98869 635.94194) rotate(-65.66457)" fill="#2f2e41" /><ellipse cx="639.84386" cy="608.01756" rx="4.08868" ry="10.90314" transform="translate(-373.54441 635.54758) rotate(-64.10219)" fill="#2f2e41" /><path d="M582.62211,508.99744c-3.47748-15.57379,7.63865-31.31042,24.82866-35.1488s33.94421,5.67511,37.42169,21.2489-7.91492,21.31769-25.10486,25.156S586.0996,524.57124,582.62211,508.99744Z" transform="translate(-186.96827 -282.49498)" fill="#182014" /><ellipse cx="665.50252" cy="524.92757" rx="23.89244" ry="7.50055" transform="translate(-363.18854 342.1587) rotate(-45.0221)" fill="#2f2e41" /><ellipse cx="581.79716" cy="564.92757" rx="23.89244" ry="7.50055" transform="translate(-300.4362 699.8503) rotate(-75.1366)" fill="#2f2e41" /></svg>
                            </div>

                        </div>
                        <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                            <h5 className="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
                                <Button className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    Wide View
                                </Button>
                            </h5>
                        </div>

                    </div>
                    <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-4/12">

                        <div className="p-6">
                            <h5 className="dash-card-head">
                                Adani Group
                            </h5>
                            <div className="pandsvg">
                                <p className="dash-card-text">
                                    88% <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className='dash-card-svg' data-name="Layer 1" width="866.36023" height="454.16675" viewBox="0 0 866.36023 454.16675" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M963.88252,673.14318a15.2781,15.2781,0,0,1-5.48163-13.17036c.603-4.91895,4.33768-9.441,9.18212-10.48555s10.36678,1.847,11.83819,6.57926c.80979-9.12369,1.74293-18.62965,6.59367-26.39932a27.95811,27.95811,0,0,1,20.24434-12.96982,25.085,25.085,0,0,1,22.06726,9.00826,22.76627,22.76627,0,0,1,2.79964,23.439c-2.65294,5.50369-7.54057,9.59961-12.66159,12.93185a81.71711,81.71711,0,0,1-55.8893,12.22674" transform="translate(-166.81989 -222.91662)" fill="#f2f2f2" /><path d="M1020.17342,619.38674a133.70074,133.70074,0,0,0-18.63259,18.50211,134.091,134.091,0,0,0-20.98632,35.07028c-.37789.926,1.12583,1.32913,1.49952.4134a133.33652,133.33652,0,0,1,39.219-52.88619c.77634-.63217-.32966-1.72655-1.09959-1.0996Z" transform="translate(-166.81989 -222.91662)" fill="#fff" /><path d="M851.37631,399.08262h14.75958a6,6,0,0,1,6,6V520.71708a13.37977,13.37977,0,0,1-13.37977,13.37977h0a13.37978,13.37978,0,0,1-13.37978-13.37978V405.08262A6,6,0,0,1,851.37631,399.08262Z" transform="translate(-72.10722 853.1037) rotate(-67.09387)" fill="#182014" /><path d="M850.18331,434.80008c-1.85311-2.88125-6.31154-2.95288-9.168-1.06179s-4.49468,5.10768-6.00935,8.18036c-2.69095,5.45887-5.41491,11.01819-6.4021,17.02368s.00073,12.63283,4.02418,17.19926c3.82918,4.34592,9.69284,6.17573,15.24831,7.81474l52.11216,15.37454c5.51292,1.62647,11.54709,3.23432,16.86189,1.04557a17.21845,17.21845,0,0,0,8.02495-7.60152,26.66641,26.66641,0,0,0-4.28284-31.309c-9.36812-9.24018-23.83177-9.99286-36.672-12.86886a97.03226,97.03226,0,0,1-35.3208-15.85252" transform="translate(-166.81989 -222.91662)" fill="#2f2e41" /><path d="M946.12207,676.87012H931.3623a6.50753,6.50753,0,0,1-6.5-6.5V547.35645a6.50753,6.50753,0,0,1,6.5-6.5h14.75977a6.50753,6.50753,0,0,1,6.5,6.5V670.37012A6.50753,6.50753,0,0,1,946.12207,676.87012Z" transform="translate(-166.81989 -222.91662)" fill="#182014" /><path d="M916.92969,676.87012H902.16992a6.50753,6.50753,0,0,1-6.5-6.5V547.35645a6.50753,6.50753,0,0,1,6.5-6.5h14.75977a6.50753,6.50753,0,0,1,6.5,6.5V670.37012A6.50753,6.50753,0,0,1,916.92969,676.87012Z" transform="translate(-166.81989 -222.91662)" fill="#182014" /><circle cx="756.88522" cy="138.56102" r="51" fill="#182014" /><path d="M879.66758,373.88659c-3.30591-.0918-7.42029-.20655-10.59-2.522a8.13274,8.13274,0,0,1-3.20007-6.07275,5.47082,5.47082,0,0,1,1.86035-4.49315c1.65552-1.39894,4.073-1.72707,6.67822-.96144l-2.69921-19.72559,1.98144-.27148,3.17322,23.18994-1.65466-.75928c-1.91834-.87988-4.55164-1.32763-6.188.05518a3.51514,3.51514,0,0,0-1.15271,2.89551,6.14685,6.14685,0,0,0,2.38122,4.52783c2.46668,1.80176,5.74622,2.03418,9.46582,2.13818Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41" /><rect x="718.32621" y="118.89623" width="10.77161" height="2" fill="#2f2e41" /><path d="M915.55222,355.5142a13.984,13.984,0,0,0,8.54693-11.46717,15.25852,15.25852,0,0,0-6.10845-13.41178c-8.69984-6.56549-20.69477-2.41061-29.80393-7.8227a11.22232,11.22232,0,0,1-5.11038-12.59435c1.25217-5.38172,5.32615-9.31083,9.96211-12.008,9.16646-5.33293,20.32495-7.3218,30.825-6.9337,21.59124.79806,41.48225,12.00884,54.37994,29.1618a88.796,88.796,0,0,1,14.0287,27.98831c3.08505,10.35516,4.79414,21.693,2.83807,32.42467a35.48165,35.48165,0,0,1-16.3251,24.64432c-8.28159,5.39265-17.99382,8.15829-27.58,10.1624-2.3905.49977-4.79149.94709-7.19685,1.36891-1.89819.33288-1.09366,3.22449.79751,2.89284,19.31143-3.3866,42.05116-9.37333,50.50125-29.22964,4.54756-10.686,4.223-22.78541,2.07221-33.9965a93.35957,93.35957,0,0,0-11.372-30.04568c-11.22221-18.86193-29.49-32.97963-51.24613-37.12474a67.57645,67.57645,0,0,0-32.66395,1.57836c-10.00515,3.12228-21.36842,9.34176-22.32885,21.00986a13.91,13.91,0,0,0,6.60677,13.11089c4.3392,2.69714,9.57005,3.356,14.555,3.792,5.37338.47,11.53258.79172,15.84115,4.46215,4.013,3.41862,5.696,9.34236,3.21117,14.14518a10.66244,10.66244,0,0,1-5.22768,4.99967,1.55247,1.55247,0,0,0-1.04765,1.84518,1.50819,1.50819,0,0,0,1.84517,1.04766Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41" /><path d="M967.27094,440.53613l-.2085-.37536a6.00028,6.00028,0,0,0-5.11377-3.08484l-26.3169-.57672v-3.48053a5.99982,5.99982,0,0,0-6-6h-16a6.00014,6.00014,0,0,0-6,6v2.86694l-23.85693-.52277a6.00005,6.00005,0,0,0-5.269,2.89923v.00006a140.27313,140.27313,0,0,0-2.5127,140.57648l.2085.37537a5.99952,5.99952,0,0,0,5.11328,3.08484l78.17383,1.71313a5.99954,5.99954,0,0,0,5.269-2.89929v-.00006A140.272,140.272,0,0,0,967.27094,440.53613Z" transform="translate(-166.81989 -222.91662)" fill="#2f2e41" /><path d="M901.49376,447.00881h14.75958a6,6,0,0,1,6,6V568.64327A13.37978,13.37978,0,0,1,908.87356,582.023h0a13.37977,13.37977,0,0,1-13.37977-13.37977V453.00881a6,6,0,0,1,6-6Z" transform="translate(1518.49767 990.10662) rotate(-167.53903)" fill="#182014" /><path d="M884.9845,525.61331c-2.55542,2.28154-1.92783,6.69616.38734,9.22115s5.74865,3.63917,9.02065,4.65386c5.813,1.80269,11.73035,3.62225,17.81634,3.6566s12.47679-1.97945,16.35664-6.6685c3.6925-4.46262,4.58128-10.54052,5.32989-16.28414l7.02226-53.8771c.74288-5.69963,1.38573-11.91116-1.60848-16.81753a17.21849,17.21849,0,0,0-8.76467-6.73525,26.66643,26.66643,0,0,0-30.25175,9.134c-7.65876,10.69981-6.13666,25.10282-6.966,38.235a97.03205,97.03205,0,0,1-10.12443,37.36787" transform="translate(-166.81989 -222.91662)" fill="#2f2e41" /><path d="M786.57684,490.379H183.9389a17.13851,17.13851,0,0,1-17.119-17.11914V240.03577a17.13852,17.13852,0,0,1,17.119-17.11915H786.57684A17.13862,17.13862,0,0,1,803.696,240.03577V473.25989A17.13862,17.13862,0,0,1,786.57684,490.379Z" transform="translate(-166.81989 -222.91662)" fill="#3f3d56" /><path d="M786.577,226.41665H183.93885a13.63711,13.63711,0,0,0-13.61894,13.61894V473.25994a13.63711,13.63711,0,0,0,13.61894,13.61894H786.577a13.63711,13.63711,0,0,0,13.61894-13.61894V240.03559A13.63711,13.63711,0,0,0,786.577,226.41665Z" transform="translate(-166.81989 -222.91662)" fill="#fff" /><path d="M800.1959,264.371v208.889A13.63711,13.63711,0,0,1,786.577,486.87888H183.93885a13.63711,13.63711,0,0,1-13.61894-13.61894V450.61847c2.34907-9.65245,11.68674-18.05363,21.86686-20.42841,13.66175-3.18347,27.81684,1.26826,41.16313,5.60927,13.3384,4.34107,27.57,8.66505,41.17186,5.22628,39.47781-9.95034,43.98933-73.9083,83.28842-84.50555,23.016-6.20511,45.64057,9.58434,64.25564,24.48006,18.61549,14.88719,41.16355,30.73623,64.21367,24.6503,16.879-4.4602,28.40369-19.46657,39.84355-32.6514,11.44027-13.18488,26.45486-26.31864,43.84469-24.795,18.20694,1.59171,31.45141,18.675,49.15586,23.20328,23.28,5.94125,46.296-11.46547,60.04254-31.1704,13.73822-19.70487,22.87141-43.06135,40.69514-59.15727C741.14918,261.85143,772.26851,257.04222,800.1959,264.371Z" transform="translate(-166.81989 -222.91662)" fill="#ccc" /><path d="M1031.68145,677.08338h-189.294a1.19069,1.19069,0,1,1,0-2.38137h189.294a1.19068,1.19068,0,1,1,0,2.38137Z" transform="translate(-166.81989 -222.91662)" fill="#3f3d56" /></svg>
                            </div>

                        </div>
                        <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                            <h5 className="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
                                <Button className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>

                                    Learn more
                                </Button>
                            </h5>
                        </div>

                    </div>

                </div>

            </section >
        

            <div className='dash-table'>
                <DashTable />
            </div>

        </>
    )
}
