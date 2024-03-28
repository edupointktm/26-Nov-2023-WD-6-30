import React from 'react'

function App() {
  
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    animation: 'slideoutup',
    nav: false,
    dots: true,
    margin: 0,
    response: {
        1100: {
            items: 2,
        },
        724: {
            items: 1,
        },
        500: {
            items: 1,
        },
        370: {
            items: 1,
            innerWidth: "100%",
            outerWidth: "100%"
        },
    },

};

    return (
        <>
            <OwlCarousel className='owl-theme' {...options}>
           
                <div class='items'>
                    <img style={{ height: "300px" , width:"1000px"  }} src="https://yetiairlines.com/file-manager/photos/2/Nepaljung_Website_yeti_march_2019.jpg" alt="" />
                    
                </div>
                <div class='items'>
                    <img style={{ height: "300px", width:"1000px"  }} src="https://yetiairlines.com/file-manager/photos/2/Destinations/Pokhara/Pokhara_YetiAirlines.jpg" alt="" />
                    
                </div>
                <div class='items'>
                    <img style={{ height: "300px", width:"1000px"  }} src="https://yetiairlines.com/file-manager/photos/2/Destinations/800px-Janaki_Mandir-Janakpur_Nepal-7499.jpg" alt="" />
                  
                </div>
                <div class='items'>
                    <img style={{ height: "300px", width:"1000px"  }} src="https://yetiairlines.com/file-manager/photos/2/Destinations/bhairahawa.jpg" alt="" />
                    
                </div>
                <div class='items'>
                    <img style={{ height: "300px", width:"1000px"  }} src="https://www.yetiairlines.com/uploads/destinationImages/5f423627994ae.jpg" alt="" />
                   
                </div>
            </OwlCarousel>;
    
    </>
  )
}

export default App