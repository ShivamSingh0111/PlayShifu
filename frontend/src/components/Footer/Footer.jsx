import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="highlight-section">
        <div className="highlight-box">
          Trusted by<br/><strong>2M+ Parents &<br/>Educators</strong>
        </div>
        <div className="highlight-box">
          Available in<br/><strong>35+ Countries &<br/>Counting</strong>
        </div>
        <div className="highlight-box">
          <strong>20+<br/>Educational Toys</strong>
        </div>
      </div>

      <div className="icon-row">
        <div><span>🚚</span> Free Shipping</div>
        <div><span>↩️</span> 30 Days Return</div>
        <div><span>🛡️</span> 6 Months Warranty</div>
        <div><span>🔐</span> Secure Checkout</div>
      </div>

      <hr className="mx-4" />

      <div className="container px-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <p className="footer-text">
              Get notified of new launches, product updates, contests, and more exciting news!
            </p>
            <button className="whatsapp-box">Join our WhatsApp Community</button>
          </div>

          <div className="col-md-2 mb-4">
            <h6>Shop</h6>
            <FooterLinks links={shopLinks} />
          </div>

          <div className="col-md-2 mb-4">
            <h6>More</h6>
            <FooterLinks links={moreLinks} />
          </div>

          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <FooterLinks links={supportLinks} />
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <SocialIcons />
        <p>© 2025 PlayShifu.com</p>
        <PaymentIcons />
      </div>
    </footer>
  );
};

const FooterLinks = ({ links }) => (
  <>
    {links.map((link, index) => (
      <a key={index} href={link.url}>{link.text}</a>
    ))}
  </>
);

const SocialIcons = () => (
  <div className="social-icons mb-3">
    {socialIcons.map((icon, index) => (
      <img key={index} src={icon.src} alt={icon.alt} />
    ))}
  </div>
);

const PaymentIcons = () => (
  <div className="payment-icons">
    {paymentIcons.map((icon, index) => (
      <img key={index} src={icon.src} alt={icon.alt} />
    ))}
  </div>
);

const shopLinks = [
  { text: 'Problem Solving Toys', url: '#' },
  { text: 'STEM Toys', url: '#' },
  { text: 'Social & Emotional Development', url: '#' },
  { text: 'Birthday Gift Toys', url: '#' },
  { text: 'Super Saver Deals', url: '#' },
  { text: 'Best Seller Toys', url: '#' }
];

const moreLinks = [
  { text: 'Device Compatibility', url: '#' },
  { text: 'Free E-Books', url: '#' },
  { text: 'Parent Hub', url: '#' },
  { text: 'Blogs', url: '#' },
  { text: 'About Us', url: '#' }
];

const supportLinks = [
  { text: 'Contact Us', url: '#' },
  { text: 'Privacy Policy', url: '#' },
  { text: 'Return Policy', url: '#' },
  { text: 'Terms & Conditions', url: '#' },
  { text: 'FAQs', url: '#' }
];

const socialIcons = [
  { src: "https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png", alt: "Facebook" },
  { src: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png", alt: "LinkedIn" },
  { src: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png", alt: "Instagram" },
  { src: "https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png", alt: "YouTube" }
];

const paymentIcons = [
  { src: "https://img.icons8.com/color/48/apple-pay.png", alt: "Apple Pay" },
  { src: "https://img.icons8.com/color/48/mastercard-logo.png", alt: "MasterCard" },
  { src: "https://img.icons8.com/color/48/visa.png", alt: "Visa" },
  { src: "https://img.icons8.com/color/48/google-pay-india.png", alt: "Google Pay" }
];

export default Footer;