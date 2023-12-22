const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();

// shipping.setStrategy(ups);
// shipping.setStrategy(usps);

shipping.setStrategy(fedex);

shipping.calculate();
