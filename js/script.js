const pageViews = document.getElementById('page-views');
const priceAmount = document.getElementById('amount');
const slider = document.getElementById('pageview-slider');
const toggle = document.getElementById('billing-toggle');
let isYearlyBilling = false;

const pricingTiers = [
    { views: '10K', monthly: 8, yearly: 72 },
    { views: '50K', monthly: 12, yearly: 108 },
    { views: '100K', monthly: 16, yearly: 144 },
    { views: '500K', monthly: 24, yearly: 216 },
    { views: '1M', monthly: 36, yearly: 324 }
];
function updatePricing() {
    const tier = pricingTiers[slider.value];
    pageViews.textContent = `${tier.views} PAGEVIEWS`;
    const price = isYearlyBilling ? tier.yearly : tier.monthly;
    priceAmount.textContent = `$${price.toFixed(2)}`;
}
slider.addEventListener('input', updatePricing);
toggle.addEventListener('change', () => {
    isYearlyBilling = toggle.checked;
    updatePricing();
});
updatePricing();