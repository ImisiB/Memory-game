function runCode(){    
  document.querySelector('.input').style.display = 'none';

  document.querySelector('.button').addEventListener('click', () => {
    function randomImage() {
      const images = [
        'Unknown',
        'Unknown-2',
        'Unknown-3',
        'Unknown-4',
        'Unknown-5',
        'Unknown-6',
      ];
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    const imageElement = document.querySelector('.box-1')
    // imageElement.src = randomImage();
    // console.log(imageElement.src);


    document.querySelector('.box-1').src = randomImage();
    document.querySelector('.box-2').src = randomImage();
    document.querySelector('.box-3').src = randomImage();
    document.querySelector('.box-4').src = randomImage();
    document.querySelector('.box-5').src = randomImage();
    document.querySelector('.box-6').src = randomImage();

    if (document.querySelector('.box-1').src === document.querySelector('.box-2').src) {
      document.querySelector('.box-1').src = randomImage();
    } else if (document.querySelector('.box-1').src === document.querySelector('.box-3').src) {
      document.querySelector('.box-1').src = randomImage();
    } else if (document.querySelector('.box-1').src === document.querySelector('.box-4').src) {
      document.querySelector('.box-1').src = randomImage();
    } else if (document.querySelector('.box-1').src === document.querySelector('.box-5').src) {
      document.querySelector('.box-1').src = randomImage();
    } else if (document.querySelector('.box-1').src === document.querySelector('.box-6').src) {
      document.querySelector('.box-1').src = randomImage();
    }

    if (document.querySelector('.box-2').src === document.querySelector('.box-1').src) {
      document.querySelector('.box-2').src = randomImage();
    } else if (document.querySelector('.box-2').src === document.querySelector('.box-3').src) {
      document.querySelector('.box-2').src = randomImage();
    } else if (document.querySelector('.box-2').src === document.querySelector('.box-4').src) {
      document.querySelector('.box-2').src = randomImage();
    } else if (document.querySelector('.box-2').src === document.querySelector('.box-5').src) {
      document.querySelector('.box-2').src = randomImage();
    } else if (document.querySelector('.box-2').src === document.querySelector('.box-6').src) {
      document.querySelector('.box-2').src = randomImage();
    }

    if (document.querySelector('.box-3').src === document.querySelector('.box-1').src) {
      document.querySelector('.box-3').src = randomImage();
    } else if (document.querySelector('.box-3').src === document.querySelector('.box-2').src) {
      document.querySelector('.box-3').src = randomImage();
    } else if (document.querySelector('.box-3').src === document.querySelector('.box-4').src) {
      document.querySelector('.box-3').src = randomImage();
    } else if (document.querySelector('.box-3').src === document.querySelector('.box-5').src) {
      document.querySelector('.box-3').src = randomImage();
    } else if (document.querySelector('.box-3').src === document.querySelector('.box-6').src) {
      document.querySelector('.box-3').src = randomImage();
    }

    if (document.querySelector('.box-4').src === document.querySelector('.box-1').src) {
      document.querySelector('.box-4').src = randomImage();
    } else if (document.querySelector('.box-4').src === document.querySelector('.box-2').src) {
      document.querySelector('.box-4').src = randomImage();
    } else if (document.querySelector('.box-4').src === document.querySelector('.box-3').src) {
      document.querySelector('.box-4').src = randomImage();
    } else if (document.querySelector('.box-4').src === document.querySelector('.box-5').src) {
      document.querySelector('.box-4').src = randomImage();
    } else if (document.querySelector('.box-4').src === document.querySelector('.box-6').src) {
      document.querySelector('.box-4').src = randomImage();
    }

    if (document.querySelector('.box-5').src === document.querySelector('.box-1').src) {
      document.querySelector('.box-5').src = randomImage();
    } else if (document.querySelector('.box-5').src === document.querySelector('.box-2').src) {
      document.querySelector('.box-5').src = randomImage();
    } else if (document.querySelector('.box-5').src === document.querySelector('.box-3').src) {
      document.querySelector('.box-5').src = randomImage();
    } else if (document.querySelector('.box-5').src === document.querySelector('.box-4').src) {
      document.querySelector('.box-5').src = randomImage();
    } else if (document.querySelector('.box-5').src === document.querySelector('.box-6').src) {
      document.querySelector('.box-5').src = randomImage();
    }

    if (document.querySelector('.box-6').src === document.querySelector('.box-1').src) {
      document.querySelector('.box-6').src = randomImage();
    } else if (document.querySelector('.box-6').src === document.querySelector('.box-2').src) {
      document.querySelector('.box-6').src = randomImage();
    } else if (document.querySelector('.box-6').src === document.querySelector('.box-3').src) {
      document.querySelector('.box-6').src = randomImage();
    } else if (document.querySelector('.box-6').src === document.querySelector('.box-4').src) {
      document.querySelector('.box-6').src = randomImage();
    } else if (document.querySelector('.box-6').src === document.querySelector('.box-5').src) {
      document.querySelector('.box-6').src = randomImage();
    }

    function showImages() {
      const image1 = document.querySelector('.box-1');
      const image2 = document.querySelector('.box-2');
      const image3 = document.querySelector('.box-3');
      const image4 = document.querySelector('.box-4');
      const image5 = document.querySelector('.box-5');
      const image6 = document.querySelector('.box-6');

      const imageBox = [image1, image2, image3, image4, image5, image6];
      const randomIndex = Math.floor(Math.random() * imageBox.length);
      console.log(imageBox[randomIndex]);
      
      return imageBox[randomIndex];
    }
    console.log(showImages());

    setTimeout(() => {
      document.querySelector('.box-1').src = 'Unknown-8';
      document.querySelector('.box-2').src = 'Unknown-8';
      document.querySelector('.box-3').src = 'Unknown-8';
      document.querySelector('.box-4').src = 'Unknown-8';
      document.querySelector('.box-5').src = 'Unknown-8';
      document.querySelector('.box-6').src = 'Unknown-8';
      showImages().src = 'Unknown-7';
      document.querySelector('.question').innerHTML = 'What image is there: fish, dog, cat, rabbit, bird or horse?';
      document.querySelector('.button').innerHTML = 'Submit';
      document.querySelector('.input').style.display = 'block';
    }, 2000);


    document.querySelector('.button').addEventListener('click', () => {
      document.querySelector('.button').innerHTML = 'Play Again';
      const input = document.querySelector('.input');

    if (showImages().src.includes('Unknown') && input.value === 'horse') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-2') && input.value === 'dog') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-3') && input.value === 'cat') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-4') && input.value === 'fish') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-5') && input.value === 'rabbit') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-6') && input.value === 'bird') {
      document.querySelector('p').innerHTML = 'Correct!';
    } else if (showImages().src.includes('Unknown-1') && input.value !== 'horse') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    } else if (showImages().src.includes('Unknown-2') && input.value !== 'dog') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    } else if (showImages().src.includes('Unknown-3') && input.value !== 'cat') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    } else if (showImages().src.includes('Unknown-4') && input.value !== 'fish') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    } else if (showImages().src.includes('Unknown-5') && input.value !== 'rabbit') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    } else if (showImages().src.includes('Unknown-6') && input.value !== 'bird') {
      document.querySelector('p').innerHTML = 'Wrong, try again!';
    }
    })
  });
}
runCode()