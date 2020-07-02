const userInput = document.querySelector('[name="text"]')
let preview = document.querySelector('.preview');
const fonts = Array.from(document.querySelectorAll('[name="font"]'));

//get which font is selected
function fontPreview(text) {
  const filter = fonts.find(input => input.checked).value;
  let content = text;
  // console.log(text.target.value);
  preview.className = `preview ${filter}`;
  preview.textContent = content;

}

//populate results with user input
preview.textContent = userInput.value;
//listen for text being written and update preview
userInput.addEventListener('input', e => fontPreview(e.target.value));

fonts.forEach(input =>
  input.addEventListener('input', function(text) {
    let font = text.target.value;
    preview.className = `preview ${font}`;
  }));