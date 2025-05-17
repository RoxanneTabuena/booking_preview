
// Form Toggle
let show = 'events'
const tog = document.querySelector('#switch input')
const events = document.getElementById('events')
const rentals = document.getElementById('rentals')
const body = document.querySelector('body')
const form = document.querySelector('form')
const slider = document.querySelector('#switch span')
const title = document.querySelector('h1')
const inputs = document.querySelectorAll('input', 'textarea', 'select')
const thanks = document.getElementById('thanks')
const text = thanks.children[0]

function formChange(){
    if(show === 'rentals'){
        show = 'events'
        rentals.style.display="none"
        events.style.display="block"
        body.classList.remove('purple')
        form.classList.add('purple')
        form.classList.remove('invert')
        button.classList.remove('black', 'white-txt', 'black-b')
        slider.classList.remove('slider-e')
        slider.classList.add('slider')
        title.classList.remove('shadow-l-b')
        title.classList.add('shadow-l')
        inputs.forEach(input=>{
            input.classList.remove('black-b-p')
        })
        thanks.classList.remove('purple')
        thanks.classList.add('black')
        text.classList.remove('white', 'black-txt')
        text.classList.add('purple', 'white-txt')
    }else{
        show = 'rentals'
        events.style.display="none"
        rentals.style.display="block"
        body.classList.add('purple')
        form.classList.remove('purple')
        form.classList.add('invert')
        button.classList.add('black', 'white-txt', 'black-b')
        slider.classList.remove('slider')
        slider.classList.add('slider-e')
        title.classList.remove('shadow-l')
        title.classList.add('shadow-l-b')
        inputs.forEach(input=>{
            input.classList.add('black-b-p')
        })
        thanks.classList.remove('black')
        thanks.classList.add('purple')
        text.classList.remove('purple','white-txt')
        text.classList.add('white', 'black-txt')
    }
}

tog.addEventListener('click', formChange)

// Section Expand

// Store open sections
const openCats = new Set();
const openBrands = new Set();
const checkedModels = new Set()

// Expand brand
function brandExpand(brand) {
  const id = brand.dataset.id;
  const checklist = document.getElementById(`list-${id}`);
  if (openBrands.has(id)) {
    openBrands.delete(id);
    brand.classList.remove('purple')
    brand.classList.add('black-filt')
    checklist.classList.add('off');
  } else {
    openBrands.add(id);
    brand.classList.remove('black-filt')
    brand.classList.add('purple')
    checklist.classList.remove('off');
  }
}

// Expand category
function expandCategory(id) {
  const list = document.getElementById(`list-${id}`);
  console.log(list)
  
  if (openCats.has(id)) {
    openCats.delete(id);
    list.classList.add('off');
  } else {
    openCats.add(id);
    list.classList.remove('off');
  }
}
// features info
const features = {
  '57-Deluxe': [
    "12-watt all-tube guitar combo amplifier",
    "Newly designed single 12in 8-ohm Eminence Special Design alnico speaker",
    "Original 5E3 circuit with Fender Pure Vintage yellow capacitors and Mercury Magnetics transformers",
    "Single 12AY7 and single 12AX7 preamp tubes, two GT6V6 power amp tubes and single 5Y3 rectifier tube"
  ],
  '59-Bassman-LTD': [
    "45 watts",
    "Four 10in Jensen P10R speakers",
    "Two channels (normal, bright)",
    "Four inputs (two normal, two bright)",
    "Classic Fender lacquered tweed styling with striped oxblood grille cloth",
    "Internal bias control"
  ],
  'Blues-Deluxe': [
    "40 watts",
    "12in Eminence Special Design speaker",
    "Dual channels: Normal and Drive",
    "Classic Fender tweed look",
    "Effects loop, bright switch and Fender spring reverb",
    "Two-button footswitch included"
  ],
  'Blues-Deville': [
    "60 watts",
    "2 x 12in speakers",
    "4 x 12AX7 preamp tubes",
    "2 x 6L6 power tubes",
    "2 channels (Normal and Drive)",
    "Bright switch",
    "Built-in reverb",
    "Effects loop"
  ],
  'Blues-Junior' : [
    "15 watts",
    "Celestion 12in A-Type speaker",
    "Preamp circuit modified for increased fullness",
    "Spring reverb modified for improved smoothness",
    "Includes 1-button footswitch for FAT mid boost"
  ],
  'Custom-Vibrolux-Reverb': [
    "2 x 10in combo (Silverface style)",
    "35 watts"
  ],
  'Deluxe-Reverb': [
    "22 watts",
    "12in Jensen C-12K speaker",
    "Two channels (normal, vibrato)",
    "Four inputs (two normal, two vibrato)",
    "Tube-driven Fender reverb and tremolo (vibrato)"
  ],
  'Hot-Rod-DeVille-212': [
    "60 watts; Normal, Drive, and More Drive channels",
    "Dual Celestion 12in A-Type speakers",
    "Modified preamp circuitry for increased overdriven note definition",
    "Spring reverb modified for improved smoothness",
    "Lightweight pine cabinet"
  ],
  'Hot-Rod-DeVille-410': [
    "60 watts; Normal, Drive, and More Drive channels",
    "Dual Celestion 12in A-Type speakers",
    "Modified preamp circuitry for increased overdriven note definition",
    "Spring reverb modified for improved smoothness",
    "Lightweight pine cabinet"
  ],
  'Pro-Junior': [
    "15 watts",
    "Jensen 10in P10R speaker",
    "Volume circuit modified for more gradual breakup",
    "Tighter bass response when overdriven",
    "Lacquered tweed covering; vintage-style '50s grille cloth; leather handle",
    "Chrome control panel with vintage-style red jewel light"
  ],
  'Super-Reverb': [
    "Four Jensen P-10R alnico speakers",
    "Normal and Vibrato channels",
    "Rear-panel output power selector for full power and five attenuated settings",
    "Balanced XLR line output",
    "Lightweight, meranti ply cabinet",
    "Power jewel illuminates in different colors for normal operation, warmup, and mute/silent mode",
    "USB port for firmware upgrades",
    "Universal worldwide 100V - 240V operation"
  ],
  'Super-Sonic-212-cab': [
    "Fender Super-Sonic cab includes pop-out casters",
    "Premium Baltic Birch ply construction",
    "Oversized baffle board for increased resonance",
    "Knurled thumbwheels for secure mounting of Super-Sonic 60 Head",
    "Chrome Fender tilt-back legs for increased projection",
    "Fender speaker cover included",
    "Power handling: 60W",
    "Ohms: 8 Ohms",
    "Two 12in, 16 Ohm Celestion Vintage 30 speakers"
  ],
  "'Twin-Amp'": [
    "40-watt hand-wired all-tube guitar combo amplifier",
    "Two newly designed 12in Eminence Special Design alnico speakers",
    "Classic 5E8A circuit with Fender Pure Vintage yellow capacitors",
    "two 12AY7 preamp tubes and Mercury Magnetics transformers",
    "Pair of dual inputs accommodates multiple instruments and varying output levels"
  ],
  '65-Twin-Reverb': [
    "85 watts",
    "Dual 12in Jensen C-12K speakers",
    "Dual channels (normal, vibrato)",
    "Fender reverb and tremolo (vibrato)",
    "Tilt-back legs",
    "Classic Fender look"
  ],
  '63-Tube-Reverb': [
    "40 watts",
    "Power Tubes: 2 x 6L6",
    "Preamp Tubes: 12AX7",
    "Configuration: 2 x 10in",
    "Channels: 2 (Normal and Bright)"
  ]
};

// desktop specs display feature
const image = document.getElementById('model-image').children[0]
const addSpecs= (id) => {
  const specs = document.getElementById('specs')
  specs.replaceChildren()
  let modelTitle = document.createElement('p')
  modelTitle.innerHTML = id.split('-').join(' ')
  modelTitle.classList.add('title')
  specs.append(modelTitle)
  features[id].forEach(feature=>{
    let child = document.createElement('p')
    child.innerHTML = feature

    specs.append(child)
  })
}

// Model Display
const updateImage = (id) => {
    if(checkedModels.has(id)){
        checkedModels.delete(id)
        id = checkedModels.size ? Array.from(checkedModels).pop() : '57-Deluxe'
    }else{
        checkedModels.add(id)
    }
    image.src = `https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/fender/${id}.png`
    image.alt = id.split('-').join(' ')
    addSpecs(id)
  }


document.addEventListener('click', (e) => {
  const cat = e.target.closest('.category-item');
  if (cat) {
      const id = cat.dataset.id;
    expandCategory(id);
    return;
  }

  const brand = e.target.closest('.brand-item');
  if (brand) {
    brandExpand(brand);
  }

  const model = e.target.closest('.model-item');
  if (model) {
    const id=model.id;
    updateImage(id)
  }
});

document.addEventListener('mouseover', (e) => {
  const table = e.target.closest('.table');
  if (table && checkedModels.size === 0) {
    const id = table.children[0].id
    image.src = `https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/fender/${id}.png`
    image.alt = id.split('-').join(' ')
    addSpecs(id)
  }
});
// submit
const button = document.querySelector('button')
const denada = document.getElementById('denada')
const submit = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'instant'})
  thanks.classList.remove('off')
  thanks.classList.add('thanks')

}
const ok = () => {
  location.reload()
}

button.addEventListener('click', (e)=>{submit(e)})
denada.addEventListener('click', ok)

