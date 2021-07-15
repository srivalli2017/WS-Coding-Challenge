import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body    
  })

  it('renders a heading element', () => {
     expect(container.querySelector('h2')).not.toBeNull()
  })

  it('renders the Modal Title', () => {
    expect(container.querySelector('h2')).not.toBeNull()
    expect(getByText(container, 'Modal Title')).toBeInTheDocument()
 })

  it('renders img element that is dynamically loaded', () => {
    expect(container.querySelector('img')).not.toBeNull()
    
    // expect(getByText(container, 'Click me for a terrible pun')).toBeInTheDocument()
  })

  it('check that exactly 10 images are loaded on the page', async () => {
    // const button = getByText(container, 'Click me for a terrible pun')
    
    // fireEvent.click(button)
    let generatedImages = container.querySelectorAll('.products img')
    expect(generatedImages.length).toBe(10)
  })

  it('Check that when the 10th tile is clicked, the carousal opens containing exactly 7 images', async () => {
    
    
    const productsTile = container.getElementsByClassName('products')[9]
     fireEvent.click(productsTile)
    let CarousalImages = container.querySelectorAll('#splide__list img')
     expect(CarousalImages.length).toBe(7);
    
  })
})
