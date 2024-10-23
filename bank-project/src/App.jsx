import styles from "./style";
import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from 
"./components";

const App = () =>  (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navigation Section */}
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>       
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Other Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      
    </div>
)


export default App
