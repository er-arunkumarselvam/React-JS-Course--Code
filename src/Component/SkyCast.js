import React from 'react';
function SkyCast() {
    return (
       

            <div className='container'>
                <div className="text-center">
                    <input
                        type="text"
                        className="city-search input-text-field"
                        placeholder="Enter City Name"
                        name="cityName"
                    />
                </div>
                <div className='sky-card'>
                    <div>
                        <h2 className='sky-card__heading '>SkyCast - Weather App</h2>
                    </div>

                    <img
                        className="data-image"
                        src=''
                        alt=''
                    />
                    <div className='data-temp'>
                        21
                        <span>°C|°F</span>
                    </div>
                    <div className="data-city">
                        <h2>
                            Chennai, <span>IN</span>
                        </h2>
                    </div>
                    <div className="data">
                        <div className='data-element'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='data-element__details--icons'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8m-4 6h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9m-7-3h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25" /></svg><p>Wind Speed</p></div>
                            <span>1000 m/s</span>
                        </div>
                        <div className='data-element'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='data-element__details--icons'><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M20.693 17.33a9 9 0 1 0-17.386 0" /><path d="M12.766 15.582c.487.71.144 1.792-.766 2.417c-.91.626-2.043.558-2.53-.151c-.52-.756-2.314-5.007-3.403-7.637c-.205-.495.4-.911.79-.542c2.064 1.96 5.39 5.157 5.909 5.913Z" /><path stroke-linecap="round" d="M12 6v2m-6.364.636L7.05 10.05m11.314-1.414L16.95 10.05m3.743 7.28l-1.931-.518m-15.455.518l1.931-.518" /></g></svg><p>Atm Pressure</p></div>
                            <span>1000 hPa</span>
                        </div>
                        <div className='data-element'><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='data-element__details--icons'><path fill="currentColor" d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12m0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12" /></svg><p>Humidity</p></div><span >100 %</span></div>
                    </div>
                 <p className='footer'>Web Designed by <a href='/' target='_blank' rel="noreferrer" className='underline underline-offset-2 font-semibold text-gray-950' >Arunkumar.</a> </p>
                </div>
               
            </div>
        
			
			
		
	);
}

export default SkyCast;