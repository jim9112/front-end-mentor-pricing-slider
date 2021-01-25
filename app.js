const slider = document.querySelector('.slider');
const pageViews = document.querySelector('.page-views');
const cost = document.querySelector('.cost');
const price = parseFloat(slider.value) * .10



const moneyOutputFromString = (string) => {
    const newPrice = parseFloat(string) * .10;
    const moneyOutput = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(newPrice);
    return moneyOutput;
}

const handleSlider = (e) => {
    const sliderValue = e.currentTarget.value;
    pageViews.textContent = sliderValue;
    cost.textContent = moneyOutputFromString(sliderValue);
}

slider.addEventListener('change', handleSlider)

pageViews.textContent = slider.value;
cost.textContent = moneyOutputFromString(slider.value);