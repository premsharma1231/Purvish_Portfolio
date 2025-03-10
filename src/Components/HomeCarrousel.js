import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <>
    <Carousel data-bs-theme="dark" className='h-1/6 w-4/12 rounded-sm p-1 bg-white'>
      <Carousel.Item interval={2000}>
        <img src="https://raw.githubusercontent.com/premsharma1231/MonkeyCurrencyCalculator/refs/heads/main/Screenshot%20(220).png" alt="" />
        <Carousel.Caption>
          {/* <h3 className='font-mono'>Monkey Currency Converter</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/Tip-Calculator/refs/heads/main/Screenshot%20(197).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Tip - Calculator</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/Text-Utility/refs/heads/main/Screenshot%20(195).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Text - Utility</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/MonkeyNews/refs/heads/main/Screenshot%20(192).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Monkey News</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/NetflixClone/refs/heads/main/Screenshot%20(198).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Netflix Clone</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/Clip-Board-Landing-Page/refs/heads/main/Screenshot%20(200).png" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/Ghar-Ka-Khana/refs/heads/main/Screenshot%20(201).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Ghar - Ka - Khana</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/MonkeyCalculator/refs/heads/main/Screenshot%20(202).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Monkey Converter</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="https://raw.githubusercontent.com/premsharma1231/MonkeyTodoList/refs/heads/main/Screenshot%20(204).png" alt="" />
      <Carousel.Caption>
          {/* <h3 className='font-kanit'>Monkey TODO List</h3> */}
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;